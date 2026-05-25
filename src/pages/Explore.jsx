
import "./Explore.css";
import { post } from "../data/PostData.js";
import { useState } from "react";


export default function Explore() {
  const[image ,setImage]=useState(null);

  return (
    <div className="explore">
      <div className="explore-content">

        <div className="explore-container">
          {post.map((item) => (
            <div className="explore-post" key={item.PostId}>
              <div className="explore-post-images">
                {item.image.map((img) => (
                  <img
                    key={img.ImageId}
                    src={img.src}
                    alt="post"
                    onClick={()=>setImage(img.src)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>


      <div>
        { image &&
        (<div onClick={()=>setImage(null)}
        style={{            
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",            
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:"black"}}>
              <img
              src={image}
              style={{width: "60%",
              height: "70%",
              borderRadius:"15px"}}/>
        </div>)}


      </div>
    </div>
  );
}

