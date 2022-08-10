function solution(s) {
    var answer = '';
    //단어의 길이의 % 2 ex) 5%2=2.5 정수로 변환.
    A = parseInt(s.length / 2);
    
    if(s.length % 2==0){  //글자의 길이가 짝수인 경우.
        //문자열에서 문자열 뽑아내기.(ex) index 1~2까지.)
        answer=s.substring(A-1, A+1)   
    }
    else{
        answer=s.charAt(A)  //글자의 길이가 홀수일 경우. 가운에 글자 하나만 뽑아내기.
    }
    return answer;
}
let s="abcde"
console.log(solution(s))