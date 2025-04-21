import React from 'react'
import Navbar from './navbar'
import Footer from './Footer'

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
