import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";

function Tab({ icon, text, path, href }) {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(path);
  }

  return (
    <li className="nav-item">
      <a href={href} onClick={handleNavigation} className="nav-link">
        <FontAwesomeIcon icon={icon} />
        <span className="link-text">{text}</span>
      </a>
    </li>
  );
}

export default Tab;
