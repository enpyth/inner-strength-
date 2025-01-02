export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">About</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-center">
          Inner Strength is dedicated to providing person-centered behavior therapy services. We believe in empowering individuals to reach their full potential through compassionate and evidence-based practices.
        </p>
        <div className="text-center">
          <a href="/about" className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">Read More – Our Approach</a>
        </div>
      </div>
    </section>
  )
}

