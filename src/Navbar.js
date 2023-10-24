import React from "react";
import "./style.css";
function NavBar(params) {
  return (
    <div>
      <nav id="nav-bar">
        <span class="material-symbols-outlined" id="earth-icon">
          public
        </span>
        <p className="nav-text">My travel journal</p>
      </nav>
    </div>
  );
}

export default NavBar;
