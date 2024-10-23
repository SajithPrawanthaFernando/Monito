import React from "react";

const PetKnowledgeCard = ({ title, description, imageUrl, tag }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover p-2 rounded-[1rem]"
      />
      <div className="pb-6 pl-6 pr-6 pt-3">
        <span className="inline-block bg-[#00A7E7] text-white text-[10px] px-3 py-1 rounded-full mb-3">
          {tag}
        </span>
        <h2 className="text-[16px] font-semibold text-gray-800 mb-2">
          {title}
        </h2>
        <p className="text-gray-600 text-[14px]">{description}</p>
      </div>
    </div>
  );
};

export default PetKnowledgeCard;
