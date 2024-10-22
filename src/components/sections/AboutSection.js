// src/components/PetList.js

import React, { useEffect, useState } from "react";
import PetCard from "../PetCard";

const PetList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Fetch pets data from API
    fetch("https://monitor-backend-rust.vercel.app/api/pets")
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error("Error fetching pets:", error));
  }, []);

  return (
    <div className="bg-white container mx-auto py-8 px-[120px]">
      <p className="text-[16px] text-black ml-3">Whats new?</p>
      <div className="flex flex-row items-baseline justify-between">
        <h1 className="text-[24px] ml-3 font-bold  text-blue-950 mb-8">
          Take A Look At Some Of Our Pets
        </h1>
        <button className="bg-white text-blue-950 font-medium border-2 border-blue-950 w-[151px] h-[44px] flex items-center justify-center space-x-2 rounded-full  hover:bg-blue-50">
          <span className="text-blue-950 font-medium text-[14px]">
            View more &gt;
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default PetList;
