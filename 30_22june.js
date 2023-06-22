// programmers question URL :
// 조건에 맞게 수열 변환하기 3


// 가장 쉬운 방법
function solution(arr, k) {
    let result = []
    
    for (let i = 0; i < arr.length; i++) {
        if (k % 2 === 0) {
            result.push(arr[i] + k)
        } else {
            result.push(arr[i] * k)
        }
    }
    return result;
}

// map사용
function solution(arr, k) {
    
    let result = k % 2 === 0 ? arr.map((el) => el + k) : arr.map((el) => el * k);
    
    return result;
}