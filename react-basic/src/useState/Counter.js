import { useState } from "react";



function Counter(){
    //useState를 사용해서 +1이면 값을 1씩증가
    // -1 버튼 클릭이면 -1씩 감소 처리

    

    const [num, setData] = useState(0); // 비구조화 할당.

    //버튼 동작 함수.
    const plus = () =>{
       setData(num+1);
    }

    const minus = () => {
       setData(prevNumber => prevNumber -1); //함수 등록 방식 / 익명함수. ?  
        //     ((prevNumber) => prevNumber -1) ()는 생략이 가능하다.
        //setData(num-1);
    }

    return(
        <div>
            <h1>{num}</h1>
            <button onClick={plus}>+1</button>
            <button onClick={minus}>-1</button>
        </div>
    );
}

export default Counter;