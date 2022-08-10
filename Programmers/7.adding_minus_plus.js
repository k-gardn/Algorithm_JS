function solution(absolutes, signs){
    var answer = 0;
    for(var i=0; i<absolutes.length; i++){
        
        if(signs[i]==true){
            answer += absolutes[i] 
        }
        else{
            answer -= absolutes[i]
        }
            
    };
    
    return answer;
}


//다른 사람 풀이.
function solution(absolutes, signs) {

    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}

let absolutes = [4,7,12];
let signs = [true,false,true];
console.log(solution(absolutes, signs));