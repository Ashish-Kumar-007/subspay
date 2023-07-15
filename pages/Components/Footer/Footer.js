import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius, est eget iaculis porta.</p>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Terms of Service</h3>
            <ul className="list-disc ml-4">
              <li>Terms and conditions</li>
              <li>Privacy policy</li>
              <li>Cookie policy</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">FAQs</h3>
            <ul className="list-disc ml-4">
              <li>General FAQs</li>
              <li>Account-related FAQs</li>
              <li>Subscription FAQs</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex">
              <a href="#" className="mr-4">
                <FaFacebook className="text-2xl text-gray-400 hover:text-white transition-colors duration-200" />
              </a>
              <a href="#" className="mr-4">
                <FaTwitter className="text-2xl text-gray-400 hover:text-white transition-colors duration-200" />
              </a>
              <a href="#" className="mr-4">
                <FaInstagram className="text-2xl text-gray-400 hover:text-white transition-colors duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
