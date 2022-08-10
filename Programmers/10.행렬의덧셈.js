let arr1 = [[1,2],[2,3]]
let arr2 = [[3,4],[5,6]]
// console.log(arr1[1].map((el)=> el));

// function solution(arr1,arr2){
//     var answer = [];
//     for(var i=0; i<arr1.length; i++){
//         let total = [];
//         for(var j=0; j<arr1[i].length; j++){
//         total.push(arr1[i][j] + arr2[i][j])
//         }
//         answer.push(total)
//     }
//     return answer;
// };

//map을 이용함. 이렇게 풀고 싶었는데 잘 안됐음.
function solution2(arr1, arr2) {
    return arr1.map((e,i) => 
    arr2[i].map((v,j) => 
    arr1[i][j]+arr2[i][j]))
}
//출처: https://jo-c.tistory.com/18 [조씨의 개발 블로그:티스토리]

console.log(solution2(arr1,arr2));