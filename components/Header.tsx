import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">Inner Strength</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
            <li><Link href="/services" className="text-gray-600 hover:text-blue-600">Our Services</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

