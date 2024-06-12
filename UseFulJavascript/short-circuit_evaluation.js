// 단축 평가 논리 계산법
true && true // true
true && false //false
false && false //true
false && true //true


const dog = {
    name: '멍멍이'
};

function getName(animal){
    // if(animal){
    // return animal.name;
    // }
    // return undefined;
    // && 연산자로 코드 단축 시키기
    // 앞에 있는게 참이면 뒤에 있는 값을 return // 내가 해석 한 것.
    // 첫번째가 참인 경우, 두번째를 반환 // 강사님 풀이
    return animal && animal.name;
}

const name = getName();
console.log(name)

console.log(true && 'hello');
console.log(false && 'hello');
console.log('hello' && 'bye');
console.log(null && 'hello');
console.log(undefined && 'hello');
console.log('' && 'hello');
console.log(0 && 'hello');
console.log(1 && 'hello');
console.log(1 && 1);

const namelessDog = {
    name : ''
};

function getName2(animal){
    const name = animal && animal.name;
    // if(!name){
    //     return '이름이 없는 동물입니다.'
    // }
    return name || '이름이 없는 동물입니다';
}

const name2 = getName2(namelessDog);

console.log(name2);