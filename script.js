var hr = 0;
var min = 0;
var sec = 0;
var milliSec = 0;
var timer = false;

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');
const recordButton = document.querySelector('#record');
const clearButton = document.querySelector('#clear')

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
recordButton.addEventListener('click', record);
clearButton.addEventListener('click', clearAll);

const hour = document.getElementById('hrs')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const milliSeconds = document.getElementById('mili-sec')

function clearAll (event){
    const recordData = document.querySelector('.record-data');
    const list = document.querySelector('.record');
    recordData.style.display = 'none';
    list.innerHTML = '';
}

function start(event){
    if (timer){
        return;
    }
    timer = true;
    stopwatch();
}
function stop(){
    timer = false;
}
function reset(){
    milliSec = 0;
    sec = 0;
    min = 0;
    hr = 0;
    hour.innerHTML = '00';   
    minutes.innerHTML = '00';   
    seconds.innerHTML = '00';   
    milliSeconds.innerHTML = '00';   
}
function stopwatch (){
    if (timer == true){
        milliSec = milliSec+1;
        if (milliSec<10){
            milliSeconds.innerHTML = '0' + milliSec;
        }
        if (milliSec > 9){
            milliSeconds.innerHTML = milliSec
        }
        if(milliSec == 100){
            milliSec = 0;
            sec = sec+1;
        }
        if (sec < 10){
            seconds.innerHTML = '0' + sec;
        }
        if (sec > 9){
            seconds.innerHTML = sec;
        }
        if (sec == 60){
            min = min+1;
            sec = 0;
        }
        if (min < 10){
            minutes.innerHTML = '0' + min;
        }
        if (min > 9){
            minutes.innerHTML = min;
        }
        if (min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        if (hr < 10){
            hour.innerHTML = '0' + hr;
        }
        if (hr > 9){
            hour.innerHTML = hr;
        }
        setTimeout ('stopwatch()', 10);
    }
}
function record (){
    const recordData = document.querySelector('.record-data');
    const buttonBox = document.querySelector('.btn-box');
    const btn = document.querySelector('.clear');
    const list = document.querySelector('.record');
    recordData.style.display = 'flex';
    btn.style.justifySelf = 'end';
    buttonBox.style.position = 'relative';
    const data = document.createElement('li');
    data.classList.add('data');
    data.innerHTML = hour.innerHTML + ':' + minutes.innerHTML + ':' + seconds.innerHTML + ':' + milliSeconds.innerHTML;
    list.appendChild(data);
}