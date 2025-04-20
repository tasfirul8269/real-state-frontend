import React from 'react';
import 'animate.css';

const PropertyCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden animate__animated animate__fadeIn">
      {/* Price Section */}
      <div className="bg-blue-50 p-4">
        <h1 className="text-2xl font-bold text-gray-800">AED 170,000 PA</h1>
      </div>

      {/* Property Details */}
      <div className="p-4">
        {/* Checkbox items */}
        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2 h-5 w-5" />
          <span className="text-gray-700">Sobha Creek Vistas Grande, Sobha Hartland, Dubai</span>
        </div>
        
        <div className="mb-4">
          <span className="font-semibold text-green-600">Brand New</span>
          <span className="mx-2">|</span>
          <span className="font-semibold">High Floor</span>
          <span className="mx-2">|</span>
          <span className="font-semibold">Water View</span>
        </div>

        {/* Apartment Details */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Apartment</h2>
          <div className="flex items-center mb-1">
            <input type="checkbox" className="mr-2 h-5 w-5" />
            <span className="text-gray-700">2</span>
          </div>
          <div className="flex items-center mb-1">
            <input type="checkbox" className="mr-2 h-5 w-5" />
            <span className="text-gray-700">3</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2 h-5 w-5" />
            <span className="text-gray-700">BUA: 1,106 sq.ft</span>
          </div>
        </div>

        <div className="border-t border-gray-200 my-4"></div>

        {/* Agent Info */}
        <div className="mb-4">
          <h3 className="font-semibold">Siavash Ebrahimi</h3>
          <p className="text-sm text-gray-600">Speaks English, Persian</p>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300 animate__animated animate__pulse">
            Call
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors duration-300 animate__animated animate__pulse">
            Whatsapp
          </button>
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md transition-colors duration-300 animate__animated animate__pulse">
            Book a Viewing
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;