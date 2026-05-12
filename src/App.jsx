import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Experience from './components/Experience'
import Services from './components/Services'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ProjectDetail from './components/ProjectDetail'

function Home() {
  return (
    <div className="bg-navy-900 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Experience />
        <Services />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
