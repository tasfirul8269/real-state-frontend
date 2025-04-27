import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-start py-10 px-4 sm:px-8 md:px-16 gap-8 md:gap-10 w-full bg-gradient-to-t from-[#256FFF] to-[#25AFFF] text-white">
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full">
        {/* Newsletter Section */}
        <div className="flex flex-col items-start gap-4 w-full max-w-4xl">
          <h3 className="text-xl sm:text-2xl font-bold">Stay in the loop</h3>
          <p className="text-sm sm:text-base">
            News and insights straight to your inbox. We don't spam.
          </p>

          <div className="flex flex-col w-full gap-2">
            <div className="relative w-full">
              <input
                type="email"
                className="w-full p-2 pl-4 pr-12 rounded bg-white border-none focus:outline-none text-gray-800 text-sm sm:text-base"
                placeholder="Email address"
              />
              <button className="absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 p-2 rounded-full hover:bg-blue-100 transition-colors">
                <FaArrowRightLong />
              </button>
            </div>

            <p className="text-white text-xs">
              By clicking Submit, you agree to our{" "}
              <span className="text-blue-300 cursor-pointer hover:underline">
                Terms & Conditions
              </span>{" "}
              and Privacy Policy.
            </p>
          </div>
        </div>

        {/* Links Sections */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-16">
          {/* Services */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-sm sm:text-base">Services</h4>
            <ul className="flex flex-col gap-1 text-xs sm:text-sm">
              <li className="hover:underline cursor-pointer">Residential Areas</li>
              <li className="hover:underline cursor-pointer">Residential Leasing</li>
              <li className="hover:underline cursor-pointer">Off Plan</li>
              <li className="hover:underline cursor-pointer">Commercial Properties</li>
              <li className="hover:underline cursor-pointer">Properties Management</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-sm sm:text-base">Resources</h4>
            <ul className="flex flex-col gap-1 text-xs sm:text-sm">
              <li className="hover:underline cursor-pointer">Real Estate Guides</li>
              <li className="hover:underline cursor-pointer">News & Insights</li>
              <li className="hover:underline cursor-pointer">Market Reports</li>
              <li className="hover:underline cursor-pointer">Instant Property Valuation</li>
              <li className="hover:underline cursor-pointer">Podcast</li>
            </ul>
          </div>

          {/* About */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-sm sm:text-base">About</h4>
            <ul className="flex flex-col gap-1 text-xs sm:text-sm">
              <li className="hover:underline cursor-pointer">Our Story</li>
              <li className="hover:underline cursor-pointer">Our Team</li>
              <li className="hover:underline cursor-pointer">Client Reviews</li>
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-blue-400 w-full" />

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between w-full gap-4 sm:gap-0">
        {/* Contact Info */}
        <div className="flex flex-col gap-2 text-xs sm:text-sm">
          <p>Buy Square - Office #507 - Building 13 - Business Bay</p>
          <p>Dubai - United Arab Emirates</p>
          <p>Monday to Saturday: 9:00 AM - 6:00 PM</p>
          <p>© 2024 Sanisuary All Rights Reserved</p>
        </div>

        {/* Social Media */}
        <div className="flex items-center gap-4 self-start sm:self-auto">
          <img
            className="w-6 h-6 sm:w-8 sm:h-8"
            src="https://i.ibb.co.com/1JJVjgXg/image.png"
            alt="Whatsapp"
          />
          <img
            className="w-6 h-6 sm:w-8 sm:h-8"
            src="https://i.ibb.co.com/jkS512fF/image.png"
            alt="Facebook"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;