import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#FAE8CB] pt-[80px] pb-[50px] px-[130px] rounded-tl-[40px] rounded-tr-[40px]">
      {/* Subscription Section */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:justify-between bg-blue-950 text-white py-8 px-10 rounded-[16px]">
        <h3 className="text-2xl font-semibold text-left md:text-left">
          Register Now So You Don’t Miss Our Programs
        </h3>
        <div className="flex space-x-4  md:mt-0 w-[707px] h-[72px] bg-white rounded-[14px] justify-center items-center px-[12px]">
          <input
            type="email"
            placeholder="Enter your Email"
            className="rounded-[8px] py-3 px-6 text-black w-[508px] h-[48px]   border-1 border-gray-400 focus:outline-none"
          />
          <button className=" bg-blue-950 text-white px-6 text-center py-3 text-sm rounded-[8px] w-[163px] h-[48px]  font-semibold">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Navigation and Social Icons */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between space-y-8 mt-12 md:flex-row md:space-y-0">
        {/* Links */}
        <div className="flex space-x-6 text-[16px] text-gray-800">
          <a href="#" className="hover:text-gray-600">
            Home
          </a>
          <a href="#" className="hover:text-gray-600">
            Category
          </a>
          <a href="#" className="hover:text-gray-600">
            About
          </a>
          <a href="#" className="hover:text-gray-600">
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-gray-500">
            <FontAwesomeIcon icon={faFacebookF} size="24" color="#000000" />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-500">
            <FontAwesomeIcon icon={faTwitter} size="24" color="#000000" />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-500">
            <FontAwesomeIcon icon={faInstagram} size="24" color="#000000" />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-500">
            <FontAwesomeIcon icon={faYoutube} size="24" color="#000000" />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        <p className="text-gray-600 text-sm">
          &copy; 2022 Monito. All rights reserved.
        </p>
        {/* Monito Branding */}
        <div className="max-w-7xl mx-auto flex justify-center mt-8">
          <div className="text-center">
            <p className="text-4xl font-extrabold text-blue-950">Monito</p>
            <p className="text-sm text-blue-950 font-normal">Pets for Best</p>
          </div>
        </div>
        <div className="flex space-x-4 text-gray-600 text-sm">
          <a href="#" className="hover:text-gray-500">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-500">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
