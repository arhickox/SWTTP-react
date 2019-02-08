import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor: "#81b71a"}}>
      <Link className="navbar-brand" to="/">
      SWTTP
      </Link>
      <div>
        <ul className="navbar-nav">

          <li className="nav-item">
            <Link
              to="/species"
              className={window.location.pathname === "/species" ? "nav-link active" : "nav-link"}
            >
              <i class="far fa-user"></i> Species
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;