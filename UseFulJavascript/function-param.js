//함수의 기본 파라미터

function calculateCircleArea(r){
    const radius = r || 1;       //ES5이전 버전..
    return Math.PI * radius * radius;
}

// 값을 집어넣지 않으면 NaN이 뜬다. 왜? 3.14 * undefiend * nudefiend = 값이 나올 수 없음 
const area = calculateCircleArea(); //NaN
console.log(area);

// ES6 이후에서 처리
function calculateCircleArea2(r = 1) {
    return Math.PI * r * r;   
}
const calculateCircleArea3 = (r = 1) => Math.PI * r * r;
const area3 = calculateCircleArea3();
console.log(area3);