import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg sm:w-[300px] h-[450px] overflow-hidden pb-2 mx-2">
      <img
        className="w-full h-[264px] object-cover p-2 rounded-[1rem]"
        src={product.image}
        alt={product.name}
      />
      <div className="px-4 py-4">
        <div className="font-bold text-[16px]">{product.name}</div>
        <div className="flex flex-row items-center">
          <p className="text-gray-600 text-[12px]">
            Product: {product.product}
          </p>
          <p className="mx-2 rounded-full text-gray-600 text-[18px] flex items-center justify-center">
            •
          </p>
          <p className="text-gray-600 text-[12px]">Size: {product.size}</p>
        </div>
        <p className="text-black text-[14px] font-semibold">{product.price}</p>

        {/* Gift and Description */}
        <div className="mt-2 flex items-center">
          {/* Gift Icon */}
          <div className="flex items-center text-sm bg-yellow-100 text-yellow-600 font-semibold px-2 py-2 rounded-lg w-full">
            <span className="mr-1">🎁</span>
            <span className="rounded-full text-gray-600 text-[18px] flex items-center justify-center mr-1">
              •
            </span>
            <span>{product.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
