import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdPhotos } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";

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
      {propertyDetails.galleryImages.map((image, index) => (
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
    // <div className="flex justify-center items-center container mx-auto border">
    //   {/* Media Container */}
    //   <div className="grid  grid-cols-2 gap-1 border ">
    //     {/* Main image */}
    //     <img
    //       className="object-cover w-full h-full border"
    //       src={propertyDetails.mainImage}
    //       alt="Main property"
    //     />
    //     {/* Media buttons  */}
    //     {/* <div className="">
    //       <button className="btn btn-outline bg-gray-300 btn-xs px-8 py-2 border-none rounded-2xl ">
    //         <IoMdPhotos /> Photos {propertyDetails.galleryImages.length}
    //       </button>
    //       <button className="btn btn-outline bg-gray-300 btn-xs px-8 py-2 border-none rounded-2xl ">
    //         <LuMapPin /> Map
    //       </button>
    //       <button className="btn btn-outline bg-gray-300 btn-xs px-8 py-2 border-none rounded-2xl ">
    //         <IoBookOutline /> Brochure
    //       </button>
    //     </div> */}
    //     {/* Media gallery */}
    //     <div className="flex flex-col gap-1  border">
    //       {propertyDetails.galleryImages.map((image, index) => (
    //         <img
    //           className="object-cover w-full h-full border"
    //           key={index}
    //           src={image}
    //           alt={`Property gallery ${index + 1}`}
    //         />
    //       ))}
    //     </div>
    //   </div>
    //   <div></div>
    //   {/* Property details */}
    // </div>
  );
};

export default PropertyDetails;
