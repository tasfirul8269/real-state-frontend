import { useEffect, useState } from "react";
import CommunitySlider from "../../components/CommunitySlider/CommunitySlider";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import PropertySearchBar from "../../components/PropertySearchBar/PropertySearchBar";
import axios from "axios";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
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
      <div className="pt-36">
        <PropertySearchBar></PropertySearchBar>
        <CommunitySlider></CommunitySlider>
        <div className="flex justify-between items-center container mx-auto">
        <div>
          <h3 className="text-4x text-green-900 font-bold pl-[5%]">
            Properties for sell in Dubai
          </h3>

          <p className="pl-[5%] text-gray-500 font-light">
            Results: {properties.length}
          </p>
        </div>
        {/* filter buttons */}
        <div className="flex items-center space-x-4">
          {/* Most Recent Filter Button */}
          {/* <button className="flex items-center px-4 py-4 bg-white text-gray-800 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200 shadow-sm">
            <FaClock className="mr-2 text-gray-600" />
            <span className="font-medium">Most Recent</span>
            <RiArrowDropDownLine className="mr-2 text-gray-600 text-2xl" />
          </button> */}

            <FilterDropdown></FilterDropdown>

          {/* View on Map Button */}
          <button className="flex items-center px-4 py-2 bg-white text-gray-800 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200 shadow-sm">
            <img className="h-10 w-10 pr-2" src="https://i.ibb.co.com/PzmwQHck/map-717498.png" alt="MAP" />
            <FaMapMarkerAlt className="mr-2 text-gray-600" />
            <span className="font-medium">View on Map</span>
          </button>
        </div>
        </div>
        <div></div>
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            loading={loading}
            error={error}
            checked={checked}
            setChecked={setChecked}
          ></PropertyCard>
        ))}
      </div>
    </div>
  );
};

export default Buy;
