import { useEffect, useState } from "react";
import CommunitySlider from "../../components/CommunitySlider/CommunitySlider";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import PropertySearchBar from "../../components/PropertySearchBar/PropertySearchBar";
import axios from "axios";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import FilterDropdown from "../../components/FilterDropdown/FilterDropdown";

const Buy = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    axios
      .get("properties.json")
      .then((res) => {
        setProperties(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="pt-24 md:pt-36 px-4 md:px-0">
        <PropertySearchBar />
        <CommunitySlider />

        {/* Header and Filters */}
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-6 md:mb-8">
            <div className="w-full md:w-auto">
              <h3 className="text-xl  text-green-900 font-bold text-center md:text-left px-4 md:pl-[5%]">
                Properties for sell in Dubai
              </h3>
              <p className="text-center md:text-left text-gray-500 font-light mt-2 md:mt-0 px-4 md:pl-[5%]">
                Results: {properties.length}
              </p>
            </div>

            {/* Filter buttons */}
            <div className="w-full md:w-auto flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4 px-4 md:px-0">
              <div className="w-full md:w-auto">
                <FilterDropdown />
              </div>

              {/* View on Map Button */}
              <button className="w-full md:w-auto flex items-center justify-center px-4 py-2 bg-white text-gray-800 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200 shadow-sm">
                <img
                  className="h-6 w-6 md:h-8 md:w-8 pr-2"
                  src="https://i.ibb.co.com/PzmwQHck/map-717498.png"
                  alt="MAP"
                />
                <FaMapMarkerAlt className="mr-2 text-gray-600 hidden md:block" />
                <span className="font-medium text-sm md:text-base">
                  <span className="hidden md:inline">View on</span> Map
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Property Cards */}
        <div className="container mx-auto px-4 md:px-0">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              loading={loading}
              error={error}
              checked={checked}
              setChecked={setChecked}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Buy;
