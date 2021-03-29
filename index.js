let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let cron;

let btnStart = document.querySelector('.btn-start');
let btnPause = document.querySelector('.btn-pause');
let btnReset = document.querySelector('.btn-reset');
let runTime = document.querySelector('.run-time');

btnStart.addEventListener('click', function() {
  start();
});

btnPause.addEventListener('click', function() {
  pause();
});

btnReset.addEventListener('click', function() {
  reset();
});

function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.querySelector('.hour').innerText = '00';
  document.querySelector('.minute').innerText = '00';
  document.querySelector('.second').innerText = '00';
  document.querySelector('.millisecond').innerText = '000';
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.querySelector('.hour').innerText = returnData(hour);
  document.querySelector('.minute').innerText = returnData(minute);
  document.querySelector('.second').innerText = returnData(second);
  document.querySelector('.millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
  return input > 10 ? input : `0${input}`
}
