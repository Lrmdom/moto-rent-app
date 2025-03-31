import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <p className="text-xl text-gray-600 mb-4">Sorry, an unexpected error has occurred.</p>
        <p className="text-gray-500 mb-8">
          {error.statusText || error.message}
        </p>
        <Link
          to="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;