
const electron = require('electron');

const ipc = electron.ipcRenderer;

document.getElementById('start').addEventListener('click',_=>{
  ipc.send('count-start');
})

ipc.on("count-down",(evt,count)=>{
  document.getElementById('count').innerHTML = count;
})
