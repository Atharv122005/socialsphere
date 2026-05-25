import React from "react";
import "./Services.css";
import { FaRobot, FaImage, FaVideo, FaChartLine } from "react-icons/fa";

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Services</h2>

      <div className="services-grid">

        <div className="service-card">
          <FaRobot className="service-icon" />
          <h3>AI Tools</h3>
          <p>Generate captions, hashtags & content using AI.</p>
        </div>

        <div className="service-card">
          <FaImage className="service-icon" />
          <h3>Media Editor</h3>
          <p>Edit photos & create creative designs.</p>
        </div>

        <div className="service-card">
          <FaVideo className="service-icon" />
          <h3>Video Studio</h3>
          <p>Create and manage short videos easily.</p>
        </div>

        <div className="service-card">
          <FaChartLine className="service-icon" />
          <h3>Analytics</h3>
          <p>View your engagement & growth performance.</p>
        </div>

      </div>
    </div>
  );
};

export default Services;
