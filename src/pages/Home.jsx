import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServicesOverview from '../components/ServicesOverview'
import CaseStudies from '../components/CaseStudies'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <ServicesOverview />
        <CaseStudies />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
