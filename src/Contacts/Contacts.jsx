import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Contacts = () => {
    return (
        <div className="min-h-screen dark:bg-slate-900">
            <Navbar />
            <Contact />
            <Footer />
        </div>
    )
}

export default Contacts
