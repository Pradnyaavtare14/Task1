// import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import './App.css'
import './index.css'
import Dinner from './components/Dinner'
import Exclusive from './components/Exclusive'
import Campaka from './components/Campaka'
import Relax from './components/Relax'
import Footer from './components/Footer'
import Daysinlife from './components/Daysinlife'
import Rooms from './components/Rooms'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Dinner/>
      <Exclusive/>
      <Campaka/>
      <Relax/>
      <Rooms/>
      <Daysinlife/>
      <Footer/>
    </div>
    
  )
}

export default App