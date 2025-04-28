import React from "react";
import Banner from "../../components/Banner/Banner";
import SearchField from "../../components/SearchField/SearchField";
import Services from "../../components/Services/Services";
import OffPlanProperties from "../../components/OffPlanProperties/OffPlanProperties";
import PropertySearchTabs from "../../components/PropertySearchByFeature/PropertySearchByFeature";
import FindConsultant from "../../components/FindConsultant/FindConsultant";
import PropertyValuation from "../../components/PropertyValuation/PropertyValuation";
import NewsAndInsights from "../../components/NewsAndInsights/NewsAndInsights";

const Home = () => {
  return (
    <div className="mb-10">
      <div className="md:relative">
        <Banner></Banner>
        <div className=" md:absolute md:-bottom-14 md:left-1/2 md:transform md:-translate-x-1/2  w-full max-w-4xl px-4 bg-white rounded-[20px] shadow-lg mx-auto p-4">
          <SearchField></SearchField>
        </div>
      </div>
      <div className="px-0 md:px-[60px] mx-auto">
      <Services></Services>
      <FindConsultant></FindConsultant>
      <OffPlanProperties></OffPlanProperties>
      <PropertyValuation></PropertyValuation>
      <PropertySearchTabs></PropertySearchTabs>
      <NewsAndInsights></NewsAndInsights>
      </div>
    </div>
  );
};

export default Home;
