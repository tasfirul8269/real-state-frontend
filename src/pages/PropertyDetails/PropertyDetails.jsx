import axios from "axios";
import React, { useEffect, useState } from "react";

const PropertyDetails = () => {
  const [propertyDetails, setPropertyDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("property2.json")
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
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">Error: {error}</div>;
  }

  if (!propertyDetails) {
    return <div className="flex justify-center items-center h-screen">No property found</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen container mx-auto">
        {/* Media Container */}
      <div className="grid grid-cols-2 gap-1">
        {/* Main image */}
        <img 
          className="object-cover h-full" 
          src={propertyDetails.mainImage} 
          alt="Main property" 
        />
        {/* Media gallery */}
        <div className="flex flex-col gap-1">
          {propertyDetails.galleryImages.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt={`Property gallery ${index + 1}`} 
            />
          ))}
        </div>
      </div>
      <div>
        <button className="btn btn-outline px-8 py-2 border-none rounded-2xl">{propertyDetails.galleryImages.length}</button>
      </div>
      {/* Property details */}
    </div>
  );
};

export default PropertyDetails;