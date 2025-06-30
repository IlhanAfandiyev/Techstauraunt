import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white font-mono py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        <div>
          <h2 className="text-lg font-bold mb-2">Techstaurant</h2>
          <p className="text-sm">Bringing great food to your screen, one click at a time.</p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/restaurants" className="hover:underline">Restaurants</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Contact</h2>
          <p className="text-sm">support@techstaurant.com</p>
          <p className="text-sm">+1 (555) 123-4567</p>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Techstaurant. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
