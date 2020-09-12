import React from "react";
import { Link } from "react-router-dom";

//Context API
const Services = () => {
  return (
    <>
      <div className="sp-container ">
        {/* <Link to="/products/medicaps"> */}
        <Link to="/medicaps">
          <div className="sp-card background-third medicaps-card">
            <h1>MediCaps</h1>
          </div>
        </Link>
      </div>
      <div className="sp-container  mc-smart ">
        <Link to="/products/smart_library">
          <div className="sp-card medicaps-card">
            <h1>Smart Library</h1>
          </div>
        </Link>
      </div>
      <div className="sp-container">
        <Link to="/products/digital_classes">
          <div className="sp-card background-second medicaps-card  mc-smart">
            <h1>Digital Classes</h1>
          </div>
        </Link>
      </div>
      <div className="sp-container ">
        <Link to="/products/health_center">
          <div className="sp-card background-third">
            <h1>Health Center</h1>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Services;
