import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        {/* Sections will be added here in order */}
      </main>
      <Footer />
    </div>
  )
}
