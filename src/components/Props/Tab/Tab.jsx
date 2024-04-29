import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';

function Tab({ icon, text, to, ariaLabel}) {

  return (
    <li className="nav-item">
      <HashLink className="nav-link" to={to} smooth aria-label={ariaLabel}>
        <FontAwesomeIcon icon={icon} />
        <span className="link-text">{text}</span>
      </HashLink>
    </li>
  );
}

export default Tab;
