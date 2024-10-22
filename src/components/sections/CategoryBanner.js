import React from "react";
import image4 from "../../assets/images/image4.png";

const CategoryBanner = () => {
  return (
    <div className=" pt-[8rem] relative bg-white px-[125px] pb-20">
      <p className="text-gray-500 text-sm mb-2">Home &gt; Dog &gt; Small Dog</p>
      {/* Background Image Section */}
      <div
        className="bg-white w-[1300px] h-[410px] bg-no-repeat justify-center "
        style={{
          backgroundImage: `url(${image4})`,
          backgroundSize: "contain",
        }}
      >
        {/* Text Section */}
        <div className="ml-[45rem] pt-[60px]   text-left max-w-md">
          <h1 className="text-[50px] font-bold text-white mb-3 text-right">
            One More Friend
          </h1>
          <p className="text-[33px] font-semibold text-white text-right">
            Thousands More Fun!
          </p>
          <p className="text-white mb-6 mt-2 text-right text-[12px]">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <button className="bg-transparent text-white font-medium border-2 border-white w-[161px] h-[48px] flex items-center justify-center space-x-2 rounded-full shadow-lg hover:bg-blue-950">
              <span className="text-white font-medium">View Intro</span>
              <div className="flex items-center justify-center w-[24px] h-[24px] border-2 border-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[12px] h-[12px] text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 3.75a.75.75 0 0 1 1.125-.66l13.5 7.5a.75.75 0 0 1 0 1.32l-13.5 7.5A.75.75 0 0 1 4.5 18.75v-15z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
            <button className=" text-blue-950 bg-white px-4 py-2 rounded-full font-semibold hover:bg-opacity-90">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
