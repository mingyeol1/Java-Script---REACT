import React from 'react';
import {createGlobalStyle} from 'styled-components'
import TodoTemplate from './compoenets/TodoTemplete';
import TodoHead from './compoenets/TodoHead';
import TodoList from './compoenets/TodoList';
import TodoCreate from './compoenets/TodoCreate';
import { TodoProvider } from './TodoContext';

// 글로벌 스타일을 추가하고 싶을 때 사용하는 createGlobalStyle
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
