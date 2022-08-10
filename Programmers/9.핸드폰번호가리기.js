function solution(phone_number) {
    var answer = '';
    let end_num = phone_number.slice(-4); //뒤에 4개 숫자 뽑기.
    front_star= (phone_number.length - end_num.length);  //
    answer = '*'.repeat(front_star) + end_num
    return answer;
}


// <다른사람 풀이>

function solution(phone_number) {
    return phone_number.replace(/\d(?=\d{4})/g, "*");
  }

//  패턴을 쓸공간
// /g는 모든 문자열에 대해서 적용.. g를 쓰지않으면 한개의 문자에 대해서만 적용이됨..
// \d는 모든 숫자 [0-9]와 동일
// x(?=y) : y에 대한 조건을 허용하는 것을 뒤따라오는 x에만 대응된다. 대응 되면 x의 값을 바꾼다.
// x(?!y) : x에 대한 조건을 허용하는 것을 뒤따라오는 y에만 대응된다. 대응 되면 x의 값을 바꾼다.
// {n} 앞 표현식이 n번 나타나는 부분에 대응된다. 반드시 양의 정수여야함..


let phone_number = "01033334444"
console.log(solution(phone_number))