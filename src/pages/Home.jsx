import "./Home.css";
import { post, user } from "../data/PostData.js";
import { FaRegHeart, FaRegComment,FaHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import Post from "../components/Post.jsx"

function Home() {
  const navigate = useNavigate();
  let [like , setLike]=useState(false);
  let [count ,setCount]=useState(0);

  let handlelike =()=>{
    setLike(prev=>!prev);
    setCount((prev)=>prev+1);
  }

  const handleShare = () => {
  alert("Link copied!");
};

  return (
    <div className="home-container">
      <div><Post></Post></div>


      <div className="home">
        {post.map((post) => (
          <div className="home-post" key={post.PostId}>
            <div className="post-user">
              <img src={post.user.src} alt={post.user.username} />
              <p>{post.user.username}</p>
            </div>

            <div className="home-post-images">
              {post.image.map((img) => (
                <img key={img.ImageId} src={img.src} alt="post" />
              ))}
            </div>

            <div className="icon">
              <span className="icon1" onClick={handlelike}>
                {like ? <FaHeart style={{color:"red"}} />:<FaRegHeart />}
                <h6>count={count}</h6>
              </span>
              </div>

              <span className="icon2" onClick={handleShare}>
                <IoIosShareAlt />
              </span>
            
            
              <span
                onClick={() => navigate("/comments")}
                style={{ cursor: "pointer" }}
              >
                <FaRegComment />
              </span>
              
            
          </div>
        ))}
      </div>


      <div className="home-suggested">
        {user.map((info) => (
          <div className="home-suggested-user" key={info.userId}>
            <img src={info.src} alt={info.username} />
            <span>{info.username}</span>
          </div>
        ))}
      </div>
      
      
    </div>
  );
}

export default Home;
