#!/usr/bin/env node
"use strict";

const assert = require("assert");
const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const repoRoot = path.resolve(__dirname, "..");

installBrowserMocks();
installTypeScriptRequireHook();

const runner = require(path.join(repoRoot, "src", "renderer", "nelisp_bridge", "stateDiffRunner.ts"));
const generatedGameLogic = require(path.join(repoRoot, "src", "renderer", "nelisp_bridge", "generatedGameLogic.ts"));
const Adap = require(path.join(repoRoot, "src", "renderer", "adapter", "index.ts"));
const Func = require(path.join(repoRoot, "src", "renderer", "func", "index.ts"));
const Music = require(path.join(repoRoot, "src", "renderer", "music", "index.ts"));
const Menu = require(path.join(repoRoot, "src", "renderer", "menu", "MenuController.ts"));
const Gvar = require(path.join(repoRoot, "src", "renderer", "variable.ts")).Gvar;

(async function main() {
  runner.writeStateSlot(123, 0);
  runner.writeStateSlot("wallet", 0);

  const obj = { existing: true };
  const nested = await runner.runStateDiffResult([
    [123, ["math-floor", 3.8]],
    ["index-set", obj, "label", ["string-replace", "foo", "o", "a"]],
    ["logical-and", ["collection-has", obj, "label"], ["index-ref", obj, "label"]],
    ["prop-set", "smokeTarget.value", ["json-parse", "{\"ok\":true}"]],
    ["control", "break", 7]
  ], {
    globals: {
      smokeTarget: {}
    },
    onControl(kind, args) {
      return { kind, args };
    }
  });

  assert.strictEqual(runner.readStateSlot(123), 3);
  assert.deepStrictEqual(obj, { existing: true, label: "fao" });
  assert.strictEqual(nested[0], "fao");
  assert.strictEqual(nested[1], "fao");
  assert.deepStrictEqual(nested[2], { ok: true });
  assert.deepStrictEqual(nested[3], { kind: "break", args: [7] });

  await runner.runStateDiffResult([
    ["promise-resolve", () => "resolved"],
    ["node-callback", (a, b) => a + b, 2, 5],
    ["function-call", (value) => value * 2, 6],
    ["promise-reject", () => "rejected"]
  ]);

  await runner.runStateDiffResult(["wallet", ["math-max", 10, 20]]);
  assert.strictEqual(runner.readStateSlot("wallet"), 20);
  await runner.runStateDiffResult(["label", [["string-concat", "話文", 42]]]);
  assert.strictEqual(runner.readStateSlot("label"), "話文42");
  await runner.runStateDiffResult(["label", [["state-string-concat", "label", 1, "pre-", "-post"]]]);
  assert.strictEqual(runner.readStateSlot("label"), "pre-話文42-post");
  await runner.runStateDiffResult(["label-copy", [["state-slot-ref", "label"]]]);
  assert.strictEqual(runner.readStateSlot("label-copy"), "pre-話文42-post");

  await runReusableRuntimeSmoke(runner);
  await runGeneratedBoundarySmoke(runner);
  await runGeneratedGameLogicSmoke(generatedGameLogic, Adap, Func, Gvar);

  console.log("nelisp state-diff runner smoke: PASS");
})().catch((error) => {
  console.error(error);
  process.exit(1);
});

async function runReusableRuntimeSmoke(runner) {
  const event = (payload, host = {}) => runner.executeStateDiffEvent(payload, host);

  assert.deepStrictEqual(await event(["array-create", 1, 2, 3]), [1, 2, 3]);
  assert.deepStrictEqual(await event(["array-from", new Set(["a", "b"])]), ["a", "b"]);
  assert.strictEqual(await event(["array-is-array", []]), true);

  const map = new Map();
  assert.strictEqual(await event(["collection-set", map, "k", 9]), map);
  assert.strictEqual(await event(["collection-has", map, "k"]), true);
  assert.strictEqual(await event(["collection-get", map, "k"]), 9);
  assert.deepStrictEqual(await event(["collection-keys", map]), ["k"]);
  const listHost = { globals: { list: [1, 4] } };
  assert.strictEqual(await event(["collection-push", ["prop-ref", "list"], 7, 9], listHost), 4);
  assert.deepStrictEqual(listHost.globals.list, [1, 4, 7, 9]);
  assert.deepStrictEqual(await event(["collection-splice", ["prop-ref", "list"], 1, 2, 5, 6], listHost), [4, 7]);
  assert.deepStrictEqual(listHost.globals.list, [1, 5, 6, 9]);

  assert.strictEqual(await event(["to-string", 255, 16]), "ff");
  assert.deepStrictEqual(await event(["string-split", "a,b", ","]), ["a", "b"]);
  assert.strictEqual(await event(["string-starts-with", "abc", "ab"]), true);
  assert.strictEqual(await event(["string-includes", "abc", "b"]), true);
  assert.strictEqual(await event(["string-last-index-of", "ababa", "ba"]), 3);
  assert.strictEqual(await event(["string-replace", "foo", "o", "a"]), "fao");
  assert.strictEqual(await event(["string-char-code-at", "AZ", 1]), 90);

  assert.strictEqual(await event(["math-abs", -4]), 4);
  assert.strictEqual(await event(["math-floor", 3.9]), 3);
  assert.strictEqual(await event(["math-max", 1, 5, 3]), 5);
  assert.strictEqual(await event(["math-min", 1, 5, 3]), 1);
  assert.strictEqual(await event(["math-round", 2.6]), 3);
  assert.strictEqual(await event(["math-trunc", 2.9]), 2);
  assert.strictEqual(typeof await event(["math-random"]), "number");
  assert.strictEqual(typeof await event(["date-now"]), "number");
  const date = new Date("2026-06-26T00:00:00Z");
  assert.strictEqual(await event(["date-get-full-year", date]), 2026);
  assert.strictEqual(await event(["date-get-month", date]), 5);
  assert.strictEqual(await event(["date-get-date", date]), 26);
  assert.strictEqual(await event(["nullish", null, "fallback"]), "fallback");
  assert.strictEqual(await event(["logical-and", true, "ok"]), "ok");
  assert.strictEqual(await event(["logical-or", "", "fallback"]), "fallback");
  assert.strictEqual(await event(["typeof", 1]), "number");
  assert.strictEqual(await event(["instanceof", [], Array]), true);
  assert.strictEqual(await event(["in", "k", { k: 1 }]), true);

  assert.deepStrictEqual(await event(["json-parse", "{\"x\":1}"]), { x: 1 });
  assert.strictEqual(await event(["json-stringify", { x: 1 }]), "{\"x\":1}");
  assert.strictEqual((await event(["buffer-from", "abc"])).toString(), "abc");
  assert.strictEqual(await event(["bytes-to-base64", Buffer.from("abc")]), "YWJj");
  assert.deepStrictEqual(Array.from(await event(["base64-to-bytes", "YWJj"])), [97, 98, 99]);
  assert.strictEqual(await event(["base64-encode-string", "abc"]), "YWJj");
  assert.strictEqual(await event(["base64-decode-string", "YWJj"]), "abc");
  assert.deepStrictEqual(await event(["msgpack-decode", "payload"], {
    globals: { msgpack: { decode(value) { return { decoded: value }; } } }
  }), { decoded: "payload" });
  assert.deepStrictEqual(await event(["msgpack-encode", { ok: true }], {
    globals: { msgpack: { encode(value) { return ["encoded", value.ok]; } } }
  }), ["encoded", true]);

  let resolved;
  let rejected;
  assert.strictEqual(await event(["promise-resolve", (value) => { resolved = value; return "resolve-return"; }, 42]), "resolve-return");
  assert.strictEqual(resolved, 42);
  assert.strictEqual(await event(["promise-reject", (value) => { rejected = value; return "reject-return"; }, "err"]), "reject-return");
  assert.strictEqual(rejected, "err");
  assert.strictEqual(await event(["node-callback", (err, value) => err || value, null, "data"]), "data");
  assert.strictEqual(await event(["function-call", (value) => value + 1, 4]), 5);
  assert.deepStrictEqual(await event(["promise-all", [Promise.resolve(1), 2]]), [1, 2]);
  assert.strictEqual(await event(["promise-then", Promise.resolve(2), (value) => value + 3]), 5);
  assert.strictEqual(await event(["promise-catch", Promise.reject(new Error("x")), (error) => error.message]), "x");

  assert.strictEqual(await event(["process-cwd"]), process.cwd());
  assert.strictEqual(await event(["path-join", "a", "b"]), "a/b");
  assert.strictEqual(await event(["path-resolve", "a", "b"]), "a/b");
  assert.strictEqual(await event(["path-dirname", "a/b/c.txt"]), "a/b");
  assert.strictEqual(await event(["path-basename", "a/b/c.txt"]), "c.txt");
  assert.strictEqual(await event(["path-extname", "a/b/c.txt"]), ".txt");
  assert.strictEqual(await event(["fs-ls-available"]), true);
  assert.deepStrictEqual(await event(["fs-ls-revive", "x"], {
    globals: { _lsRevive(value) { return { revived: value }; } }
  }), { revived: "x" });
  assert.strictEqual(await event(["fs-exists-helper", "file"], {
    globals: { exists(value) { return value === "file"; } }
  }), true);
  assert.strictEqual(await event(["fs-read-file-sync", "file"], {
    globals: { fs: { readFileSync(file) { return `read:${file}`; } } }
  }), "read:file");
  assert.strictEqual(await event(["fs-mkdir-async", "dir"], {
    globals: { mkdir1(dir) { return `mkdir:${dir}`; } }
  }), "mkdir:dir");
  assert.strictEqual(await event(["fs-read-file-async", "file"], {
    globals: { readFile(file) { return `async-read:${file}`; } }
  }), "async-read:file");
  assert.strictEqual(await event(["fs-stat-async", "file"], {
    globals: { stat1(file) { return `stat:${file}`; } }
  }), "stat:file");
  assert.strictEqual(await event(["fs-write-file-async", "file", "data"], {
    globals: { writeFile(file, data) { return `${file}:${data}`; } }
  }), "file:data");
  assert.strictEqual(await event(["fs-unlink-sync", { unlinkSync(file) { return `unlink:${file}`; } }, "file"]), "unlink:file");
  assert.strictEqual(await event(["fs-watch", { watch(file) { return `watch:${file}`; } }, "file"]), "watch:file");
  assert.strictEqual(await event(["fs-is-dir-path", "/dir"], {
    globals: { _memFs: new Map([["/dir/file", true]]) }
  }), true);

  const target = { nested: { value: 1 } };
  const propHost = { globals: { target } };
  assert.strictEqual(await event(["prop-ref", "target.nested.value"], propHost), 1);
  assert.strictEqual(await event(["prop-set", "target.nested.value", 8], propHost), 8);
  assert.strictEqual(target.nested.value, 8);
  const indexTarget = {};
  assert.strictEqual(await event(["index-set", indexTarget, "x", 9]), 9);
  assert.strictEqual(await event(["index-ref", indexTarget, "x"]), 9);

  function SmokeCtor(value) {
    this.value = value;
  }
  const constructed = await event(["new", "SmokeCtor", 7], { globals: { SmokeCtor } });
  assert.strictEqual(constructed.value, 7);
  assert.deepStrictEqual(await event(["object-assign", { a: 1 }, { b: 2 }, { c: 3 }]), { a: 1, b: 2, c: 3 });
  const reflected = await event(["reflect-construct", SmokeCtor, [8]]);
  assert.strictEqual(reflected.value, 8);

  assert.deepStrictEqual(await event(["method-slice", [1, 2, 3], 1]), [2, 3]);
  assert.deepStrictEqual(await event(["method-subarray", new Uint8Array([1, 2, 3]), 1]), new Uint8Array([2, 3]));
  assert.strictEqual(await event(["method-join", ["a", "b"], "-"]), "a-b");
  const popList = [1, 2];
  assert.strictEqual(await event(["method-pop", popList]), 2);
  assert.deepStrictEqual(await event(["method-map", [1, 2], (value) => value * 2]), [2, 4]);
  assert.strictEqual(await event(["method-every", [2, 4], (value) => value % 2 === 0]), true);
  assert.strictEqual(await event(["method-find", [1, 3, 4], (value) => value % 2 === 0]), 4);
  assert.strictEqual(await event(["method-apply", function add(a, b) { return this.base + a + b; }, { base: 1 }, [2, 3]]), 6);
  assert.strictEqual(await event(["method-bind", function get() { return this.value; }, { value: 11 }]).then((fn) => fn()), 11);
  assert.strictEqual(await event(["method-contains", { contains(value) { return value === "x"; } }, "x"]), true);
  const forEachOut = [];
  await event(["method-for-each", [1, 2], (value) => forEachOut.push(value)]);
  assert.deepStrictEqual(forEachOut, [1, 2]);

  assert.deepStrictEqual(await event(["catch", "err", "body"]), { kind: "catch", name: "err", body: "body" });
}

async function runGeneratedBoundarySmoke(runner) {
  const calls = [];
  const restore = [
    patchExport(Adap, "pos", recordCall(calls, "pos")),
    patchExport(Adap, "gcopy", recordCall(calls, "gcopy")),
    patchExport(Adap, "DSPLAY", recordCall(calls, "DSPLAY")),
    patchExport(Adap, "color", recordCall(calls, "color")),
    patchExport(Func, "setMessage", recordCall(calls, "setMessage")),
    patchExport(Func, "AutoDraw", recordCall(calls, "AutoDraw"))
  ];

  try {
    const output = await runner.runStateDiffResult([
      ["dtw-set-position", 0, 0],
      ["dtw-draw-image", 1, 2, 3, 4, 5],
      ["dtw-play-sound", 211],
      ["dtw-set-color", 255, 128, 64],
      ["game-set-message", "message", "", 7, 0, 0, 0],
      ["game-auto-draw", 2]
    ]);

    assert.deepStrictEqual(calls, [
      ["pos", [0, 0]],
      ["gcopy", [1, 2, 3, 4, 5]],
      ["DSPLAY", [211]],
      ["color", [255, 128, 64]],
      ["setMessage", ["message", "", 7, 0, 0, 0]],
      ["AutoDraw", [2]]
    ]);
    assert.deepStrictEqual(output, [1, 2, 3, 4, 5, 6].map(() => undefined));
  } finally {
    for (const restoreOne of restore.reverse()) restoreOne();
  }
}

async function runGeneratedGameLogicSmoke(generatedGameLogic, Adap, Func, Gvar) {
  const calls = [];
  const traces = [];
  const originalConsoleLog = console.log;
  const restore = [
    patchExport(Adap, "button", recordCall(calls, "button")),
    patchExport(Adap, "clrobj", recordCall(calls, "clrobj")),
    patchExport(Adap, "combox", recordCall(calls, "combox")),
    patchExport(Adap, "boxf", recordCall(calls, "boxf")),
    patchExport(Adap, "color", recordCall(calls, "color")),
    patchExport(Adap, "DSPLAY", recordCall(calls, "DSPLAY")),
    patchExport(Adap, "dbgprt", recordCall(calls, "dbgprt")),
    patchExport(Adap, "dialog", recordCall(calls, "dialog")),
    patchExport(Adap, "onexit", recordCall(calls, "onexit")),
    patchExport(Adap, "chdir", recordCall(calls, "chdir")),
    patchExport(Adap, "bsave", recordCall(calls, "bsave")),
    patchExport(Adap, "font", recordCall(calls, "font")),
    patchExport(Adap, "gcopy", recordCall(calls, "gcopy")),
    patchExport(Adap, "gmode", recordCall(calls, "gmode")),
    patchExport(Adap, "getkey", () => 10),
    patchExport(Adap, "gsel", recordCall(calls, "gsel")),
    patchExport(Adap, "mes", recordCall(calls, "mes")),
    patchExport(Adap, "objsel", recordCall(calls, "objsel")),
    patchExport(Adap, "objprm", recordCall(calls, "objprm")),
    patchExport(Adap, "objsize", recordCall(calls, "objsize")),
    patchExport(Adap, "pos", recordCall(calls, "pos")),
    patchExport(Adap, "redraw", recordCall(calls, "redraw")),
    patchExport(Adap, "ShowWindow", recordCall(calls, "ShowWindow")),
    patchExport(Adap, "tcpput", recordCall(calls, "tcpput")),
    patchExport(Adap, "wait", recordCall(calls, "wait")),
    patchExport(Func, "AutoDraw", recordCall(calls, "AutoDraw")),
    patchExport(Func, "setMessage", recordCall(calls, "setMessage")),
    patchExport(Func, "func337", recordCall(calls, "func337")),
    patchExport(Music, "func106", recordCall(calls, "musicFunc106")),
    patchExport(Music, "func108", recordCall(calls, "musicFunc108")),
    patchExport(Menu, "run", recordCall(calls, "menuRun")),
    patchExport(Menu, "render", recordCall(calls, "menuRender")),
    patchExport(Func, "func009", recordCall(calls, "func009")),
    patchExport(Func, "func372", recordCall(calls, "func372")),
    patchExport(Func, "func0912", recordCall(calls, "func0912")),
    patchExport(Func, "func0914", recordCall(calls, "func0914")),
    patchExport(Func, "func0919", recordCall(calls, "func0919")),
    patchExport(Func, "func235", recordCall(calls, "func235")),
    patchExport(Func, "func0942", recordCall(calls, "func0942")),
    patchExport(Func, "func426", recordCall(calls, "func426")),
    patchExport(Func, "func427", recordCall(calls, "func427")),
    patchExport(Func, "func428", recordCall(calls, "func428")),
    patchExport(Func, "func429", recordCall(calls, "func429")),
    patchExport(Func, "func0968", recordCall(calls, "func0968")),
    patchExport(Func, "func0988", recordCall(calls, "func0988")),
    patchExport(Func, "func0910", recordCall(calls, "func0910"))
  ];
  const previousFlags = global.__NELISP_STATE_DIFF_FLAGS__;
  const previousHostGlobals = global.__NELISP_STATE_DIFF_HOST_GLOBALS__;
  const previousTrace = global.__NELISP_STATE_DIFF_TRACE__;

  try {
    console.log = (...args) => calls.push(["consoleLog", args]);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func023"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func024"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func027"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func028"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func029"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func030"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func031"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func033"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func034"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func035"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func036"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func037"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func038"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func039"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func040"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func042"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func062"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func071"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func163b"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func243"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func245"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func265"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func293"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func294"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func295"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func296"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func297"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func298"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func299"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func300"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func301"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func302"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func303"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func304"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func305"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func306"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func307"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func308"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func309"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func310"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func311"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func312"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func313"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func314"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func315"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func316"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func317"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func318"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func319"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func320"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func321"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func322"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func371"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0900"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0901"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0902"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0903"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0904"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0905"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0906"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0907"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0909"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0911"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0915"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0916"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0917"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0920"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0924"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0926"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0927"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0928"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0933"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0939"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0948"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0950"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0952"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0955"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0956"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0959"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0961"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0962"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0963"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0964"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0965"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0966"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0973"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0974"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0977"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0979"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0981"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0983"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0984"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0987"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0989"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0990"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0991"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0992"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0993"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func0999"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func1005"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func205"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func206"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func207"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func217"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func431"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func335"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func336"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func258"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func260"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func261"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func262"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func263"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func264"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func266"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func267"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func268"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func269"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func270"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func271"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func272"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func273"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func274"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func275"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func276"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func277"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func278"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func279"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func280"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func281"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func282"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func283"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func284"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func285"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func286"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func287"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func679"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func386"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func256"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func259"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func194"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func195"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func196"), true);
    assert.strictEqual(generatedGameLogic.hasGeneratedGameFunction("func477"), true);
    assert.strictEqual(generatedGameLogic.shouldUseGeneratedGameFunction("func023"), false);

    Gvar.var_459 = 9;
    Gvar.var_128 = 9;
    setupFunc062State(Gvar);
    Gvar.var_471 = 99;
    Gvar.var_240 = 9;
    Gvar.var_221 = 9;
    Gvar.open_item_menue = 1;
    Gvar.var_231 = 9;
    Gvar.var_234 = 9;
    Gvar.var_361 = 3;
    Gvar.var_833 = 25;
    Gvar.var_1678 = 0;
    Gvar.var_1679 = 0;
    Gvar.var_3867 = 0;
    Gvar.var_3868 = 0;
    Gvar.var_1050 = 7;
    Gvar.var_2254 = 1;
    Gvar.var_217 = 0;
    Gvar.var_3903 = 7;
    Gvar.var_3904 = "old";
    Gvar.current_floor = 12;
    Gvar.var_66 = 3;
    Gvar.var_67 = 4;
    Gvar.var_73 = { 3: { 4: 2, Var4: 2 } };
    Gvar.dungeon_number = 7;
    Gvar.var_3864 = "";
    Gvar.var_624 = 7;
    Gvar.var_3905 = "";
    Gvar.var_3906 = "";
    Gvar.var_3820 = "abc";
    Gvar.var_3542 = 30;
    Gvar.var_3543 = 40;
    Gvar.var_3559 = 8;
    Gvar.var_3560 = 8;
    Gvar.var_3573 = 9;
    Gvar.wparam = 8;
    Gvar.var_15 = 123;
    setupFunc0901To0906State(Gvar);
    setupFunc0966State(Gvar);
    Gvar.var_132 = 1;
    const func034EarlyCallStart = calls.length;
    await generatedGameLogic.runGeneratedGameFunction("func034");
    assert.deepStrictEqual(calls.map(([name, args]) => [name, args.slice(0, 2)]).slice(func034EarlyCallStart), [
      ["dbgprt", [34]]
    ]);
    calls.length = func034EarlyCallStart;
    Gvar.var_132 = 0;
    generatedGameLogic.resetGeneratedGameFunctionStats();
    await generatedGameLogic.runGeneratedGameFunction("func023");
    await generatedGameLogic.runGeneratedGameFunction("func062");
    assertFunc062State(Gvar);
    setupFunc481State(Gvar);
    await generatedGameLogic.runGeneratedGameFunction("func027");
    await generatedGameLogic.runGeneratedGameFunction("func028");
    await generatedGameLogic.runGeneratedGameFunction("func029");
    await generatedGameLogic.runGeneratedGameFunction("func030");
    await generatedGameLogic.runGeneratedGameFunction("func033");
    await generatedGameLogic.runGeneratedGameFunction("func071");
    await generatedGameLogic.runGeneratedGameFunction("func265");
    await generatedGameLogic.runGeneratedGameFunction("func371");
    await generatedGameLogic.runGeneratedGameFunction("func0901");
    await generatedGameLogic.runGeneratedGameFunction("func0902");
    await generatedGameLogic.runGeneratedGameFunction("func0903");
    await generatedGameLogic.runGeneratedGameFunction("func0904");
    await generatedGameLogic.runGeneratedGameFunction("func0905");
    await generatedGameLogic.runGeneratedGameFunction("func0906");
    await generatedGameLogic.runGeneratedGameFunction("func0907");
    await generatedGameLogic.runGeneratedGameFunction("func0909");
    await generatedGameLogic.runGeneratedGameFunction("func0915");
    await generatedGameLogic.runGeneratedGameFunction("func0917");
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
      Func: Object.assign({}, Func, {
        func0928: recordCall(calls, "func0928")
      })
    };
    await generatedGameLogic.runGeneratedGameFunction("func0927");
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    await generatedGameLogic.runGeneratedGameFunction("func0956");
    await generatedGameLogic.runGeneratedGameFunction("func0959");
    Gvar.var_883 = 2;
    await generatedGameLogic.runGeneratedGameFunction("func0948");
    assert.strictEqual(Gvar.var_3812, 138);
    assert.strictEqual(Gvar.belongings_item_list, 122);
    assert.strictEqual(Gvar.buying_price, 1000);
    assert.strictEqual(Gvar.item_name, "ｱﾇﾋﾞｽ神のDISC");
    Gvar.var_883 = 2;
    await generatedGameLogic.runGeneratedGameFunction("func0950");
    assert.strictEqual(Gvar.var_3812, 28);
    assert.strictEqual(Gvar.var_888, 1);
    assert.strictEqual(Gvar.var_889, "ｾﾄ神の罠");
    Gvar.var_883 = 2;
    Gvar.var_3788 = 0;
    await generatedGameLogic.runGeneratedGameFunction("func0952");
    assert.strictEqual(Gvar.var_3812, 81);
    assert.strictEqual(Gvar.enemy_list, 79);
    assert.strictEqual(Gvar.enemy_name, "ｴｺｰｽﾞの卵");
    setupFunc0966State(Gvar);
    await generatedGameLogic.runGeneratedGameFunction("func0966");
    await generatedGameLogic.runGeneratedGameFunction("func0977");
    await generatedGameLogic.runGeneratedGameFunction("func0981");
    await generatedGameLogic.runGeneratedGameFunction("func0987");
    await generatedGameLogic.runGeneratedGameFunction("func0991");
    Gvar.dungeon_number = 7;
    Gvar.var_3864 = "";
    await generatedGameLogic.runGeneratedGameFunction("func0992");
    await generatedGameLogic.runGeneratedGameFunction("func0993");
    Gvar.var_727 = 90;
    Gvar.var_3922 = 12;
    await generatedGameLogic.runGeneratedGameFunction("func0999");
    await generatedGameLogic.runGeneratedGameFunction("func194");
    await generatedGameLogic.runGeneratedGameFunction("func195");
    await generatedGameLogic.runGeneratedGameFunction("func196");
    await generatedGameLogic.runGeneratedGameFunction("func477");
    await generatedGameLogic.runGeneratedGameFunction("func481");
    const directSavedVar78 = Gvar.var_78;
    const directSavedMapState = {
      var_983: Gvar.var_983,
      var_1082: Gvar.var_1082,
      var_1084: Gvar.var_1084,
      var_1096: Gvar.var_1096,
      var_1098: Gvar.var_1098,
      var_1100: Gvar.var_1100,
      var_1102: Gvar.var_1102
    };
    await generatedGameLogic.runGeneratedGameFunction("func1005");
    await generatedGameLogic.runGeneratedGameFunction("func205");
    await generatedGameLogic.runGeneratedGameFunction("func206");
    await generatedGameLogic.runGeneratedGameFunction("func207");
    Gvar.var_664 = {};
    Gvar.var_692 = 1;
    Gvar.var_693 = 2;
    Gvar.var_694 = 3;
    Gvar.var_695 = 4;
    Gvar.var_696 = 5;
    Gvar.var_697 = 6;
    Gvar.var_698 = 7;
    Gvar.var_699 = 8;
    Gvar.var_700 = 9;
    Gvar.var_701 = 10;
    await generatedGameLogic.runGeneratedGameFunction("func217");
    await generatedGameLogic.runGeneratedGameFunction("func431");
    await generatedGameLogic.runGeneratedGameFunction("func335");
    await generatedGameLogic.runGeneratedGameFunction("func336");
    await generatedGameLogic.runGeneratedGameFunction("func258");
    await generatedGameLogic.runGeneratedGameFunction("func260");
    await generatedGameLogic.runGeneratedGameFunction("func261");
    await generatedGameLogic.runGeneratedGameFunction("func262");
    await generatedGameLogic.runGeneratedGameFunction("func263");
    await generatedGameLogic.runGeneratedGameFunction("func264");
    await generatedGameLogic.runGeneratedGameFunction("func266");
    await generatedGameLogic.runGeneratedGameFunction("func267");
    await generatedGameLogic.runGeneratedGameFunction("func268");
    await generatedGameLogic.runGeneratedGameFunction("func269");
    await generatedGameLogic.runGeneratedGameFunction("func270");
    await generatedGameLogic.runGeneratedGameFunction("func271");
    await generatedGameLogic.runGeneratedGameFunction("func272");
    await generatedGameLogic.runGeneratedGameFunction("func273");
    await generatedGameLogic.runGeneratedGameFunction("func274");
    await generatedGameLogic.runGeneratedGameFunction("func275");
    await generatedGameLogic.runGeneratedGameFunction("func276");
    await generatedGameLogic.runGeneratedGameFunction("func277");
    await generatedGameLogic.runGeneratedGameFunction("func278");
    await generatedGameLogic.runGeneratedGameFunction("func279");
    await generatedGameLogic.runGeneratedGameFunction("func280");
    await generatedGameLogic.runGeneratedGameFunction("func281");
    await generatedGameLogic.runGeneratedGameFunction("func282");
    await generatedGameLogic.runGeneratedGameFunction("func283");
    await generatedGameLogic.runGeneratedGameFunction("func284");
    await generatedGameLogic.runGeneratedGameFunction("func285");
    await generatedGameLogic.runGeneratedGameFunction("func286");
    await generatedGameLogic.runGeneratedGameFunction("func287");
    Gvar.var_78 = { 5: { 0: 0, Var0: 0 } };
    Gvar.var_866 = 5;
    await generatedGameLogic.runGeneratedGameFunction("func386");
    await generatedGameLogic.runGeneratedGameFunction("func256");
    await generatedGameLogic.runGeneratedGameFunction("func259");
    Gvar.var_78 = directSavedVar78;
    Object.assign(Gvar, directSavedMapState);
    assert.deepStrictEqual(calls.map(([name, args]) => [name, args.slice(0, 2)]).slice(0, 61), [
      ["dbgprt", [23]],
      ["dbgprt", [62]],
      ["dbgprt", [27]],
      ["setMessage", ["動けるようになった。", ""]],
      ["AutoDraw", [9]],
      ["dbgprt", [28]],
      ["setMessage", ["透明状態ではなくなった", ""]],
      ["AutoDraw", [9]],
      ["dbgprt", [29]],
      ["setMessage", ["周囲がドロドロではなくなった", ""]],
      ["AutoDraw", [9]],
      ["dbgprt", [30]],
      ["setMessage", ["鈍足状態が治った", ""]],
      ["AutoDraw", [9]],
      ["dbgprt", [33]],
      ["AutoDraw", [2]],
      ["AutoDraw", [2]],
      ["AutoDraw", [5]],
      ["setMessage", ["元通りくっついた", ""]],
      ["AutoDraw", [9]],
      ["dbgprt", [71]],
      ["DSPLAY", [129]],
      ["setMessage", ["だめだ！  もう倒れそうだ！", ""]],
      ["AutoDraw", [10]],
      ["dbgprt", [265]],
      ["dbgprt", [371]],
      ["func372", []],
      ["clrobj", [9, 9]],
      ["objsize", [60]],
      ["pos", [604, 32]],
      ["combox", [3, 100]],
      ["clrobj", [9, 9]],
      ["objsize", [60]],
      ["pos", [604, 32]],
      ["combox", [4, 100]],
      ["clrobj", [9, 9]],
      ["objsize", [60]],
      ["pos", [604, 32]],
      ["combox", [5, 100]],
      ["clrobj", [9, 9]],
      ["objsize", [1]],
      ["pos", [800, 800]],
      ["button", ["ダミー", Func.func0909]],
      ["objsize", [1]],
      ["pos", [800, 800]],
      ["button", ["ダミー", Func.func0909]],
      ["objsize", [1]],
      ["pos", [800, 800]],
      ["button", ["ダミー", Func.func0909]],
      ["clrobj", [13, 13]],
      ["objsize", [100]],
      ["pos", [564, 32]],
      ["combox", [0, 100]],
      ["func0910", []],
      ["objsize", [100]],
      ["pos", [30, 126]],
      ["combox", [8, 100]],
      ["func0928", []],
      ["ShowWindow", [123, 7]],
      ["tcpput", ["話文abc", 7]],
      ["tcpput", ["\n", 7]]
    ]);
    assert.deepStrictEqual(calls.map(([name, args]) => [name, args.slice(0, 2)]).slice(61, 66), [
      ["gsel", [30]],
      ["objprm", [0, ""]],
      ["gsel", [0]],
      ["func426", []],
      ["func427", []]
    ]);
    assert.deepStrictEqual(calls.map(([name]) => name).slice(66, 89), ["func428", "func429", "tcpput", "tcpput", "tcpput", "tcpput", "func0988", "tcpput", "tcpput", "func0988", "tcpput", "tcpput", "dbgprt", "wait", "menuRun", "menuRun", "menuRender", "dbgprt", "setMessage", "AutoDraw", "func009", "dbgprt", "consoleLog"]);
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
      Func: Object.assign({}, Func, {
        func0953: recordCall(calls, "func0953-core")
      })
    };
    Gvar.var_407 = 0;
    Gvar.var_509 = 9;
    Gvar.var_499 = 9;
    await generatedGameLogic.runGeneratedGameFunction("func0984");
    assert.strictEqual(Gvar.var_509, 0);
    assert.strictEqual(Gvar.var_499, 0);
    assert(calls.some(([name]) => name === "func0953-core"));
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    Gvar.var_3863 = "ﾃﾞｨｱﾎﾞﾛ  再起不能";
    await generatedGameLogic.runGeneratedGameFunction("func0962");
    assert.strictEqual(Gvar.var_3865, "行赤");
    Gvar.var_3863 = "西戸ハウスだ！";
    await generatedGameLogic.runGeneratedGameFunction("func0990");
    assert.strictEqual(Gvar.var_3865, "行黄");
    assert.strictEqual(Gvar.var_459, 0);
    assert.strictEqual(Gvar.var_128, 0);
    assert.strictEqual(Gvar.var_471, 0);
    assert.strictEqual(Gvar.var_240, 0);
    assert.strictEqual(Gvar.var_221, 0);
    assert.strictEqual(Gvar.open_item_menue, 0);
    assert.strictEqual(Gvar.var_231, 0);
    assert.strictEqual(Gvar.var_234, 0);
    assertFunc481State(Gvar);
    assertFunc265State(Gvar);
    assertFunc0901To0906State(Gvar);
    assert.strictEqual(Gvar.var_3560, 8);
    assert.strictEqual(Gvar.var_3573, 0);
    assert.strictEqual(Gvar.var_3820, "話文abc");
    assert.strictEqual(Gvar.var_1678, 3);
    assert.strictEqual(Gvar.var_1679, 1);
    assert.deepStrictEqual(Gvar.var_3819.slice(0, 20), expectedFunc0966Array());
    assert.strictEqual(Gvar.var_3869, 20);
    assert.strictEqual(Gvar.var_3870, expectedFunc0966Text());
    assert.strictEqual(Gvar.var_3867, 1);
    assert.strictEqual(Gvar.var_3868, 1);
    assert.strictEqual(Gvar.var_3864, "行橙ﾃﾞｨｱﾎﾞﾛは絶頂の世界に向かった");
    assert.strictEqual(Gvar.var_3904, "絶頂");
    assert.strictEqual(Gvar.var_3905, "７");
    assert.strictEqual(Gvar.var_3906, "窓数７");
    Gvar.var_83 = { 2: { 13: 9, Var13: 9 } };
    Gvar.var_460 = 2;
    await generatedGameLogic.runGeneratedGameFunction("func024");
    assert.strictEqual(Gvar.var_83[2][13], 0);
    assert.strictEqual(Gvar.var_83[2].Var13, 0);
    Gvar.current_level = 4;
    await generatedGameLogic.runGeneratedGameFunction("func679");
    assert.strictEqual(Gvar.var_950, 11);
    Gvar.var_132 = 0;
    const conditionCallStart = calls.length;
    await generatedGameLogic.runGeneratedGameFunction("func031");
    await generatedGameLogic.runGeneratedGameFunction("func034");
    await generatedGameLogic.runGeneratedGameFunction("func035");
    await generatedGameLogic.runGeneratedGameFunction("func036");
    await generatedGameLogic.runGeneratedGameFunction("func037");
    await generatedGameLogic.runGeneratedGameFunction("func038");
    await generatedGameLogic.runGeneratedGameFunction("func039");
    await generatedGameLogic.runGeneratedGameFunction("func040");
    Gvar.var_144 = 9;
    Gvar.var_199 = 9;
    await generatedGameLogic.runGeneratedGameFunction("func042");
    Gvar.var_409 = 2;
    Gvar.var_66 = 3;
    Gvar.var_67 = 4;
    Gvar.var_35 = 40;
    Gvar.var_36 = 50;
    Gvar.var_217 = 0;
    Gvar.var_199 = 3;
    await generatedGameLogic.runGeneratedGameFunction("func163b");
    Gvar.current_floor = 3;
    Gvar.special_floor = 0;
    Gvar.dungeon_number = 4;
    Gvar.var_70 = 0;
    Gvar.var_20 = 9;
    await generatedGameLogic.runGeneratedGameFunction("func243");
    Gvar.dungeon_number = 1;
    Gvar.var_70 = 0;
    await generatedGameLogic.runGeneratedGameFunction("func245");
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
      Func: Object.assign({}, Func, {
        func323: recordCall(calls, "func323-core")
      })
    };
    await generatedGameLogic.runGeneratedGameFunction("func293");
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    await generatedGameLogic.runGeneratedGameFunction("func294");
    await generatedGameLogic.runGeneratedGameFunction("func295");
    await generatedGameLogic.runGeneratedGameFunction("func296");
    await generatedGameLogic.runGeneratedGameFunction("func297");
    await generatedGameLogic.runGeneratedGameFunction("func298");
    await generatedGameLogic.runGeneratedGameFunction("func299");
    Gvar.var_493 = {};
    await generatedGameLogic.runGeneratedGameFunction("func300");
    await generatedGameLogic.runGeneratedGameFunction("func301");
    await generatedGameLogic.runGeneratedGameFunction("func302");
    await generatedGameLogic.runGeneratedGameFunction("func303");
    await generatedGameLogic.runGeneratedGameFunction("func304");
    await generatedGameLogic.runGeneratedGameFunction("func305");
    await generatedGameLogic.runGeneratedGameFunction("func306");
    await generatedGameLogic.runGeneratedGameFunction("func307");
    await generatedGameLogic.runGeneratedGameFunction("func308");
    await generatedGameLogic.runGeneratedGameFunction("func309");
    await generatedGameLogic.runGeneratedGameFunction("func310");
    await generatedGameLogic.runGeneratedGameFunction("func311");
    await generatedGameLogic.runGeneratedGameFunction("func312");
    await generatedGameLogic.runGeneratedGameFunction("func313");
    await generatedGameLogic.runGeneratedGameFunction("func314");
    await generatedGameLogic.runGeneratedGameFunction("func315");
    await generatedGameLogic.runGeneratedGameFunction("func316");
    await generatedGameLogic.runGeneratedGameFunction("func317");
    await generatedGameLogic.runGeneratedGameFunction("func318");
    await generatedGameLogic.runGeneratedGameFunction("func319");
    await generatedGameLogic.runGeneratedGameFunction("func320");
    await generatedGameLogic.runGeneratedGameFunction("func321");
    await generatedGameLogic.runGeneratedGameFunction("func322");
    Gvar.dungeon_number = 11;
    Gvar.current_floor = 9;
    Gvar.var_70 = 9;
    assert.deepStrictEqual(calls.map(([name, args]) => [name, args.slice(0, 2)]).slice(conditionCallStart), [
      ["dbgprt", [31]],
      ["DSPLAY", [123]],
      ["AutoDraw", [2]],
      ["AutoDraw", [2]],
      ["AutoDraw", [2]],
      ["AutoDraw", [2]],
      ["AutoDraw", [2]],
      ["AutoDraw", [2]],
      ["AutoDraw", [2]],
      ["AutoDraw", [2]],
      ["AutoDraw", [2]],
      ["AutoDraw", [5]],
      ["setMessage", ["変身が解除された", ""]],
      ["AutoDraw", [9]],
      ["dbgprt", [34]],
      ["setMessage", ["盲目状態が治った", ""]],
      ["AutoDraw", [9]],
      ["dbgprt", [35]],
      ["setMessage", ["ンドゥールの気分が消えた", ""]],
      ["AutoDraw", [9]],
      ["dbgprt", [36]],
      ["setMessage", ["混乱状態が治った", ""]],
      ["AutoDraw", [9]],
      ["dbgprt", [37]],
      ["setMessage", ["冷静になった。", ""]],
      ["AutoDraw", [9]],
      ["dbgprt", [38]],
      ["AutoDraw", [9]],
      ["setMessage", ["ﾖｰﾖｰﾏｯ「もっとおおおおおお", "  私を叱ってええええええ」"]],
      ["AutoDraw", [4]],
      ["setMessage", ["ﾖｰﾖｰﾏｯのあまりの臭さで", "正気に戻った。"]],
      ["AutoDraw", [9]],
      ["dbgprt", [39]],
      ["AutoDraw", [9]],
      ["setMessage", ["錠前のショックで", "正気に戻った。"]],
      ["AutoDraw", [9]],
      ["dbgprt", [40]],
      ["setMessage", ["鉄塔が消滅した。", ""]],
      ["AutoDraw", [9]],
      ["dbgprt", [42]],
      ["AutoDraw", [30]],
      ["setMessage", ["ﾄﾞｯﾋﾟｵと交代した。", ""]],
      ["AutoDraw", [9]],
      ["pos", [0, 0]],
      ["gmode", [2]],
      ["gcopy", [18, 180]],
      ["dbgprt", [243]],
      ["dbgprt", [245]],
      ["dbgprt", [293]],
      ["func323-core", []],
      ["dbgprt", [294]],
      ["dbgprt", [295]],
      ["dbgprt", [296]],
      ["dbgprt", [297]],
      ["dbgprt", [298]],
      ["dbgprt", [299]],
      ["dbgprt", [300]],
      ["dbgprt", [301]],
      ["dbgprt", [302]],
      ["dbgprt", [303]],
      ["dbgprt", [304]],
      ["dbgprt", [305]],
      ["dbgprt", [306]],
      ["dbgprt", [307]],
      ["dbgprt", [308]],
      ["dbgprt", [309]],
      ["dbgprt", [310]],
      ["dbgprt", [311]],
      ["dbgprt", [312]],
      ["dbgprt", [313]],
      ["dbgprt", [314]],
      ["dbgprt", [315]],
      ["dbgprt", [316]],
      ["dbgprt", [317]],
      ["dbgprt", [318]],
      ["dbgprt", [319]],
      ["dbgprt", [320]],
      ["dbgprt", [321]],
      ["dbgprt", [322]]
    ]);
    assert.strictEqual(Gvar.var_470, 0);
    assert.strictEqual(Gvar.var_472, 0);
    assert.strictEqual(Gvar.var_144, 0);
    assert.strictEqual(Gvar.var_199, 3);
    assert.strictEqual(Gvar.var_778, 20);
    assert.strictEqual(Gvar.var_779, 180);
    assert.strictEqual(Gvar.var_780, 180);
    assert.strictEqual(Gvar.var_86, 1);
    assert.strictEqual(Gvar.var_70, 9);
    assert.strictEqual(Gvar.var_1080, 0);
    assert.strictEqual(Gvar.var_96, 1);
    assert.strictEqual(typeof Gvar.var_1136, "string");
    assert.strictEqual(Gvar.var_1136.length > 2000, true);
    assert.strictEqual(Array.isArray(Gvar.var_1137), true);
    assert.strictEqual(typeof Gvar.var_983, "string");
    assert.strictEqual(Gvar.var_983.length > 2000, true);
    assert.strictEqual(Array.isArray(Gvar.var_71), true);
    assert.strictEqual(Gvar.var_493[1], 1);
    assert.strictEqual(Gvar.var_493[12], 0);
    assert.strictEqual(Gvar.var_1005, 1);
    assert.strictEqual(Gvar.var_3920, 10);
    assert.strictEqual(Gvar.var_3921, 10);
    assert.strictEqual(Gvar.var_3916, 2);
    assert.strictEqual(Gvar.var_3923, 6);
    assert.strictEqual(Gvar.var_3922, 10);
    Gvar.font_type = "smoke-font";
    Gvar.var_3593 = 2;
    await generatedGameLogic.runGeneratedGameFunction("func0926");
    Gvar.var_3861 = 399;
    Gvar.var_3862 = "";
    await generatedGameLogic.runGeneratedGameFunction("func0983");
    assert.strictEqual(Gvar.var_3862, "G･E･ﾚｸｲｴﾑのDISC");
    Gvar.var_3559 = 8;
    Gvar.var_3560 = 8;
    Gvar.var_3562 = 0;
    Gvar.y_axis_map_image = 0;
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
      Func: Object.assign({}, Func, {
        func0917: recordCall(calls, "func0917-core"),
        func0911: recordCall(calls, "func0911-core")
      }),
      Adap: Object.assign({}, Adap, {
        objsel: recordCall(calls, "objsel-core")
      })
    };
    await generatedGameLogic.runGeneratedGameFunction("func0916");
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    assert.strictEqual(Gvar.var_3562, 8);
    assert.strictEqual(Gvar.y_axis_map_image, 8);
    await generatedGameLogic.runGeneratedGameFunction("func0955");
    Gvar.dungeon_number = 7;
    Gvar.var_3864 = "";
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
      Func: Object.assign({}, Func, {
        func0966: recordCall(calls, "func0966")
      })
    };
    await generatedGameLogic.runGeneratedGameFunction("func0964");
    await generatedGameLogic.runGeneratedGameFunction("func0973");
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    assert.strictEqual(Gvar.var_3864, "行橙ﾃﾞｨｱﾎﾞﾛは絶頂の世界に向かった");
    Gvar.var_408 = 1;
    Gvar.var_3867 = 1;
    Gvar.var_3868 = 1;
    Gvar.var_1046 = 1;
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
      Func: Object.assign({}, Func, {
        func0973: recordCall(calls, "func0973-core"),
        func0978: recordCall(calls, "func0978-core"),
        func0982: recordCall(calls, "func0982-core"),
        func0976: recordCall(calls, "func0976-core")
      })
    };
    await generatedGameLogic.runGeneratedGameFunction("func0965");
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    assert.strictEqual(Gvar.var_3867, 0);
    assert.strictEqual(Gvar.var_3868, 0);
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
      Func: Object.assign({}, Func, {
        func340: recordCall(calls, "func340-core"),
        func508: recordCall(calls, "func508-core"),
        func019: recordCall(calls, "func019-core")
      })
    };
    await generatedGameLogic.runGeneratedGameFunction("func0974");
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    assert.strictEqual(Gvar.var_3864, "女帝");
    assert.strictEqual(Gvar.var_2254, 0);
    assert.strictEqual(Gvar.var_217, 1);
    Gvar.var_3593 = 0;
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
      Func: Object.assign({}, Func, {
        func0914: recordCall(calls, "func0914"),
        func0919: recordCall(calls, "func0919"),
        func0920: recordCall(calls, "func0920"),
        func0912: recordCall(calls, "func0912")
      })
    };
    await generatedGameLogic.runGeneratedGameFunction("func0911");
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    assert.deepStrictEqual(calls.map(([name, args]) => [name, args.slice(0, 2)]).slice(-7), [
      ["redraw", [0]],
      ["func0914", []],
      ["func0919", []],
      ["func0920", []],
      ["func0912", []],
      ["redraw", [1]],
      ["wait", [1]]
    ]);
    Gvar.var_3563 = 2;
    Gvar.var_3564 = 3;
    Gvar.mousex = 50;
    Gvar.mousey = 60;
    Gvar.var_3565 = 0;
    Gvar.var_3562 = 8;
    Gvar.font_type = "smoke-font";
    Gvar.var_3569 = 3;
    await generatedGameLogic.runGeneratedGameFunction("func0920");
    assert.deepStrictEqual(calls.map(([name, args]) => [name, args.slice(0, 6)]).slice(-11), [
      ["gmode", [2]],
      ["pos", [90, 130]],
      ["gcopy", [3, 240, 120, 40, 40]],
      ["pos", [47, 57]],
      ["gcopy", [5, 0, 320, 40, 40]],
      ["pos", [53, 85]],
      ["font", ["smoke-font", 11]],
      ["color", [255, 255, 255]],
      ["mes", ["部屋 3"]],
      ["pos", [47, 57]],
      ["gcopy", [3, 160, 120, 40, 40]]
    ]);
    Gvar.var_3573 = 1;
    Gvar.var_3636 = 44;
    Gvar.var_3637 = 55;
    Gvar.var_30 = "smoke-dir";
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
      Func: Object.assign({}, Func, {
        func0940: recordCall(calls, "func0940-core"),
        func0929: recordCall(calls, "func0929-core"),
        func0915: recordCall(calls, "func0915-core"),
        func0916: recordCall(calls, "func0916-core"),
        func0910: recordCall(calls, "func0910-core")
      })
    };
    await generatedGameLogic.runGeneratedGameFunction("func0928");
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    assert.strictEqual(Gvar.var_199, 2);
    assert.strictEqual(Gvar.var_66, 44);
    assert.strictEqual(Gvar.var_67, 55);
    assert.strictEqual(Gvar.var_3572, 1);
    assert.strictEqual(Array.isArray(Gvar.var_83), true);
    assert.strictEqual(Gvar.var_83.length, 300);
    assert.strictEqual(Array.isArray(Gvar.var_78), true);
    assert.strictEqual(Gvar.var_78.length, 300);
    assert.deepStrictEqual(calls.map(([name, args]) => [name, args.slice(0, 2)]).slice(-8), [
      ["chdir", ["smoke-dir"]],
      ["func0940-core", []],
      ["func0929-core", []],
      ["clrobj", [12, null]],
      ["func0915-core", []],
      ["func0916-core", []],
      ["objsel", [0]],
      ["func0910-core", []]
    ]);
    Gvar.var_31 = 11;
    Gvar.var_32 = 12;
    Gvar.var_637 = 0;
    Gvar.var_640 = 0;
    Gvar.var_3544 = 3;
    Gvar.var_3572 = 0;
    Gvar.var_890 = "enemy-list";
    Gvar.var_874 = "item-list";
    Gvar.var_886 = "trap-list";
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
      Adap: Object.assign({}, Adap, {
        width: recordCall(calls, "width"),
        screen_: recordCall(calls, "screen"),
        SetWindowLongA: recordCall(calls, "setWindowLong"),
        chgdisp: recordCall(calls, "chgdisp")
      }),
      Func: Object.assign({}, Func, {
        func0947: recordCall(calls, "func0947-core"),
        func0949: recordCall(calls, "func0949-core"),
        func0951: recordCall(calls, "func0951-core"),
        func0905: recordCall(calls, "func0905-core"),
        func0915: recordCall(calls, "func0915-core"),
        func0906: recordCall(calls, "func0906-core"),
        func0934: recordCall(calls, "func0934-core"),
        func0910: recordCall(calls, "func0910-core")
      })
    };
    await generatedGameLogic.runGeneratedGameFunction("func0900");
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    assert.strictEqual(Gvar.var_3510, 353);
    assert.strictEqual(Gvar.var_3542, 545);
    assert.strictEqual(Gvar.var_3543, 198);
    assert.strictEqual(Gvar.var_3562, 2);
    assert.strictEqual(Gvar.var_3565, 6);
    assert.strictEqual(Gvar.var_3544, 1);
    assert.strictEqual(Gvar.var_626, 1);
    const func0900Calls = calls.map(([name, args]) => [name, args.slice(0, 3)]);
    assert(func0900Calls.some(([name, args]) => name === "func0905-core" && args.length === 0));
    assert(func0900Calls.some(([name, args]) => name === "func0915-core" && args.length === 0));
    assert(func0900Calls.some(([name, args]) => name === "func0906-core" && args.length === 0));
    assert(func0900Calls.some(([name, args]) => name === "func0934-core" && args.length === 0));
    assert(func0900Calls.some(([name, args]) => name === "func0910-core" && args.length === 0));
    assert(func0900Calls.some(([name, args]) => name === "width" && args[0] === 340 && args[1] === 340));
    assert(func0900Calls.some(([name, args]) => name === "button" && args[0] === "戻る" && args[1] === Func.func0908));
    assert(func0900Calls.some(([name, args]) => name === "button" && args[0] === "初期化" && args[1] === Func.func0924));
    Gvar.stat = 0;
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
      Func: Object.assign({}, Func, {
        func0934: recordCall(calls, "func0934-core"),
        func0911: recordCall(calls, "func0911-core"),
        func0910: recordCall(calls, "func0910-core")
      })
    };
    await generatedGameLogic.runGeneratedGameFunction("func0924");
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    assert.strictEqual(Gvar.var_199, 2);
    assert.strictEqual(Gvar.var_66, 26);
    assert.strictEqual(Gvar.var_67, 15);
    assert.strictEqual(Gvar.var_3572, 0);
    assert.strictEqual(Gvar.var_3593, 0);
    assert.strictEqual(Array.isArray(Gvar.var_71), true);
    assert.strictEqual(Gvar.var_71.length, 70);
    assert.strictEqual(Array.isArray(Gvar.var_486[0][0]), true);
    assert.strictEqual(Gvar.var_486[0][0].length, 30);
    assert.strictEqual(Array.isArray(Gvar.var_83), true);
    assert.strictEqual(Gvar.var_83.length, 300);
    assert.strictEqual(Array.isArray(Gvar.var_78), true);
    assert.strictEqual(Gvar.var_78.length, 300);
    Gvar.var_3774 = 1;
    Gvar.var_539 = 2;
    Gvar.var_3635 = "save.dat";
    await generatedGameLogic.runGeneratedGameFunction("func0939");
    assert.strictEqual(Gvar.var_3761, 0);
    assert.strictEqual(Gvar.var_375, 0);
    assert.strictEqual(Gvar.var_3775, "2");
    assert.strictEqual(Gvar.data, "2");
    assert.strictEqual(Gvar.var_539, 0);
    assert.strictEqual(Gvar.var_3774, 0);
    assert.deepStrictEqual(calls.map(([name, args]) => [name, args.slice(0, 4)]).slice(-6), [
      ["musicFunc108", []],
      ["func235", []],
      ["onexit", [0]],
      ["chdir", ["問題"]],
      ["bsave", ["save.dat", "2", 1, 0]],
      ["func0942", []]
    ]);
    assertGeneratedStats(generatedGameLogic.getGeneratedGameFunctionStats(), 139);

    calls.length = 0;
    Gvar.var_459 = 9;
    Gvar.var_128 = 9;
    setupFunc062State(Gvar);
    Gvar.var_471 = 99;
    Gvar.var_240 = 9;
    Gvar.var_221 = 9;
    Gvar.open_item_menue = 1;
    Gvar.var_231 = 9;
    Gvar.var_234 = 9;
    Gvar.var_361 = 3;
    Gvar.var_833 = 25;
    Gvar.var_1678 = 0;
    Gvar.var_1679 = 0;
    Gvar.var_3867 = 0;
    Gvar.var_3868 = 0;
    Gvar.var_1050 = 7;
    Gvar.var_2254 = 1;
    Gvar.var_217 = 0;
    Gvar.var_3903 = 7;
    Gvar.var_3904 = "old";
    Gvar.current_floor = 12;
    Gvar.var_66 = 3;
    Gvar.var_67 = 4;
    Gvar.var_73 = { 3: { 4: 2, Var4: 2 } };
    Gvar.dungeon_number = 7;
    Gvar.var_3864 = "";
    Gvar.var_624 = 7;
    Gvar.var_3905 = "";
    Gvar.var_3906 = "";
    Gvar.var_3820 = "abc";
    Gvar.var_3542 = 30;
    Gvar.var_3543 = 40;
    Gvar.var_3559 = 8;
    Gvar.var_3560 = 8;
    Gvar.var_3573 = 9;
    Gvar.wparam = 8;
    Gvar.var_15 = 123;
    setupFunc0901To0906State(Gvar);
    setupFunc0966State(Gvar);
    global.__NELISP_STATE_DIFF_FLAGS__ = {
      func023: true,
      func024: true,
      func027: true,
      func028: true,
      func029: true,
      func030: true,
      func031: true,
      func033: true,
      func034: true,
      func035: true,
      func036: true,
      func037: true,
      func038: true,
      func039: true,
      func040: true,
      func042: true,
      func062: true,
      func071: true,
      func163b: true,
      func243: true,
      func245: true,
      func293: true,
      func294: true,
      func295: true,
      func296: true,
      func297: true,
      func298: true,
      func299: true,
      func300: true,
      func301: true,
      func302: true,
      func303: true,
      func304: true,
      func305: true,
      func306: true,
      func307: true,
      func308: true,
      func309: true,
      func310: true,
      func311: true,
      func312: true,
      func313: true,
      func314: true,
      func315: true,
      func316: true,
      func317: true,
      func318: true,
      func319: true,
      func320: true,
      func321: true,
      func322: true,
      func265: true,
      func371: true,
      func0900: true,
      func0901: true,
      func0902: true,
      func0903: true,
      func0904: true,
      func0905: true,
      func0906: true,
      func0907: true,
      func0909: true,
      func0911: true,
      func0915: true,
      func0916: true,
      func0917: true,
      func0920: true,
      func0924: true,
      func0926: true,
      func0927: true,
      func0928: true,
      func0933: true,
      func0939: true,
      func0948: true,
      func0950: true,
      func0952: true,
      func0955: true,
      func0956: true,
      func0959: true,
      func0961: true,
      func0962: true,
      func0963: true,
      func0964: true,
      func0965: true,
      func0966: true,
      func0973: true,
      func0974: true,
      func0977: true,
      func0979: true,
      func0981: true,
      func0983: true,
      func0984: true,
      func0987: true,
      func0989: true,
      func0990: true,
      func0991: true,
      func0992: true,
      func0993: true,
      func0999: true,
      func1005: true,
      func205: true,
      func206: true,
      func207: true,
      func217: true,
      func431: true,
      func335: true,
      func336: true,
      func258: true,
      func260: true,
      func261: true,
      func262: true,
      func263: true,
      func264: true,
      func266: true,
      func267: true,
      func268: true,
      func269: true,
      func270: true,
      func271: true,
      func272: true,
      func273: true,
      func274: true,
      func275: true,
      func276: true,
      func277: true,
      func278: true,
                func279: true,
                func280: true,
                func281: true,
                func282: true,
                func283: true,
                func284: true,
                func285: true,
                func286: true,
                func287: true,
                func679: true,
      func386: true,
      func256: true,
      func259: true,
      func194: true,
      func195: true,
      func196: true,
      func477: true,
      func481: true
    };
    global.__NELISP_STATE_DIFF_TRACE__ = (entry) => traces.push(entry);

    assert.strictEqual(generatedGameLogic.shouldUseGeneratedGameFunction("func023"), true);
    generatedGameLogic.resetGeneratedGameFunctionStats();
    await Func.func023();
    await Func.func062();
    assertFunc062State(Gvar);
    setupFunc481State(Gvar);
    await Func.func027();
    await Func.func028();
    await Func.func029();
    await Func.func030();
    await Func.func033();
    await Func.func071();
    await Func.func265();
    await Func.func371();
    await Func.func0901();
    await Func.func0902();
    await Func.func0903();
    await Func.func0904();
    await Func.func0905();
    await Func.func0906();
    await Func.func0907();
    await Func.func0909();
    await Func.func0915();
    await Func.func0917();
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
      Func: Object.assign({}, Func, {
        func0928: recordCall(calls, "func0928")
      })
    };
    await Func.func0927();
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    await Func.func0956();
    await Func.func0959();
    Gvar.var_883 = 2;
    await Func.func0948();
    assert.strictEqual(Gvar.var_3812, 138);
    assert.strictEqual(Gvar.belongings_item_list, 122);
    assert.strictEqual(Gvar.buying_price, 1000);
    assert.strictEqual(Gvar.item_name, "ｱﾇﾋﾞｽ神のDISC");
    Gvar.var_883 = 2;
    await Func.func0950();
    assert.strictEqual(Gvar.var_3812, 28);
    assert.strictEqual(Gvar.var_888, 1);
    assert.strictEqual(Gvar.var_889, "ｾﾄ神の罠");
    Gvar.var_883 = 2;
    Gvar.var_3788 = 0;
    await Func.func0952();
    assert.strictEqual(Gvar.var_3812, 81);
    assert.strictEqual(Gvar.enemy_list, 79);
    assert.strictEqual(Gvar.enemy_name, "ｴｺｰｽﾞの卵");
    setupFunc0966State(Gvar);
    await Func.func0966();
    await Func.func0977();
    await Func.func0981();
    await Func.func0987();
    await Func.func0991();
    Gvar.dungeon_number = 7;
    Gvar.var_3864 = "";
    await Func.func0992();
    await Func.func0993();
    Gvar.var_727 = 90;
    Gvar.var_3922 = 12;
    await Func.func0999();
    await Func.func194();
    await Func.func195();
    await Func.func196();
    await Func.func477();
    await Func.func481();
    const savedVar78ForFunc481 = Gvar.var_78;
    const savedMapStateForFunc265 = {
      var_983: Gvar.var_983,
      var_1082: Gvar.var_1082,
      var_1084: Gvar.var_1084,
      var_1096: Gvar.var_1096,
      var_1098: Gvar.var_1098,
      var_1100: Gvar.var_1100,
      var_1102: Gvar.var_1102
    };
    await Func.func1005();
    await Func.func205();
    await Func.func206();
    await Func.func207();
    Gvar.var_664 = {};
    Gvar.var_692 = 1;
    Gvar.var_693 = 2;
    Gvar.var_694 = 3;
    Gvar.var_695 = 4;
    Gvar.var_696 = 5;
    Gvar.var_697 = 6;
    Gvar.var_698 = 7;
    Gvar.var_699 = 8;
    Gvar.var_700 = 9;
    Gvar.var_701 = 10;
    await Func.func217();
    await Func.func431();
    await Func.func335();
    await Func.func336();
    await Func.func258();
    await Func.func260();
    await Func.func261();
    await Func.func262();
    await Func.func263();
    await Func.func264();
    await Func.func266();
    await Func.func267();
    await Func.func268();
    await Func.func269();
    await Func.func270();
    await Func.func271();
    await Func.func272();
    await Func.func273();
    await Func.func274();
    await Func.func275();
    await Func.func276();
    await Func.func277();
    await Func.func278();
            await Func.func279();
            await Func.func280();
            await Func.func281();
            await Func.func282();
            await Func.func283();
            await Func.func284();
            await Func.func285();
            await Func.func286();
            await Func.func287();
    Gvar.var_78 = { 5: { 0: 0, Var0: 0 } };
    Gvar.var_866 = 5;
    await Func.func386();
    assert.strictEqual(Gvar.var_78[5][0], 641);
    assert.strictEqual(Gvar.var_78[5].Var0, 641);
    await Func.func256();
    assert.strictEqual(Gvar.var_983, "#".repeat(120));
    await Func.func259();
    assert.strictEqual(Gvar.var_983, "#8888888#4.......64.#.#.#.64.......64.#.#.#.64.......64.#.#.#.64.......6#2222222#");
    Gvar.var_78 = savedVar78ForFunc481;
    Object.assign(Gvar, savedMapStateForFunc265);
    assert.deepStrictEqual(calls.map(([name, args]) => [name, args.slice(0, 2)]).slice(0, 61), [
      ["dbgprt", [23]],
      ["dbgprt", [62]],
      ["dbgprt", [27]],
      ["setMessage", ["動けるようになった。", ""]],
      ["AutoDraw", [9]],
      ["dbgprt", [28]],
      ["setMessage", ["透明状態ではなくなった", ""]],
      ["AutoDraw", [9]],
      ["dbgprt", [29]],
      ["setMessage", ["周囲がドロドロではなくなった", ""]],
      ["AutoDraw", [9]],
      ["dbgprt", [30]],
      ["setMessage", ["鈍足状態が治った", ""]],
      ["AutoDraw", [9]],
      ["dbgprt", [33]],
      ["AutoDraw", [2]],
      ["AutoDraw", [2]],
      ["AutoDraw", [5]],
      ["setMessage", ["元通りくっついた", ""]],
      ["AutoDraw", [9]],
      ["dbgprt", [71]],
      ["DSPLAY", [129]],
      ["setMessage", ["だめだ！  もう倒れそうだ！", ""]],
      ["AutoDraw", [10]],
      ["dbgprt", [265]],
      ["dbgprt", [371]],
      ["func372", []],
      ["clrobj", [9, 9]],
      ["objsize", [60]],
      ["pos", [604, 32]],
      ["combox", [3, 100]],
      ["clrobj", [9, 9]],
      ["objsize", [60]],
      ["pos", [604, 32]],
      ["combox", [4, 100]],
      ["clrobj", [9, 9]],
      ["objsize", [60]],
      ["pos", [604, 32]],
      ["combox", [5, 100]],
      ["clrobj", [9, 9]],
      ["objsize", [1]],
      ["pos", [800, 800]],
      ["button", ["ダミー", Func.func0909]],
      ["objsize", [1]],
      ["pos", [800, 800]],
      ["button", ["ダミー", Func.func0909]],
      ["objsize", [1]],
      ["pos", [800, 800]],
      ["button", ["ダミー", Func.func0909]],
      ["clrobj", [13, 13]],
      ["objsize", [100]],
      ["pos", [564, 32]],
      ["combox", [0, 100]],
      ["func0910", []],
      ["objsize", [100]],
      ["pos", [30, 126]],
      ["combox", [8, 100]],
      ["func0928", []],
      ["ShowWindow", [123, 7]],
      ["tcpput", ["話文abc", 7]],
      ["tcpput", ["\n", 7]]
    ]);
    assert.deepStrictEqual(calls.map(([name, args]) => [name, args.slice(0, 2)]).slice(61, 66), [
      ["gsel", [30]],
      ["objprm", [0, ""]],
      ["gsel", [0]],
      ["func426", []],
      ["func427", []]
    ]);
    assert.deepStrictEqual(calls.map(([name]) => name).slice(66, 89), ["func428", "func429", "tcpput", "tcpput", "tcpput", "tcpput", "func0988", "tcpput", "tcpput", "func0988", "tcpput", "tcpput", "dbgprt", "wait", "menuRun", "menuRun", "menuRender", "dbgprt", "setMessage", "AutoDraw", "func009", "dbgprt", "consoleLog"]);
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
      Func: Object.assign({}, Func, {
        func0953: recordCall(calls, "func0953-core-feature")
      })
    };
    Gvar.var_407 = 0;
    Gvar.var_509 = 9;
    Gvar.var_499 = 9;
    await Func.func0984();
    assert.strictEqual(Gvar.var_509, 0);
    assert.strictEqual(Gvar.var_499, 0);
    assert(calls.some(([name]) => name === "func0953-core-feature"));
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    Gvar.var_3863 = "ディアボロはここよーッ！";
    await Func.func0962();
    assert.strictEqual(Gvar.var_3865, "行緑");
    Gvar.var_3863 = "地面に何か書いてある。";
    await Func.func0990();
    assert.strictEqual(Gvar.var_3865, "行茶");
    Gvar.current_floor = 14;
    Gvar.var_66 = 3;
    Gvar.var_67 = 4;
    Gvar.var_73 = { 3: { 4: 2, Var4: 2 } };
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
      Func: Object.assign({}, Func, {
        func0966: async () => undefined,
        func0988: async () => undefined
      })
    };
    await Func.func0963();
    assert.strictEqual(Gvar.var_3864, "行橙ﾃﾞｨｱﾎﾞﾛは14階に上った");
    Gvar.var_494 = { 1: "やっつけた", 2: "モンスターハウスだ！" };
    await Func.func0961();
    assert.strictEqual(Gvar.var_3864, "行水やっつけた");
    assert.strictEqual(Gvar.var_3866, "行黄モンスターハウスだ！");
    Gvar.var_494 = { 1: "やっつけた", 2: "西戸ハウスだ！" };
    await Func.func0989();
    assert.strictEqual(Gvar.var_3864, "行水やっつけた");
    assert.strictEqual(Gvar.var_3866, "行黄西戸ハウスだ！");
    Gvar.var_71 = { 5: { 6: 23, Var6: 23 } };
    Gvar.var_3768 = 5;
    Gvar.var_3769 = 6;
    await Func.func0933();
    assert.strictEqual(Gvar.var_3766, 14);
    Gvar.var_2194 = 7;
    Gvar.var_1050 = 7;
    Gvar.time_paused_count = 0;
    Gvar.time_paused = 0;
    Gvar.var_82 = { 11: { 12: 7, Var12: 7 } };
    Gvar.var_83 = {
      7: {
        0: 31, Var0: 31,
        1: 11, Var1: 11,
        2: 12, Var2: 12,
        3: 13, Var3: 13,
        13: 0, Var13: 0,
        14: 14, Var14: 14,
        15: 15, Var15: 15,
        17: 17, Var17: 17,
        19: 19, Var19: 19,
        20: 20, Var20: 20,
        23: 23, Var23: 23,
        24: 24, Var24: 24,
        30: 30, Var30: 30,
        31: 0, Var31: 0,
        39: 39, Var39: 39
      }
    };
    await Func.func0979();
    assert.strictEqual(Gvar.var_3888, "31,39,13,14,15,17,19,20,23,24,30");
    assert.strictEqual(Gvar.var_3864, "倒敵31,39,13,14,15,17,19,20,23,24,30");
    assert.strictEqual(Gvar.var_82[11][12], 0);
    assert.strictEqual(Gvar.var_83[7].Var0, 0);
    assert.strictEqual(Gvar.var_83[7].Var1, 0);
    assert.strictEqual(Gvar.var_83[7].Var2, 0);
    assert.strictEqual(Gvar.var_3887, 1);
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    Gvar.var_3864 = "行橙ﾃﾞｨｱﾎﾞﾛは絶頂の世界に向かった";
    assert.strictEqual(Gvar.var_459, 0);
    assert.strictEqual(Gvar.var_128, 0);
    assert.strictEqual(Gvar.var_471, 0);
    assert.strictEqual(Gvar.var_240, 0);
    assert.strictEqual(Gvar.var_221, 0);
    assert.strictEqual(Gvar.open_item_menue, 0);
    assert.strictEqual(Gvar.var_231, 0);
    assert.strictEqual(Gvar.var_234, 0);
    assertFunc481State(Gvar);
    assertFunc265State(Gvar);
    assert.deepStrictEqual(Gvar.var_664, {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      Var1: 1,
      Var2: 2,
      Var3: 3,
      Var4: 4,
      Var5: 5,
      Var6: 6,
      Var7: 7,
      Var8: 8,
      Var9: 9,
      Var10: 10
    });
    assert.strictEqual(Gvar.var_755, 0);
    assert.strictEqual(Gvar.var_198, 0);
    assertFunc0901To0906State(Gvar);
    assert.strictEqual(Gvar.var_3560, 8);
    assert.strictEqual(Gvar.var_3573, 0);
    assert.strictEqual(Gvar.var_3820, "話文abc");
    assert.strictEqual(Gvar.var_1678, 3);
    assert.strictEqual(Gvar.var_1679, 1);
    assert.deepStrictEqual(Gvar.var_3819.slice(0, 20), expectedFunc0966Array());
    assert.strictEqual(Gvar.var_3869, 20);
    assert.strictEqual(Gvar.var_3870, expectedFunc0966Text());
    assert.strictEqual(Gvar.var_3867, 1);
    assert.strictEqual(Gvar.var_3868, 1);
    assert.strictEqual(Gvar.var_3864, "行橙ﾃﾞｨｱﾎﾞﾛは絶頂の世界に向かった");
    assert.strictEqual(Gvar.var_3904, "絶頂");
    assert.strictEqual(Gvar.var_3905, "７");
    assert.strictEqual(Gvar.var_3906, "窓数７");
    Gvar.var_83 = { 2: { 13: 9, Var13: 9 } };
    Gvar.var_460 = 2;
    await Func.func024();
    assert.strictEqual(Gvar.var_83[2][13], 0);
    assert.strictEqual(Gvar.var_83[2].Var13, 0);
    Gvar.current_level = 4;
    await Func.func679();
    assert.strictEqual(Gvar.var_950, 11);
    Gvar.var_132 = 0;
    await Func.func031();
    await Func.func034();
    await Func.func035();
    await Func.func036();
    await Func.func037();
    await Func.func038();
    await Func.func039();
    await Func.func040();
    Gvar.var_144 = 9;
    Gvar.var_199 = 9;
    await Func.func042();
    Gvar.var_409 = 2;
    Gvar.var_66 = 3;
    Gvar.var_67 = 4;
    Gvar.var_35 = 40;
    Gvar.var_36 = 50;
    Gvar.var_217 = 0;
    Gvar.var_199 = 3;
    await Func.func163b();
    Gvar.current_floor = 3;
    Gvar.special_floor = 0;
    Gvar.dungeon_number = 4;
    Gvar.var_70 = 0;
    Gvar.var_20 = 9;
    await Func.func243();
    Gvar.dungeon_number = 1;
    Gvar.var_70 = 0;
    await Func.func245();
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
      Func: Object.assign({}, Func, {
        func323: recordCall(calls, "func323-core")
      })
    };
    await Func.func293();
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    await Func.func294();
    await Func.func295();
    await Func.func296();
    await Func.func297();
    await Func.func298();
    await Func.func299();
    Gvar.var_493 = {};
    await Func.func300();
    await Func.func301();
    await Func.func302();
    await Func.func303();
    await Func.func304();
    await Func.func305();
    await Func.func306();
    await Func.func307();
    await Func.func308();
    await Func.func309();
    await Func.func310();
    await Func.func311();
    await Func.func312();
    await Func.func313();
    await Func.func314();
    await Func.func315();
    await Func.func316();
    await Func.func317();
    await Func.func318();
    await Func.func319();
    await Func.func320();
    await Func.func321();
    await Func.func322();
    Gvar.dungeon_number = 11;
    Gvar.current_floor = 9;
    Gvar.var_70 = 9;
    Gvar.font_type = "smoke-font";
    Gvar.var_3593 = 2;
    await Func.func0926();
    Gvar.var_3861 = 399;
    Gvar.var_3862 = "";
    await Func.func0983();
    assert.strictEqual(Gvar.var_3862, "G･E･ﾚｸｲｴﾑのDISC");
    Gvar.var_3559 = 8;
    Gvar.var_3560 = 8;
    Gvar.var_3562 = 0;
    Gvar.y_axis_map_image = 0;
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
      Func: Object.assign({}, Func, {
        func0917: recordCall(calls, "func0917-core"),
        func0911: recordCall(calls, "func0911-core")
      }),
      Adap: Object.assign({}, Adap, {
        objsel: recordCall(calls, "objsel-core")
      })
    };
    await Func.func0916();
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    assert.strictEqual(Gvar.var_3562, 8);
    assert.strictEqual(Gvar.y_axis_map_image, 8);
    await Func.func0955();
    Gvar.dungeon_number = 7;
    Gvar.var_3864 = "";
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
      Func: Object.assign({}, Func, {
        func0966: recordCall(calls, "func0966")
      })
    };
    await Func.func0964();
    await Func.func0973();
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    assert.strictEqual(Gvar.var_3864, "行橙ﾃﾞｨｱﾎﾞﾛは絶頂の世界に向かった");
    Gvar.var_408 = 1;
    Gvar.var_3867 = 1;
    Gvar.var_3868 = 1;
    Gvar.var_1046 = 1;
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
      Func: Object.assign({}, Func, {
        func0973: recordCall(calls, "func0973-core"),
        func0978: recordCall(calls, "func0978-core"),
        func0982: recordCall(calls, "func0982-core"),
        func0976: recordCall(calls, "func0976-core")
      })
    };
    await Func.func0965();
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    assert.strictEqual(Gvar.var_3867, 0);
    assert.strictEqual(Gvar.var_3868, 0);
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
      Func: Object.assign({}, Func, {
        func340: recordCall(calls, "func340-core"),
        func508: recordCall(calls, "func508-core"),
        func019: recordCall(calls, "func019-core")
      })
    };
    await Func.func0974();
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    assert.strictEqual(Gvar.var_3864, "女帝");
    assert.strictEqual(Gvar.var_2254, 0);
    assert.strictEqual(Gvar.var_217, 1);
    Gvar.var_3593 = 0;
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
      Func: Object.assign({}, Func, {
        func0914: recordCall(calls, "func0914"),
        func0919: recordCall(calls, "func0919"),
        func0920: recordCall(calls, "func0920-core"),
        func0912: recordCall(calls, "func0912")
      })
    };
    await Func.func0911();
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    Gvar.var_3563 = 2;
    Gvar.var_3564 = 3;
    Gvar.mousex = 50;
    Gvar.mousey = 60;
    Gvar.var_3565 = 0;
    Gvar.var_3562 = 8;
    Gvar.font_type = "smoke-font";
    Gvar.var_3569 = 3;
    await Func.func0920();
    Gvar.var_31 = 11;
    Gvar.var_32 = 12;
    Gvar.var_637 = 0;
    Gvar.var_640 = 0;
    Gvar.var_3544 = 3;
    Gvar.var_3572 = 0;
    Gvar.var_890 = "enemy-list";
    Gvar.var_874 = "item-list";
    Gvar.var_886 = "trap-list";
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
      Adap: Object.assign({}, Adap, {
        width: recordCall(calls, "width"),
        screen_: recordCall(calls, "screen"),
        SetWindowLongA: recordCall(calls, "setWindowLong"),
        chgdisp: recordCall(calls, "chgdisp")
      }),
      Func: Object.assign({}, Func, {
        func0947: recordCall(calls, "func0947-core"),
        func0949: recordCall(calls, "func0949-core"),
        func0951: recordCall(calls, "func0951-core"),
        func0905: recordCall(calls, "func0905-core"),
        func0915: recordCall(calls, "func0915-core"),
        func0906: recordCall(calls, "func0906-core"),
        func0934: recordCall(calls, "func0934-core"),
        func0910: recordCall(calls, "func0910-core")
      })
    };
    await Func.func0900();
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    Gvar.var_3573 = 1;
    Gvar.var_3636 = 44;
    Gvar.var_3637 = 55;
    Gvar.var_30 = "smoke-dir";
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
      Func: Object.assign({}, Func, {
        func0940: recordCall(calls, "func0940-core"),
        func0929: recordCall(calls, "func0929-core"),
        func0915: recordCall(calls, "func0915-core"),
        func0916: recordCall(calls, "func0916-core"),
        func0910: recordCall(calls, "func0910-core")
      })
    };
    await Func.func0928();
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    Gvar.stat = 7;
    await Func.func0924();
    Gvar.var_3774 = 0;
    Gvar.var_539 = 2;
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
      Func: Object.assign({}, Func, {
        func0900: recordCall(calls, "func0900-core")
      })
    };
    await Func.func0939();
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    assert.deepStrictEqual(traces.map((entry) => entry.name), ["func023", "func062", "func027", "func028", "func029", "func030", "func033", "func071", "func265", "func371", "func0901", "func0902", "func0903", "func0904", "func0905", "func0906", "func0907", "func0909", "func0915", "func0917", "func0927", "func0956", "func0959", "func0948", "func0950", "func0952", "func0966", "func0977", "func0981", "func0987", "func0991", "func0992", "func0993", "func0999", "func194", "func195", "func196", "func477", "func481", "func1005", "func205", "func206", "func207", "func217", "func431", "func335", "func336", "func258", "func260", "func261", "func262", "func263", "func264", "func266", "func267", "func268", "func269", "func270", "func271", "func272", "func273", "func274", "func275", "func276", "func277", "func278", "func279", "func280", "func281", "func282", "func283", "func284", "func285", "func286", "func287", "func386", "func256", "func259", "func0984", "func0962", "func0990", "func0963", "func0962", "func0962", "func0961", "func0990", "func0990", "func0989", "func0933", "func0979", "func024", "func679", "func031", "func034", "func035", "func036", "func037", "func038", "func039", "func040", "func042", "func163b", "func243", "func245", "func293", "func294", "func295", "func296", "func297", "func298", "func299", "func300", "func301", "func302", "func303", "func304", "func305", "func306", "func307", "func308", "func309", "func310", "func311", "func312", "func313", "func314", "func315", "func316", "func317", "func318", "func319", "func320", "func321", "func322", "func0926", "func0983", "func0916", "func0955", "func0964", "func0973", "func0965", "func0974", "func0911", "func0920", "func0900", "func0928", "func0924", "func0939"]);
    assertGeneratedStats(generatedGameLogic.getGeneratedGameFunctionStats());
  } finally {
    console.log = originalConsoleLog;
    for (const restoreOne of restore.reverse()) restoreOne();
    global.__NELISP_STATE_DIFF_FLAGS__ = previousFlags;
    global.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
    global.__NELISP_STATE_DIFF_TRACE__ = previousTrace;
  }
}

function assertGeneratedStats(stats, expectedTotal = 148) {
  assert.strictEqual(stats.total, expectedTotal);
  const expectedByName = {
    func023: 1,
    func024: 1,
    func027: 1,
    func028: 1,
    func029: 1,
    func030: 1,
    func031: 1,
    func033: 1,
    func034: 1,
    func035: 1,
    func036: 1,
    func037: 1,
    func038: 1,
    func039: 1,
    func040: 1,
    func042: 1,
    func062: 1,
    func071: 1,
    func163b: 1,
    func243: 1,
    func245: 1,
    func293: 1,
    func294: 1,
    func295: 1,
    func296: 1,
    func297: 1,
    func298: 1,
    func299: 1,
    func300: 1,
    func301: 1,
    func302: 1,
    func303: 1,
    func304: 1,
    func305: 1,
    func306: 1,
    func307: 1,
    func308: 1,
    func309: 1,
    func310: 1,
    func311: 1,
    func312: 1,
    func313: 1,
    func314: 1,
    func315: 1,
    func316: 1,
    func317: 1,
    func318: 1,
    func319: 1,
    func320: 1,
    func321: 1,
    func322: 1,
    func265: 1,
    func371: 1,
    func0900: 1,
    func0901: 1,
    func0902: 1,
    func0903: 1,
    func0904: 1,
    func0905: 1,
    func0906: 1,
    func0907: 1,
    func0909: 1,
    func0911: 1,
    func0915: 1,
    func0916: 1,
    func0917: 1,
    func0920: 1,
    func0924: 1,
    func0926: 1,
    func0927: 1,
    func0928: 1,
    func0933: 1,
    func0939: 1,
    func0948: 1,
    func0950: 1,
    func0952: 1,
    func0955: 1,
    func0956: 1,
    func0959: 1,
    func0961: 1,
    func0962: 3,
    func0963: 1,
    func0964: 1,
    func0965: 1,
    func0966: 1,
    func0973: 1,
    func0974: 1,
    func0977: 1,
    func0979: 1,
    func0981: 1,
    func0983: 1,
    func0984: 1,
    func0987: 1,
    func0989: 1,
    func0990: 3,
    func0991: 1,
    func0992: 1,
    func0993: 1,
    func0999: 1,
    func1005: 1,
    func205: 1,
    func206: 1,
    func207: 1,
    func217: 1,
    func431: 1,
    func335: 1,
    func336: 1,
    func258: 1,
    func260: 1,
    func261: 1,
    func262: 1,
    func263: 1,
    func264: 1,
    func266: 1,
    func267: 1,
    func268: 1,
    func269: 1,
    func270: 1,
    func271: 1,
    func272: 1,
    func273: 1,
    func274: 1,
    func275: 1,
    func276: 1,
    func277: 1,
    func278: 1,
    func279: 1,
    func280: 1,
    func281: 1,
    func282: 1,
    func283: 1,
    func284: 1,
    func285: 1,
    func286: 1,
    func287: 1,
    func679: 1,
    func386: 1,
    func256: 1,
    func259: 1,
    func194: 1,
    func195: 1,
    func196: 1,
    func477: 1,
    func481: 1
  };
  if (expectedTotal === 139) {
    delete expectedByName.func0933;
    delete expectedByName.func0961;
    delete expectedByName.func0963;
    delete expectedByName.func0979;
    delete expectedByName.func0989;
    expectedByName.func0962 = 1;
    expectedByName.func0990 = 1;
  }
  assert.deepStrictEqual(stats.byName, expectedByName);
  assert.strictEqual(stats.lastName, "func0939");
}

function setupFunc0901To0906State(Gvar) {
  Gvar.data0 = 0;
  Gvar.data1 = 0;
  Gvar.var_3525 = 10;
  Gvar.var_3529 = 10;
  Gvar.var_3553 = 3;
  Gvar.var_3554 = 4;
  Gvar.var_3555 = 5;
  Gvar.var_3574 = 9;
  Gvar.var_3577 = 79;
  Gvar.var_3575 = "";
  Gvar.var_3576 = 0;
}

function assertFunc0901To0906State(Gvar) {
  assert.strictEqual(Gvar.data0, 13);
  assert.strictEqual(Gvar.data1, 13);
  assert.strictEqual(Gvar.var_3574, 0);
  assert.strictEqual(Gvar.var_3575, "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず生まれる\n生まれない");
  assert.strictEqual(Gvar.var_3576, 1);
}

function setupFunc062State(Gvar) {
  Gvar.var_224 = 0;
  Gvar.var_233 = { 1: { 0: 0, Var0: 0 }, 2: { 0: 0, Var0: 0 } };
}

function assertFunc062State(Gvar) {
  assert.strictEqual(Gvar.var_224, 1);
  assert.strictEqual(Gvar.var_233[1][0], 602);
  assert.strictEqual(Gvar.var_233[1].Var0, 602);
}

function setupFunc481State(Gvar) {
  Gvar.var_233 = { 0: { 0: 0, Var0: 0 } };
  Gvar.var_78 = { 4: { 0: 321, Var0: 321 } };
  Gvar.var_2044 = 4;
}

function assertFunc481State(Gvar) {
  assert.strictEqual(Gvar.var_233[0], Gvar.var_78[4]);
  assert.strictEqual(Gvar.var_78[4][0], 1234123);
  assert.strictEqual(Gvar.var_78[4].Var0, 1234123);
}

function assertFunc265State(Gvar) {
  assert.strictEqual(Gvar.var_1096, 5);
  assert.strictEqual(Gvar.var_1098, 5);
  assert.strictEqual(Gvar.var_1100, 3);
  assert.strictEqual(Gvar.var_1102, 3);
  assert.strictEqual(Gvar.var_1082, 7);
  assert.strictEqual(Gvar.var_1084, 5);
  assert.strictEqual(Gvar.var_983, expectedFunc265Map());
}

function setupFunc0966State(Gvar) {
  Gvar.var_1050 = 7;
  Gvar.var_1170 = "tail";
  Gvar.var_211 = 4;
  Gvar.var_233 = {
    1: { 4: 13, Var4: 13 },
    2: { 4: 15, Var4: 15 },
    3: { 4: 18, Var4: 18 },
    4: { 3: 19, Var3: 19 }
  };
  Gvar.var_350 = 8;
  Gvar.var_352 = 3;
  Gvar.var_553 = 1;
  Gvar.var_554 = 2;
  Gvar.var_555 = 3;
  Gvar.var_556 = 4;
  Gvar.var_565 = 6;
  Gvar.var_566 = 5;
  Gvar.var_567 = 7;
  Gvar.var_580 = 14;
  Gvar.var_581 = 17;
  Gvar.bougyo_disc_id = 16;
  Gvar.current_floor = 9;
  Gvar.current_level = 2;
  Gvar.dungeon_number = 11;
  Gvar.kougeki_disc_id = 12;
  Gvar.nouryoku_disc_id = 18;
  Gvar.shageki_disc_id = 1;
  Gvar.sympathy_id = 0;
  Gvar.wallet = 10;
}

function expectedFunc0966Array() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 15, 17, 18, 18, 19];
}

function expectedFunc0966Text() {
  return `捨送,${expectedFunc0966Array().join(",")},tail`;
}

function expectedFunc265Map() {
  return "#88888#4.....64.#.#.64.....6#22222#";
}

function recordCall(calls, name) {
  return (...args) => {
    calls.push([name, args]);
    return undefined;
  };
}

function patchExport(moduleObject, name, replacement) {
  const descriptor = Object.getOwnPropertyDescriptor(moduleObject, name);
  Object.defineProperty(moduleObject, name, {
    configurable: true,
    enumerable: descriptor ? descriptor.enumerable : true,
    value: replacement,
    writable: true
  });
  return () => {
    if (descriptor) {
      Object.defineProperty(moduleObject, name, descriptor);
    } else {
      delete moduleObject[name];
    }
  };
}

function installTypeScriptRequireHook() {
  require.extensions[".ts"] = function loadTsModule(module, filename) {
    const source = fs.readFileSync(filename, "utf8");
    const output = ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
        esModuleInterop: true
      },
      fileName: filename
    }).outputText;
    module._compile(output, filename);
  };
}

function installBrowserMocks() {
  class MediaMock {
    play() { return Promise.resolve(); }
    pause() {}
    load() {}
    addEventListener() {}
    removeEventListener() {}
  }

  const context = {
    arc() {},
    beginPath() {},
    clearRect() {},
    drawImage() {},
    fill() {},
    fillRect() {},
    fillText() {},
    getImageData() { return {}; },
    lineTo() {},
    moveTo() {},
    putImageData() {},
    restore() {},
    rotate() {},
    save() {},
    setTransform() {},
    stroke() {},
    translate() {}
  };

  global.Audio = MediaMock;
  global.Image = class ImageMock {
    constructor() {
      this.style = {};
    }
    addEventListener() {}
    removeEventListener() {}
  };
  global.localStorage = {
    _items: new Map(),
    clear() { this._items.clear(); },
    getItem(key) { return this._items.has(key) ? this._items.get(key) : null; },
    key(index) { return Array.from(this._items.keys())[index] || null; },
    removeItem(key) { this._items.delete(key); },
    setItem(key, value) { this._items.set(String(key), String(value)); }
  };
  global.document = {
    addEventListener() {},
    createElement(tag) {
      return {
        height: 0,
        style: {},
        width: 0,
        addEventListener() {},
        appendChild() {},
        getContext() { return tag === "canvas" ? context : null; },
        removeEventListener() {}
      };
    },
    getElementById() { return null; },
    getElementsByTagName() { return []; }
  };
  global.window = {
    addEventListener() {},
    close() {},
    location: { reload() {} },
    moveTo() {},
    removeEventListener() {},
    resizeTo() {}
  };
  global.fetch = async function fetchMock() {
    return { ok: false, json: async () => ({}) };
  };
}
