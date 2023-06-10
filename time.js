const tips = [
    ['하얀 건 종이요, 까만 건 글씨로다.', '- ?'],
    ['늦었다고 생각할 때가 진짜 너무 늦었다', '- 박명수'],
    ['정신차려 이 각박한 세상 속에서', '- 하동훈'],
    ['이게 뭐 하는 거야 지금', '- 유재석'],
    ['세상은 1등만 기억해', '- 박명수'],
    ['지금 연애하면 인생 망가져요', '- 박명수'],
    ['나오는 건 한숨 뿐', '- 정형돈'],
    ['"집 나오면 개고생"', '- 박명수'],
    ['꼴통이지 꼴통', '- 정준하'],
    ['안 죽는다! 일어나!', '- 에어로빅 선생님'],
    ['진짜 얘는 매를 부른다', '- 박명수'],
    ['생각을 조금만 하면 되는데 그걸 노력을 안 한 거야', '- 정준하']
]

function UpdateTip(element) { 
    var index = Math.floor(Math.random() * tips.length);
    element.innerHTML = `${tips[index][0]} <div style="font-size: 16px;">${tips[index][1]}</div>`
    return null
}

function UpdateTime(element) {
    var now = new Date(Date.now())

    var days = 27 - now.getDate()
    if (days == 0) {
        element.textContent = '내일입니다!'
        return null
    }
    else if (days == -1) {
        element.textContent = '오늘입니다! 힘내세요!'
        return null
    }
    else if (days <= -2) {
        element.textContent = '이미 지났네요.'
        return null
    }
    var hours = 23 - now.getHours()
    var minutes = 59 - now.getMinutes()
    var seconds = 59 - now.getSeconds()
    
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
