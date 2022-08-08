function solution(x,n){
    let arr=[];
        for (var i=1; i<n+1; i++){
            a = i * x
            arr.push(a)
        }
return arr;
}
x=2, n=3
console.log(solution(x,n))