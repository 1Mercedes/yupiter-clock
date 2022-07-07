const hours = document.querySelector('.stopwatch__hours')
const minutes = document.querySelector('.stopwatch__minutes')
const seconds = document.querySelector('.stopwatch__seconds')
const btn = document.querySelector('.stopwatch__btn')

const go = () => {
  seconds.innerHTML++
  if (seconds.innerHTML >= 60) {
    minutes.innerHTML++
    seconds.innerHTML = 0
  }
  if (minutes.innerHTML >= 60) {
    hours.innerHTML++
    minutes.innerHTML = 0
  }
}
let intervalID
const stopBtn = () => {
  if (btn.innerHTML === 'start') {
    intervalID = setInterval(go, 1000)
    btn.innerHTML = 'stop'
  } else if (btn.innerHTML === 'stop') {
    btn.innerHTML = 'clear'
    clearInterval(intervalID)
  } else if (btn.innerHTML === 'clear') {
    hours.innerHTML = 0
    minutes.innerHTML = 0
    seconds.innerHTML = 0
    btn.innerHTML = 'start'
  }
}

btn.onclick = stopBtn
