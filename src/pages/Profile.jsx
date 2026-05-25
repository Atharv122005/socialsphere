import "./Profile.css";
import user from "../assets/user.png";
import { CiSettings } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { CiCamera } from "react-icons/ci";

export default function Profile() {
  return (
    <div className="profile-container">
      <img style={{height:"100px"}}  src={user} alt="profile" />


      <div className="top-section">
        <div className="profile-img">

        </div>

        <div className="profile-info">
          <div className="row">
            <h2 className="username">omkar_dravid</h2>
            <span className="verified"><CiSettings /></span>
          </div>

          <div className="stats">
            <span><b>0</b> posts</span>
            <span><b>0</b> followers</span>
            <span><b>11</b> following</span>
          </div>

          <div className="tag">@omkar_dravid</div>

          <div className="buttons">
            <button className="btn">Edit profile</button>
            <button className="btn">View archive</button>
          </div>
        </div>
      </div>

      <div className="story-row">
        <div className="story-item">
          <div className="circle">+</div>
          <p>New</p>
        </div>
      </div>

      <div className="tab-bar">
        <div className="tab active"><CiCamera /></div>
        <div className="tab"></div>
        <div className="tab"><FaUser/></div>
      </div>

      <div className="empty-section">
        <div className="empty-icon">📷</div>
        <h3>Share Photos</h3>
        <p>When you share photos, they will appear on your profile.</p>
        <a href="#" className="link">Share your first photo</a>
      </div>

    </div>
  );
}
