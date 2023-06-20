// programmers question URL : https://school.programmers.co.kr/learn/courses/30/lessons/181930
// 주사위 게임 2

function solution(a, b, c) {
    let result = 0
    let abc = a + b + c
    let aabbcc = a**2 + b**2 + c**2
    let aaabbbccc = a**3 + b**3 + c**3
    
    if (a !== b && b !== c && c !== a) {
        result = abc
    } else if (a === b && b === c && c === a) {
        result = abc * aabbcc * aaabbbccc
    } else {
        result = abc * aabbcc
    }
    
    return result
}