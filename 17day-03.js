// programmers 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181879
// 문제 : 길이에 따른 연산

function solution(num_list) {
    var answer = 0;
    
    return num_list.length >= 11 ? num_list.reduce((acc, cur) => acc + cur) : num_list.reduce((acc, cur) => acc * cur);
}