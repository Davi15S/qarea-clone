import { useSelector } from 'react-redux'
import Clients from '../components/Body/Clients'
import Container from '../components/Body/Container'
import Help from '../components/Body/Help'
import Hero from '../components/Body/Hero'
import RedContainer from '../components/Body/RedContainer'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
  const navbarActive = useSelector((state) => state.navbarActive.value)

  return (
    <div>

      {/* Navbar */}
      <Navbar />

      <div className={navbarActive && "h-screen overflow-hidden"}>
        <Hero />
        <Help />
        <Container />
        <RedContainer />
        <Clients />
      </div>
    </div>
  )
}
