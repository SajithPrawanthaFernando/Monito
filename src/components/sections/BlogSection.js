import React from "react";
import image3 from "../../assets/images/image3.png";
import pow from "../../assets/images/dog-paw.png";

const AdoptionBanner = () => {
  return (
    <div className="relative bg-white px-[125px] pt-20">
      <div
        className="bg-white w-full h-[450px] bg-no-repeat items-center justify-center "
        style={{
          backgroundImage: `url(${image3})`,
          backgroundSize: "contain",
        }}
      >
        <div className="bg-transparent bg-opacity-70 pt-20 pl-[70px] rounded-lg max-w-xl">
          <h1 className="text-[52px] font-bold mb-2 text-blue-950 flex items-center">
            Adoption
            <span role="img" aria-label="paw" className="ml-3">
              <img src={pow} width={45} alt="paw" />
            </span>
          </h1>

          <h2 className="text-[36px] mb-4 text-blue-950 font-semibold">
            We Need Help. So Do They.
          </h2>
          <p className="text-gray-700 mb-6">
            Adopt a pet and give it a home, it will love you back
            unconditionally.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-900 text-white py-2 px-4 rounded-[57px] w-[163px] h-[48px] hover:bg-blue-700">
              Explore Now
            </button>
            <button className="bg-white text-blue-950 font-medium border-2 border-blue-950 w-[163px] h-[48px] flex items-center justify-center space-x-2 rounded-full shadow-lg hover:bg-blue-50">
              <span className="text-blue-950 font-medium">View Intro</span>
              <div className="flex items-center justify-center w-[24px] h-[24px] border-2 border-blue-950 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[12px] h-[12px] text-blue-950"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 3.75a.75.75 0 0 1 1.125-.66l13.5 7.5a.75.75 0 0 1 0 1.32l-13.5 7.5A.75.75 0 0 1 4.5 18.75v-15z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptionBanner;
