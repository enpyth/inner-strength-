export default function OurValues() {
  const values = [
    "Inclusion",
    "Respect",
    "Integrity",
    "Accountability",
    "Advocacy",
    "Participation and Partnership"
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Our Values</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
              <p className="text-blue-600 font-semibold">{value}</p>
            </div>
          ))}
        </div>
        <blockquote className="text-center italic text-gray-600 max-w-2xl mx-auto">
          "Integrity is what we do, what we say, and what we say we do" – Don Galer
        </blockquote>
      </div>
    </section>
  )
}

