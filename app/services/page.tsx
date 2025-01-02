import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BookOpen, Users, Briefcase } from 'lucide-react'

export default function OurServices() {
  const services = [
    {
      title: "Allied Health & Behaviour Support Services",
      icon: <BookOpen className="w-12 h-12 text-blue-600 mb-4" />,
      description: "Comprehensive support for individuals with diverse needs, including occupational therapy, speech pathology, and behavior support."
    },
    {
      title: "Inner Strength Programs",
      icon: <Users className="w-12 h-12 text-blue-600 mb-4" />,
      description: "Tailored programs to enhance personal growth and well-being, focusing on skill development, social interaction, and emotional regulation."
    },
    {
      title: "Consultancy Services",
      icon: <Briefcase className="w-12 h-12 text-blue-600 mb-4" />,
      description: "Expert guidance for organizations and professionals in implementing inclusive practices and neurodiversity-affirming approaches."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">Our Services</h1>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center">
              We offer a range of services designed to support individuals, families, and communities in fostering inclusive environments and personal growth.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-center mb-4">{service.icon}</div>
                  <h2 className="text-xl font-semibold mb-2 text-blue-700">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

