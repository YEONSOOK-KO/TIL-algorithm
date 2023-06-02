// programmers question URL : https://school.programmers.co.kr/learn/courses/30/lessons/181938
// 두 수의 연산자 비교하기

function solution(a, b) {
    let aPlusB = String(a) + String(b)
    let doubleAB = 2 * a * b
    
    if (Number(aPlusB) === doubleAB || Number(aPlusB) > doubleAB) {
        return Number(aPlusB)
    } else {
        return doubleAB
    }
}

// another best answer : 
// have to study : parseInt

// function solution(a, b) {
//     let num1 = parseInt(a+""+b+"");
//     let num2 = 2*a*b;
//     return num1 > num2 ? num1 : num2;
// }