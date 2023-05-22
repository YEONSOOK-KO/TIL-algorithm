// programmers question URL : https://school.programmers.co.kr/learn/courses/30/lessons/181947
// 덧셈식 출력하기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let result = Number(input[0]) + Number(input[1])
    console.log(input[0] + ' + ' + input[1] + ' = ' + result);
});