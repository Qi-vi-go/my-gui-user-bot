const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('node', {
    w_node: (data)=>ipcRenderer.invoke('node', data)
});