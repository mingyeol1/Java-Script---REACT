"use strict";
// 함수 타입 정의하기.
function sum(x, y) {
    return x + y;
}
console.log(sum(10, 20));
//         함수명   매개변수        리턴타입
function sumArray(number) {
    return number.reduce(function (acc, cureent) { return acc + cureent; }, 0);
}
var total = sumArray([10, 20, 30, 40, 50]);
console.log(total);
function nonReturnFunction() {
    console.log('반환값 없는 함수.');
}
var Circle = /** @class */ (function () {
    // implements 키워드를 통해서 interface를 구현하는 것을 명시함.
    // radius: number; // 멤버변수 //public 사용으로 멤버변수는 따로 지정 안해도됨. 파라미터에서 바로 사용가능.
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    // 너비를 가져오는 함수
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Ractengle = /** @class */ (function () {
    // radius: number;
    // radius2: number;
    function Ractengle(radius, radius2) {
        this.radius = radius;
        this.radius2 = radius2;
        this.radius = radius;
        this.radius2 = radius2;
    }
    Ractengle.prototype.getArea = function () {
        return this.radius * this.radius2;
    };
    return Ractengle;
}());
var shape = [new Circle(5), new Ractengle(10, 20)];
shape.forEach(function (shape) { return console.log(shape.getArea()); });
var circle = new Circle(8);
var ractengle = new Ractengle(100, 200);
console.log(circle.radius);
// console.log(ractengle.radius); // private으로 접근 제한을 해서 불러올 수가 없음
