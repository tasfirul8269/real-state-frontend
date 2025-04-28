import "animate.css";
import { CiSearch } from "react-icons/ci";

const FindConsultant = () => {
    const agents = [
        {
          name: "James Wilson",
          whatsapp: "+14845551234",
          img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
          specialty: "Luxury Homes",
          experience: "8 years"
        },
        {
          name: "Sarah Johnson",
          whatsapp: "+14845552345",
          img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
          specialty: "Commercial Properties",
          experience: "6 years"
        },
        {
          name: "Michael Chen",
          whatsapp: "+14845553456",
          img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
          specialty: "Investment Properties",
          experience: "10 years"
        },
        {
          name: "Emily Rodriguez",
          whatsapp: "+14845554567",
          img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
          specialty: "First-Time Buyers",
          experience: "5 years"
        }
      ];
  return (
    <div 
    className=" mx-auto p-0 animate__animated animate__fadeInUp flex justify-around items-center py-3 container rounded-xl bg-radial-[at_50%_75%] from-sky-400 via-blue-400 to-indigo-900 to-90%">

       <div className="flex justify-center items-center gap-0">
            {
                agents.map((agent,index) => <img src={agent.img} key={index} className="w-10 h-10 rounded-full"/>)
            }
       </div>
        
      {/* Title and Description */}
      <div className="mb-6 ">
        <h2 className="text-2xl font-medium text-white mb-1 leading-tight">Find your consultant</h2>
        <p className="text-sm text-white">Search our team of 50+ property experts to get professional guidance.</p>
      </div>
      
      {/* Search Input with Button */}
      <button className="rounded-md h-12 px-6 text-2xl bg-white hover:text-blue-600 cursor-pointer transition-colors flex items-center justify-around gap-3">
         <CiSearch></CiSearch>  Find
        </button>
    </div>
  );
};

export default FindConsultant;