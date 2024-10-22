import React from "react";
import image from "../../assets/images/image.png"; // Imported image

const HeroSection = () => {
  return (
    <div
      className="pt-[8rem] px-[120px] bg-no-repeat bg-center min-h-screen mt-[-45px] bg-white"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "contain" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-[60px] font-bold text-blue-950 mb-[10px] mt-[-8.5rem]">
            One More Friend <br />
          </h1>
          <h1 className="text-[46px] font-semibold text-blue-950 mb-4 ">
            Thousands More Fun!
          </h1>
          <p className="text-lg text-gray-600 mb-8 mt-10">
            Having a pet means you have more joy, a new friend, a happy
            <br />
            person who will always be with you to have fun. We have 200+
            different pets that can meet your needs!
          </p>
          <div className="flex space-x-4 mt-8">
            <button className="bg-white text-blue-950 font-medium border-2 border-blue-950 w-[161px] h-[48px] flex items-center justify-center space-x-2 rounded-full shadow-lg hover:bg-blue-50">
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

            <button className="bg-blue-950 text-white  w-[161px] h-[48px] text-center rounded-full shadow-lg hover:bg-blue-800">
              Explore Now
            </button>
          </div>
        </div>

        {/* Empty Image Section */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0"></div>
      </div>
    </div>
  );
};

export default HeroSection;
