// programmers question URL : https://school.programmers.co.kr/learn/courses/30/lessons/181943
// 문자열 겹쳐쓰기

function solution(my_string, overwrite_string, s) {
    let strArr = my_string.split('');
    strArr.splice(s, overwrite_string.length, overwrite_string)
    return strArr.join('')
}

// arr.splice(삭제 시작 점, 삭제할 갯수, 대체하여 추가할 것)