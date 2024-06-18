//useReduver를 사용하여 상태를 관리하는 TodoProvider 컴포넌트
import React, { createContext, useContext, useReducer } from "react";

const initialTodos = [
    {
      id: 1,
      text: '프로젝트 생성',
      done: true
    },
    {
        id: 2,
        text: '컴포넌트 스타일링',
        done: true
      },
      {
        id: 3,
        text: 'Context 만들어 사용',
        done: false
      },
      {
        id: 4,
        text: '기능구현',
        done: false
      },
      {
        id: 5,
        text: '복습',
        done: false
      }
];

function todoReducer(state, action){
    // todo생성, 제거, 토글(완료여부)을 위한
    switch(action.type){
        case 'CREAT':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? {...todo, done: !todo.done} : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type : ${action.type}`)
    }
}

// Context 생성
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
// NextId를 넘거야 하는 이유 : Create시 NextId가 필요함.
const TodoNextIdContext = createContext();

export function TodoProvider({children}){
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5); //기본값 설정이 되어 초기값이 0이 아님.
    
    return (
        <TodoStateContext.Provider value={state}> {/* state를 Context로 전달 */}
            <TodoDispatchContext.Provider value={dispatch}> {/* dispatch를 Context로 전달. */}
               <TodoNextIdContext.Provider value={nextId}>
                 {children}
               </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}


/* useContext에 직접 사용하는 대신에 useContext를 사용하는 Hook 만들어 내보내기 */
export function useTodoState(){
    return useContext(TodoStateContext);
}

export function useTodoDispatch() {
    return useContext(TodoDispatchContext);
}

export function useTodoNextId(){
    return useContext(TodoNextIdContext)
}