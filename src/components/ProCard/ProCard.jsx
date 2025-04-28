import React from "react";
import {
  FaPhone,
  FaWhatsapp,

} from "react-icons/fa";
import "animate.css";

import locationImg from "../../assets/group-39519-2.svg";
import bath from "../../assets/ic_bath.svg";
import bed from "../../assets/ic_bed.svg";
import kitchen from "../../assets/vector-1.svg";
import divider from "../../assets/line-2.svg";

const ProCard = ({ property }) => {
  console.log(property.beds);
  return (
    <div className="p-4 my-5 md:my-0 border border-[#e6e6e6] rounded-[20px] animate__animated animate__fadeInUp]">
      <img src={property?.image} alt={property?.name} className="rounded-[15px]" />
      <div className="flex justify-between items-center my-4">
        <h3 className="text-2xl font-semibold">
          {property?.name.length > 15
            ? property?.name.slice(0, 15) + "..."
            : property?.name}
        </h3>
        <button className="btn btn-outline outline-[#FFBF6A] bg-[#FFF5E7] btn-warning text-[#FF9B17]">
          {property?.propertyType}
        </button>
      </div>

      {/* location container */}
      <div className="flex justify-start items-center gap-2">
        <img src={locationImg} alt={property?.location} />
        <p className="text-gray-500">{property?.location}</p>
      </div>

      {/* features container */}
      <div className="flex justify-between items-center my-4">
        <div className="text-[#999999] flex justify-start items-center gap-3">
          <img src={bed} alt="bed" />
          <p className="text-xl">{property?.beds}</p>
        </div>
        <div className="text-[#999999] flex justify-start items-center gap-3">
          <img src={bath} alt="bath" />
          <p className="text-xl">{property?.baths}</p>
        </div>
        <div className="text-[#999999] flex justify-start items-center gap-3">
          <img src={kitchen} alt="Kitchen" />
          <p className="text-xl">{property?.kitchens}</p>
        </div>
      </div>

      {/* Agent container */}
      <div className="flex justify-between items-center my-4 gap-3 mb-5">
        <img
            className="w-16 h-16 rounded-full"
          src={property?.agentImage}
          alt={property?.agentName}
        />

        {/* agent name ana languages container */}
        <div>
          <h3 className="text-md font-semibold">
            {
                property?.agentName.length > 8 ? property?.agentName.slice(0, 8) + "..." : property?.agentName
            }
          </h3>
          <p className="text-sm text-gray-600">
            Speaks {property?.languages?.join(", ")}
          </p>
        </div>
        <h2 className="text-xl font-semibold">{property?.price}</h2>
      </div>

      <img src={divider} className="my-5"/>


      {/* buttons container */}
      <div className="flex items-center justify-between">
        <button  className="flex justify-center items-center gap-2 text-[#999999] bg-[#E6E6E6] px-4 py-3 rounded-md">
          <FaPhone />
          <span className="font-semibold">Call</span>
        </button>
        <button  className="flex justify-center items-center gap-2 text-[#00BD6E] bg-[#E5FFF1] px-4 py-3 rounded-md">
          <FaWhatsapp />
          <span className="font-semibold">Whatsapp</span>
        </button>
        <button  className="flex justify-center items-center gap-2 text-[#256FFF] bg-[#EBF8FF] px-4 py-3 rounded-md">
          <span className="font-semibold">Booking</span>
        </button>
      </div>
    </div>
  );
};

export default ProCard;
