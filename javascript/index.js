const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes()
  printSeconds()
}

function printMinutes() {
  minDecElement.innerHTML = Math.floor(chronometer.getMinutes() / 10)
  minUniElement.innerHTML = Math.floor(chronometer.getMinutes() % 10)
}

function printSeconds() {
  secDecElement.innerHTML = Math.floor(chronometer.getSeconds() / 10)
  secUniElement.innerHTML = Math.floor(chronometer.getSeconds() % 10)
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  // REALLY
  splitsElement.appendChild(document.createElement('li'))
  splitsElement.lastChild.innerHTML = chronometer.split()
}

function clearSplits() {
  // ... your code goes here
  // REALLY
  splitsElement.innerHTML = ''
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  const classesLeft = btnLeftElement.classList
  const classesRight = btnRightElement.classList
  const result = classesLeft.toggle('stop')
  classesLeft.toggle('start')
  classesRight.toggle('split')
  classesRight.toggle('reset')

  if(result) {
    btnLeftElement.innerHTML = 'STOP'
    btnRightElement.innerHTML = 'SPLIT'
    chronometer.start(printTime)
  } else {
    btnLeftElement.innerHTML = 'START'
    btnRightElement.innerHTML = 'RESET'
    chronometer.stop()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  const classesRight = btnRightElement.classList
  if (classesRight.contains('reset')) {
    chronometer.reset()
    clearSplits()
    minDecElement.innerHTML = 0
    minUniElement.innerHTML = 0
    secDecElement.innerHTML = 0
    secUniElement.innerHTML = 0

  } else {
    printSplit()
  }
});