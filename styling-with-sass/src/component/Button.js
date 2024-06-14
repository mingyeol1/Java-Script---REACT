// Button
import React from 'react';
import './Button.scss'
import classNames from 'classnames';

//1. 버튼 생성
//2. 버튼 사이즈 조정  size가 (large, medium, samll) 있다면
//3. 버튼 색상 설정하기.  (blue, gray, pink)
//4. outline 옵션 : 버튼에서 테두리만 보여지게 설정
//5. fullWidth : 버튼이 전체 너비를 차지하도록 구현
function Button({children, size, color, outline, fullWidth, ...rest}){
    // className='Button large' join을 쓰면 이렇게 만들어짐.
    // ['Button',size].join(' ') or `Button $(size)` 둘 중 고르셈.
    //클래스에 관련된 처리를 쉽게하는 라이브러리가 있음 classnames
    return( 
    <button className={classNames('Button', size, color, {outline, fullWidth})}
   //이벤트 처리는 rest로 처리 했음.
    {...rest}
    >
     {children}
    </button>);
}

Button.defaultProps = { //컴포넌트 프롭스 디폴트값 설정.
    size: 'medium',
    color: 'blue'
};

export default Button;
