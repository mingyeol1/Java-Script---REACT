// spread와 rest
// ES6에서 도입된 문법.
//1. spread
// 객체 혹은 배열을 펼칠 수 있는 문법

//--------------일반적인 문법
// const slime = {
//     name: '슬라임'
// };
// const cuteSlime = {
//     name: '슬라임',
//     attribute: 'cute'
// };
// const purpleCuteSlime = {
//     name: '슬라임',
//     attribute: 'cute',
//     color: 'purple'
// }
//-----------------spread 문법
const slime = {
    name: '슬라임'
}
const cuteSlime = {
    ...slime,
    attribute: 'cute'
}

const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
}

console.log(slime)
console.log(cuteSlime)
console.log(purpleCuteSlime)

// 배열에서 spread
const animals = ['개','고양이','참새'];
const anotherAnimlas = [...animals, '비둘기']
console.log(animals)
console.log(anotherAnimlas)


const numbers = [1,2,3,4,5];
const spreadNumbers = [...numbers, 1000, ...numbers]; // 1번 사용하는게 아니라 여러번 사용이 가능하다.
console.log(spreadNumbers)

// 2. rest
// 사용방식은 비슷해 보이지만, 역할이 매우 다르다.
// 객체, 배열, 그리고 함수의 파라미터에서 사용이 가능하다.

// const purpleCuteSlime = {
//     name : '슬라임',
//     attribute: 'cuty',
//     color: 'purple'
// }

const {color, ... rest} = purpleCuteSlime;
console.log(color)
console.log(rest) // color를 뺀 rest가 나온다.

const {color:color2, ... cuteSlime2} = purpleCuteSlime;
console.log(color2)
console.log(cuteSlime2) //rest란 이름은 바꿀 수 있다.

// 배열의 rest
const numbers2 = [0,1,2,3,4,5,6];
const [one, ...rest2] = numbers2
// const [...rest, last] = numbers2 // rest는 앞에 사용할 수 없다.
console.log(one)
console.log(rest2)

//함수 파라미터에서의 rest
function sum(...rest){
    // let sum = 0;
    // if(a) sum += a;
    // if(b) sum += b;
    // if(c) sum += c;
    // if(d) sum += d;
    // if(e) sum += e;
    // if(f) sum += f;
    // if(g) sum += g;
    return rest.reduce((acc, current) => acc + current, 0);
}
const result = sum(1, 2, 3, 4, 5, 6, 7)
console.log(result)

//함수 인자와 spread
const numbers3 = [1,2,3,4,5,6]
const result2 = sum(
    //numbers3 만 쓰면 0에다가 배열을 더한꼴이 됨 01,2,3,4,5,6
    // numbers3[0],
    // numbers3[1],
    // numbers3[2],
    // numbers3[3],
    // numbers3[4],
    // numbers3[5]
    ...numbers3 //배열의 spread
);
console.log(result2);


//퀴즈 
// 함수 n개의 숫자들이 파라미터로 주어졌을 때
// 그 중에 가장 큰 값을 알아내는 코드를 작성.
function max(...rest){
    
    
   
    return rest.reduce((acc,current) => acc < current ? current:acc);
}

const resultQuiz = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(resultQuiz)