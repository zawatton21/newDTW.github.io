'use strict';

const fs = require('fs');
const net = require('net');

const DEFAULT_PORT = 9099;
const MESSAGE_X = 30;
const MESSAGE_Y = 240;
const MESSAGE_WIDTH = 300;
const MESSAGE_HEIGHT = 60;

function usage() {
  console.error('Usage: node tools/nelisp_sumi_feed.js <frame.json> [port]');
  process.exit(1);
}

function readRecords(pathname) {
  const input = fs.readFileSync(pathname, 'utf8');
  const line = input.split(/\r?\n/).find((entry) => entry.startsWith('['));
  if (!line) {
    throw new Error('No JSON line starting with "[" was found in the input file.');
  }
  const records = JSON.parse(line);
  if (!Array.isArray(records)) {
    throw new Error('Parsed JSON is not an array.');
  }
  return records;
}

function textLines(record) {
  const lines = [];
  if (typeof record.text === 'string' && record.text !== '') {
    lines.push(record.text);
  }
  if (typeof record.text2 === 'string' && record.text2 !== '') {
    lines.push(record.text2);
  }
  return lines;
}

function expandMessage(record) {
  const lines = textLines(record);
  const expanded = [
    { name: 'gui-set-color', nums: [16, 16, 48] },
    {
      name: 'gui-fill-rect',
      nums: [
        MESSAGE_X,
        MESSAGE_Y,
        MESSAGE_X + MESSAGE_WIDTH,
        MESSAGE_Y + MESSAGE_HEIGHT,
      ],
    },
    { name: 'gui-set-color', nums: [255, 255, 255] },
    { name: 'gui-set-font', nums: [12] },
  ];
  for (let i = 0; i < lines.length; i += 1) {
    expanded.push({
      name: 'gui-set-position',
      nums: [MESSAGE_X + 8, MESSAGE_Y + 18 * (i + 1)],
    });
    expanded.push({
      name: 'gui-draw-text',
      nums: [],
      text: lines[i],
    });
  }
  return expanded;
}

function transformRecords(records) {
  const out = [];
  for (const record of records) {
    if (!record || typeof record !== 'object') {
      out.push(record);
      continue;
    }
    if (record.name === 'gui-present') {
      continue;
    }
    if (record.name === 'game-set-message') {
      out.push(...expandMessage(record));
      continue;
    }
    out.push(record);
  }
  return out;
}

function sendTwice(port, payload) {
  return new Promise((resolve, reject) => {
    const socket = net.createConnection({ host: '127.0.0.1', port });
    let settled = false;

    function fail(message) {
      if (settled) {
        return;
      }
      settled = true;
      reject(new Error(message));
    }

    socket.on('connect', () => {
      socket.write(payload);
      setTimeout(() => {
        socket.write(payload);
        socket.end();
      }, 300);
    });

    socket.on('error', (error) => {
      fail(`Connection failed to 127.0.0.1:${port}: ${error.message}`);
    });

    socket.on('close', (hadError) => {
      if (settled || hadError) {
        return;
      }
      settled = true;
      resolve();
    });
  });
}

async function main() {
  const [, , framePath, portArg] = process.argv;
  if (!framePath) {
    usage();
  }
  const port = portArg === undefined ? DEFAULT_PORT : Number(portArg);
  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    throw new Error(`Invalid port: ${portArg}`);
  }

  const records = transformRecords(readRecords(framePath));
  const payload = `${JSON.stringify(records)}\n`;
  await sendTwice(port, payload);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
