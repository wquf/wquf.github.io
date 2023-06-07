const examination = 1687878000000

function update(element) {
    var now = Date.now()
    var days = (examination - now) / (1000 * 60 * 60 * 24)
    if (Math.ceil(days) == 1) {
        element.textContent = "내일 시험이네요!"
        return null
    }
    else if (Math.ceil(days) == 0) {
        element.textContent = "오늘 시험이네요!"
        return null
    }
    var hours = (examination - now) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)
    if (hours < 0) hours *= -1
    var minutes = (examination - now) % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) / (1000 * 60)
    if (minutes < 0) minutes *= -1
    var seconds = (examination - now) % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) % (1000 * 60) / 1000
    if (seconds < 0) seconds *= -1
    element.textContent = `${Math.ceil(days)}일 ${Math.ceil(hours)}시간 ${Math.ceil(minutes)}분 ${seconds.toFixed(2)}초`
    return null
}   

function initialise() {
    const remaining = document.getElementById('Remaining')
    return setInterval(update, 1, remaining)
}
