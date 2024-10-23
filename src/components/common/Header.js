import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between w-full h-[100px] items-center py-4 px-[130px] bg-transparent border-b border-transparent fixed top-0 left-0 z-10">
      {/* Left side - Logo */}
      <div className="flex items-center space-x-8">
        <div className="text-4xl font-bold">
          <span className="font-extrabold text-blue-950">Monito</span>
          <span className="text-xs block text-blue-950">Pets for Best</span>
        </div>
      </div>

      {/* Centered Navigation */}
      <nav className="flex-grow flex justify-center space-x-6 text-[16px] text-blue-950">
        <a href="/" className="hover:text-blue-700 font-bold">
          Home
        </a>
        <a href="/category" className="hover:text-blue-700 font-bold">
          Category
        </a>
        <a href="/about" className="hover:text-blue-700 font-bold">
          About
        </a>
        <a href="#" className="hover:text-blue-700 font-bold">
          Contact
        </a>
      </nav>

      {/* Right side - Search, Join Button, Currency */}
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search something here!"
            className="border border-gray-300 rounded-full pl-10 pr-4 py-1 w-[280px] h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a7.38 7.38 0 111.42-1.42l4.25 4.24a1 1 0 11-1.41 1.42l-4.25-4.25zm-.5-6.7a5.38 5.38 0 10-10.76 0 5.38 5.38 0 0010.76 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>

        {/* Join Button */}
        <button className="bg-blue-950 w-[203px] h-[44px] text-white px-6 py-2 rounded-full text-sm hover:bg-blue-800">
          Join the community
        </button>

        {/* Currency Selector */}
        <div className="flex items-center space-x-1">
          <span className="text-red-600 text-lg font-bold">●</span>
          <select className="text-[16px] font-semibold text-gray-700 bg-transparent focus:outline-none">
            <option value="VND">VND</option>
            {/* Add more currency options here */}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
