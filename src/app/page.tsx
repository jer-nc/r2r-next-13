import CarouselSection from '@/sections/carousel/CarouselSection'
import HowItWorksSection from '@/sections/como-funciona/HowItWorksSection'
import ContactSection from '@/sections/contact/ContactSection'
import Footer from '@/sections/footer/Footer'
import HomeSection from '@/sections/home/HomeSection'
import PorqueSection from '@/sections/porque-elegirnos/PorqueSection'
import SolutionsSection from '@/sections/soluciones/SolutionsSection'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <HomeSection />
      <SolutionsSection />
      <PorqueSection />
      <HowItWorksSection />
      <CarouselSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
