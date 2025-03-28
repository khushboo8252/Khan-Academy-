import { FiGlobe } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        
        {/* Left Section */}
        <div className="md:w-1/2">
          <p className="text-lg mb-4">
            Our mission is to provide a free, world-class education <br /> to anyone, anywhere.
          </p>
          <p className="mb-6">
            Khan Academy is a 501(c)(3) nonprofit organization. <br />
            <a href="#" className="font-bold underline">
              Donate
            </a>{" "}
            or{" "}
            <a href="#" className="font-bold underline">
              volunteer
            </a>{" "}
            today!
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 grid grid-cols-2 gap-6 text-sm">
          {/* About */}
          <div>
            <h3 className="font-bold mb-2">About</h3>
            <ul className="space-y-1">
              <li><a href="#">News</a></li>
              <li><a href="#">Impact</a></li>
              <li><a href="#">Our team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Internships</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-2">Contact</h3>
            <ul className="space-y-1">
              <li><a href="#">Help center</a></li>
              <li><a href="#">Support community</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8 text-sm">
        
        {/* Language & Country Section */}
        <div className="flex items-center space-x-4">
          <FiGlobe className="text-lg" />
          <span>Language: English</span>
          <div className="flex items-center space-x-2">
            <img src="https://flagcdn.com/w40/us.png" alt="US" className="w-5 h-4" />
            <span>U.S.</span>
            <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-5 h-4" />
            <span>India</span>
            <img src="https://flagcdn.com/w40/mx.png" alt="Mexico" className="w-5 h-4" />
            <span>Mexico</span>
            <img src="https://flagcdn.com/w40/br.png" alt="Brazil" className="w-5 h-4" />
            <span>Brazil</span>
          </div>
        </div>

        {/* Terms & Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Terms of use</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookie Notice</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0 text-lg">
          <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
          <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
