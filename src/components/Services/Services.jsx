import { CiSearch } from "react-icons/ci";
import {  FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 text-center p-10 my-10">
      {/* Dubai Communities Section */}
      <div
        style={{
            backgroundImage:
              "url(https://www.hausandhaus.com/static/Fill-2-c0f8fd2ae90e2cc1a3f4062fb27fc31d.svg)",
          }}
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow p-10">
        <div className="card-body">
          <h2 className="card-title text-3xl font-semibold text-[#083819]">Dubai Communities</h2>
          <p className="text-[#565e59] mt-2">
            Covering 100+ communities, we can help you find one that ticks your boxes.
          </p>
          <div className="mt-4">
            <button className="flex justify-center items-center gap-1 px-7 py-5 rounded-full  text-gray-600 bg-[#36dea4] hover:text-white hover:bg-[#083819] p-2 cursor-pointer text-lg font-semibold">
              Explore Dubai <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Find Consultant Section */}
      <div 
      style={{
        backgroundImage:
          "url(https://www.hausandhaus.com/static/Stroke-cta-f3337b7d8524ab0ffb21e898da1efb9e.svg)",
      }}
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow p-10">
        <div className="card-body">
          <h2 className="card-title text-3xl font-semibold text-[#083819]">Find your consultant</h2>
          <p className="text-[#565e59] mt-2">
            Search our team of 289 property experts to get professional guidance.
          </p>
          <div className="relative mt-4">
            <div className="flex items-center justify-center gap-4">
              <input
                type="text"
                name="consultant-search"
                placeholder="Name or department"
                className="input input-bordered join-item w-full bg-white text-gray-700 px-5 py-6 focus:outline-none"
              />
              {/* search button */}
              <div className="join-item rounded-full text-gray-600 bg-[#36dea4] hover:text-white hover:bg-[#083819] p-2 cursor-pointer">
                <CiSearch className="text-4xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;