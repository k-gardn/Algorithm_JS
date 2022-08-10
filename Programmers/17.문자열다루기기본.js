function solution(s) {
    let result = parseInt(s)
  
    return (s.length === 4 || s.length === 6) && s==result ? true : false
}

let s="a234"
console.log(solution(s))
console.log(parseInt("2a34"))