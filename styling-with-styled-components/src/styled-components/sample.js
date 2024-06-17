import React from 'react';
import styled, { css } from 'styled-components';

const Circle = styled.div`
    width: 5rem; 
    height: 5rem;
    background: ${props => props.color || 'black'};
    border-radius: 50%;

    ${props =>
        props.huge &&
        css `
        width: 10rem; /*css는 styled-components에서 불러온 모듈.*/
        height: 10rem;
        `}
    `;



export default Circle;