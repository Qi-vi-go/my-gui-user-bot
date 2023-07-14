"use strict";
const { app, BrowserWindow, ipcMain, Tray, Menu} = require('electron');
const path = require('path');
let win;
let tray = null;
const createWindow = () => {
    win = new BrowserWindow({
      width: 800,
      height: 600,
      title: 'Qi-vi-go',
      icon: 'tray_icon2.ico',
      frame: false,
      webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true,
        preload: path.join(__dirname, 'preload.js')
      }
    })
  
    win.loadFile('browser/index.html')
    tray = new Tray('tray_icon2.ico');
    tray.setToolTip('Umami Project');
    tray.on("click",()=>{
        win.isVisible()?win.hide():win.show();
    })
    const contextMenu = Menu.buildFromTemplate([
        {
          label: 'Выход',
          click: () => {
            win.close();
          }
        }
      ]);
    tray.setContextMenu(contextMenu);

    win.webContents.openDevTools();
    win.webContents.executeJavaScript(`console.log("Hello from runtime!");`);
  }


app.whenReady().then(() => {
    
    createWindow()
    

  
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

ipcMain.handle('node', async (e, result)=>{
    if(result.method === 'window_control'){
        let btn = result.data;
        let res ={class: btn, btn: null};
        if(btn === 'min-btn'){
            win.hide();//win.minimize();
        } else if (btn === 'max-btn'){
            if(!win.isMaximized()){
                win.maximize();
                res.btn ='MAX';
            }  else {
                win.unmaximize();
                res.btn = 'UNMAX'
            }
        } else if (btn === 'close-btn'){
            win.close();
        } else if(btn = 'resize'){
            if(win.isMaximized()){
                win.maximize();
                res.btn = 'MAX';
            } else {
                win.unmaximize();
                res.btn='UNMAX';
            }
        }
        return res; 
    } 
    
});
