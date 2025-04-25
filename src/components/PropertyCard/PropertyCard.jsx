import "animate.css";
import { FaPhone, FaWhatsapp, FaCalendarAlt } from "react-icons/fa";
import { IoIosExpand } from "react-icons/io";
import { IoBedSharp } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const PropertyCard = ({ property, loading, error }) => {
  if (loading)
    return (
      <div className="text-center py-20 animate__animated animate__fadeIn">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="text-center py-20 text-red-500 animate__animated animate__fadeIn">
        Error: {error}
      </div>
    );
  if (!property) return null;

  return (
    <div
    to="/property-details"
    className="container mx-auto p-0 bg-white rounded-xl animate__animated animate__fadeIn grid md:grid-cols-2 gap-4 border border-spacing-0.5 border-gray-200 my-6 min-h-[50vh]  overflow-hidden"
  >
    {/* image container remains unchanged */}
    <Link to="/property-details" className="flex gap-1 animate__animated animate__fadeInUp rounded-md w-3/3  h-full min-h-0">
      {/* Main Media */}
      {property.mainImage.match(/\.(mp4|mov|avi)$/i) ? (
        <video
          src={property.mainImage}
          className="w-2/3 h-full object-cover grow-2 rounded-md"
          controls
          muted
          loop
        />
      ) : (
        <img
          src={property.mainImage}
          alt={property.title}
          className="w-2/4 h-full object-cover grow-2 rounded-md"
        />
      )}
  
      <div className="flex w-1/4 flex-col gap-1">
        {property.galleryImages
          .slice(0, 3)
          .map((media, index) =>
            media.match(/\.(mp4|mov|avi)$/i) ? (
              <video
                key={index}
                src={media}
                className="w-full h-full object-cover rounded-md"
                controls
                muted
                loop
              />
            ) : (
              <img
                key={index}
                src={media}
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            )
          )}
      </div>
    </Link>
  
   {/* Property details container with spacing adjustments */}
   <div className="flex flex-col items-start justify-start animate__animated animate__fadeInUp h-full overflow-y-auto pr-2">
      {/* Price and Location */}
      <Link to="/property-details" className="w-full">
        <div className="space-y-2">
          <div className="text-xl font-bold text-gray-800 pt-4">
            {property.price}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MdLocationOn className="mr-1" />
            <span className="text-red-800">{property.location}</span>
          </div>
  
          {/* Property Features */}
          <div className="flex flex-wrap justify-start items-center">
            {property.features.map((feature, index) => (
              <h2
                className="text-xl font-semibold text-black"
                key={index}
              >
                {feature} |{" "}
              </h2>
            ))}
          </div>
  
          {/* Property Type */}
          <div className="flex items-center gap-3 py-2">
            <p className="text-red-950 text-xs font-medium">
              {property.type}
            </p>
            <p className="flex items-center gap-1.5 font-medium">
              <IoBedSharp className="text-2xl" /> {property.bedrooms}
            </p>
            <p className="flex items-center gap-1.5 font-medium">
              <LiaBathSolid className="text-2xl" /> {property.bathrooms}
            </p>
            <p className="flex items-center gap-1.5 font-medium">
              <IoIosExpand className="text-2xl" /> BUA: {property.area} sq.ft
            </p>
          </div>
        </div>
  
        {/* Agent Information */}
        <div className="flex items-center gap-6 mt-7 pb-0">
          <img
            src={property.agent.photo}
            className="w-12 h-12 rounded-xl"
            alt={property.agent.name}
          />
          <div>
            <h3 className="text-sm font-bold">{property.agent.name}</h3>
            <p className="text-sm text-gray-400">
              Speaks:{" "}
              {property.agent.languages.map((language, index) => (
                <span key={index}> {language},</span>
              ))}
            </p>
          </div>
        </div>
      </Link>
  
      {/* Action Buttons */}
      <div
        onClick={() => {
          window.location.href = "tel:+1234567890";
        }}
        className="flex w-full items-center gap-4 border-t border-gray-200 py-3"
      >
        <button className="btn btn-outline px-6 border-none py-4 flex items-center justify-center text-black hover:text-white bg-red-50 hover:bg-red-500 transition-colors rounded-md">
          <FaPhone className="mr-2" />
          <span>Call</span>
        </button>
        <div
          onClick={() => {
            window.location.href = "https://wa.me/1234567890";
          }}
          target="_blank"
          className="btn btn-outline px-6 py-4 border-none rounded-md flex items-center justify-center text-black hover:text-white hover:bg-red-500 bg-red-50 transition-colors"
        >
          <FaWhatsapp className="mr-2" />
          <span>Whatsapp</span>
        </div>
        <button className="btn btn-outline px-6 py-4 border-none rounded-md flex items-center justify-center text-black hover:text-white hover:bg-red-500 bg-red-50 transition-colors">
          <FaCalendarAlt className="mr-2" />
          <span>Book a Viewing</span>
        </button>
      </div>
    </div>
  </div>
  );
};

export default PropertyCard;
