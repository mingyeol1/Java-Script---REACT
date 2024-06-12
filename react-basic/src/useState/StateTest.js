import { useState } from "react"

const StateComponent = () => {
    const [msg, setData] = useState('초기값');

    const enter = () => {
      //  msg = '이렇게 변경 하겠음.'; //직접 설정 x
      setData('입장')
    }
    const exit = ()=> setData('퇴장.')

    return (
        <div>
            <h3>{msg}</h3>
            <button onClick={enter}>입장</button>
            <button onClick={exit}>퇴장</button>
        </div>
    )
}

//값이 배열일수도 있고 객체일수도 있음 굳이 문자열일 필요가 없다.

export default StateComponent;