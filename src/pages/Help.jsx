import React from "react";
import "./Help.css";
import { FaQuestionCircle, FaEnvelope, FaBook } from "react-icons/fa";

const Help = () => {
  return (
    <div className="help-container">
      <h2 className="help-title">Help & Support</h2>

      <div className="help-section">
        <FaQuestionCircle className="help-icon"/>
        <div>
          <h3>FAQs</h3>
          <p>Find answers to common questions.</p>
        </div>
      </div>

      <div className="help-section">
        <FaEnvelope className="help-icon"/>
        <div>
          <h3>Contact Us</h3>
          <p>Email support for direct queries.</p>
        </div>
      </div>

      <div className="help-section">
        <FaBook className="help-icon"/>
        <div>
          <h3>Documentation</h3>
          <p>Learn how to use all features effectively.</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
