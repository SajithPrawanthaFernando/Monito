import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");

      console.log("Email submitted:", email);

      setEmail("");
    }
  };

  return (
    <footer className="bg-[#FAE8CB] pt-[80px] pb-[50px] px-4 md:px-[130px] rounded-tl-[40px] rounded-tr-[40px]">
      {/* Subscription Section */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:justify-between bg-blue-950 text-white py-8 px-10 rounded-[16px]">
        <h3 className="text-2xl font-semibold text-left md:text-left">
          Register Now So You Don’t Miss Our Programs
        </h3>
        <form
          onSubmit={handleSubmit}
          className="flex space-x-4 md:mt-0 w-full md:w-auto h-[72px] bg-white rounded-[14px] justify-center items-center px-[12px]"
        >
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-[8px] py-3 px-6 text-black w-[508px] h-[48px] border border-gray-400 focus:outline-none"
          />
          {error && <span className="text-red-500">{error}</span>}{" "}
          {/* Display error message */}
          <button
            className="bg-blue-950 text-white px-6 text-center py-3 text-sm rounded-[8px] w-[163px] h-[48px] font-semibold"
            type="submit"
          >
            Subscribe Now
          </button>
        </form>
      </div>

      {/* Navigation and Social Icons */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between space-y-8 mt-12 md:flex-row md:space-y-0 pb-6">
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
      <hr className="w-full border-t border-gray-300 my-2" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        <p className="text-gray-600 text-sm">
          &copy; 2022 Monito. All rights reserved.
        </p>

        {/* Monito Branding */}
        <div className="flex justify-center mt-8">
          <div className="text-center">
            <p className="text-4xl font-extrabold text-blue-950">Monito</p>
            <p className="text-sm text-blue-950 font-normal">Pets for Best</p>
          </div>
        </div>

        {/* Terms and Privacy Links */}
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
