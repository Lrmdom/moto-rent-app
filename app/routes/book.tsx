import React from 'react';
import { Shield, Users, Trophy } from 'lucide-react';

function BookPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">About RideRental</h1>
      
      <div className="prose max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          RideRental is your premier destination for motorcycle and scooter rentals, providing unforgettable two-wheel experiences since 2020.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Shield className="w-12 h-12 mx-auto mb-4 text-black" />
            <h3 className="text-xl font-semibold mb-2">Safety First</h3>
            <p className="text-gray-600">All our vehicles undergo rigorous safety inspections and are fully insured.</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Users className="w-12 h-12 mx-auto mb-4 text-black" />
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">Our staff consists of passionate riders with years of experience.</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Trophy className="w-12 h-12 mx-auto mb-4 text-black" />
            <h3 className="text-xl font-semibold mb-2">Quality Service</h3>
            <p className="text-gray-600">Recognized as the top motorcycle rental service in the region.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-600 mb-6">
          Founded by motorcycle enthusiasts, RideRental began with a simple mission: to make premium two-wheel experiences accessible to everyone. What started as a small fleet of motorcycles has grown into a comprehensive collection of bikes and scooters, serving thousands of happy riders each year.
        </p>

        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          We're committed to providing safe, reliable, and exciting rental experiences while promoting the joy of two-wheel transportation. Our goal is to make every ride memorable, whether you're a seasoned rider or just starting your two-wheel journey.
        </p>
      </div>
    </div>
  );
}

export default BookPage;