// programmers question URL : https://school.programmers.co.kr/learn/courses/30/lessons/181935
// 홀짝에 따라 다른 값 반환하기

function solution(n) {
    let resultOdd = [];
    let resultEven = [];
    
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            resultOdd.push(i)
        } else {
            resultEven.push(i**2)
        }
    }
    
    add = function(arr) {
    return arr.reduce((a, b) => a + b, 0);
    };
    
    if (n % 2 !== 0) {
        return add(resultOdd);
    } else {
        return add(resultEven);
    }
}