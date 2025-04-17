import { FaGoogle, FaHeart } from "react-icons/fa";

const RatingBadges = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
      {/* Google Reviews Rating */}
      <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
        <FaGoogle className="text-blue-500 text-lg" />
        <span className="text-gray-600">Google Reviews</span>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <span key={`google-${i}`} className="text-yellow-400">★</span>
          ))}
        </div>
      </div>

      {/* Feefo Rating */}
      <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
        <span className="text-gray-600">feefo</span>
        <FaHeart className="text-red-500 text-lg" />
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <span key={`feefo-${i}`} className="text-yellow-400">★</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingBadges;