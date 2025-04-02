let secondElapsed=0;
let interval= null;

let time=document.getElementById('time');

function setTiming(){
    let minutes=Math.floor(secondElapsed/60)
    let Seconds=Math.floor(secondElapsed % 60)
    if(Seconds<10){
        time.innerHTML=`0${minutes}:0${Seconds}`;

    }
    else{
        
        time.innerHTML=`0${minutes}:${Seconds}`;
    }
}



function timer(){
    secondElapsed++;
    setTiming()
}

function startClock(){
    if(interval){
        stopClock()
    }
    interval =setInterval(timer,1000);
}

function stopClock(){
    clearInterval(interval)
}

function resetClock(){
    stopClock();
    secondElapsed=0;
    setTiming();
}