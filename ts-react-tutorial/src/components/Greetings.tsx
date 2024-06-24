import React from "react";


type GreetingsProps = {
    name: string;
    mark: string;               
    optional?: string;          // ? 는 옵셔널 체이닝 이라고 불림.
    onClick: (name: string) => void;  // 매개변수 name(문자열)을 받고, 반환값은 없음.
};
// ! 는 non-null 이란 값. 실제 값이 없지만. 널값이 들어갈 때 처리. 즉. 어떤 값이든 들어갈 것이다.
//------------------------------------------------------------
/*  React.FC 사용시 특징
    1. children 값이 props에 기본적으로 들어가 있음.
    2. defaultProps, propTypes, contextTypes 등 설정시 자동완성 처리.
    하지만, children이 옵셔널(<?>값)로 들어가 있는 상황에서 props 타입이 명확하지 않음
    때문에 React.FC 사용시에 Props 타입 안에 children 설정해야 함.
    그리고, defaultProps가 제대로 동작하지 않음.
*/

// const Greetings: React.FC<GreetingsProps> = ({name}) => (
//     <div>Hello, {name}</div>
// );
//---------------------------------------------------------------
// const Greetings = ({name}:GreetingsProps) => {
//     return(
//         <div>Hello, {name}</div>
//     );
// }

function Greetings({name,mark, optional, onClick}:GreetingsProps){
    const handleClick = () => onClick(name);
    return(
        <div>Hello, {name}, {mark}
        {optional && <p>{optional}</p>}
        <div>
            <button onClick={handleClick}>ClickMe!</button>
        </div>
        </div>
    )
}
Greetings.defaultProps = {
    mark: '!!!~'
}

export default Greetings;