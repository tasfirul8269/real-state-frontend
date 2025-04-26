import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoMdPhotos } from "react-icons/io";
import { IoBedOutline, IoBookOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import {  LuMapPin } from "react-icons/lu";
import { MdDone } from "react-icons/md";
import SimpleMap from "../../components/SimpleMap/SimpleMap";
import { RiInformationLine } from "react-icons/ri";

const PropertyDetails = () => {
  const [propertyDetails, setPropertyDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("property1.json")
      .then((res) => {
        setPropertyDetails(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        Error: {error}
      </div>
    );
  }

  if (!propertyDetails) {
    return (
      <div className="flex justify-center items-center h-screen">
        No property found
      </div>
    );
  }

  return (
<div className="flex flex-col items-center">
// Image container 
<div className="max-w-5xl mx-auto h-[500px] pt-32 relative">
  <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-1">
    {/* Main Image Column */}
    <div className="h-full relative rounded-lg overflow-hidden">
      <img
        src={propertyDetails.mainImage}
        alt="Main Property"
        className="w-full h-full object-cover"
        style={{ aspectRatio: "3/2" }}
      />
      <div className="absolute inset-0 bg-black/0" />
    </div>

    {/* Gallery Grid Column */}
    <div className="h-full w-full grid grid-cols-2 gap-1">
      {propertyDetails.galleryImages.slice(0,4).map((image, index) => (
        <div
          key={index}
          className="relative h-[100%] w-[100%] aspect-square"
        >
          <img
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/0" />
        </div>
      ))}
    </div>
  </div>

  {/* Media buttons - positioned 2rem below container */}
  <div className="absolute left-0 z-10 p-4 flex gap-2" style={{ top: 'calc(100% + 2rem)' }}>
    <button className="btn bg-white/90 text-gray-800 btn-sm px-4 py-2 rounded-xl shadow-md flex items-center gap-2">
      <IoMdPhotos className="text-lg" /> 
      Photos {propertyDetails.galleryImages.length}
    </button>
    <button className="btn bg-white/90 text-gray-800 btn-sm px-4 py-2 rounded-xl shadow-md flex items-center gap-2">
      <LuMapPin className="text-lg" /> 
      Map
    </button>
    <button className="btn bg-white/90 text-gray-800 btn-sm px-4 py-2 rounded-xl shadow-md flex items-center gap-2">
      <IoBookOutline className="text-lg" /> 
      Brochure
    </button>
  </div>
</div>

{/* Property details container */}
<div className=" w-full container mx-auto mt-44 flex items-center justify-center">
  {/* Left content (60%) */}
  <div className=" p-10 space-y-4 flex-[3]">
    <h3 className="text-2xl font-bold">{propertyDetails.price}</h3>
      <p className="text-sm font-semibold text-gray-600">{propertyDetails.title}</p>

        <div className="grid grid-cols-2">
          <p className="text-sm font-medium flex items-center gap-2 py-3"><AiOutlineFullscreen />  <span className="font-light">BAU: </span> {propertyDetails.area} sq.ft</p>
          <p className="text-sm font-medium flex items-center gap-2 py-3"><IoBedOutline /><span className="font-light">Bedrooms: </span> {propertyDetails.bedrooms}</p>
          <p className="text-sm font-medium flex items-center gap-2 py-3"><LiaBathSolid/> <span className="font-light">Bathrooms: </span> {propertyDetails.bathrooms}</p>
          <p className="text-sm font-medium flex items-center gap-2 py-3"><FaRegQuestionCircle /><span className="font-light">Completion Status: </span> {propertyDetails.type}</p>
        </div>
        <p className="text-sm font-light text-gray-600">{propertyDetails.description}</p>

        {/* divider */}
        <div className="border border-0.5 border-gray-100 my-10"></div>

        {/* features */}
        <div>
          <h3 className="text-md font-bold">Features</h3>
          <p className="text-sm font-medium grid grid-cols-2 gap-2">{
            propertyDetails.features.map((feature, index) => (
              <span className="flex items-center gap-2 py-3" key={index}><GoDotFill /> {feature},</span>
            ))
          }</p>
        </div>
         {/* divider */}
         <div className="border border-0.5 border-gray-100 my-10"></div>
        {/* amenities */}
        <div>
          <h3 className="text-md font-bold">Amenities</h3>
          <p className="text-sm grid grid-cols-2 gap-2 font-medium ">{
            propertyDetails.amenities.map((amenities, index) => (
              <span className="flex items-center gap-2 py-3" key={index}><MdDone  /> {amenities},</span>
            ))
          }</p>
        </div>
           {/* divider */}
           <div className="border border-0.5 border-gray-100 my-10"></div>

          {/* location */}
           <div>
          <h3 className="text-md font-bold">Location</h3>
          <p className="text-sm flex items-center gap-2 my-3 font-medium "><CiLocationOn /> {" "}{propertyDetails.location.address}</p>
        </div>
        <SimpleMap coordinates={propertyDetails.location.coordinates}></SimpleMap>
        {/* divider */}
           <div className="border border-0.5 border-gray-100 my-10"></div>
           {/* Dld permit information */}
          <div className="flex items-center gap-4">
          <img src={propertyDetails.dldPermitInfo.permitQrCode} className="w-16"  />
           <div>
            <h3 className="text-md font-bold flex items-center gap-2">DLD Permit Information {" "} <button className="tooltip tooltip-right	"  data-tip="The Dubai Land Department strongly advises all customers and investors to only engage with real estate advertisements that feature the QR Code">
            <RiInformationLine className="cursor-pointer"  /></button></h3>
            <p className="text-sm font-medium grid grid-cols-2 gap-2">{propertyDetails.dldPermitInfo.permitNumber}</p>
           </div>
          </div>

  </div>

  {/* Right sticky sidebar (40%) */}
  <div className="border p-10 flex-[1.3] sticky top-0 self-start h-fit">
    {/* Your sticky content here */}
    <div className="sticky top-4">
      {/* Inner content that stays sticky */}
      This content will stick when scrolling
    </div>
    <div className="h-screen">

</div>
  </div>
</div>

</div>
 
  );
};

export default PropertyDetails;
