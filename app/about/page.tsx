import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">About Us</h1>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-6">
                We are an organisation working on Kaurna land, committed to fostering a neurodiversity-affirming approach that ensures all Australians, regardless of neurodivergence or abilities, lead active and fulfilling lives within their communities. We provide a wide range of services and assistance for children, youth and adults with mental health conditions and/or disabilities.
              </p>
              <p className="text-gray-600 mb-6">
                At 2B Inclusive, our core belief is that true fulfilment is attainable through evidence-based best practices, active client participation, and the provision of person-centred services. We are dedicated to empowering children, young people, and adults to unleash their full potential.
              </p>
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">We provide services and supports to:</h2>
              <ul className="list-disc list-inside mb-6 text-gray-600">
                <li>Individuals</li>
                <li>Families, carers, guardians and friends</li>
                <li>The community</li>
              </ul>
              <p className="text-gray-600">
                We work with all of these people so everyone in our community can actively support each other to create welcoming and inclusive communities, free from stigma. We focus on hope and possibility rather than illness or impairment.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

