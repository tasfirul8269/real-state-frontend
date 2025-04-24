import { useEffect, useState } from "react";
import CommunitySlider from "../../components/CommunitySlider/CommunitySlider";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import PropertySearchBar from "../../components/PropertySearchBar/PropertySearchBar";
import axios from "axios";

const Rent = () => {

   const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [checked, setChecked] = useState(false);


  useEffect(() =>{
    axios.get('properties.json')
    .then(res => {
     setProperties(res.data);
     setLoading(false); 
    })
    .catch(err => {
      setError(err.message);
      setLoading(false)
    })
  },[])


  return (
   <div>
    <div className="pt-36">
    <PropertySearchBar></PropertySearchBar>
    <CommunitySlider></CommunitySlider>
    <div>
      <h3 className="text-4x text-green-900 font-bold pl-[5%]">Properties for sale in Dubai
      </h3>
      <p className="pl-[5%] text-gray-500 font-light">Results: {properties.length}</p>
    </div>
    {
      properties.map(property => <PropertyCard key={property.id} property={property} loading={loading} error={error} checked={checked} setChecked={setChecked}></PropertyCard>)
    }

    </div>
   </div>
  );
};

export default Rent;
