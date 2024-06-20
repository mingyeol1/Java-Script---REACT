import React from "react";
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';

function MyPage(){


    // useNavigete() 훅. 이벤트 처리시 사용.
    // 랜더핑 과정에서 useNavigate() 훅을 사용할 수 없다는 경고 후 동작 x
    // let nav = useNavigate();
    // let loginYN = false; //로그인 여부 false
    // if(!loginYN){
    //     nav('/');  // useNavigete() 훅. 이벤트 처리시 사용.
    // }


    //쿼리 스트링을 사용하여 login여부를 전달 *(true or false)
    // 로그인 여부에 따라서 동작하는지 확인하셈.
    const [obj] = useSearchParams();

    //Navigete 컴포넌트
    let loginYN = obj.get('login'); // 로그인? 아님.
    if(!loginYN) {
        return <Navigate to={'/'} replace={true}/>
    }

return(
    <div>
        여기는 로그인 한 사용자만 입장 가능함.
    </div>
)

}

export default MyPage;