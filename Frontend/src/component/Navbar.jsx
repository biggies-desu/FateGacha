import React, { useEffect } from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-xl">
  <a class="navbar-brand" href="./">Home</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/Friendgacha">
            <button type="button" class="btn btn-dark rounded-0">
              Friendpoint Gacha
            </button>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/Storygacha">
            <button type="button" class="btn btn-dark rounded-0">
              Story Gacha (wip)
            </button>
          </Link>
        </li>
      </ul>
    </div>
      <span>
        <Link to="#">
          <button type="button" class="btn btn-dark rounded-0">
            Whatever link
          </button>
        </Link>
      </span>
  </div>
</nav>
)
}

export default Navbar