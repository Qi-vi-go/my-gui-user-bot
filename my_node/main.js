"use strict";
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
let win_link;
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      title: 'Qi-vi-go',
      frame: false,
      webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true,
        preload: path.join(__dirname, 'preload.js')
      }
    })
  
    win.loadFile('./../browser/index.html')
    win_link = win;
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
            win_link.minimize();
        } else if (btn === 'max-btn'){
            if(!win_link.isMaximized()){
                win_link.maximize();
                res.btn ='MAX';
            }  else {
                win_link.unmaximize();
                res.btn = 'UNMAX'
            }
        } else if (btn === 'close-btn'){
            win_link.close();
        } else if(btn = 'resize'){
            if(win_link.isMaximized()){
                win_link.maximize();
                res.btn = 'MAX';
            } else {
                win_link.unmaximize();
                res.btn='UNMAX';
            }
        }
        return res; 
    } 
    
});
