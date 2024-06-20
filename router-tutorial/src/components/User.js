import React from "react";
import { Link, Outlet, useLocation, useParams, useSearchParams } from "react-router-dom";
import Header from "./Header";


const profileData = {
        testuser:{
          name: '홍길동',
          age:'미상',
          description:'동해번쩍. 서해번쩍 신출귀몰 도적.'
        },
        testuser2:{
          name: '이순신',
          age:'46',
          description:'세계사에 유래없는 해군제독.. 왜란 종결자.'
        },
      }


 function User(){

    //useLocation() 사용
    const location = useLocation();
    console.log(location);
    console.log(location.search); //문자열로 해당 값을 추려냄.

   

    

    //useSearchParmas() 사용
    const [obj, setObj] = useSearchParams();
    let id = obj.get('id');
    // let key = obj.get('key');
    // console.log('obj : ' + obj);
    // console.log('id : ' + id );
    // console.log('key : ' + key)
    // console.log(id);
    // obj.forEach(i => console.log(i));
    // obj.set("id", "test1111")
    // console.log("obj.set 처리 후 : " + obj.get("id"));    
 const param = useParams();
 const {username} = param;
 const profile = profileData[username];
   
 
 return(
        <div>
            <Header />
            <li><Link to="/">홈</Link></li>
            <h2>User 페이지</h2>
            <p>이 페이지는 사용자의 정보를 처리하여 보여주는 페이지임.</p>
            <div>
                {obj.get('id') && <h1>{id}</h1>}
            </div>

            <hr />
            <div>
                <h3>profile : </h3>
                <h4>{profile ? 
                 <div>
                    <h4>{username}({profile.name})</h4>
                    <h5>나이는 : {profile.age}</h5>
                    {profile.description && <p>{profile.description}</p>}
                 </div>
                 :
                 <div>존재하지 않는 유저임.</div>
                 }
                 </h4>
            </div>
        </div>
    );
}

export default User;