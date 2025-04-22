
import 'animate.css';
import { FaPhone, FaWhatsapp, FaCalendarAlt, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import { MdLocationOn, MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';

const PropertyCard = ({property, loading, error, checked, setChecked}) => {
 

 

  if (loading) return <div className="text-center py-20 animate__animated animate__fadeIn">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-500 animate__animated animate__fadeIn">Error: {error}</div>;
  if (!property) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 animate__animated animate__fadeIn">
      {/* Main Image Section */}
      <div className="mb-6 rounded-xl overflow-hidden  grid md:grid-cols-2 gap-3">
        <img 
          src={property.mainImage} 
          alt={property.title} 
          className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500 cursor-zoom-in"
        />
         {/* Thumbnail Grid Section - 3 columns */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {property.galleryImages.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src={image} 
              alt={`${property.title} - ${index + 1}`} 
              className="w-full h-40 object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
            />
          </div>
        ))}
      </div>
      </div>

     

      {/* Property Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Details */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{property.title}</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <MdLocationOn className="mr-1 text-red-500" />
            <span>{property.location}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {property.tags.map((tag, index) => (
              <span 
                key={index} 
                className={`px-3 py-1 rounded-full text-sm ${
                  tag === 'Brand New' 
                    ? 'bg-green-100 text-green-800' 
                    : tag === 'Luxury' 
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Description</h2>
            <p className="text-gray-700 leading-relaxed">{property.description}</p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {property.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  {checked ? (
                    <MdCheckBox 
                      className="text-blue-500 text-xl mr-2 cursor-pointer" 
                      onClick={() => setChecked(false)}
                    />
                  ) : (
                    <MdCheckBoxOutlineBlank 
                      className="text-gray-400 text-xl mr-2 cursor-pointer" 
                      onClick={() => setChecked(true)}
                    />
                  )}
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      {/* Right Column - Pricing & Agent */}
<div className="relative">
  <div 
    className="bg-gray-50 p-6 rounded-xl shadow-inner sticky top-6"
    style={{
      // This ensures the sticky element doesn't exceed its container height
      alignSelf: 'flex-start'
    }}
  >
    {/* Pricing */}
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">{property.price}</h2>
      <p className="text-gray-600 mb-4">{property.paymentTerms}</p>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-700">Property Type:</span>
          <span className="font-medium">{property.type}</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-700">Area:</span>
          <span className="font-medium">{property.area} sq.ft</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Status:</span>
          <span className="font-medium text-green-600">{property.status}</span>
        </div>
      </div>
    </div>

    {/* Quick Specs */}
    <div className="grid grid-cols-3 gap-3 mb-6 text-center">
      <div className="bg-white p-3 rounded-lg shadow">
        <FaBed className="mx-auto text-blue-500 text-xl mb-1" />
        <span className="font-medium">{property.bedrooms}</span>
        <p className="text-xs text-gray-500">Bedrooms</p>
      </div>
      <div className="bg-white p-3 rounded-lg shadow">
        <FaBath className="mx-auto text-blue-500 text-xl mb-1" />
        <span className="font-medium">{property.bathrooms}</span>
        <p className="text-xs text-gray-500">Bathrooms</p>
      </div>
      <div className="bg-white p-3 rounded-lg shadow">
        <FaRulerCombined className="mx-auto text-blue-500 text-xl mb-1" />
        <span className="font-medium">{property.yearBuilt}</span>
        <p className="text-xs text-gray-500">Year Built</p>
      </div>
    </div>

    {/* Agent */}
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="flex items-center mb-3">
        <img 
          src={property.agent.photo} 
          alt={property.agent.name} 
          className="w-12 h-12 rounded-full object-cover mr-3"
        />
        <div>
          <h3 className="font-semibold">{property.agent.name}</h3>
          <p className="text-sm text-gray-600">{property.agent.role}</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 mb-3">
        <span className="font-medium">Speaks:</span> {property.agent.languages.join(', ')}
      </p>
    </div>

    {/* Action Buttons */}
    <div className="space-y-3">
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300 animate__animated animate__pulse">
        <FaPhone className="mr-2" />
        Contact Agent
      </button>
      <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300 animate__animated animate__pulse">
        <FaWhatsapp className="mr-2" />
        WhatsApp
      </button>
      <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300 animate__animated animate__pulse">
        <FaCalendarAlt className="mr-2" />
        Schedule Viewing
      </button>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default PropertyCard;