const { contextBridge, ipcRenderer } = require('electron');

// Expose only the APIs you need
contextBridge.exposeInMainWorld('electronAPI', {
  sendToMain: (channel, data) => ipcRenderer.send(channel, data),
  receiveFromMain: (channel, callback) =>
    ipcRenderer.on(channel, (event, ...args) => callback(...args))
  // Add more APIs as needed
}); 