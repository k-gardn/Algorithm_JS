let checkin=[9, 7, 8, 9, 7, 9, 8]
let checkout=[23, 22, 26, 26, 29, 27, 22]

function solution(checkin, checkout){
    let sum=0;
    var answer = '';
    var total=[];
    for(var i=0;i<checkin.length;i++){
        if(checkout[i]>=29){
            checkout[i]=21; 
        }
        A=(checkout[i] - checkin[i]);
        total.push(A);        
        
    }
    // console.log(total);
    for (let i = 0; i < total.length; i++) {
        sum += total[i];
    }
   
    return answer = sum;
}

console.log(solution(checkin,checkout))

    
//     return total;
// }
// console.log(solution(checkin,checkout))
// console.log(totalarr)