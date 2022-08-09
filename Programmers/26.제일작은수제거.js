arr=[10]

function solution(arr) {
    var answer = [];
    var min_num = Math.min.apply(null, arr);
    let filtered = arr.filter((element)=>element !== min_num); //최소값이 아닌 모든 값들을 배열의 형태로 반환.

    if (arr.length == 1){
        return answer = [-1]
    }
    return answer=filtered;
}
console.log(solution(arr))
