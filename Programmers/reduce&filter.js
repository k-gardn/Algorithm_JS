let data = [1,2,3,4,5,6];

// 1. reduce 사용예시
let odds = data.reduce(function(acc, item){
  if(item % 2) {
    acc.push(item);
  }
  return acc;
},[]) //초기값 꼭 설정!..

// 2. filter 사용예시
let oddsFilter = data.filter(el => el % 2);

console.log(odds) // [1, 3, 5]
console.log(oddsFilter) // [1, 3, 5]