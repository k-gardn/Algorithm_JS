// let input = require('fs').readFileSync('example.txt').toString().split('\n');
// var a = parseInt(input[0]);
// var b = parseInt(input[1]);
// console.log(a+b);

function solution(x,n){
    let arr=[];
        for (var i=1; i<n+1; i++){
            a = i * x
            arr.push(a)
        }
return arr;
}
var x = prompt('입력받기', '메시지를 입력해주세요');
var n = prompt('입력받기', '메시지를 입력해주세요');
solution(x,n)

 
