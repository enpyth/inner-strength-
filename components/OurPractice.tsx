import { BookOpen, Users, Briefcase } from 'lucide-react'

export default function OurPractice() {
  const services = [
    {
      title: "Allied Health & Behaviour Support Services",
      icon: <BookOpen className="w-12 h-12 text-blue-600 mb-4" />,
      description: "Comprehensive support for individuals with diverse needs."
    },
    {
      title: "Inner Strength Programs",
      icon: <Users className="w-12 h-12 text-blue-600 mb-4" />,
      description: "Tailored programs to enhance personal growth and well-being."
    },
    {
      title: "Consultancy Services",
      icon: <Briefcase className="w-12 h-12 text-blue-600 mb-4" />,
      description: "Expert guidance for organizations and professionals."
    }
  ]

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Our Practice</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center">
          We focus on delivering person-centered services that cater to individual needs and goals.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 hover:underline">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

