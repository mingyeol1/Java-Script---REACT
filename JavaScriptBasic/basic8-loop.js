//반복문
//1. for
for(let i = 0; i< 10; i++){
    console.log(i);
}


// 배열과 for문
// for문은 특정 회차를 정하고 반복한다.
const names = ['홍길동', '이순신', '강감찬','유관순'];
for (let i = 0; i< names.length; i++){
    console.log(names[i])
}

// while
// while문의 특징은 조건이 참이면 계속해서 반복한다.
// 중요포인트는 조건이 언젠가 false가 되어야 한다.
let i = 0;
while (i<10) {
    console.log(i);
    i++
}

// for ... of
// 배열에 관한 반복문을 돌리기 우해 만들어진 반복문
let numbers = [10, 20, 30, 40, 50, 60];
for (let number of numbers){
    console.log(number);
}



// 객체 정보를 배열 형태로 받아 올 수 있는 함수
const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
};

console.log(Object.entries(doggy)); //객체의 key:value값을 배열로 받아옴
console.log(Object.keys(doggy)); //key 값만 배열로
console.log(Object.values(doggy)); //value 값만 배열로

// 객체를 위한 반복문... for... in
for(let key in doggy){
    console.log(`${key}: ${doggy[key]}`);
}


// brake와 continue

// 반복문 연습.
// 함수 : sumOf
// 배열 파라미터를 받아서 총합을 구하는 함수.
function sumOf(numbers){
    let sum = 0;
    for(let i = 0; i< numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

const result = sumOf([10, 20, 30, 40, 50 ,60 ,70]);
console.log(result);

//퀴즈
//숫자로 이루어진 배열이 주어졌을 때, 해당 숫자 배열  안에 들어있는 
// 숫자가 5보다 큰 숫자로 이루어진 배열을 새로 만들어 반환하는 함수
function biggerThanFive(number) {
    let num = [];
    for(let i = 0; i < number.length; i++){
             if(numbers[i] > 5){
                num.push(number[i])
             }
    }
    return num;
}
const numbers3 = [8,1,3,7,9,65,54,3,5]
console.log(biggerThanFive(numbers3))