// programmers question URL : https://school.programmers.co.kr/learn/courses/30/lessons/181950
// 문제 :

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += str // +=가 맞는데 =+로 써서 계속 통과가 안됨;; 하 ~짱나 ㅠㅠㅠ
    }
    console.log(result)
});