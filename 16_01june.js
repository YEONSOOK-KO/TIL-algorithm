// programmers question URL : https://school.programmers.co.kr/learn/courses/30/lessons/181939
// 더 크게 합치기

function solution(a, b) {
    let aPlusB = String(a) + String(b)
    let bPlusA = String(b) + String(a)
    
    if (Number(aPlusB) > Number(bPlusA)) {
        return Number(aPlusB)
    } else {
        return Number(bPlusA)
    }
}

// Math.max 사용
// if문 대신 삼항연산자 가능
// String() 대신 toString() 가능