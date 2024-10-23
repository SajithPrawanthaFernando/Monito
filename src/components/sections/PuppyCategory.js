import React, { useState, useEffect } from "react";
import PuppyCard from "../PuppyCard";
import Filter from "../Filter";

const PuppyCategory = () => {
  const [pets, setPets] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    // Fetch pets data from API
    fetch("https://monitor-backend-rust.vercel.app/api/pets")
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error("Error fetching pets:", error));
  }, []);

  return (
    <div className="px-4 md:px-[50px] lg:px-[130px] pb-10 bg-white min-h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Filter Button for Smaller Devices */}
        <div className="md:hidden mb-4">
          <button
            className="bg-blue-950 text-white py-2 px-4 rounded-md"
            onClick={() => setIsFilterOpen(!isFilterOpen)} // Toggle filter visibility
          >
            {isFilterOpen ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        {/* Filter Sidebar */}
        <div
          className={`w-full md:w-1/4 mb-6 md:mb-0 ${
            isFilterOpen ? "" : "hidden md:block"
          }`}
        >
          <Filter />
        </div>

        {/* Puppy List */}
        <div className="w-full md:w-3/4 flex flex-col justify-between">
          {/* Title and Sort Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex items-baseline mb-4 md:mb-0">
              <h1 className="text-2xl font-bold text-[#1D3C6E] mr-3">
                Small Dog
              </h1>
              <p className="text-gray-500 text-sm">52 puppies</p>
            </div>
            <div className="relative w-full md:w-auto">
              <select className="border border-gray-300 text-sm rounded-full pl-4 pr-10 py-2 w-full md:w-[180px] h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none">
                <option>Sort by: Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                ▼
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 flex-grow">
            {pets.map((pet) => (
              <PuppyCard key={pet.id} pet={pet} />
            ))}
          </div>

          {/* Page Selector */}
          <div className="flex justify-center items-center font-bold pb-4 mt-6">
            <div className="text-blue-950 px-3 text-[25px] cursor-pointer">
              {"◄"}
            </div>
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="text-blue-950 rounded-[8px] mx-3 px-[16px] py-2 text-[16px] hover:bg-blue-950 hover:text-white cursor-pointer"
              >
                {index + 1}
              </div>
            ))}
            <div className="text-blue-950 mx-3 text-[16px]">...</div>
            <div className="text-blue-950 rounded-[8px] mx-3 px-[16px] py-2 text-[16px] hover:bg-blue-950 hover:text-white cursor-pointer">
              28
            </div>
            <div className="text-blue-950 px-3 text-[25px] cursor-pointer">
              {"►"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuppyCategory;
