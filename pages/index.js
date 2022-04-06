import { useSelector } from 'react-redux'
import Awards from '../components/Body/Awards'
import Clients from '../components/Body/Clients'
import Container from '../components/Body/Container'
import Form from '../components/Body/Form'
import Help from '../components/Body/Help'
import Hero from '../components/Body/Hero'
import Projects from '../components/Body/Projects'
import RedContainer from '../components/Body/RedContainer'
import Testimonials from '../components/Body/Testimonials'
import Navbar from '../components/Navbar/Navbar'
import Head from "next/head"
import Details from '../components/Body/Details'
import News from '../components/Body/News'
import LetsTalk from '../components/Body/LetsTalk'
import Footer from '../components/Body/Footer'

export default function Home() {
  const navbarActive = useSelector((state) => state.navbarActive.value)

  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

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
        <Form />
        <Details />
        <News />
        <LetsTalk />
        <Footer />
      </div>
    </div>
  )
}
