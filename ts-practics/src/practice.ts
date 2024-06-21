let count = 0; //숫자
count += 1;
//count = '갑자기 문자열...'  // 에러 발생 count

const message: string = 'Hello World';
console.log(message);

const done: boolean = true; // boolean 값.
const done2 = true; // 위랑 같은 코드임.
 //done2 = 'false'; //Boolean으로 이미 정의가 돼서 안됨.

const numbers: number[] = [1,2,3,4];
const messages: string[] = ['hello', 'world'];

numbers.push(5);
//messages.push(3);   // 문자열 배열에 숫자 x 타입검증을 마침.

// undefined 와 null 허용 
let migthBeUndefined: string | undefined = undefined; //string 또는 undefined 사용 가능.
let nullableNumber: number | null = null;
//let count2: number = null;

let color : 'red'|'yellow'|'orange' = 'red'; // red, yellow, orange 만 사용가능
color = 'yellow';
//color = 'white';