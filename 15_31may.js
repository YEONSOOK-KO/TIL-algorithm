// programmers question URL : https://school.programmers.co.kr/learn/courses/30/lessons/181940
// 문자열 곱하기

function solution(my_string, k) {
    let result = [];
    
    for (let i = 0; i < k; i++) {
        result.push(my_string);
    }
    return result.join('')
}

// cleaner one :

// function solution(my_string, k) {
//     return my_string.repeat(k)
// }