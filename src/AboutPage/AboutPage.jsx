import React from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import About from '../components/About'

const AboutPage = () => {
  return (
    <div>
      <div className="min-h-screen dark:bg-slate-900">
            <Navbar />
            <About />
            <Footer />
        </div>
    </div>
  )
}

export default AboutPage
