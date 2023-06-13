// programmers quesiton URL : https://school.programmers.co.kr/learn/courses/30/lessons/181926
// 수 조작하기 1

function solution(n, control) {
    let result = n
    const arr = control.split("")
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'w') {
            result = result + 1;
        } else if (arr[i] === 's') {
            result = result - 1;
        } else if (arr[i] === 'd') {
            result = result + 10;
        } else if (arr[i] === 'a') {
            result = result - 10;
        }
    }
    return result;
}