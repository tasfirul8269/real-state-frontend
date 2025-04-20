import CommunitySlider from "../../components/CommunitySlider/CommunitySlider";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import PropertySearchBar from "../../components/PropertySearchBar/PropertySearchBar";

const Buy = () => {

  return (
   <div>
    <div className="pt-36">
    <PropertySearchBar></PropertySearchBar>
    <CommunitySlider></CommunitySlider>
    <PropertyCard></PropertyCard>
    </div>
   </div>
  );
};

export default Buy;
