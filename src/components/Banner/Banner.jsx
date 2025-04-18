import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen mb-11"
      style={{
        backgroundImage:
          "url(https://www.hausandhaus.com/static/3f7ad20689be7438e2efe05dbba1809f/b501b/home_banner.webp)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div>
          <h1 className="mb-5 text-4xl md:text-5xl w-full font-bold text-white">Discover life at Dubai Creek Harbour</h1>
          <p className="mb-5">
          Explore what makes this waterfront community one of Dubai’s most desirable places to live — from stunning skyline views and modern lifestyle amenities to long term capital appreciation.
          </p>
          <button className="px-7 py-3 border-none font-semibold rounded-full  text-gray-600 bg-[#36dea4] hover:text-white hover:bg-[#083819] p-2 cursor-pointer">Read the article</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
