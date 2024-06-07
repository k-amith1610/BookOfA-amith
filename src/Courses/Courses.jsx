import React from 'react'
import Navbar from '../components/Navbar'
import Course from "../components/Course"
import Footer from '../components/Footer'

const Courses = () => {
  return (
    <div className="min-h-screen dark:bg-slate-900">
      <Navbar />
      <Course />
      <Footer />
    </div>
  )
}

export default Courses