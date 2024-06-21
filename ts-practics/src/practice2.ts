// 함수 타입 정의하기.
function sum(x:number,y: number): number {
    return x + y;
}

console.log(sum(10,20))

//         함수명   매개변수        리턴타입
function sumArray(number:number[]):number{
    
    return number.reduce((acc, cureent) => acc + cureent, 0);
}

const total = sumArray([10,20,30,40,50])
console.log(total);

function nonReturnFunction():void { //반환값 없는 타입의 함수. 타입지정.x
    console.log('반환값 없는 함수.')
}

// Interface 사용해보기
// Interface는 클래스 또는 객체를 위한 타입지정 할 때 사용되는 문법.

// Shape라는 interface를 선언
interface Shape {
    getArea(): number; //Shape interface에는 getArea라는 함수가 꼭 있어야함
}

class Circle implements Shape {
    // implements 키워드를 통해서 interface를 구현하는 것을 명시함.
    // radius: number; // 멤버변수 //public 사용으로 멤버변수는 따로 지정 안해도됨. 파라미터에서 바로 사용가능.
    constructor(public radius: number){
        this.radius = radius;
    }

    // 너비를 가져오는 함수
    getArea(): number {
        return this.radius * this.radius * Math.PI;
    }


}
class Ractengle implements Shape{
// radius: number;
// radius2: number;
constructor(private radius: number,private radius2:number){
    this.radius = radius;
    this.radius2 = radius2;
}
getArea(): number {
    return this.radius * this.radius2
    
}
}

const shape: Shape[] = [new Circle(5), new Ractengle(10,20)]
shape.forEach(shape => console.log(shape.getArea()));

const circle = new Circle(8);

const ractengle = new Ractengle(100,200);

console.log(circle.radius);
// console.log(ractengle.radius); // private으로 접근 제한을 해서 불러올 수가 없음

// 클래스가 아닌 일밴 객체를 interface를 사용하여 타입지정.
interface Person {
    name: string;
    age?: number;  // 물음표는 설정을 해도 되고, 안해도 되는 값.
}

// interface Developer {
//     name: string,
//     age?: number;
//     skills: string[];
// }

// 상속처리도 가능.
interface Developer extends Person {
    skills: string[];
}

const person: Person = {
    name: '홍길동',     //안넣으면 에러남
    age: 100            //안넣어도 됨.
}

const expert: Developer = {
    name: '빌게이츠',
    skills:['C','C++','React'],
    age: 70
}

const people: Person[] = [person, expert];

// Type Alias
// type은 특정 타입에 별칭을 붙이는 용도임.
// 이를 사용하여 객체를 위한 타입을 설정할 수 있고
// 배열 또는 그 어떤 타입이든 별칭을 지을 수 있음.

type Developer2 = Person & { // &를 사용해서 두개 이상의 타입을 합함.
    skills: string[];   //Person에 skills:string[]을 합친거임 extends랑 비슷함.
}

const expert2 : Developer2 = {
    name: '이순신',
    skills: ['거북선', 'Go','MarkDown']
}

const people2:Person[] = [person, expert2];

type Color = 'red'|'orange'|'yellow';
const color2 : Color = 'red';
const colors: Color[] = ['red', 'yellow'] 