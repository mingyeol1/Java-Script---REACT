import logo from './logo.svg';
import './App.css';
import Circle from './styled-components/sample';
import styled, { ThemeProvider } from 'styled-components';
import Button from './styled-components/Button';
import Dialog from './styled-components/Dialog';
import { useState } from 'react';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

function App() {

  const [dialog, setDialog] = useState(false);

  const onClick =() => {
    setDialog(true);
  };

  const onConfirm = () => {
    console.log('확인');
    setDialog(false);
  };

  const onCancel = () => {
    console.log('취소');
    setDialog(false);
  };


  return (
    <ThemeProvider /* 웹사이트 디자인시에 메인색상을 지정할 때 사용. */
      theme={{
        palette:{
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595'
        }
      }}
    >
      
     <>
      {/* <Circle color='blue' huge/> */}
      <AppBlock>  {/* 자식 컴포넌트를 둘러싸고 있는 div(부모) 컴포넌트. */}
        <ButtonGroup>
        <Button size={'large'}>Button</Button>
        <Button >Button</Button>
        <Button size={'small'}>Button</Button>
        </ButtonGroup>
        
        <ButtonGroup>
        <Button color={'gray'} size={'large'}>Button</Button>
        <Button color={'gray'} >Button</Button>
        <Button color={'gray'} size={'small'}>Button</Button>
        </ButtonGroup>
       
        <ButtonGroup>
        <Button color={'pink'} size={'large'}>Button</Button>
        <Button color={'pink'} >Button</Button>
        <Button color={'pink'} size={'small'}>Button</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button outline>Button</Button>
          <Button outline color={'gray'}>Button</Button>
          <Button outline color={'pink'}>Button</Button>
        </ButtonGroup>
      
        <ButtonGroup>
          <Button fullWidth>Button</Button>
          <Button color={'gray'} fullWidth>Button</Button>
          <Button color={'pink'} fullWidth onClick={onClick}>삭제</Button>
        </ButtonGroup>
      
      </AppBlock>
      <Dialog
        title="정말로 삭제할거?"
        confirmText='삭제'
        cancelText='취소'
        onConfirm={onConfirm}
        onCancel={onCancel}
        visible={dialog}
      >
        데이터를 정말로 삭제할거?
      </Dialog>
      </>
      
    
    </ThemeProvider>
  );
}

export default App;
