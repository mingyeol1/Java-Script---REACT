import React,{ createContext, useContext, useReducer, useRef} from "react";

const initalSatete ={
    state:{
        loading: true,
        posts: null,
        error: null
    }
    }

function reducer(state, action) {
    switch(action.type) {
      case 'LOADING':
        return {
          loading: true,
          posts: null,
          error: null
        };
      case 'SUCCESS':
        return {
          loading: false,
          posts: action.posts,
          error: null
        };
      case 'ERROR':
        return {
          loading: false,
          posts: null,
          error: action.error
        };
      default:
        throw new Error(`Unhandled action type : ${action.type}`);
    }
  }

  const PostsStateContext = createContext();
  const PostsDispatchContext = createContext();

  export function PostsProvider(){
    const [state, dispatch] = useReducer(reducer, initalSatete);

    return (
        <PostsStateContext.Provider value={state}> {/* state를 Context로 전달 */}
            <PostsDispatchContext.Provider value={dispatch}> {/* dispatch를 Context로 전달. */}
            </PostsDispatchContext.Provider>
        </PostsStateContext.Provider>
    );
  }

  export function usePostsState(){
    const context = useContext(PostsStateContext);
    if(!context){
        throw new Error('에러발생요')
    }
    return context;
  }
  
  export function usePostsDispatch(){
    const context = useContext(PostsDispatchContext);
    if(!context){
        throw new Error('에러발생요')
    }
    return context;
  }
  
