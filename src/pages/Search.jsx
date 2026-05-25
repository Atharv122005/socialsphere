import {useState} from "react"
import { post } from "../data/PostData.js";
import "./Search.css"
export default function Search() {
    const[searchText ,setSearchText] = useState("");
    const[search ,setSearch] =useState("");

    const handleSearch = post.filter((item)=>(
        item.user.username.toLowerCase().includes(search.toLowerCase())
    ))
  return (
    <div className="container">
        <div className="element">
        <input style={{marginTop:"190px"}}
        type="text"
        placeholder="seach here"
        value={searchText}
        onChange={(e)=>setSearchText(e.target.value)}/>
        <button onClick={()=>setSearch(searchText)}>search</button>


        {handleSearch.map((item)=>(
            <div key={item.user.UserId}>
                <h3>{item.user.username}</h3>
                <img style={{height:"50px",width:"50px"}}
                src={item.user.src}/>
            </div>

        ))}

    </div>
    </div>
  )
}
