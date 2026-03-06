const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('appInfo', {
  name: 'Slopad',
  electron: process.versions.electron
})
