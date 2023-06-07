const examination = 1687878000000
const tips = [
    ['굳은 결심은 가장 유용한 지식이다.', '- 나폴레옹'],
    ['10분뒤와 10년 후를 동시에 생각하라.', '- 피터 드리커'],
    ['성공을 확신하는 것이 성공의 첫걸음이다.', '- 로버트 슐러'],
    ['사람은 스스로 운명을 만든다.', '- 세네카'],
    ['일을 하는데 있어서 언제 시작할까 생각하는 것은 그만큼 때를 늦추는 것이다.', '- 칼라일'],
    ['실패란 보다 현명하게 다시 시작할 수 있는 기회다.', '- 헨리포드'],
    ['고뇌에 지는 것은 수치가 아니다. 쾌락에 지는 것이야말로 수치다.', '- 파스칼'],
    ['고통을 주지 않는 것은 쾌락도 주지 않는다.', '- 몽테뉴'],
    ['보리가 싹을 틔우기 위해서 씨는 죽어야 한다.', '- 간디'],
    ['오늘 할 수 있는 일에 최선을 다해라.', '- 뉴턴'],
    ['부지런하면 재물이 생기고 아끼면 가난하지 않다.', '- 이익'],
    ['사람에게 필요한 것은 행동이다.', '- 브론테']
]

function change_text(element, text) {
    element.textContent = text
    return null
}

function change_innerhtml(element, text) {
    element.innerHTML = text
    return null
}

function update_tip(element) {
    var index = Math.floor(Math.random() * tips.length);
    return change_innerhtml(element, `<div id="Tip" style="font-size: 23px;">${tips[index][0]} <sub>${tips[index][1]}</sub></div>`)
}

function update_time(element) {
    var now = Date.now()

    var days = (examination - now) / (1000 * 60 * 60 * 24)    
    if (Math.ceil(days) == 1) {
        return change(element, '내일입니다!')
    }
    else if (Math.ceil(days) == 0) {
        return change(element, '오늘입니다! 힘내세요!')
    }
    var hours = Math.abs((examination - now) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    var minutes = Math.abs((examination - now) % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) / (1000 * 60))
    var seconds = Math.abs((examination - now) % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) % (1000 * 60) / 1000)
    
    return change_text(element, `${Math.ceil(days)}일 ${Math.ceil(hours)}시간 ${Math.ceil(minutes)}분 ${seconds.toFixed(2)}초`)
}   

function initialise() {
    const remaining = document.getElementById('Remaining')
    const tip = document.getElementById('Tip')
    update_tip(tip)
    update_time(remaining)
    setInterval(update_tip, 5000, tip)
    setInterval(update_time, 1, remaining)
    return null
}