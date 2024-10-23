import React, { useEffect, useState } from "react";
import PetCard from "../PetCard";

const PetSecondList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Fetch pets data from API
    fetch("https://monitor-backend-rust.vercel.app/api/pets")
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error("Error fetching pets:", error));
  }, []);

  return (
    <div className="bg-white container mx-auto py-8 px-[120px] pb-20">
      <p className="text-[16px] text-black ml-3">What's new?</p>
      <div className="flex flex-row items-baseline justify-between">
        <h1 className="text-[24px] ml-3 font-bold text-blue-950 mb-8">
          See More Puppies
        </h1>
      </div>

      {/* Only show the first 4 pet cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {pets.slice(0, 4).map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default PetSecondList;
