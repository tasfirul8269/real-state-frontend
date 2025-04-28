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

import locationImg from '../../assets/group-39519-2.svg'
import bath from "../../assets/ic_bath.svg"
import bed from "../../assets/ic_bed.svg";
import kitchen from "../../assets/vector-1.svg";
import divider from "../../assets/line-2.svg";

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
                     <div key={index} className="flex flex-col items-start gap-5 p-4 bg-white rounded-xl border border-solid border-gray-200 shadow-sm">
                     {/* Property Image */}
                     <div 
                       className="relative w-full h-[214px] bg-[url(${property.image})] bg-cover bg-center rounded-md mb-5"
                     >
                      <img className="w-full" src={property.image} alt={property.name} />
                     </div>
               
                     {/* Property Details */}
                     <div className="w-full space-y-5">
                       {/* Title and Property Type */}
                       <div className="flex items-center justify-between w-full">
                       <h2 className="font-medium text-2xl text-black font-montserrat">
  {property.name.length > 20 ? `${property.name.substring(0, 20)}...` : property.name}
</h2>
                         <span className="inline-flex items-center bg-amber-50 text-amber-600 border border-amber-300 rounded-md px-2.5 py-1 text-sm font-medium font-montserrat">
                           {property.propertyType}
                         </span>
                       </div>
               
                       {/* Location */}
                       <div className="flex items-center gap-2.5">
                         <img 
                           className="w-4 h-4" 
                           alt="Location" 
                           src={locationImg}
                         />
                         <p className="font-medium text-base text-gray-400 font-montserrat">
                           {property.location}
                         </p>
                       </div>
               
                       {/* Features */}
                       <div className="flex items-center gap-8">
                         {/* Bedrooms */}
                         <div className="flex items-center gap-2.5">
                           <img className="w-4 h-4" alt="Bed" src={bed} />
                           <span className="font-medium text-base text-gray-400 font-montserrat">{property.beds}</span>
                         </div>
                         
                         <img className="w-px h-3.5 object-cover" alt="Separator" src={divider} />
                         
                         {/* Bathrooms */}
                         <div className="flex items-center gap-2.5">
                           <div className="relative w-6 h-3">
                             <img className="absolute w-6 h-2.5 top-0 left-0" alt="Bath" src={bath} />
                             <img className="absolute w-1 h-1 top-2.5 left-1" alt="Bath-detail-0" src="/vector.svg" />
                             <img className="absolute w-1 h-1 top-2.5 left-4" alt="Bath-detail-1" src="/vector-4.svg" />
                             <img className="absolute w-1 h-1 top-1 left-1" alt="Bath-detail-2" src="/vector-3.svg" />
                           </div>
                           <span className="font-medium text-base text-gray-400 font-montserrat">02</span>
                         </div>
                         
                         <img className="w-px h-3.5 object-cover" alt="Separator" src="/line-7.svg" />
                         
                         {/* Kitchens */}
                         <div className="flex items-center gap-2.5">
                           <img className="w-6 h-4" alt="Kitchen" src={kitchen} />
                           <span className="font-medium text-base text-gray-400 font-montserrat">{property.kitchens}</span>
                         </div>
                       </div>
               
                       {/* Agent Info and Price */}
                       <div className="flex items-center justify-between w-full">
                         <div className="flex items-center gap-4">
                           <img 
                             className="w-16 h-16 rounded-full object-cover" 
                             alt="Owner" 
                             src={property.agentImage}
                           />
                           <div className="flex flex-col">
                             <h3 className="font-normal text-base text-black font-poppins">{property.agentName}</h3>
                             <p className="font-normal text-sm text-gray-400 font-poppins">
                               Speaks: {
                                 property.languages.map((language, index) => <span>{language}{index < property.languages.length - 1 ? ', ' : ''}</span>)
                               }
                             </p>
                           </div>
                         </div>
                         <p className="font-normal text-xl text-black font-poppins">
  {String(property.price).length > 10 ? `${String(property.price).substring(0, 10)}...` : property.price}
</p>
                       </div>
               
                       {/* Divider */}
                       <div className="w-full h-px bg-gray-200"></div>
               
                       {/* Action Buttons */}
                       <div className="flex items-center justify-between w-full h-16">
                         <button className="inline-flex items-center justify-center h-11 cursor-pointer rounded-xl font-medium text-sm bg-gray-100 text-gray-500 w-20 font-montserrat hover:bg-gray-200 transition">
                           Call
                         </button>
                         <button className="inline-flex items-center justify-center h-11 cursor-pointer rounded-xl font-medium text-sm bg-green-50 text-green-600 font-montserrat hover:bg-green-100 transition">
                           Whatsapp
                         </button>
                         <button className="inline-flex items-center justify-center h-11 cursor-pointer rounded-xl font-medium text-sm bg-blue-50 text-blue-600 font-montserrat hover:bg-blue-100 transition">
                           Book a viewing
                         </button>
                       </div>
                     </div>
                   </div>
                  ))}
                </div>

                {/* Insert ad after each chunk except the last one if it's not complete */}
                {chunkIndex < Math.ceil(properties.length / 3) - 1 && (
                  <div className="w-full bg-gray-100 rounded-lg text-center">
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