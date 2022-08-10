let data = [1,2,3,4,5,6];

// 1. reduce 사용예시
let reducer = data.reduce(function(acc,item) {
  if(item % 2 === 0) {
    acc.push(item*2);
  }
  
  return acc;
}, []);



// 2. filter과 map 사용예시
let evensFilter = data.filter(el => el % 2 === 0); // 우선 짝수를 축출한다.
console.log(evensFilter)
let doubled = evensFilter.map(el => el * 2) // 그 후 곱하기 2를 해준다.


console.log(reducer) // [4, 8, 12]
console.log(doubled) // [4, 8, 12]