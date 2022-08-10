//어려웠다!.. 
//1. include 이용하기.
// function solution(numbers) {
//     var answer = 0;
//     for(let i=0; i<10; i++){
//         if(!numbers.includes(i)) 
//         answer += i; // numbers가 i를 포함하지 않는다면, answer에 그 i 값들을 더해라
//     } 
//     return answer;
// }

//2. reduce이용하기.
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => 
    cur = cur + acc, 0); //callback함수 , 초기값.('cur ='을 생략해도됌.)
}

let numbers=[1,2,3,4,6,7,8,0]
console.log(solution(numbers))  //5+9=14


