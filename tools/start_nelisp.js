#!/usr/bin/env node
/**
 * start_nelisp.js - launch Electron with generated state-diff game logic enabled.
 *
 * The regular app stays on the TypeScript implementation by default. This
 * launcher enables the small set of generated NeLisp/state-diff replacements
 * currently wired through src/renderer/nelisp_bridge/generatedGameLogic.ts.
 */
const { spawn } = require('child_process');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const isWindows = process.platform === 'win32';
const dryRun = process.argv.includes('--dry-run');

const env = {
    ...process.env,
    NELISP_STATE_DIFF_ALL: '1',
};

const command = 'npx';
const args = ['electron', 'public/main/main.js'];

if (dryRun) {
    console.log(JSON.stringify({
        cwd: ROOT,
        command,
        args,
        env: {
            NELISP_STATE_DIFF_ALL: env.NELISP_STATE_DIFF_ALL,
        },
    }, null, 2));
    process.exit(0);
}

console.log('[NELISP] Starting Electron with NELISP_STATE_DIFF_ALL=1');

const proc = spawn(command, args, {
    cwd: ROOT,
    env,
    stdio: 'inherit',
    shell: isWindows,
});

proc.on('error', (err) => {
    console.error('[NELISP] launch failed:', err.message);
    process.exit(1);
});

proc.on('exit', (code, signal) => {
    if (signal) {
        console.log(`[NELISP] Electron exited by signal ${signal}`);
        process.exit(0);
    }
    process.exit(code || 0);
});
