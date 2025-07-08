const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs').promises; // Use promises API for async/await

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });
  win.loadFile(path.join(__dirname, 'public', 'index.html'));

  // Window controls
  ipcMain.on('window-minimize', () => win.minimize());
  ipcMain.on('window-maximize', () => win.isMaximized() ? win.unmaximize() : win.maximize());
  ipcMain.on('window-close', () => win.close());
}

// File System APIs
ipcMain.handle('save-file', async (_event, filePath, content) => {
  await fs.writeFile(filePath, content, 'utf8');
  return true;
});
ipcMain.handle('load-file', async (_event, filePath) => {
  return await fs.readFile(filePath, 'utf8');
});

// Dialog APIs
ipcMain.handle('show-open-dialog', async (_event, options) => {
  const result = await dialog.showOpenDialog(options);
  return result;
});
ipcMain.handle('show-save-dialog', async (_event, options) => {
  const result = await dialog.showSaveDialog(options);
  return result;
});

// User Data Path
ipcMain.handle('get-user-data-path', () => {
  return app.getPath('userData');
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
}); 