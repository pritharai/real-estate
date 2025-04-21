import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Projects from './pages/Projects'
import Testimonials from './pages/Testimonials'
import Contact from './components/Contact'
import Layout from './components/Layout'
import ProjectDetail from './components/ProjectDetail';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <Router>
      <div className="w-full overflow-hidden">
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Header />
                <Projects />
                <Testimonials />
                <Contact />
              </Layout>
            }
          />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          <Route path="/testimonials" element={<Layout><Testimonials /></Layout>} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          <Route path="/" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
