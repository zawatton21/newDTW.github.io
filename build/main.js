<<<<<<< HEAD
"use strict";
exports.__esModule = true;
// main.js
// Modules to control application life and create native browser window
//const { app, BrowserWindow } = require('electron')
//const path = require('path')
var electron_1 = require("electron");
var path = require("path");
var createWindow = function () {
    // Create the browser window.
    //レンダラー読み出し部分
    var mainWindow = new electron_1.BrowserWindow({
        width: 340,
        height: 350,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false
        }
    });
    // Aspect ratio works on Windows, Linux, and Mac:
    mainWindow.setAspectRatio(340 / 350); // macは340/340、windowsは 320/330
    // and load the index.html of the app.
    mainWindow.loadFile('index.html');
    // メニューバーを非表示
    mainWindow.setMenuBarVisibility(false);
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
};
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.whenReady().then(function () {
    createWindow();
    electron_1.app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
=======
"use strict";
exports.__esModule = true;
// main.js
// Modules to control application life and create native browser window
//const { app, BrowserWindow } = require('electron')
//const path = require('path')
var electron_1 = require("electron");
var path = require("path");
var ipcMain = require('electron').ipcMain;
var createWindow = function () {
    // Create the browser window.
    //レンダラー読み出し部分
    var mainWindow = new electron_1.BrowserWindow({
        width: 340,
        height: 360,
        resizable: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false
        }
    });
    // Aspect ratio works on Windows, Linux, and Mac:
    //mainWindow.setAspectRatio(365 / 360); // macは340/340、windowsは 320/330
    // and load the index.html of the app.
    mainWindow.loadFile('index.html');
    // メニューバーを非表示
    mainWindow.setMenuBarVisibility(false);
    // ウィンドウの最小サイズ
    mainWindow.setMinimumSize(345, 360);
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
    ipcMain.on('resize-me-please', function (event, arg) {
        mainWindow.setSize(680, 680);
    });
};
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.whenReady().then(function () {
    createWindow();
    electron_1.app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
>>>>>>> 91b5312d4bca2496d5be412c7c9c998aef9dd186
//# sourceMappingURL=main.js.map