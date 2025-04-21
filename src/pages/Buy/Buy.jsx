import CommunitySlider from "../../components/CommunitySlider/CommunitySlider";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import PropertySearchBar from "../../components/PropertySearchBar/PropertySearchBar";

const Buy = () => {

  return (
   <div>
    <div className="pt-36">
    <PropertySearchBar></PropertySearchBar>
    <CommunitySlider></CommunitySlider>
    <div>
      <h3 className="text-4x text-green-900 font-bold pl-[5%]">Properties for sale in Dubai
      </h3>
      <p className="pl-[5%] text-gray-500 font-light">Results: {36}</p>
    </div>
    <PropertyCard></PropertyCard>

    </div>
   </div>
  );
};

export default Buy;
