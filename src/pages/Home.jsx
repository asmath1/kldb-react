import HeroBanner from '../components/home/HeroBanner'
import MinistersPanel from '../components/home/MinistersPanel'
import AboutSection from '../components/home/AboutSection'
import NewsSection from '../components/home/NewsSection'
import ServicesSection from '../components/home/ServicesSection'
import FodderSection from '../components/home/FodderSection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import CounterSection from '../components/home/CounterSection'
import ContactSection from '../components/home/ContactSection'

export default function Home() {
  return (
    <>
      <HeroBanner />
      <MinistersPanel />
      <AboutSection />
      <NewsSection />
      <ServicesSection />
      <FodderSection />
      <WhyChooseUs />
      <CounterSection />
      <ContactSection />
    </>
  )
}
