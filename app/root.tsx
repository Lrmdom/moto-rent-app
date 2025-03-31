import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { Bike } from "lucide-react";
import React from "react";
import { Link } from "react-router";

import { SanityVisualEditing } from "~/sanity/SanityVisualEditing";

import { previewContext } from "~/sanity/preview";
import { Suspense, lazy } from "react";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

//const SanityVisualEditing = lazy(() => import("~/sanity/SanityVisualEditing"));

export async function loader({ request }: Route.LoaderArgs) {
  const { preview } = await previewContext(request.headers);

  const ENV = {
    VITE_SANITY_PROJECT_ID: process.env.VITE_SANITY_PROJECT_ID,
    VITE_SANITY_DATASET: process.env.VITE_SANITY_DATASET,
    VITE_SANITY_STUDIO_URL: process.env.VITE_SANITY_STUDIO_URL,
    SANITY_STUDIO_STEGA_ENABLED: process.env.VITE_SANITY_STUDIO_STEGA_ENABLED,
  };

  return { preview, ENV };
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { preview, ENV } = useRouteLoaderData("root");

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="min-h-screen bg-white">
          <nav className="bg-black text-white py-6">
            <div className="container mx-auto px-6">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                  <Bike className="w-8 h-8" />
                  <span className="text-2xl font-bold">RideRental</span>
                </Link>
                <div className="hidden md:flex space-x-8">
                  <Link to="/" className="hover:text-gray-300">
                    Home
                  </Link>
                  <Link to="/vehicles" className="hover:text-gray-300">
                    Vehicles
                  </Link>
                  <Link to="/locations" className="hover:text-gray-300">
                    Locations
                  </Link>
                  <Link to="/about" className="hover:text-gray-300">
                    About
                  </Link>

                  <Link
                    to={{
                      pathname: "/contact",
                      search: "?query=string",
                      hash: "#hash",
                    }}
                  >
                    Contact
                  </Link>
                </div>
                <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
                  <Link to={"book"}>Book Now</Link>
                </button>
              </div>
            </div>
          </nav>
          {children}
          <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center space-x-2 mb-6">
                    <Bike className="w-6 h-6" />
                    <span className="text-xl font-bold">RideRental</span>
                  </div>
                  <p className="text-gray-400">
                    Your premier destination for motorcycle and scooter rentals.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <Link to="/about" className="hover:text-white">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/vehicles" className="hover:text-white">
                        Vehicles
                      </Link>
                    </li>
                    <li>
                      <Link to="/locations" className="hover:text-white">
                        Locations
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms" className="hover:text-white">
                        Terms & Conditions
                      </Link>
                    </li>
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
                  <p className="text-gray-400 mb-4">
                    Subscribe to get special offers and updates.
                  </p>
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
        <ScrollRestoration />
        <Scripts />
        {ENV.VITE_SANITY_STUDIO_STEGA_ENABLED ? <SanityVisualEditing /> : null}
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
