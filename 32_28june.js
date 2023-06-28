// programmers question URL : https://school.programmers.co.kr/learn/courses/30/lessons/181882
// 조건에 맞게 수열 변환하기 1

function solution(arr) {
    let result = []
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 50 && arr[i] % 2 === 0) {
            result.push(arr[i] / 2)
        } else if (arr[i] < 50 && arr[i] % 2 !== 0) {
            result.push(arr[i] * 2)
        } else {
            result.push(arr[i])
        }
    }
    return result;
}