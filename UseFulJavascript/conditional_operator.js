//삼항연산자 연습
const array = [];
// let text = '';
// if(array.length === 0){
//     text = '배열이 비어 있습니다.'
// }else {
//     text = '배열이 비어있지 않습니다.'
// }

//---------------삼항 연산-------------------------
//              조건                    true                    false
let text = array.length === 0 ? '배열이 비어 있습니다.' : '배열이 비어있지 않습니다.';


console.log(text);

// 삼항 연산자 중첩 사용 예시
const condition1 = false;
const condition2 = false;

//조건이 false일 시.
const value = condition1 
    ? '와.' 
    : condition2  //부정일 시 실행
    ? '비비디' 
    : '바비디 부'; //부정일 시 실행.

    console.log(value);
