//연산자
// 1. 산술 연산자.
// =>  +, -, *, /
let a = 1 + 1
console.log(a)
a = 1 + 2 - (3*4) /4;
console.log(a)
let b = 1;
b++; //후위
++b; //전위
console.log(b)
console.log(b++)
console.log(++b)

b = 1;
b--
console.log(b)

//2. 복합 대입연산자.
let c = 1;
c = c + 1;
// 이코드를 복합 대입 연산자로.
c = 1;
c += 1;
// 다른 연산자도 가능하다.
let d = 1;
d %= 10;
console.log(d)

// 3. 논리 연산자.
// 논리 연산자는 Boolean을 위한 연산자.
// 반환 결과는 true 또는 false 이다.
// ! :  NOT,  && : AND, || : OR
const e = !true;
console.log(e);

const f = true && true;
console.log(f);
const g = true && false;
console.log(g);


let h = true || true;
console.log(h)
h = true || false;
console.log(h)
h = false || true;
console.log(h)
h = false || false;
console.log(h)


// 연산 순서..
// 논리연산자 순서..... NOT -> AND -> OR 순서대로 연산
const value = !((true && false) || (true && false) || !false);
console.log(value); 

//4. 비교 연산자.
// ==(값의 내용까지 봄)/(타입 검사x) , ===(값과 타입까지 같이 봄/ 더욱 정확하게 가능.)/(타입검사 o)
const x = 1;
const y = '1';
const equal = x === y;
console.log(equal)

// !=(타입 검사 X), !==(타입검사O)
const notEqeuls = 'a' !== 'b';
console.log(notEqeuls);
console.log(1 != '1');
console.log(1 !== '1');
// <, >, <=, >=


//문자열 붙이기..."+"
const t1 = '안녕'
const t2 = '하세요'
console.log(t1+t2);