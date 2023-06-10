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

function UpdateTip(element) {
    var index = Math.floor(Math.random() * tips.length);
    element.innerHTML = `${tips[index][0]} <div style="font-size: 16px;">${tips[index][1]}</div>`
    return null
}

function UpdateTime(element) {
    var now = Date.now()
    now = new Date(now)

    var days = 27 - now.getDate()
    if (days == 1) {
        element.textContent = '내일입니다!'
        return null
    }
    else if (days == 0 || days == -1) {
        element.textContent = '오늘입니다! 힘내세요!'
        return null
    }
    else if (days < -1) {
        element.textContent = '이미 지났네요.'
        return null
    }
    var hours = 23 - now.getHours()
    var minutes = 60 - now.getMinutes()
    var seconds = 60 - now.getSeconds()
    
    element.textContent = `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`
    return null
}   

function Initialize() {
    const remaining = document.getElementById('Remaining')
    const tip = document.getElementById('Tip')
    UpdateTip(tip)
    UpdateTime(remaining)
    setInterval(UpdateTip, 10000, tip)
    setInterval(UpdateTime, 1000, remaining)
    return null
}
