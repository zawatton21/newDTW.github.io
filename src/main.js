// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 340,
    height: 340, //Windows版は350, mac版は340
    useContentSize: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  }
)
  // document.addEventListener('keypress', keypress_ivent)
  
  // Aspect ratio works on Windows, Linux, and Mac:
  mainWindow.setAspectRatio(340 / 340)
  
  // メニューバーを非表示
  mainWindow.setMenuBarVisibility(false)

  // and load the index.html of the app.
  mainWindow.loadFile('src/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  alert(path.join(process.resourcePath, 'data', "se/" + file_name))
  
// https://1-notes.com/javascript-addeventlistener-key-ivent/
// https://uxmilk.jp/28500#:~:text=%E7%94%BB%E9%9D%A2%E3%82%B5%E3%82%A4%E3%82%BA%E3%82%92%E5%A4%89%E6%9B%B4%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95&text=window.resizeBy(width%2C%20height)%3B,%E8%8B%B1%E6%95%B0%E5%AD%97%E3%81%A7%E5%85%A5%E3%82%8C%E3%81%BE%E3%81%99%E3%80%82
/*
  if (pushing_key_list[112] == 1) {
    alert(key_id);
    mainWindow.unmaximize();
    mainWindow.setSize(1180, 650, false);
  }
*/

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
