//변수와 상수
//자바스크립트 변수 : var(옛날부터 사용한 녀석), let, const
// var -> let, const 권장... 이유는 호이스팅.
// let, const는 블럭 변수 이다 해당 블럭 변수에만 사용이 가능하다.
// {
//     let a = 1; //상위 블럭
//     function A (){ //하위 블럭.
//         console.log(a);
//     }
// }

// let의 선언.
// 변수 선언. 바뀔 수 있는 값을 지정할 때 사용한다.
//  재할당이 가능하다.  재선언은 안됨.

//재할당.
let value = 1;
console.log(value);
value = 2;
console.log(value)

//재선언은 안됨.
// let value2 = 1;
// let value2 = 2;

// const - 상수 선언.
// const는 한번 선언되고 바뀌지 않는 값이다.
// 재할당 및 재선언이 안된다.
// const a = 1;
// a = 2;
// console.log(a)

// 데이터 타입.
// 1.숫자(Number)
// 2.문자열(String)
//  작은 따옴표 혹은 큰 따옴표를 사용하여 표현.
let text = 'Hello';
let name = "홍길동";
// 3. 참/거짓(Boolean)
let good = true;
let loading =false;
// 4. null과 undefined
// 데이터가 없음을 의미한다. 하지만 용도가 다르다.
// null은 => 값이 없음을 나타낸다.
// undefiend는 => 값이 설정되지 않았음을 나타낸다.
let friend = null;    //고의적 설정..
console.log(friend);
let testUndefiend       //설정하지 않았음.
console.log(testUndefiend)

