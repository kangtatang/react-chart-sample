import React from "react";
import { Link } from "react-router-dom";
import "./Common.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/stock-list">
                  Stock List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}