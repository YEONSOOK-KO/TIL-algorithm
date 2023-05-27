// programmer question URL : https://school.programmers.co.kr/learn/courses/30/lessons/181942?language=javascript
// 문자열 섞기

function solution(str1, str2) {
    let result = [];
    let strArr1 = [...str1];
    let strArr2 = [...str2];
    
    for (let i = 0; i < strArr2.length; i++) {
        result.push(strArr1[i])
        result.push(strArr2[i])
    }
    return result.join('');
}

// 너무 쉬운거 였는데 꼬아서 생각했다 ㅡ ㅅ ㅡ