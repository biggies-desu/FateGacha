import { useEffect } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'

import Nav from './components/Nav.jsx'
import Home from './components/page/Home.jsx'
import FriendGacha from './components/page/FriendGacha.jsx'
import StoryBanner from './components/page/StoryBanner.jsx'
import CE_Database from './components/page/CE_Database.jsx'
import Servant_Database from './components/page/Servant_Database.jsx'


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
    fetch('http://localhost:8081/ce_data')
    .then(console.log("ce data in"))
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  },[])
  useEffect(() => {
    fetch('http://localhost:8081/fou')
    .then(console.log("fou"))
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  },[])

  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/FriendGacha' element={<FriendGacha />} />
      <Route path='/StoryBanner' element={<StoryBanner />} />
      <Route path='/CE_Database' element={<CE_Database />} />
      <Route path='/Servant_Database' element={<Servant_Database />} />
    </Routes>
    </>
  )
}

export default App
