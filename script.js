let clock = document.getElementById('clock')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let ampm = document.getElementById('am-pm')
let date = document.getElementById('date');

let format12Hr = document.getElementById('12-h')
let format24Hr = document.getElementById('24-h')
let format = '12'

format12Hr.addEventListener('click', () => {
    hours.style.width = "18%"
    format = '12'
    ampm.style.display = 'block'
    format12Hr.style.display = 'none'
    format24Hr.style.display = 'block'
})
format24Hr.addEventListener('click', () => {
    hours.style.width = "26.5%"
    format = '24'
    ampm.style.display = 'none';
    format12Hr.style.display = 'block'
    format24Hr.style.display = 'none'
})

const displayTime = (h, m, s) => {
    if (format == "12") {
        if (h > 12) {
            h = h - 12
            hours.innerHTML = h
            minutes.innerHTML = m
            seconds.innerHTML = s
            ampm.innerHTML = "PM"
        } else {
            if (h == 0) {
                hours.innerHTML = '12'
                minutes.innerHTML = m
                seconds.innerHTML = s
                ampm.innerHTML = "AM"
            } else {
                hours.innerHTML = h
                minutes.innerHTML = m
                seconds.innerHTML = s
                ampm.innerHTML = "AM"
            }
        }
    } else {
        if (h >= 10) {
            hours.innerHTML = h
            minutes.innerHTML = m
            seconds.innerHTML = s
        } else {
            hours.innerHTML = "0" + h
            minutes.innerHTML = m
            seconds.innerHTML = s
        }
    }
}
setInterval(function setTime1() {
    let d = new Date()
    let h = d.getHours();
    let m = d.getMinutes()
    let s = d.getSeconds()
    if (s <= 9) {
        s = "0" + s
    }
    if (m <= 9) {
        m = "0" + m
    }

    displayTime(h, m, s)
    date.innerHTML = d.getDate() + " / " + d.getMonth() + 1 + ' / ' + d.getFullYear()

}, 1000);