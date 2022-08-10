let data = [1, 2, 3];

// 1. reduce 사용예시
let doubled1 = data.reduce(function(acc, value) {
  acc.push(value*2);
  
  return acc;}, [])

// 2. map 사용예시
let doubledMap = data.map(el => el*2);

console.log(doubled1) // [2, 4, 6]
console.log(doubledMap) // [2, 4, 6]