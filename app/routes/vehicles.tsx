import React from 'react';
import { ChevronRight } from 'lucide-react';







export default function VehiclesPage() {
  const vehicles = [
    {
      name: "Harley Davidson Iron 883",
      image: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&q=80",
      price: "89",
      type: "Motorcycle",
      description: "A classic American cruiser with raw power and iconic styling."
    },
    {
      name: "Vespa Primavera",
      image: "https://images.unsplash.com/photo-1619523704113-0a8c9596a89f?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "45",
      type: "Scooter",
      description: "Perfect for city exploration with timeless Italian design."
    },
    {
      name: "BMW R1250 GS",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80",
      price: "129",
      type: "Motorcycle",
      description: "The ultimate adventure motorcycle for any terrain."
    },
    // Add more vehicles here
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Vehicles</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {vehicles.map((vehicle, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img src={vehicle.image} alt={vehicle.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{vehicle.name}</h3>
                <span className="text-sm text-gray-500">{vehicle.type}</span>
              </div>
              <p className="text-gray-600 mb-4">{vehicle.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold">${vehicle.price}</span>
                  <span className="text-gray-500">/day</span>
                </div>
                <button className="flex items-center text-black hover:text-gray-600">
                  View Details
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

