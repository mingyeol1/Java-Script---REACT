import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";


//TodoList는 아이템들을 보여주기 위해 만들어짐.
const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    
   // background:gray; /* 사이즈 확인용 나중엔 안씀. */
    
    overflow-y: auto;

`;

function TodoList() {
    return (
    <TodoListBlock>
    <TodoItem text="프로젝트 생성임" done={true} />
    <TodoItem text="프로젝트 리액트" done={true} />
    <TodoItem text="컴포넌트 스타일링" done={false} />
    <TodoItem text="Contect 구현하기" done={false} />
    <TodoItem text="복습임" done={false} />    
    </TodoListBlock>);
}

export default TodoList;