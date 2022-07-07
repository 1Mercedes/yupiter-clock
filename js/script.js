const secArr = document.querySelector('.s')
const minArr = document.querySelector('.m')
const hourArr = document.querySelector('.h')
const hourNum = document.querySelector('.hours')
const minNum = document.querySelector('.minutes')

function addZero(number) {
  if(number < 10){
    return '0' + number
  }else{
    return number
  }
}


const time = new Date()
let second = time.getSeconds() * 6
let minute = time.getMinutes() * 6
let hour = time.getHours() * 30

secArr.style.transition = "1s linear transform"
minArr.style.transition = "1s linear transform"
hourArr.style.transition = "1s linear transform"

function clock() {
  

  secArr.style.transform = `rotate(${second}deg)`
  minArr.style.transform = `rotate(${minute}deg)`
  hourArr.style.transform = `rotate(${hour}deg)`

  second += 6
  minute += 6/60
  hour +=6/60/12
  
  
  hourNum.innerHTML = addZero(time.getHours())
  minNum.innerHTML = addZero(time.getMinutes())

  setTimeout(clock, 1000)
}

clock()

const tabsItem = document.querySelectorAll('.tabsItem')
const tabsContentItem = document.querySelectorAll('.tabsContentItem')

function switcher(bosilgan) {
  for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].classList.remove('active')
    tabsContentItem[i].classList.remove('active')
  }

  tabsItem[bosilgan].classList.add('active')
  tabsContentItem[bosilgan].classList.add('active')
}

for (let i = 0; i < tabsItem.length; i++) {
  const item = tabsItem[i]
  item.onclick = () => switcher(i)
}
