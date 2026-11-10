import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        <About />
      </main>
      <Footer />
    </div>
  )
}
