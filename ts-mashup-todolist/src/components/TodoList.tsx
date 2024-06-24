import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../TodoContext";


//TodoList는 아이템들을 보여주기 위해 만들어짐.
const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    
   // background:gray; /* 사이즈 확인용 나중엔 안씀. */
    
    overflow-y: auto;

`;

function TodoList() {

    const todos = useTodoState();

    return (
    <TodoListBlock>
     {todos.map(todo => (
        <TodoItem 
        key={todo.id}
        id={todo.id}
        text={todo.text} 
        done={todo.done} />
     ))} 
    </TodoListBlock>);
}

export default TodoList;