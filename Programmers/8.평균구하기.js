function solution(arr) {
    var answer = 0;
    sum = arr.reduce((total, el) => total = total+el);
    answer = (sum / arr.length)
    return answer;
}

let arr = [1,2,3,4]
console.log(solution(arr))