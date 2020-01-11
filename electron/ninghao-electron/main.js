// 入口文件  packjson已配置
const {app,BrowserWindow, ipcMain } = require('electron');

ipcMain.on('greet', (event, args) => {
  console.log(args);
  event.sender.send('greet',{
    message: 'hi renderer!'
  })
})
// electron 内置了窗口
//让 electron 支持热更新
require('electron-reload')(_dirname, {
  electron: path.join(_dirname, 'node_modules','.bin','electron')
});

const path = require('path');
let win;//窗口

const createWindow = () => {
  win = new BrowserWindow({
    width: 960,
    height: 600,
    minWidth: 830,
    minHeight: 500,
    backgroundColor: '#f8f8f8',
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadURL(`file://${__dirname}/main.html`);
}

app.on('ready', createWindow)