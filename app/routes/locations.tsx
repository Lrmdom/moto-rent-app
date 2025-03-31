import React from 'react';
import { MapPin, Phone } from 'lucide-react';

function LocationsPage() {
  const locations = [
    {
      name: "Downtown Hub",
      address: "123 Main Street",
      city: "New York, NY 10001",
      phone: "(212) 555-0123",
      hours: "Mon-Sun: 8:00 AM - 8:00 PM"
    },
    {
      name: "Airport Terminal",
      address: "JFK Airport, Terminal 4",
      city: "Queens, NY 11430",
      phone: "(212) 555-0124",
      hours: "24/7"
    },
    {
      name: "Beach Location",
      address: "789 Ocean Drive",
      city: "Miami Beach, FL 33139",
      phone: "(305) 555-0125",
      hours: "Mon-Sun: 7:00 AM - 9:00 PM"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Locations</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {locations.map((location, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-gray-500 mr-2" />
              <h3 className="text-xl font-semibold">{location.name}</h3>
            </div>
            <div className="space-y-2 text-gray-600">
              <p>{location.address}</p>
              <p>{location.city}</p>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <p>{location.phone}</p>
              </div>
              <p className="font-semibold mt-4">Hours:</p>
              <p>{location.hours}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LocationsPage;