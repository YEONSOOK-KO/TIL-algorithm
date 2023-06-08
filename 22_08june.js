// programmers question URL : https://school.programmers.co.kr/learn/courses/30/lessons/181928
// 이어 붙인 수

function solution(num_list) {
    let oddArr = '';
    let evenArr = '';
    
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 !== 0) {
            oddArr = oddArr + String(num_list[i])
        } else {
            evenArr = evenArr + String(num_list[i])
        }
    }
    return Number(oddArr) + Number(evenArr)
}


// another answer
// function solution(num_list) {
//     let oddArr = [];
//     let evenArr = [];
//     
//     for (let i = 0; i < num_list.length; i++) {
//         if (num_list[i] % 2 !== 0) {
//             oddArr.push(num_list[i])
//         } else {
//             evenArr.push(num_list[i])
//         }
//     }
//     return Number(oddArr.join('')) + Number(evenArr.join(''))
// }