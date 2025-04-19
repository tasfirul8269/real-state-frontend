import React, { useState } from 'react';

const Buy = () => {

    const [activeFilter, setActiveFilter] = useState(null);

    const filters = [
        { label: "Buy", options: ["Buy", "Rent", "Sold"] },
        { label: "City, building or cor", options: ["New York", "Los Angeles", "Chicago"] },
        { label: "Property Type", options: ["House", "Apartment", "Condo"] },
        { label: "Min Price", options: ["$100k", "$200k", "$300k"] },
        { label: "Max Price", options: ["$500k", "$750k", "$1M"] },
        { label: "Beds", options: ["1+", "2+", "3+"] },
        { label: "Baths", options: ["1+", "2+", "3+"] },
        { label: "More Filters", options: ["Pool", "Garage", "Garden"] }
      ];

    return (
        <div className='flex justify-center items-center h-screen'>
          <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((filter, index) => (
          <div key={index} className="relative">
            <button
              onClick={() => setActiveFilter(activeFilter === filter.label ? null : filter.label)}
              className={`px-4 py-2 rounded-full border ${activeFilter === filter.label ? 'bg-blue-100 border-blue-500' : 'border-gray-300 hover:border-gray-400'}`}
            >
              {filter.label}
            </button>
            
            {activeFilter === filter.label && (
              <div className="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200">
                {filter.options.map((option, i) => (
                  <div 
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setActiveFilter(null)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
          
        </div>
    );
};

export default Buy;