import React from "react";
import {
  Bike,
  Calendar,
  ChevronRight,
  MapPin,
  Phone,
  Shield,
  Star,
} from "lucide-react";
import type { Route } from "./+types/home";

import type { SanityDocument } from "@sanity/client";
import { loadQuery } from "~/sanity/loader";
import { previewContext } from "~/sanity/preview";
import { useQuery } from "@sanity/react-loader";
import { VEHICLES } from "~/sanity/queries";
// const query = `*[_type == "vehicleGroup"]{name}`;
type Response = SanityDocument<{ title?: string }>;

export async function loader({ request }: Route.LoaderArgs) {
  const { options } = await previewContext(request.headers);
  const { data } = await loadQuery<SanityDocument>(VEHICLES);
  //console.log(data);
  return data;
}

function HomePage({ loaderData }: Route.ComponentProps) {
  //const { data } = useQuery(VEHICLES, {}, { initial: loaderData });

  console.log(loaderData);
  return (
    <>
      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80"
            alt="Motorcycle on road"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-32">
          <h1 className="text-white text-5xl md:text-6xl font-bold max-w-3xl">
            Explore the City on Two Wheels
          </h1>
          <p className="text-gray-200 text-xl mt-6 max-w-2xl">
            Rent premium motorcycles and scooters for your next adventure. Easy
            booking, flexible plans, and the best rates in town.
          </p>
        </div>
      </header>

      {/* Quick Search Section */}
      <div className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-gray-500" />
              <div></div>
              <select className="w-full p-2 border rounded">
                <option>Select Location</option>
                <option>Downtown</option>
                <option>Airport</option>
                <option>Beach Area</option>
              </select>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-gray-500" />
              <input type="date" className="w-full p-2 border rounded" />
            </div>
            <div className="flex items-center space-x-3">
              <Bike className="w-5 h-5 text-gray-500" />
              <select className="w-full p-2 border rounded">
                <option>Vehicle Type</option>
                <option>Motorcycle</option>
                <option>Scooter</option>
              </select>
            </div>
            <button className="bg-black text-white py-3 rounded-lg hover:bg-gray-800">
              Search Available Vehicles
            </button>
          </div>
        </div>
      </div>

      {/* Featured Vehicles */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Vehicles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Harley Davidson Iron 883",
              image:
                "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&q=80",
              price: "89",
              type: "Motorcycle",
            },
            {
              name: "Vespa Primavera",
              image:
                "https://images.unsplash.com/photo-1619523704113-0a8c9596a89f?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              price: "45",
              type: "Scooter",
            },
            {
              name: "BMW R1250 GS",
              image:
                "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80",
              price: "129",
              type: "Motorcycle",
            },
          ].map((vehicle, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{vehicle.name}</h3>
                  <span className="text-sm text-gray-500">{vehicle.type}</span>
                </div>
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
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose RideRental
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
              <p className="text-gray-600">
                All our vehicles come with comprehensive insurance coverage for
                your peace of mind.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Vehicles</h3>
              <p className="text-gray-600">
                Well-maintained fleet of latest models from top manufacturers.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock customer support for assistance whenever you
                need it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
