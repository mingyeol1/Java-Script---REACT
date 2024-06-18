import React from "react";
import styled, { css } from "styled-components";
import {MdDelete, MdDone} from 'react-icons/md'
import { useTodoDispatch } from "../TodoContext";

// 삭제
const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
      color: #ff6b6b;
    }
    display: none;
`;

// todoitem
const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover{
    ${Remove}{
      display: initial;
    }
    }
`;

// checkCircle
const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props =>
        props.done &&
        css`
        border: 1px solid #38d9a9;
        color: #38d9a9;
        `
    }
`;

// text 영역
const Text = styled.div`
    flex: 1;  /* text 영역 전체  */
    font-size: 21px;
    color: #495057;
    ${props => 
        props.done && 
        css`
         color: #ced4da;
        `
    }
`;

function TodoItem({id, done, text}){

    // 기능 구현.
    const dispatch = useTodoDispatch();
    // 함수(펑션)
    const onToggle = () => dispatch({type:'TOGGLE', id});
    const onRemove = () => dispatch({type:'REMOVE', id});

    return(
    <TodoItemBlock>
        <CheckCircle done={done} onClick={onToggle}>{done && <MdDone />}</CheckCircle>
        <Text done={done}>{text}</Text>
        <Remove>
            <MdDelete onClick={onRemove}/>
        </Remove>
    </TodoItemBlock>
    );
}

export default React.memo(TodoItem);