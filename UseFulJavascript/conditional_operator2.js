// 조건문을 좀 더 스마트하게.

// 1. 특정 값이 여러 값 중 하나인지 확인해야 할 때.
//function isAnimal(text){
    //1.
    // return(
    //     text === '고양이' || text === '개' || text === '거북이' || text === '너구리' 
    // );
    //2.
    // const animals = ['고양이','개','거북이','너구리']
    // return animals.includes(text)
//}
    //3.
    const isAnimal = text => ['고양이','개','거북이','너구리'].includes(text);

console.log(isAnimal('개'));
console.log(isAnimal('노트북'));
console.log(isAnimal('너구리'));

// 값에 따라 다른 결과물을 반환해야 할 경우.
function getSound(animal){
    //1. if 문을 이용한 조건문.
    // if(animal === '개') return '멍멍!';
    // if(animal === '고양이') return '야옹!';
    // if(animal === '참새') return '짹짹!';
    // if(animal === '비둘기') return '구구!';
    
    //2. switch case문을 이용한 조건문.
    // switch(animal){
    //     case '개':
    //         return '멍멍!';
    //     case '고양이':
    //         return '야옹!';
    //     case '참새':
    //         return '짹짹!';
    //     case '비둘기':
    //         return '구구!';
    //     default:
    //     return '...?';
    // }

    //3. key value  객체 생성을 사용해 출력 (값을 전달 하여 반환.)
    const sounds = {
        개: '멍멍!',
        고양이: '야옹!',
        참새: '짹짹!',
        비둘기: '구구!'
    }
    return sounds[animal] || '...?';
}
console.log(getSound('개'));
console.log(getSound('비둘기'));
console.log(getSound('사자'))

// 실행해야 하는 코드 구문이 다를 경우.
function makeSound(animal){
    const tasks = {
        개() {
            console.log('멍멍!');
        },
        고양이() {
            console.log('야옹!');
        },
        참새() {
            console.log('짹짹!');
        },
        비둘기() {
            console.log('구구!');
        }
    };
    if (!tasks[animal]){
        console.log('...?')
        return;
    }
    tasks[animal](); //객체 호출 함수.
}
makeSound('개')


