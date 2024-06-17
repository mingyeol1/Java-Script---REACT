import React,{useContext} from "react";
// 20.06.17
// 2.Context를 불러다 사용하기.. import
import { UserDispatch } from "../App";


const User = React.memo(function User({user}){  //24.06.17 -- onRemove, onToggle 제거
   
    const dispatch = useContext(UserDispatch);

return(
    <div>
        <b 
        style={{
            cursor: 'pointer',
            color: user.active ? 'green' : 'black'
        }}
        onClick={() => {
            dispatch({type: 'TOGGLE_USER', id: user.id});
        }}
        >{user.username}</b> <span>({user.email})</span>
        <button onClick={() => {
            dispatch({type: 'REMOVE_USER', id: user.id});
        }}> 삭제</button>
    </div>
    );
});

function UserList({users}){  //24.06.17 -- onRemove, onToggle 제거
   
    
    return(
        <div>
           
           {users.map((user) => (
            <User 
            user={user} 
            key={user.id} 
            />
           ))}
        </div>
    );
}

export default React.memo(UserList);