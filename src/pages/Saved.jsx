import React from "react";
import "./Saved.css";
import { FaBookmark } from "react-icons/fa";

const Saved = () => {
  return (
    <div className="saved-container">
      <h2 className="saved-title">Saved Posts</h2>

      <div className="saved-empty">
        <FaBookmark className="saved-icon"/>
        <p>No saved posts yet.</p>
      </div>
    </div>
  );
};

export default Saved;
