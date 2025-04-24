import { useState, useRef, useEffect } from 'react';
import { FaClock } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filterOptions = [
    { label: 'Most Recent', path: '/properties?sort=recent' },
    { label: 'Highest Price', path: '/properties?sort=price-desc' },
    { label: 'Lowest Price', path: '/properties?sort=price-asc' },
    { label: 'Most Bedrooms', path: '/properties?sort=bedrooms-desc' },
    { label: 'Least Bedrooms', path: '/properties?sort=bedrooms-asc' }
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Button - keeping your exact provided styling */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-4 bg-white text-gray-800 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200 shadow-sm"
      >
        <FaClock className="mr-2 text-gray-600" />
        <span className="font-medium">Most Recent</span>
        <RiArrowDropDownLine className="ml-2 text-gray-600 text-2xl" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-50 mt-2 w-full origin-top-right bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="py-2">
            {filterOptions.map((option) => (
              <li
                key={option.path}
                to={option.path}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {option.label}
              </li>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;