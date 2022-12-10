import React, { useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import map from "../../utils/HeadersMap";
import bell from "../../assets/icons/bell-ring.png";
import profile from "../../assets/icons/user.png";
import logout from "../../assets/icons/logout.png";
import TextTooltip from "../Service/Tooltip/TextTooltip/TextTooltip";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showNotification, setShowNotification] = useState(true);
  const [showIndicator, setShowIndicator] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const showNotificationHandler = () => {
    setShowNotification(!showNotification);
    showIndicatorHandler();
  };

  const showIndicatorHandler = () => {
    setShowIndicator(!showIndicator);
  };

  const logoutHandler = () => {
    navigate("/login");
  };

  console.log(showNotification);

  return (
    <div className="dashboard-right__header">
      <div className="header-content">
        <div className="page-content">
          <div className="header-name">
            <img src={map.get(location.pathname).icon}  alt="icon" />
          </div>
          {map.get(location.pathname).headerName}
        </div>
        <div className="header-buttons">
          <div
            className="header-notification-button"
            onClick={(showNotification) =>
              setShowNotification(!showNotification)
            }
          >
            <div className="notification-content">
              <TextTooltip tooltipText="Show notification">
                <img src={bell} alt={"notification"} />
              </TextTooltip>
              {showIndicator && <div className="indicator"></div>}
            </div>
            {/* <div className='notification-list' style={{"display":showNotification?"block":"none"}}></div> */}
          </div>
          <div className="header-logout-button">
            <TextTooltip tooltipText={"Logout"}>
              <img src={logout} onClick={logoutHandler} alt="logout" tool />
            </TextTooltip>
          </div>
          <div className="header-profile-button">
            <Link to="/dashboard/your-profile">
              <TextTooltip tooltipText="Your profile">
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={profile}
                  alt="user"
                />
              </TextTooltip>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
