import React, { useEffect } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar"
import Friendgacha from './component/page/Friendgacha';
import Home from './component/page/Home'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

//using vite running in port 5173
//npm run dev

function App() {
  useEffect(() => {
        fetch('http://localhost:8081/fgo_servant_data')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
  },[])
  useEffect(() => {
    fetch('http://localhost:8081/exp_friendpoint')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
},[])
useEffect(() => {
  fetch('http://localhost:8081/command_friendpoint')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
},[])
useEffect(() => {
  fetch('http://localhost:8081/ce_friendpoint')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
},[])



  return (
      <BrowserRouter><Navbar />
      <Routes>
        <Route>
        <Route index element={<Home />} />
        <Route path="/Friendgacha"  element={<Friendgacha />}/>
        </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
