import React, { useEffect } from 'react'
import {Link} from 'react-router-dom';

// navbar using bootstrap

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-xl">
  <a class="navbar-brand" href="./">
    <img src='/src/component/imgandsound/fgo.png' alt="" width="111.6" height="50"></img>
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="dropdown-toggle btn btn-dark rounded-0" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            FGO Gacha Simulator
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/Friendgacha">Friend point simulator</a></li>
            <li><a class="dropdown-item" href="/Storygacha">Story banner simulator</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="dropdown-toggle btn btn-dark rounded-0" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Database
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/Friendgacha">Servant</a></li>
            <li><a class="dropdown-item" href="/Storygacha">Craft essence</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="dropdown-toggle btn btn-dark rounded-0" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Calculator
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/Friendgacha">Servant EXP Calculator</a></li>
            <li><a class="dropdown-item" href="/Storygacha">Craft Essence EXP Calculator</a></li>
          </ul>
        </li>
      </ul>
    </div>
      <span>
        <a href='https://github.com/biggies-desu/FateGacha' class='btn btn-dark rounded-0'>Check out Github!</a>
      </span>
  </div>
</nav>
)
}

export default Navbar