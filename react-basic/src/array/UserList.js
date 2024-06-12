import React from "react";


//User 컴포넌트
function User({user}){ //User 대문자인 이유는 객체라서.
return(
    <div>
        <b>{user.username}</b> <span>({user.email})</span>
    </div>
    );
}

function UserList({users}){
   
    
    return(
        <div>
            {/* array.map() 함수를 이용한 컴포넌트 반복*/}
           {/* {users.map(user => (
            <User user={user} key={user.id} />
           ))} */}
           {users.map((user, index) => (
            <User user={user} key={index} />
           ))}
        </div>
    );
}

export default UserList;