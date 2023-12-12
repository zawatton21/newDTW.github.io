const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let colorPickerWindow: any; // カラーピッカーウィンドウの参照を保持する変数


const createWindow = () => {
  // Create the browser window.
  //レンダラー読み出し部分
  const mainWindow = new BrowserWindow({
    width: 340,
    height: 365, // macは340/365, windowsは 330/370
    // ウィンドウの最小サイズ
    minWidth: 340,
    minHeight: 365, // macは340/365, windowsは 330/370
    resizable: false, //　ウィンドウのリサイズを禁止
    webPreferences: {
      //preload: path.join(__dirname, 'preload.js'),//<--ファイルを指定。ここでは同一階層にあるpreload.js
      contextIsolation: false,//<--requireを渡すために必要な設定
      nodeIntegration: true,
    }
  }
)
  // Aspect ratio works on Windows, Linux, and Mac:
  mainWindow.setAspectRatio(340 / 340); // macは340/340、windowsは 320/334
  
  // and load the index.html of the app.
  // electronでアプリをビルドする時はこちらを有効
  //mainWindow.loadFile(path.join(__dirname, 'public/index.html'));
  // electronでの検証用
  mainWindow.loadFile('../index.html');
  
  mainWindow.setMenuBarVisibility(false); // メニューバーを非表示
  // mainWindow.setMenuBarVisibility(true); // メニューバーを表示
  // ウィンドウの最小サイズ
  //mainWindow.setMinimumSize(345, 360);
  // Open the DevTools.
  //mainWindow.webContents.openDevTools()
  //ipcMain.on('resize-me-please', (event, arg) => {
  //  mainWindow.setSize(680, 680);
  // レンダリングの準備が完了するのを待ってからウィンドウを表示する
  mainWindow.once('ready-to-show', () => mainWindow.show());
  //})
  // カラーピッカーウィンドウを開くためのリスナー
  ipcMain.on('show-color-picker', () => {
    if (colorPickerWindow) {
      colorPickerWindow.focus();
      return;
    }

    colorPickerWindow = new BrowserWindow({
      //frame: false, // ウィンドウの閉じるボタン等非表示
      width: 340,
      height: 340,
      resizable: false, //　ウィンドウのリサイズを禁止
      webPreferences: {
        contextIsolation: false,
        nodeIntegration: true,
      }
    });

    colorPickerWindow.loadFile('../colorPicker.html');
    
    colorPickerWindow.on('closed', () => {
      colorPickerWindow = null;
      
      // カラーピッカーウィンドウが閉じられたので、レンダラープロセスにイベントを送信
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('color-picker-closed');
      }
    });
    
  });

  ipcMain.on('color-selected', (event, color) => {
    if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('color-changed', color);
    }
});
 
  
  // カラーピッカーウィンドウが閉じるべき時にリッスンする
  ipcMain.on('close-color-picker', () => {
    console.log('show-color-picker event triggered');
    if (colorPickerWindow) {
        colorPickerWindow.close();
    }
  });

  
};

app.whenReady().then(() => {
createWindow();

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
});

app.on('window-all-closed', () => {
if (process.platform !== 'darwin') app.quit();
});