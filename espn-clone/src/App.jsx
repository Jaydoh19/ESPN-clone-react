import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './pages/Hero'
import Scores from './pages/Scores'
import Standings from './pages/Standings'
import Stats from './pages/Stats'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Teams from './pages/Teams'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/scores" element={<Scores />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App