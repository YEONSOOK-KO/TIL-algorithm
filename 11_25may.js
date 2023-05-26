// programmers question URL : https://school.programmers.co.kr/learn/courses/30/lessons/181945
// 문자열 돌리기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line
}).on('close',function(){
    [...input].forEach(a => console.log(a))
});

// input함수를 다 찢어 배열에 넣어준뒤 foreach로 하나씩 콘솔에 찍어줌
// 이때 각각 행동마다 콘솔을 찍어주기 때문에 한줄에 하나씩 출력됨