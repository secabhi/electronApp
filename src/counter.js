module.exports = function counter(tick) {
  let count = 10;

  let timer = setInterval(_=>{
    tick(count--);
    console.log(count);
    if(count === -1){
      clearInterval(timer);
    }
  },1000)
}