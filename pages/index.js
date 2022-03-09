import { useSelector } from 'react-redux'
import Hero from '../components/Body/Hero'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
  const navbarActive = useSelector((state) => state.navbarActive.value)

  return (
    <div>

      {/* Navbar */}
      <Navbar />

      <div className={navbarActive && "h-screen overflow-hidden"}>
        <Hero />
      </div>
    </div>
  )
}
