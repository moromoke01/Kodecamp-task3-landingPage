import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Navbar from './Components/Navbar'
import Gallery from './Components/Pages/Gallery'
import ProjectPage from './Components/Pages/Project/ProjectPage'
import Footer from './Components/Footer'

function App() {
  // 

  return (
    <>
      <div>

      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/ProjectPage" element={<ProjectPage />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
    </>
  )
}

export default App
