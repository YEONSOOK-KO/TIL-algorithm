// programmers question URL : https://school.programmers.co.kr/learn/courses/30/lessons/181914
// 9로 나눈 나머지

function solution(number) {
    let strArr = [...number];
    let result = 0;
    
    for (let i = 0; i < strArr.length; i++) {
        result = result + Number(strArr[i])
    }
    return result % 9;
}
