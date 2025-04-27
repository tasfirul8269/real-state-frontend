import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-start py-10  px-16 gap-10 absolute w-full left-0 top-[3173px] bg-gradient-to-t from-[#256FFF] to-[#25AFFF] rounded-t-[20px] text-white">
     <div className="grid grid-cols-2 gap-10">
         {/* Newsletter Section */}
      <div className="flex flex-col items-start gap-4 w-full  max-w-4xl">
        <h3 className="text-2xl font-bold">Stay in the loop</h3>
        <p className="text-center">
          News and insights straight to your inbox. We don't spam.
        </p>

        <div className="flex flex-col w-full gap-2">
          <div className="relative w-full">
            <input
              type="email"
              className="w-full p-2 pl-4 pr-12 rounded bg-white border-none focus:outline-none text-gray-800"
              placeholder="Email address"
            />
            <button className="absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 p-2 rounded-full">
              <FaArrowRightLong />
            </button>
          </div>

          <p className="text-white text-xs">
            By clicking Submit, you agree to our <span className="text-blue-300 cursor-pointer hover:underline">Terms & Conditions</span> and Privacy
            Policy.
          </p>
        </div>
      </div>
      {/* Links Sections */}
      <div className="flex gap-16">
          {/* Services */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">Services</h4>
            <ul className="flex flex-col gap-1 text-sm">
              <li>Residential Areas</li>
              <li>Residential Leasing</li>
              <li>Off Plan</li>
              <li>Commercial Properties</li>
              <li>Properties Management</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">Resources</h4>
            <ul className="flex flex-col gap-1 text-sm">
              <li>Real Estate Guides</li>
              <li>News & Insights</li>
              <li>Market Reports</li>
              <li>Instant Property Valuation</li>
              <li>Podcast</li>
            </ul>
          </div>

          {/* About */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">About</h4>
            <ul className="flex flex-col gap-1 text-sm">
              <li>Our Story</li>
              <li>Our Team</li>
              <li>Client Reviews</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

     </div>

     <hr className="text-blue-500" />
      {/* Bottom Section */}
      <div className="flex justify-between w-full">
        {/* Contact Info */}
        <div className="flex flex-col gap-2 text-sm">
          <p>Buy Square - Office #507 - Building 13 - Business Bay</p>
          <p>Dubai - United Arab Emirates</p>
          <p>Monday to Saturday: 9:00 AM - 6:00 PM</p>
          <p>© 2024 Sanisuary All Rights Reserved</p>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
