// programmers question URL : https://school.programmers.co.kr/learn/courses/30/lessons/181929
// 원소들의 곱과 합

function solution(num_list) {
    const add = num_list.reduce((a, b) => a + b, 0);
    const multy = num_list.reduce((a, b) => a * b);

    if (add**2 > multy) {
        return 1
    }
    else {
        return 0
    }
}