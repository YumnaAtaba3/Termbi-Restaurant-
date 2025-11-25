
import faceIcon from "../../assets/footer/Face.svg";
import instaIcon from "../../assets/footer/Insta.svg";
import XIcon from "../../assets/footer/X.svg";
import logo from "../../assets/header/logo.svg"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function Footer() {

  return (
    <footer className="bg-[#272727] text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid  md:grid-cols-4 gap-8 ">
        {/* Logo and Intro */}
       <div className="flex flex-col gap-4  items-center md:items-start justify-center md:mb-12">
  <img src={logo} alt="logo" className="h-8 md:h-10 w-auto md:mr-8" />
  <span>Keep in touch</span>
   <div className="flex space-x-4 mt-3 md:mt-0">
      <a href="#">
        <img src={faceIcon} alt="facebook icon" className="w-5 h-5 opacity-80 hover:opacity-100 transition" />
      </a>
      <a href="#">
        <img src={instaIcon} alt="instagram icon" className="w-5 h-5 opacity-80 hover:opacity-100 transition" />
      </a>
      <a href="#">
        <img src={XIcon} alt="x icon" className="w-5 h-5 opacity-80 hover:opacity-100 transition" />
      </a>
    </div>
    <span>Provided by <img src={logo} alt="logo" className="h-3 inline" /></span>
    <span>www.termbi.com</span>
</div>


        {/* Features */}
        {/* <div>
          <h3 className="text-white font-semibold mb-4 text-[15px]">Features</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-400">Get Website</a></li>
            <li><a href="#" className="hover:text-red-400">Reservation</a></li>
            <li><a href="#" className="hover:text-red-400">Ordering</a></li>
            <li><a href="#" className="hover:text-red-400">Marketing</a></li>
          </ul>
        </div> */}
       <div>
  <h3 className="text-white font-semibold mb-4 text-[15px]">Opening Hours</h3>
  <ul className="space-y-2 text-md">
    <li><ArrowRightAltIcon /> 08 AM TO 12 AM</li>
    <li>MONDAY TO FRIDAY</li>
    <li><ArrowRightAltIcon /> 11 AM TO 10 PM</li>
    <li>Sunday: Closed</li>
  </ul>
</div>



        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-[15px]">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-400">Home</a></li>
            <li><a href="#" className="hover:text-red-400">Services</a></li>
            <li><a href="#" className="hover:text-red-400">About us</a></li>
            <li><a href="#" className="hover:text-red-400">Contact us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="text-start">
          <h3 className="text-white font-semibold mb-4 text-[15px]">Newsletters</h3>
          <p className="text-sm mb-4 text-start leading-relaxed">
            Stay up to date with our latest news, receive exclusive deals, and more.
          </p>

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-3 py-2 rounded-md bg-white text-sm text-black   my-4 focus:outline-none placeholder-gray-400"
            />


           <button
              type="submit"
              className="bg-red-500 px-12 py-2 rounded-md text-sm text-white hover:bg-red-600 transition"
            >
              Subscribe
            </button>
        </div>
      </div>

   {/* Bottom Section */}
<div className="border-t border-gray-700 mt-8 pt-4">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-white">
    <p>Copyright © {new Date().getFullYear()} | termbi</p>
    <div className="flex space-x-4 mt-3 md:mt-0">
      <a href="#">
        <img src={faceIcon} alt="facebook icon" className="w-5 h-5 opacity-80 hover:opacity-100 transition" />
      </a>
      <a href="#">
        <img src={instaIcon} alt="instagram icon" className="w-5 h-5 opacity-80 hover:opacity-100 transition" />
      </a>
      <a href="#">
        <img src={XIcon} alt="x icon" className="w-5 h-5 opacity-80 hover:opacity-100 transition" />
      </a>
    </div>
  </div>
</div>

    </footer>
  );
}
