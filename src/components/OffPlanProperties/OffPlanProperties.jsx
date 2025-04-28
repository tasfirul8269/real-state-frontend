import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaBuilding,
} from "react-icons/fa";
import "animate.css";
import { FaLocationCrosshairs } from "react-icons/fa6";

import bath from "../../assets/ic_bath.svg"
import bed from "../../assets/ic_bed.svg";
import kitchen from "../../assets/ic_kitchen.svg"

const OffPlanProperties = () => {
  const properties = [
    {
      name: "The Acres",
      location: "Dubailand",
      deliveryDate: "Dec. 2028",
      price: "AED 5,090,000",
      developer: "MERAAS",
      image: "https://i.ibb.co.com/tMyVpjdk/the-acres-hausandhaus-main-1-50fe8d0045.webp",
      propertyType: "Villa",
      beds: 5,
      baths: 4,
      kitchens: 1,
      languages: ["English", "Arabic"],
      bgColor: "#f0f7f4",
      agentName: "Sarah Johnson",
      agentImage: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "Serenia District Apartment",
      location: "Jumariah Islands",
      deliveryDate: "Dec. 2028",
      price: "AED 1,860,000",
      developer: "Palma Holding",
      image: "https://i.ibb.co.com/39dHgZNQ/serenia-district-jumeirah-islands-hausandhaus-101-c6273717cc.webp",
      propertyType: "Apartment",
      beds: 2,
      baths: 2,
      kitchens: 1,
      languages: ["English", "Arabic", "Russian"],
      bgColor: "#fff5e6",
      agentName: "Ahmed Al-Maktoum",
      agentImage: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      name: "Palmiera The Oasis",
      location: "The Oasis",
      deliveryDate: "Dec. 2027",
      price: "AED 8,500,000",
      developer: "EMAAR",
      image: "https://i.ibb.co.com/0pRGvhSp/OASIS-PALMIERA-x-hausandhaus-1-e125317ee0.webp",
      propertyType: "Mansion",
      beds: 7,
      baths: 6,
      kitchens: 2,
      languages: ["English", "Arabic", "French"],
      bgColor: "#f9f2e8",
      agentName: "Fatima Al-Farsi",
      agentImage: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Orise by Beyond",
      location: "Dubai Maritime City",
      deliveryDate: "Mar. 2028",
      price: "AED 1,900,000",
      developer: "OIMINAT",
      image: "https://i.ibb.co.com/TB1DYX9h/orise-by-beyond-omniyat-hausandhaus-11-954e43c5d0.webp",
      propertyType: "Apartment",
      beds: 1,
      baths: 1,
      kitchens: 1,
      languages: ["English", "Arabic", "Chinese"],
      bgColor: "#e6f3ff",
      agentName: "Li Wei",
      agentImage: "https://randomuser.me/api/portraits/men/5.jpg"
    }
  ];

  return (
    <div className="px-0 py-8 animate__animated animate__fadeIn">
      <h1 className="text-2xl md:text-3xl font-bold text-[#083819] mb-4">
        Browse our Off Plan properties
      </h1>

      <div className="space-y-4">
        {Array.from({ length: Math.ceil(properties.length / 3) }).map(
          (_, chunkIndex) => {
            const startIndex = chunkIndex * 3;
            const chunk = properties.slice(startIndex, startIndex + 3);

            return (
              <div key={chunkIndex} className="space-y-4">
                {/* Property grid for this chunk */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6  ">
                  {chunk.map((property, index) => (
                    <div
                      key={startIndex + index}
                      className={`bg-white shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate__animated animate__fadeInUp w-full flex flex-col rounded-[15px]`}
                      style={{ height: "600px" }} // Slightly reduced height
                    >
                      {/* Property Image - Fixed height */}
                      <div className="h-48 overflow-hidden rounded-[10px] flex-shrink-0">
                        <img
                          src={property.image}
                          alt={property.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 p-1"
                        />
                      </div>

                      {/* Property Details - Flex-grow to take remaining space */}
                      <div className="p-4 md:p-5 border border-gray-300 flex-grow flex flex-col">
                        {/* Property Name and Type */}
                        <div className="flex items-center justify-between mb-2">
                          <h2 className="text-lg md:text-xl font-semibold text-gray-800 line-clamp-1">
                            {property.name}
                          </h2>
                          <button className={`bg-${property.bgColor} btn btn-outline border-amber-600 text-amber-600 px-3 py-1 text-sm`}>
                            {property.propertyType}
                          </button>
                        </div>
                        
                        {/* Location - Fixed height */}
                        <p className="text-gray-600 mb-2 text-xs md:text-sm flex items-center h-6">
                          <FaLocationCrosshairs className="mr-1 text-blue-500" />
                          {property.location}
                        </p>

                        {/* Property Features - Fixed height */}
                        <div className="flex justify-between items-center gap-1 mb-4 h-8">
                          <div className="text-gray-500 flex items-center text-sm">
                            <img src={bed} alt="Bed" className="mr-1 w-4" />
                            <p>{property.beds}</p>
                          </div>
                          <div className="text-gray-500 flex items-center text-sm">
                            <img src={bath} alt="Bathroom" className="mr-1 w-4" />
                            <p>{property.baths}</p>
                          </div>
                          <div className="text-gray-500 flex items-center text-sm">
                            <img src={kitchen} alt="Kitchen" className="mr-1 w-4" />
                            <p>{property.baths}</p>
                          </div>
                        </div>

                        {/* Agent Info - Fixed height */}
                        <div className="flex items-center gap-2 mb-4 h-14">
                          <img 
                            src={property.agentImage} 
                            alt={property.agentName} 
                            className="rounded-full w-10 h-10 md:w-12 md:h-12 object-cover"
                          />
                          <div className="flex-grow">
                            <p className="text-xs text-gray-500">
                              {property.languages.map((lang, index) => (
                                <span key={lang}>
                                  {lang}{index < property.languages.length - 1 ? ', ' : ''}
                                </span>
                              ))}
                            </p>
                            <h2 className="text-xs md:text-sm font-semibold text-gray-800 line-clamp-1">
                              {property.agentName}
                            </h2>
                          </div>
                          <p className="text-sm md:text-base font-semibold whitespace-nowrap">
                            {property.price}
                          </p>
                        </div>

                        <div className="border border-gray-200 my-2"></div>

                        {/* Action Buttons - Fixed height at bottom */}
                        <div className="flex space-x-2 justify-between mt-auto">
                          <button className="flex items-center justify-center px-2 py-1 md:px-3 md:py-2 btn btn-outline rounded-md bg-[#E6E6E6] text-[#8D8D8D] hover:text-white hover:bg-gray-700 border-none transition flex-1 text-xs md:text-sm">
                            <FaPhone className="mr-1 text-xs md:text-sm" /> Call
                          </button>
                          <button className="flex items-center justify-center px-2 py-1 md:px-3 md:py-2 btn btn-outline rounded-md bg-[#E5FFF1] text-[#00BD6E] hover:text-white hover:bg-green-700 border-none transition flex-1 text-xs md:text-sm">
                            <FaWhatsapp className="text-sm md:text-base" /> Whatsapp
                          </button>
                          <button className="flex items-center justify-center px-2 py-1 md:px-3 md:py-2 btn btn-outline rounded-md bg-[#EBF8FF] text-[#256FFF] hover:text-white hover:bg-blue-700 border-none transition flex-1 text-xs md:text-sm">
                            Booking
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Insert ad after each chunk except the last one if it's not complete */}
                {chunkIndex < Math.ceil(properties.length / 3) - 1 && (
                  <div className="w-full p-4 bg-gray-100 rounded-lg text-center">
                    <h3 className="text-lg md:text-xl font-bold mb-1">Special Offer!</h3>
                    <p className="mb-2 text-sm">
                      Check out our exclusive deals for premium properties
                    </p>
                    <button className="px-4 py-1 md:px-5 md:py-2 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm">
                      View Offers
                    </button>
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default OffPlanProperties;