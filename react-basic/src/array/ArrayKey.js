import React from "react";

// const item = (props) => {
//     return(
//         <div>
//             {props.text}
//         </div>
//     )
// }


function ArrayKey(){

    const test = ['a','b','z','c','d','e'];
    const test2 = [
    {
        id: 0,
        text: 'a'
    },
    {
        id: 5,
        text: 'z'
    },
    {
        id: 1,
        text: 'b'
    },
    {
        id: 2,
        text: 'c'
    },
    {
        id: 3,
        text: 'd'
    }
    ]

    return(
        <div>
        {/* {test.map(item => <div>{item}</div>)} */}
        {test2.map(item => 
            <div key={item.id}>{item.text}</div>
        )}
        </div>
    )
}

export default ArrayKey;