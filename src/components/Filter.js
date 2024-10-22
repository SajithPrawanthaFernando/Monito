import React from "react";

const Filter = () => {
  return (
    <div className="bg-white">
      <h3 className="font-bold text-[24px] mb-6 text-[#1D3C6E] mt-1">Filter</h3>

      {/* Gender */}
      <div className="mb-3">
        <h4 className="font-semibold mb-2 text-[16px] text-black">Gender</h4>
        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" id="male" />
          <label htmlFor="male" className="text-sm">
            Male
          </label>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" id="female" />
          <label htmlFor="female" className="text-sm">
            Female
          </label>
        </div>
      </div>

      <hr className="mb-3 mr-4"></hr>

      {/* Color */}
      <div className="mb-3">
        <h4 className="font-semibold mb-2 text-[16px] text-black">Color</h4>
        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" id="red" />
          <label htmlFor="red" className="flex items-center text-sm">
            <span className="w-4 h-4 rounded-full bg-red-500 mr-2"></span> Red
          </label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" id="apricot" />
          <label htmlFor="apricot" className="flex items-center text-sm">
            <span className="w-4 h-4 rounded-full bg-orange-400 mr-2"></span>{" "}
            Apricot
          </label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" id="black" />
          <label htmlFor="black" className="flex items-center text-sm">
            <span className="w-4 h-4 rounded-full bg-black mr-2"></span> Black
          </label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" id="black-white" />
          <label htmlFor="black-white" className="flex items-center text-sm">
            <span className="w-4 h-4 rounded-full bg-gray-700 mr-2"></span>{" "}
            Black & White
          </label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" id="silver" />
          <label htmlFor="silver" className="flex items-center text-sm">
            <span className="w-4 h-4 rounded-full bg-gray-400 mr-2"></span>{" "}
            Silver
          </label>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" id="tan" />
          <label htmlFor="tan" className="flex items-center text-sm">
            <span className="w-4 h-4 rounded-full bg-yellow-400 mr-2"></span>{" "}
            Tan
          </label>
        </div>
      </div>

      <hr className="mb-3 mr-4"></hr>

      {/* Price */}
      <div className="mb-3">
        <h4 className="font-semibold mb-2 text-[16px] text-black">Price</h4>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            placeholder="Min"
            className="w-full border-b-2  focus:outline-none  py-1 px-2 "
          />

          <input
            type="number"
            placeholder="Max"
            className="w-full border-b-2  focus:outline-none  py-1 px-2 mr-4"
          />
        </div>
      </div>

      <hr className="mb-3 mr-4"></hr>

      {/* Breed */}
      <div className="mb-3">
        <h4 className="font-semibold mb-2 text-[16px] text-black">Breed</h4>
        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" id="small" />
          <label htmlFor="small" className="text-sm">
            Small
          </label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" id="medium" />
          <label htmlFor="medium" className="text-sm">
            Medium
          </label>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" id="large" />
          <label htmlFor="large" className="text-sm">
            Large
          </label>
        </div>
      </div>

      <hr className="mb-3 mr-4"></hr>
    </div>
  );
};

export default Filter;
