const electron = require('electron');

const counter = require('./counter.js');

const ipc = electron.ipcMain;

const app = electron.app ;
const BrowserWindow = electron.BrowserWindow;

let mainApp;

app.on('ready',_=>{
  mainApp = new BrowserWindow({
    height:400,
    width:400
  })



  mainApp.loadURL(`file://${__dirname}/index.html`)

  mainApp.on('closed',_=>{
    console.log("closed");
    mainApp = null;
  })
})

ipc.on('count-start',_=>{
  counter(count=>{
    mainApp.webContents.send("count-down",count)
  });

})
