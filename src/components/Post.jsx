import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
export default function Post(){
    const[image ,setImage]=useState([]);

    
    function handleimage(event){
        const file =event.target.files[0];
        console.log(file);
        if(file){
        setImage(prev=>
        [...prev,{id:uuidv4(),
            src:URL.createObjectURL(file)
        }])}
    
        
    }
    function handledelete(id){
        setImage(prev=>prev.filter(img=>img.id!==id));

    }
    return (
        <>
        <input type="file" onChange={handleimage}></input>
        {image.map((img)=>(
            <div key={img.id}>
            <img
            src={img.src}/>
            <button onClick={()=>handledelete(img.id)}>
            delete button

            </button>
            </div>
        ))}
       
        
        </>
    )
}