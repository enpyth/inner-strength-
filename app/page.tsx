import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import OurPractice from '@/components/OurPractice'
import OurValues from '@/components/OurValues'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="services">
          <OurPractice />
        </section>
        <OurValues />
      </main>
      <Footer />
    </div>
  )
}

