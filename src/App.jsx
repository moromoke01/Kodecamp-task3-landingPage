import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Navbar from './Components/Navbar'
import Gallery from './Components/Pages/Gallery'
import ProjectPage from './Components/Pages/ProjectPage'

function App() {
  // 

  return (
    <>
      <div>
        
      {/* <Navbar /> */}

      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/ProjectPage" element={<ProjectPage />}></Route>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
