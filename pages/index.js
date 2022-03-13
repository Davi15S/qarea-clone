import { useSelector } from 'react-redux'
import Awards from '../components/Body/Awards'
import Clients from '../components/Body/Clients'
import Container from '../components/Body/Container'
import Help from '../components/Body/Help'
import Hero from '../components/Body/Hero'
import Projects from '../components/Body/Projects'
import RedContainer from '../components/Body/RedContainer'
import Testimonials from '../components/Body/Testimonials'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
  const navbarActive = useSelector((state) => state.navbarActive.value)

  return (
    <div>

      <Navbar />

      <div className={navbarActive && "h-screen overflow-hidden"}>
        <Hero />
        <Help />
        <Container />
        <RedContainer />
        <Clients />
        <Projects />
        <Testimonials />
        <Awards />
      </div>
    </div>
  )
}
