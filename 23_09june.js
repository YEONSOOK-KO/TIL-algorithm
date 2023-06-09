// programmers question URL : https://school.programmers.co.kr/learn/courses/30/lessons/181927
// 마지막 두 원소

function solution(num_list) {
    // 마지막원소 num_list[num_list.length - 1]
    // 마지막원소 전 원소 num_list[num_list.length - 2]
    // 두개 비교
    // 마지막 원소가 더 크면 그 전 원소 뺀 값 num_list에 추가해 리턴
    // 그 전 원소가 더 크면 마지막 원소 * 2 num_list에 추가해 리턴
    
    const a = num_list[num_list.length - 1]
    const b = num_list[num_list.length - 2]
    const result = [];
    
    if (a > b) {
        num_list.push(a - b);
        return num_list;
    } else {
        num_list.push(a*2);
        return num_list;
    }
}