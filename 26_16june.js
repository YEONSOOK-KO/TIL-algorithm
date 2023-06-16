// programmers question URL : https://school.programmers.co.kr/learn/courses/30/lessons/181915
// 글자 이어 붙여 문자열 만들기

function solution(my_string, index_list) {
    let result = '';
    let strArr = [...my_string]
    
    for (let i = 0; i < index_list.length; i++) {
        result = result + strArr[index_list[i]];
    }
    return result;
}