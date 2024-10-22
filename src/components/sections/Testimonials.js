import React from "react";

// Array of brand logos
const brands = [
  {
    name: "Sheba",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfsDudg8JnPUMuHQBTNBwRrYB_SWfnvI_YqQ&s",
  },
  {
    name: "Whiskas",
    logo: "https://cdn.prod.website-files.com/5fb85f26f126ce08d792d2d9/65e60654ac1dfcfe74a13b74_after_whiskas.jpg",
  },
  {
    name: "Bakers",
    logo: "https://seeklogo.com/images/B/bakers-logo-0CC19E700E-seeklogo.com.png",
  },
  {
    name: "Felix",
    logo: "https://live.staticflickr.com/3761/9782342712_83db19bb09_c.jpg",
  },
  {
    name: "Good Boy",
    logo: "https://seeklogo.com/images/G/good-boy-logo-88887435AC-seeklogo.com.png",
  },
  {
    name: "Butcher's",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6q_AMyTlw1FKAeBSauu00SLl0kHe5I9PajA&s",
  },
  {
    name: "Pedigree",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtt574z2AkKwqBsOCAJneW-pnJm9O4eKXvg&s",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white py-8 px-[110px] pt-20">
      {/* Heading and View Button */}
      <div className="flex justify-between items-center container mx-auto px-6">
        <h2 className="text-[16px] font-semibold text-gray-800">
          Proud to be part of{" "}
          <span className="text-blue-950 text-[24px]">Pet Sellers</span>
        </h2>
        <button className="bg-white text-blue-950 font-medium border-2 border-blue-950 w-[201px] h-[44px] flex items-center justify-center space-x-2 rounded-full hover:bg-blue-50">
          <span className="text-blue-950 font-medium text-[14px]">
            View all our sellers &gt;
          </span>
        </button>
      </div>

      {/* Brands Logos */}
      <div className="mt-6 container mx-auto flex justify-between px-6">
        {brands.map((brand) => (
          <div key={brand.name} className="flex-shrink-0 p-2">
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-[100px] h-[75px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
