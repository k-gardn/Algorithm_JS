function solution(a, b) {
    var answer = 0;
    if(a==b){
        answer = a;
    }
    else{ //가우스 공식 이용.
        a<b ? answer=(a+b)*(b-a+1)/2 : answer=(b+a)*(a-b+1)/2 
    }
    return answer;
}
let a = 3;
let b = 3;
console.log(solution(a,b))