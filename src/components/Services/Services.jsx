import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    title: "Residential Sales and Leasing",
    backgroundImage: "https://i.ibb.co.com/vCzRd74f/undraw-house-searching-g2b8.png",
    buttonText: "Explore Dubai",
    buttonIcon: <FaArrowRight className="ml-2" />,
    hasSearch: false,
    bgColor: "bg-[#f6f6f1]",
    textColor: "text-[#083819]",
    buttonStyle: "flex justify-center items-center gap-1 px-7 py-5 rounded-full text-white hover:text-white bg-red-400 hover:bg-red-700 p-2 cursor-pointer text-lg font-semibold"
  },
  {
    id: 2,
    title: "Commercial Sales and leasing",
    backgroundImage: "https://i.ibb.co.com/TDvskyZJ/undraw-predictive-analytics-6vi1.png",
    placeholder: "Name or department",
    hasSearch: true,
    bgColor: "bg-[#f6f6f1]",
    textColor: "text-[#083819]",
    searchButtonStyle: "join-item rounded-full text-white bg-red-400 hover:bg-red-700 hover:text-white p-2 cursor-pointer",
    inputStyle: "input input-bordered join-item w-full bg-white text-gray-700 px-5 py-7 border-none focus:outline-none"
  },
  {
    id: 3,
    title: "Property Management",
    backgroundImage: "https://i.ibb.co.com/KzFvkWRZ/undraw-for-sale-7qjb.png",
    placeholder: "Name or department",
    hasSearch: true,
    bgColor: "bg-[#f6f6f1]",
    textColor: "text-[#083819]",
    searchButtonStyle: "join-item rounded-full text-white bg-red-400 hover:bg-red-700 hover:text-white p-2 cursor-pointer",
    inputStyle: "input input-bordered join-item w-full bg-white text-gray-700 px-5 py-7 border-none focus:outline-none"
  }
];

const Services = () => {
  return (
    <div className="mx-auto px-4 py-12 grid md:grid-cols-3 gap-8  my-14">
      {servicesData.map((service) => (
        <div
          key={service.id}
          style={{backgroundImage: `url(${service.backgroundImage})`}}
          className={`card ${service.bgColor} shadow-xl relative h-72 object- text-start border border-gray-400`}
        >
          <div className=" absolute left-[5%] top-[10%]">
            <h2 className={`card-title text-3xl w-full font-semibold ${service.textColor}`}>
              {service.title}
            </h2>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;