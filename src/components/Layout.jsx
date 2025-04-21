import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

const Layout = ({ children }) => {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
