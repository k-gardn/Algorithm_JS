function solution(month, day){
    var rmonth=[31,28,31,30,31,30,31,31,30,31,30,31,31,28,31,30]
    // var rday=[1,2,3,4,5,6,7,8,9,10,11,12]

    let arr=[]
    let answer=""
    var sum=0;
    let days=(rmonth[month+1] - day) //시작한 달의 일수. - 항해 시작날.
    let A=(98-days);//항해 시작한 달 끝나고 남은 나머지 일수.

    for(var i=0;i<5;i++){
        arr.push(rmonth[month+i])  //arr에 더해야하는 달의 일수 넣어준다.
        answer += rmonth[month+i]
        
        if((A-answer)<29){
        for (let j = 0; j < arr.length; j++) {
            sum += arr[j];
        }
        month += arr.length+1;
        answer=A-sum;
        break;
    }
    }
    console.log(arr)
    console.log(sum)
    console.log(month)


	return `${month+1}월 ${answer}일`;
}
console.log(solution(6,22))
