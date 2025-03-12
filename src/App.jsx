import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import SideNav from './components/SideNav'
import HomePage from './components/HomePage'

function App() {
  return (
    <Router>
      <div className="app">
        <SideNav />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add more routes for other components */}
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
