const clocktitle = document.querySelector("h2");

function setClock(){
    let nowDay = new Date();

      clocktitle.innerText = `${String(nowDay.getHours()).padStart(2,"0")} : ${String(nowDay.getMinutes()).padStart(2,"0")} : ${String(nowDay.getSeconds()).padStart(2,"0")}`
    }

setClock();
setInterval(setClock, 1000);