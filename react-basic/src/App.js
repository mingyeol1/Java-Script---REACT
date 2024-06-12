import logo from './logo.svg';
import './App.css';
import React, { Fragment,useRef, useState } from 'react';
// import Wrapper from './Wrapper';
import PropTypes from 'prop-types'; //prop 타입 검증을 위한 모듈.
// import StateComponent from './useState/StateTest';
// import Counter from './useState/Counter';
// import MyComponent2 from './useState/MyComponent2';
// import EventComponent from './Event/EventComponent';
// import InputSample from './Event/InputSample';
// import EventComponent2 from './Event/EventComponent2';
import UserList from './array/UserList';
// import ArrayKey from './array/ArrayKey';
// import InputSample2 from './array/InputSample2';
import CreateUser from './array/CreateUser';

function App() {

  // const name = 'React';
  
  // const style = {
  //   backgroundColor: 'red', //카멜 표기법
  //   color: 'white',
  //   fontSize: 24,
  //   padding: '1rem'
  // }

  // users 배열객체를 useState로 변경... 추가 가능한 배열 객체로...
  const [users, setUsers ]= useState([
    {
        id: 1,
        username: '홍길동',
        email: 'hong@naver.com'
    },
    {
        id: 2,
        username: '이순신',
        email: 'lee@naver.com'
    },
    {
        id: 3,
        username: '유관순',
        email: 'you@naver.com'
    }
    ]);

    // useState 입력값 처리를 위해서.
    const [inputs, setInputs] = useState({
      username:'',
      email: ''
    })
    const {username, email} = inputs;

    const onChange = e => {
      const {name, value} = e.target;
      
      //입력값 정리
      setInputs({
        ...inputs,
        [name]: value
      });
    }

     // useRef를 이용한 컴포넌트에서 사용할 변수 지정
  // - useRef로 관리하는 변수는 값이 바뀐다고해서 컴포넌트가 리렌더링되지 않음
  // - 때문에 useRef로 관리하고 있는 변수는 설정 후 바로 조회 가능함. 
  // - setTimeout, setInterval 을 통해서 만들어진 id
  // - 외부 라이브러리를 사용하여 생성된 인스턴스
  // - scroll 위치
  const nextId = useRef(4);  
  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가 로직... 
    const user = {
      id: nextId.current, //현재 useRef로 설정된 값을 호출.
      username,
      email
    };
    setUsers([...users, user]);

    setInputs({
      username: '',
      email: ''
    });

    nextId.current += 1;   // onCreate가 동작하면, useRef에 현재값에 +1 처리
  }
  return (
    <Fragment>
      {/* <StateComponent/>
      <hr />
      <MyComponent2 name={'홍길동'} age={20}/> */}
      {/* 2nd Day : event*/}
      {/* <EventComponent />
      <hr /> */}
      {/* <Counter/>
      <hr /> */}
      {/* <InputSample />
      <hr /> */}
      {/* <EventComponent2 />
      <hr /> */}

      {/* 2nd Daty : 컴포넌트 배열*/}
       {/* <ArrayKey />
      <InputSample2 /> */}
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      
      />
      <UserList users={users}/> {/* 등록사용자 출력 */}
     

    
    
    
  

      {/* 1st Day */}
      {/* <Wrapper>
      <MyComponent name={"홍길동"} age={20} email={"aaa@ccc.com"} isSpecial />
    <div className='test-box'>
        <WelcomeFunction name="Sata" />
        <WelcomeFunction name={name} /> {}는 자바스크립트의   */}
        {/* <br /> or <br></br> 태그는 닫아야 한다.
    </div> */}
    {/* <div style={style}>Hello world</div> 하나의 태그로 묶여야한다. */}
    {/* </Wrapper> */}
    </Fragment>
  );
}

//함수형 컴포넌트
function WelcomeFunction(props){
  console.log(props)
  return <h1>Hello, {props.name}</h1>;
}

//클래스형 컴포넌트
class WelcomeClass extends React.Component{
  render(){
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// 화살표 함수를 이용한 컴포넌트 
const MyComponent = ({name, age, addr='서울시 마포구 신촌', email, isSpecial}) => {
  return (
    <div>
      { isSpecial && // 3항연산식 
      <div>
      나의 첫번째 MyComponent입니다.<br/>
      프로퍼티 1 : {name} <br/>
      프로퍼티 2 : {age} <br/>
      기본값 프로퍼티 3 : {addr} <br/>
      </div>
    }
    </div>
  );
}


// props 기본값 설정하기 ... *중요* 대소문자를 구분한다.
// 컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용할 값을 설정하는 경우에 사용함.
// syntax : 컴포넌트.defaultProps = {}
// MyComponent.defaultProps={
//   addr : '서울시 신촌',
//   age : 0
// }

//props 타입검증(주의 사항- 대소문자를 정확하게 구분함)
// npm install prop-types
// 컴포넌트명. propTypes = {}
// PropType이 기대하는 값을 가지는지 여부를 확인!
MyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  email: PropTypes.string.isRequired //필수 값 (상위 컴포넌트에서 반드시 전달.)
}

export default App;
