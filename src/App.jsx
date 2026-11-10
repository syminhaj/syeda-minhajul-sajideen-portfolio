import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Projects from './components/Projects'
import Internships from './components/Internships'
import Leadership from './components/Leadership'
import SoftSkills from './components/SoftSkills'
import Footer from './components/Footer'
import { internshipsList, leadershipList } from './data/portfolioData'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <About />
        <TechnicalSkills />
        <Projects />
        {internshipsList && internshipsList.length > 0 && <Internships />}
        {leadershipList && leadershipList.length > 0 && <Leadership />}
        <SoftSkills />
      </main>
      <Footer />
    </>
  )
}
