import React, { Dispatch, createContext, useContext, useReducer, useRef } from "react";


type Todo = {
  id: number;
  text: string;
  done: boolean;
}


type State = Todo[];


type Action = 
  | { type: 'CREATE'; todo: Todo }
  | { type: 'TOGGLE'; id: number }
  | { type: 'REMOVE'; id: number }

type TodoDispatch = Dispatch<Action>

const initialTodos: State = [
  {
    id: 1,
    text: '프로젝트 생성',
    done: true
  },

];

function todoReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type`);
  }
}


const TodoStateContext = createContext<State | null>(null);
const TodoDispatchContext = createContext<TodoDispatch | null>(null);
const TodoNextIdContext = createContext<React.MutableRefObject<number> | null>(null);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5); //
  
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}


export function useTodoState() {
  const state = useContext(TodoStateContext);
  if (!state) {
    throw new Error('Cannot find TodoProvider');
  }
  return state;
}

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find TodoProvider');
  }
  return dispatch;
}

export function useTodoNextId() {
  const nextId = useContext(TodoNextIdContext);
  if (!nextId) {
    throw new Error('Cannot find TodoProvider');
  }
  return nextId;
}