"use strict";
var count = 0; //숫자
count += 1;
//count = '갑자기 문자열...'  // 에러 발생 count
var message = 'Hello World';
console.log(message);
var done = true; // boolean 값.
var done2 = true; // 위랑 같은 코드임.
//done2 = 'false'; //Boolean으로 이미 정의가 돼서 안됨.
var numbers = [1, 2, 3, 4];
var messages = ['hello', 'world'];
numbers.push(5);
//messages.push(3);   // 문자열 배열에 숫자 x 타입검증을 마침.
// undefined 와 null 허용 
var migthBeUndefined = undefined; //string 또는 undefined 사용 가능.
var nullableNumber = null;
//let count2: number = null;
var color = 'red'; // red, yellow, orange 만 사용가능
color = 'yellow';
color = 'white';
