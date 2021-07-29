import React, { } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid justify-content-center">
        <ul class="navbar-nav ">
          <li class="nav-item">
            <Link class="nav-link" to="/">
              Pokedex
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
        </div>
      </nav>
	</header>

  )
}

export default Header