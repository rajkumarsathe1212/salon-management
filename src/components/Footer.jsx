
// src/components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-indigo-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* 1. Brand + Description */}
          <div className="col-span-1 md:col-span-2">
            <div href="/" className="flex items-center space-x-3 mb-4">
              <svg className="h-8 w-8 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-1.343 3-3s-1.343-3-3-3m0 6a3 3 0 110-6m0 6a3 3 0 100-6"/>
              </svg>
              <span className="text-2xl font-bold">SalonManager</span>
            </div>
            <p className="text-indigo-200 max-w-md">
              The complete salon management system trusted by hundreds of beauty professionals. 
              Bookings, staff, inventory & payments — all in one place.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-300">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="hover:text-pink-300 transition">Home</Link></li>
              <li><Link href="/services" className="hover:text-pink-300 transition">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-pink-300 transition">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-pink-300 transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-pink-300 transition">Contact</Link></li>
            </ul>
          </div>

          {/* 3. Legal & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-300">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="hover:text-pink-300 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-pink-300 transition">Terms of Service</Link></li>
              <li><Link href="/help" className="hover:text-pink-300 transition">Help Center</Link></li>
              <li><Link href="/login" className="hover:text-pink-300 transition">Salon Login</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-indigo-700 mt-10 pt-8 flex flex-col md:flex-row md:justify-between items-center text-sm text-indigo-300">
          <p>© 2025 SalonManager. Made with love for beauty pros.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-pink-300 transition">Facebook</a>
            <a href="#" className="hover:text-pink-300 transition">Instagram</a>
            <a href="#" className="hover:text-pink-300 transition">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
