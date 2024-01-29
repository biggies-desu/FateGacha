import React, { useEffect } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Friendgacha from './component/page/Friendgacha';
import Storygacha from './component/page/Storygacha';
import Home from './component/page/Home'
import Navbar from './component/navbar';
import Footer from './component/Footer';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle'
import $ from 'jquery';
import Popper from 'popper.js';

//using vite running in port 5173
//npm run dev

function App() {
  useEffect(() => {
        fetch('http://localhost:8081/fate_servant_data')
        .then(console.log("fate servent data in"))
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
  },[])
  useEffect(() => {
    fetch('http://localhost:8081/exp_friendpoint')
    .then(console.log("exp friendpoint data in"))
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
},[])
useEffect(() => {
  fetch('http://localhost:8081/command_friendpoint')
  .then(console.log("command friendpoint data in"))
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
},[])
useEffect(() => {
  fetch('http://localhost:8081/ce_friendpoint')
  .then(console.log("ce friendpoint data in"))
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
        <Route path="/Storygacha"  element={<Storygacha />}/>
        </Route>
      </Routes>
      <Footer /> 
      </BrowserRouter>
  )
}

export default App
