import React from "react";

const PuppyCard = ({ pet }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[300px] h-[378px] overflow-hidden pb-2 mx-2">
      <img
        src={pet.image}
        alt={pet.name}
        className="w-full h-[264px] object-cover p-2 rounded-[1rem]"
      />
      <div className="py-2 px-3">
        <h2 className="text-[16px] font-bold text-gray-800">{`${pet.id} - ${pet.breed}`}</h2>
        <div className="flex flex-row items-center">
          <p className="text-gray-600 text-[12px]">Gene: {pet.gender}</p>
          <p className="mx-2 rounded-full text-gray-600 text-[18px] flex items-center justify-center">
            •
          </p>
          <p className="text-gray-600 text-[12px]">Age: {pet.age} months</p>
        </div>
        <p className="text-black text-[14px] font-bold">{pet.price}</p>
      </div>
    </div>
  );
};

export default PuppyCard;
