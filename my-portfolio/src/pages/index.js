import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import ProjectSection from '../components/ProjectSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Leticia&aposs Portfolio</title>
        <meta name="description" content="Welcome to my personal portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main>
        <HeroSection />
        <ProjectSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}