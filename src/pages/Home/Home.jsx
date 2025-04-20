import React from "react";
import Banner from "../../components/Banner/Banner";
import SearchField from "../../components/SearchField/SearchField";
import Services from "../../components/Services/Services";
import OffPlanProperties from "../../components/OffPlanProperties/OffPlanProperties";
import PropertySearchTabs from "../../components/PropertySearchByFeature/PropertySearchByFeature";

const Home = () => {
  return (
    <div className="mb-10">
      <div className="relative">
        <Banner></Banner>
        <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2  w-full max-w-4xl px-4 bg-gray-100 rounded-lg shadow-lg mx-auto p-4">
        <SearchField></SearchField>
        </div>
      </div>
      <Services></Services>
      <OffPlanProperties></OffPlanProperties>
      <PropertySearchTabs></PropertySearchTabs>
    </div>
  );
};

export default Home;
