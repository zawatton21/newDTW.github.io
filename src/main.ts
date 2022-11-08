// main.js
// Modules to control application life and create native browser window
//const { app, BrowserWindow } = require('electron')
//const path = require('path')
import { app, BrowserWindow } from 'electron';
import * as path from 'path';



const createWindow = () => {
  // Create the browser window.
  //レンダラー読み出し部分
  mainWindow = new BrowserWindow({
    width: 340,
    height: 350, // macは318/348, windowsは 300/350
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),//<--ファイルを指定。ここでは同一階層にあるpreload.js
      contextIsolation: true,//<--requireを渡すために必要な設定
      nodeIntegration: false,
    }
  }
)

  // Aspect ratio works on Windows, Linux, and Mac:
  mainWindow.setAspectRatio(340 / 350); // macは340/340、windowsは 320/330
  
  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
  
  // メニューバーを非表示
  mainWindow.setMenuBarVisibility(false)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.