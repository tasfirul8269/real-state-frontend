import "animate.css";
import { FaPhone, FaWhatsapp, FaCalendarAlt } from "react-icons/fa";
import { IoIosExpand } from "react-icons/io";
import { IoBedSharp } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const PropertyCard = ({ property, loading, error }) => {
  console.log(property);
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
    <Link to={property.id} className="container mx-auto p-0 bg-white rounded-xl animate__animated animate__fadeIn grid md:grid-cols-2 gap-6  border border-spacing-0.5 border-gray-200 my-6 h-1/2 shadow-xl">
      {/* image container */}
      <div className=" flex gap-1 animate__animated animate__fadeInUp rounded-md">
        {/* Main Image */}
        <img
          src={property.mainImage}
          alt={property.title}
          className="w-2/3 h-full  object-cover grow-2 rounded-md"
        />
        <div className="flex w-1/3  flex-col gap-1">
          {property.galleryImages.slice(0, 3).map((image, index) => (
            <img src={image} className="w-full h-full rounded-md" key={index} />
          ))}
        </div>
      </div>

      {/* Property details container */}
      <div className="flex flex-col items-center justify-start gap-2 animate__animated animate__fadeInUp space-y-6">
        {/* Price and Location */}
        <div className="">
          <div className="space-y-3">
            <div className="text-xl font-bold text-gray-800 px-2 pt-6">
              {property.price}
            </div>
            <div className="flex items-center text-sm text-gray-600 mt-1 px-2">
              <MdLocationOn className="mr-1" />
              <span className="text-red-800 px-2">{property.location}</span>
            </div>

            {/* Property Features */}
            <div className="flex flex-wrap justify-start items-center ">
              {property.features.map((feature, index) => (
                <h2
                  className="text-xl font-bold pl-2 text-gray-600"
                  key={index}
                >
                  {feature} |{" "}
                </h2>
              ))}
            </div>
            {/* Property Type */}
            <div className="flex items-center gap-3 py-2">
              <p className="px-2 py-1 rounded text-red-950 text-xs font-medium">
                {property.type}
              </p>
              {/* Property Details */}

              <p className="px-2 py-1 rounded  flex items-center gap-1.5 font-medium">
                <IoBedSharp className="text-2xl" /> {property.bedrooms}
              </p>
              <p className="px-2 py-1 rounded  flex items-center gap-1.5 font-medium">
                <LiaBathSolid className="text-2xl" /> {property.bathrooms}
              </p>
              <p className="px-2 py-1 rounded  flex items-center gap-1.5 font-medium">
                <IoIosExpand className="text-2xl" /> BUA: {property.area} sq.ft
              </p>
            </div>
          </div>

          {/* Agent Information */}
          <div className="flex items-center gap-4 pl-2 pt-16 pb-0">
            <img
              src={property.agent.photo}
              className="w-16 h-16 rounded-xl"
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
        </div>

        {/* Action Buttons */}
        <div
          onClick={() => {
            window.location.href = "tel:+1234567890";
          }}
          className="flex w-full items-center gap-6 border-t border-gray-200 py-10"
        >
          <button className="btn btn-outline px-10  border-none py-6 flex items-center justify-center text-black hover:text-white bg-red-50 hover:bg-red-500 transition-colors rounded-md">
            <FaPhone className="mr-2" />
            <span>Call</span>
          </button>
          <Link
            to="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline px-10  py-6  border-none  rounded-md flex items-center justify-center text-black hover:text-white hover:bg-red-500 bg-red-50 transition-colors"
          >
            <FaWhatsapp className="mr-2" />
            <span>Whatsapp</span>
          </Link>
          <button className="btn btn-outline px-10  py-6 border-none rounded-md flex items-center justify-center text-black  hover:text-white hover:bg-red-500 bg-red-50 transition-colors">
            <FaCalendarAlt className="mr-2" />
            <span>Book a Viewing</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
