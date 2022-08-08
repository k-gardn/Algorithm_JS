s="try hello world"
let A=s.split(" "); // [A=['try', 'hello', 'world']
let arr="";

for(let i=0; i<A.length; i++){  //A[i]의 인덱스(=단어)를 순회. A[0]='try'
    for(let j=0; j<A[i].length; j++) {
        if(j%2==0){
            arr += A[i][j].toUpperCase(); //A[0][0] = 'T'
        }
        else{
            arr += A[i][j].toLowerCase(); //A[0][1] = 'r'
        } 
    }
    if(i<A.length-1){
        arr += " ";
    }
}
    console.log(arr)
