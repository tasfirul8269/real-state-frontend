import React from "react";
import Banner from "../../components/Banner/Banner";
import SearchField from "../../components/SearchField/SearchField";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";

const Home = () => {
  return (
    <div className="mb-10">
      <div className="relative">
        <Banner></Banner>
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2  w-full max-w-4xl px-4 bg-gray-100 rounded-lg shadow-lg mx-auto p-4">
        <SearchField></SearchField>
        </div>
      </div>
      <TestimonialCard></TestimonialCard>
    </div>
  );
};

export default Home;
