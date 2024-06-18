import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`

`;

function TodoHead(){
    return(
        <TodoHeadBlock>
            <h1>2024년 06월 18일</h1>
            <div>화요일</div>
            <div>할 일 2개 남음</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;