import { Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center">
          <p className="text-sm">
            We acknowledge the Traditional Owners of the land on which we work and live. We pay our respects to Elders past, present and emerging.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><Phone className="w-4 h-4 mr-2" /> (123) 456-7890</li>
              <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> info@innerstrength.com</li>
              <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> 123 Therapy St, Wellness City</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/services" className="hover:underline">Our Services</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Certifications</h3>
            <div className="flex space-x-4">
              <img src="/placeholder.jpg?height=50&width=50" alt="NDIS Logo" className="h-12" />
              <img src="/placeholder.jpg?height=50&width=50" alt="Partner Logo" className="h-12" />
            </div>
          </div>
        </div>
        <div className="text-center text-sm">
          <p>&copy; 2023 Inner Strength. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

