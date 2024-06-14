import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import Box from './cssmodule/Box';
import CheckBox from './cssmodule/components/CheckBox';
import { useState } from 'react';

function App() {

  const [check, setCheck] = useState(false);
  const onChange = e => {
    setCheck(e.target.checked)
  };


  return (
    <div className="App">
      {/* SCSS */}
      {/* <div className='button'>
        <Button size="large" onClick={() => alert('클릭했음')}>Button</Button> 하나의 값을 넘길 땐 {}가 의미가 없다.
        <Button  >Button</Button>
        <Button size={"small"}>Button</Button>
      </div>
     
      <div className='button'>
        <Button size="large" color="gray">Button</Button> 하나의 값을 넘길 땐 {}가 의미가 없다.
        <Button color="gray">Button</Button>
        <Button size={"small"} color="gray">Button</Button>
      </div>
      
      <div className='button'>
        <Button size="large" color="pink">Button</Button> 하나의 값을 넘길 땐 {}가 의미가 없다.
        <Button color="pink">Button</Button>
        <Button size={"small"} color="pink">Button</Button>
      </div>

      <div className='button'>
        <Button size="large" outline>Button</Button> 하나의 값을 넘길 땐 {}가 의미가 없다.
        <Button color="gray" outline>Button</Button>
        <Button size={"small"} color="pink" outline>Button</Button>
      </div>

      <div className='button'>
        <Button size="large" color="blue" fullWidth>Button</Button> 하나의 값을 넘길 땐 {}가 의미가 없다.
        <Button size="large" color="gray" fullWidth>Button</Button>
        <Button size="large" color="pink" fullWidth>Button</Button>
      </div> */}

  {/* CSS Module 테스트 */}
      {/* <Box /> */}
      <CheckBox onChange={onChange} checked={check}>
         다음 약관에 모두 동의
      </CheckBox>
       <p>
        <b>check : </b>
       {check ? 'true' : 'false'}
       </p>
      
      
    </div>
  );
}

export default App;
