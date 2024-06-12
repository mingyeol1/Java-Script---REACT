import React, { useState } from "react";
// useState를 하나로 관리하기

const EventComponent2 = () => {
    const [form, setForm] = useState({name: '', topic: ''}); //객체 state.

    let handleChange = (e) => {
        const copy = {...form, [e.target.name]: e.target.value}; //spread문법으로 복사 후 키 수정
        setForm(copy); //state
    }

    let handleClick = () => {
        alert(`결과 : ${form.name} 님의 할 일 : ${form.topic}`)
        setForm({name:'',topic:''}); //state변경
    }

    return(

        <div>
            <h3>리액트 이벤트 핸들링(객체로 핸들링)</h3>
            <input 
            type="text" 
            name="name" 
            onClick={handleChange} 
            value={form.name}
        /><br />
        <h3>변화된 값 : </h3>
        <input 
        type="text"
        name="topic"
        onClick={handleChange}
        value={form.topic}
        /><br />
        <h3>체인지 된 결과 :{form.topic} </h3>
        <button type="button" onClick={handleClick}>클릭미</button>
        </div>
    )
}

export default EventComponent2;