#!/usr/bin/env node
"use strict";

const fs = require("fs");
const msgpack = require("msgpack-lite");

const filePath = "C:/Users/kuroz/newDTW/00.dat";
const buf = fs.readFileSync(filePath);
const data = msgpack.decode(buf);

function hexLine(bytes, offset) {
  const slice = bytes.subarray(offset, Math.min(offset + 16, bytes.length));
  const hex = Array.from(slice, (b) => b.toString(16).padStart(2, "0")).join(" ");
  return `${offset.toString(16).padStart(4, "0")}: ${hex}`;
}

const report = {
  file: filePath,
  bytes: buf.length,
  hexdump256: Array.from({ length: Math.ceil(Math.min(256, buf.length) / 16) }, (_, i) => hexLine(buf, i * 16)),
  keys: Object.keys(data),
  values: {
    key0: data[0],
    key100: data[100],
    key200_index10: data[200][10],
    key1000_index1: data[1000][1],
    key1500_index10: data[1500][10]
  }
};

process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
