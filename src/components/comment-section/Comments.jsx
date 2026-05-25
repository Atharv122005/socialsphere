// import React from 'react'
// import { useState } from "react";
// import { v4 as uuidv4 } from 'uuid';

// export default function Comments({ addcomment }) {
//     const [comment, setComment] = useState("");

//     let inputhandle = (event) => {
//         setComment(event.target.value);
//     }

//     let handlesubmit = (event) => {
//         event.preventDefault();
        
//         addcomment(comment);
//         setComment("");

//     }


//     return (
//         <div  style={{margin:"14px"}}>
//             <form onSubmit={handlesubmit} >

//             <input
//                 type="text"
//                 placeholder="Enter  your  message"
//                 value={comment}
//                 onChange={inputhandle}
//                 style={{borderRadius:"20px",padding:"20px",width:"450px",textAlign:"center",marginBottom:"30px"}}></input>

//             <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
//                 <button style={{backgroundColor:"lightblue" ,padding:"9px 29px",borderRadius:"5px",}} type="submit ">message</button>

//             </div>
//              </form>
//         </div>
      
    
//   )
// }






import React from 'react'
import { useState } from "react";


export default function Comments({ addcomment }) {
    const [comment, setComment] = useState("");

    let inputHandle = (event) => {
        setComment(event.target.value);
    }

    
    let handleSubmit = (event) => {
        event.preventDefault();
        
        addcomment(comment);
        setComment("");

    }


    return (
        <div  style={{margin:"14px"}}>
            <form onSubmit={handleSubmit} >

            <input
                type="text"
                placeholder="Enter  your  message"
                value={comment}
                onChange={inputHandle}
                style={{borderRadius:"20px",padding:"20px",width:"450px",textAlign:"center",marginBottom:"30px"}}></input>

            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <button style={{backgroundColor:"lightblue" ,padding:"9px 29px",borderRadius:"5px",}} type="submit ">message</button>

            </div>
             </form>
        </div>
      
    
  )
}

