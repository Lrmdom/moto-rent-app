import React from 'react';

import { Bike } from 'lucide-react';
import { Outlet } from 'react-router';
import {Link} from "react-router-dom";

function Root() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-black text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Bike className="w-8 h-8" />
              <span className="text-2xl font-bold">RideRental</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-gray-300" viewTransition>Home</Link>
              <Link to="/vehicles" className="hover:text-gray-300" viewTransition>Vehicles</Link>
              <Link to="/locations" className="hover:text-gray-300" viewTransition>Locations</Link>
              <Link to="/about" className="hover:text-gray-300" viewTransition>About</Link>
              <Link to="/contact" className="hover:text-gray-300" viewTransition>Contact</Link>
            </div>
            <Link to="/book" className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100" viewTransition>
              Book Now
           </Link>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Bike className="w-6 h-6" />
                <span className="text-xl font-bold">RideRental</span>
              </div>
              <p className="text-gray-400">Your premier destination for motorcycle and scooter rentals.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/vehicles" className="hover:text-white">Vehicles</Link></li>
                <li><Link to="/locations" className="hover:text-white">Locations</Link></li>
                <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>1234 Bike Street</li>
                <li>City, State 12345</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@riderental.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to get special offers and updates.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-lg w-full text-black"
                />
                <button className="bg-white text-black px-4 py-2 rounded-r-lg hover:bg-gray-100">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 RideRental. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Root;