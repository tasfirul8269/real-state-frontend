import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "animate.css";
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const PropertySearchBar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchParams, setSearchParams] = useState({
    location: "",
    propertyType: "",
    minPrice: "",
    maxPrice: "",
    rentalDuration: "",
    beds: "",
    baths: "" // Added baths to state
  });

  // Dynamic data
  const propertyTypes = ["Apartment", "Penthouse", "Villa", "Land", "Townhouse"];
  const buyPriceRanges = [
    { label: "Min Price", values: ["$100,000", "$200,000", "$300,000", "$400,000"] },
    { label: "Max Price", values: ["$500,000", "$750,000", "$1,000,000", "$1,500,000"] }
  ];
  const rentPriceRanges = [
    { label: "Min Price", values: ["$500", "$1,000", "$1,500", "$2,000"] },
    { label: "Max Price", values: ["$2,000", "$3,000", "$4,000", "$5,000"] }
  ];
  const rentalDurations = ["Monthly", "Yearly", "Short Term", "Long Term"];
  const bedOptions = ["Any", "1+", "2+", "3+", "4+", "5+"];
  const bathOptions = ["Any", "1+", "2+", "3+", "4+"]; // Added bath options

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = () => {
    console.log("Searching with parameters:", searchParams);
    // API call or filtering logic would go here
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-lg animate__animated animate__fadeIn">
      <Tabs 
        selectedIndex={activeTab} 
        onSelect={(index) => {
          setActiveTab(index);
          setSearchParams({
            location: "",
            propertyType: "",
            minPrice: "",
            maxPrice: "",
            rentalDuration: "",
            beds: "",
            baths: ""
          });
        }}
        className="w-full"
      >
        <div className="flex flex-col md:flex-row gap-4 items-center w-full">
          {/* Tabs */}
          <TabList className="flex flex-row space-x-2 bg-gray-100 p-2 rounded-lg h-[50px]">
            <Tab
              className={`px-4 py-2 text-sm font-medium rounded-md cursor-pointer transition-all duration-300 flex items-center h-full ${
                activeTab === 0
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Link to="/buy">Buy</Link>
            </Tab>
            <Tab
              className={`px-4 py-2 text-sm font-medium rounded-md cursor-pointer transition-all duration-300 flex items-center h-full ${
                activeTab === 1
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Link to='/rent'>Rent</Link>
            </Tab>
          </TabList>

          {/* Search fields */}
          <div className="w-full overflow-x-auto">
            <TabPanel>
              <div className="animate__animated animate__fadeIn">
                <div className="flex items-center gap-4 w-full" style={{ minWidth: "900px" }}>
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={searchParams.location}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-lg  focus:outline-none transition flex-1 min-w-[150px]"
                  />
                  
                  <select
                    name="propertyType"
                    value={searchParams.propertyType}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-lg  focus:outline-none transition flex-1 min-w-[150px]"
                  >
                    <option value="">Property Type</option>
                    {propertyTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                  
                  <select
                    name="minPrice"
                    value={searchParams.minPrice}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none transition flex-1 min-w-[150px]"
                  >
                    <option value="">Min Price</option>
                    {buyPriceRanges[0].values.map((price, index) => (
                      <option key={index} value={price}>{price}</option>
                    ))}
                  </select>
                  
                  <select
                    name="maxPrice"
                    value={searchParams.maxPrice}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none transition flex-1 min-w-[150px]"
                  >
                    <option value="">Max Price</option>
                    {buyPriceRanges[1].values.map((price, index) => (
                      <option key={index} value={price}>{price}</option>
                    ))}
                  </select>
                  
                  <select
                    name="beds"
                    value={searchParams.beds}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none transition flex justify-center items-center gap-2.5 min-w-[120px]"
                  >
                    <option value="">Beds <MdOutlineKeyboardArrowDown className="inline ml-1" /></option>
                    {bedOptions.map((bed, index) => (
                      <option key={index} value={bed}>{bed}</option>
                    ))}
                  </select>
                  
                  <select
                    name="baths"
                    value={searchParams.baths}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none transition flex-1 min-w-[120px]"
                  >
                    <option value="">Baths <MdOutlineKeyboardArrowDown className="inline ml-1" /></option>
                    {bathOptions.map((bath, index) => (
                      <option key={index} value={bath}>{bath}</option>
                    ))}
                  </select>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="animate__animated animate__fadeIn">
                <div className="flex items-center gap-4 w-full" style={{ minWidth: "900px" }}>
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={searchParams.location}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-lg  focus:outline-none transition flex-1 min-w-[150px]"
                  />
                  
                  <select
                    name="rentalDuration"
                    value={searchParams.rentalDuration}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none transition flex-1 min-w-[150px]"
                  >
                    <option value="">Rental Duration</option>
                    {rentalDurations.map((duration, index) => (
                      <option key={index} value={duration}>{duration}</option>
                    ))}
                  </select>
                  
                  <select
                    name="minPrice"
                    value={searchParams.minPrice}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none transition flex-1 min-w-[150px]"
                  >
                    <option value="">Min Price</option>
                    {rentPriceRanges[0].values.map((price, index) => (
                      <option key={index} value={price}>{price}</option>
                    ))}
                  </select>
                  
                  <select
                    name="maxPrice"
                    value={searchParams.maxPrice}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none transition flex-1 min-w-[150px]"
                  >
                    <option className="" value="">Max Price</option>
                    {rentPriceRanges[1].values.map((price, index) => (
                      <option key={index} value={price}>{price}</option>
                    ))}
                  </select>
                  
                  <select
                    name="beds"
                    value={searchParams.beds}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none transition flex-1 min-w-[120px]"
                  >
                    <option value="">Beds <MdOutlineKeyboardArrowDown className="inline ml-1" /></option>
                    {bedOptions.map((bed, index) => (
                      <option key={index} value={bed}>{bed}</option>
                    ))}
                  </select>
                  
                  <select
                    name="baths"
                    value={searchParams.baths}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none transition flex-1 min-w-[120px]"
                  >
                    <option value="">Baths <MdOutlineKeyboardArrowDown className="inline ml-1" /></option>
                    {bathOptions.map((bath, index) => (
                      <option key={index} value={bath}>{bath}</option>
                    ))}
                  </select>
                </div>
              </div>
            </TabPanel>
          </div>

          {/* Search button */}
          <button 
            onClick={handleSearch}
            className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition min-w-[50px] h-[50px] flex items-center justify-center flex-shrink-0 cursor-pointer"
          >
            <CiSearch className="text-2xl" />
          </button>
        </div>
      </Tabs>
    </div>
  );
};

export default PropertySearchBar;