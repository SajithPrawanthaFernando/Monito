import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
  FaShare,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PetDetail = () => {
  const images = [
    "https://s3-alpha-sig.figma.com/img/f490/0121/5e7c62bfb1ba4c89b22807b33ac45cb7?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IIoVGUUjiaHH-kwWnJFbEqJ4VzrdhSWQ8U2xqbIjfwZU5vPV2OY2Z9RmN8pZtUR8CHvf89yeWKOxp9uNKvtvvOs21~1jckrLPb28xysdCS0DxaLDWqnbDeNatjmzoU67Xa~n6SMMochaRPUurfKGqHMIFduutA2bjFXwN4dVa~oNYxD64hwMxv5KkMJ6qrQ3UZz19Jj72Ylphyf2D34BCa-rwdkzq4QwtamMZprE77xI1fVE5gfHaMbIJo9rRytFxdfJjYpmO2vlOGFBZIA0CeimYOpfpD89Kv0aWgFclqnOhyaKKovnIY~fUcycFrwvj1GB-d9toUcVC7KD19UUZA__",
    "https://s3-alpha-sig.figma.com/img/ed98/3856/e3a6954a2b20e00d7381454e58aa5f21?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iX5JrsVK~iuVKacZ7-5vQp~UEUBb0eUA5isb6wzLTs6zEXp4Gkgvzlxj2gNJQ18c-eXspHugUb2alU8Vpcx3ZKSSqpUbLay-XJHi5NPlUMZSMZ6VKLDKAImWQjH9vbfB6EWqf8LIZiRNUlQiP0xl9HBAoFVwdIPzRQsI2DP-P~T-dU~qh8AsB7gNC52GkLwVXdyLBH3ONeH7I4wQ3Eb9jb8bvzCNhAKtPlVZ-vItZUaRujYfoMn45S-CzPXb49f4Kj9e7e0JN9lkXr7M5c9j-QhU83D6OtN0KCLZGEGQHRSmWVUg6mqNBOhs5Jk8NcZt8mm0PSFHEStmCGQfV5gOgg__",
    "https://s3-alpha-sig.figma.com/img/c015/c4d6/6cffb2c9eaf940c3cd6e643672d288e2?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IBS~heY0cUGHjMLYvuAsDnHxTnpOKnP0CQ3D7KGuv-YFlC99ROonMZ7XSgW9YsaUy6vhgJ-79T1L6NPPVAPWlIMX46sK3jvN0Vp2qt13Ayqio8bnXNws8ILI5OrTWlvks9v7Y5RFX80AtA4K4AxwbVADC-NiMbSqjxvoL6wTyxJdUcT-e06YfOQp5No6mOO15fN~Bh11tDRtqao90NBd1Z8~o8Kqj8HDWetV910h6t7tYVX2dE87QdYmWjqVQCb2HqW0LDSazO1ha1NNynnA7lGRWBDwbzIoGcj1UAmjuISuzpvLrrNdIs58ycrI1LuNVQWI7hvyLF~xP6pHVsc~cw__",
    "https://s3-alpha-sig.figma.com/img/5bbf/0fe9/f94c346bcd3d90f4b0e033642098257e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CIbSAyH0Pg-H~BQqeYGqsL1PJH8q8Fg2peLxddwwNGWAWHfiPWOIfPcNfJFpdru6W2s5wJrO6h9-AktJ9lGaP99EXA8iqGSVOC9-qehTSVFVrJAqIGWTj3Cq2WD6BOChEnPCqdxvGC4WwSNulRTm953r7t05oQB0ks0NSBJIuHnu2STa2D62BMvxDRYR6-PAQaym3P2dBsTY8eREUFzkfxkme0BAO~7b5H~9gKNI7UaZucOI6woCUvtRYaxqMiK-xh814g2LUnInR6p-0dh857rAEWA7ixmNvnLG81IIliE3AoQWhKNuHJvShEONOcp7A4Y05OFt~6kIDFtIqa9R0A__",
    "https://s3-alpha-sig.figma.com/img/a21b/ff08/d7407df37de834d656c84bedba62c8be?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DwhYjL~jJM9BvVn-rINWnYXSnAaGRrQvCMoNgo3zKNLdlciGza6kwpxKUSHSazxHN1LbZC71oBRQLBWmmjIhvLJjR4BiOvbBzosXydsfr4eUMM~S25eKajOBGjezJzU4-DQIPTKWwIlPxhd5jBQvRbJbcOI7X6oAoW92ram0TPJMkJh-Ajqm6vo7jKdxV6GyneoSWQLb6eOCz-~PAKRsoJcZfC-AxwJMPtzDRr6rlL9e~PaOizqpAHGmy9thTF6dcrW6bfw5Pr178jAM3gqt-r7NmkLOA2raIM4b7wFT8bustJkvETiU6ncmZHabEEO06J3ipDduPlM7IzF3ILmuQw__",
    "https://s3-alpha-sig.figma.com/img/8c73/5279/d3027592cb16678e1f38032890d8ac6f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cjxjg5lzbC3kqUcfvDnAoWrObi0NIj6jNZ3FY7Emz358JT~iit~uuZTsiy0xr1zS4jotbJOAC~YoyF5~IK9KGOLV6KYqKcwOEoQlmQ78633x0whbshyRCihTWIEad9m70G6kL9X6Cq9982p~nKRGMouwFYd10LMaUBRynrbLBcx5GflXimhZraG3G7LCvmf3xbZJFI7fiQFOoszt~ET9AQtMeo9N47ZM~~IHt-lVpIp5~n~j5NYGwNf1ZqeDYBP9XUzeYv7g28d4yR-AcRqQFbiZikirNNPuKwyHBu63JbEsT3GY6E-Ut3MRZFfvAQ9uUnBFIrvBX146XVFoRXmjXw__",
  ];

  const [mainImage, setMainImage] = useState(0);

  const handleNext = () => {
    setMainImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setMainImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="pt-[8rem] px-[120px] pb-10 bg-white ">
      <div className="flex justify-between border border-[#EBEEEF] rounded-[20px] p-4">
        {/* Left Side - Image Gallery */}
        <div className="w-1/2">
          <div className="relative">
            {/* Main Image */}
            <div className="rounded-lg overflow-hidden mb-4">
              <img
                className="w-[615px] h-[476px] object-cover rounded-lg"
                src={images[mainImage]}
                alt={`Pet ${mainImage + 1}`}
              />
            </div>

            {/* Previous/Next Buttons */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#FFFFFF66]  text-white p-2 ml-4 rounded-full hover:bg-[#FFFFFF86] transition"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#FFFFFF66] text-white  mr-10 p-2 rounded-full hover:bg-[#FFFFFF86] transition"
            >
              <FaChevronRight size={24} />
            </button>
          </div>

          {/* Thumbnail Carousel */}
          <div className="mt-4">
            <div className="flex space-x-2">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`w-24 h-24 rounded-lg overflow-hidden cursor-pointer ${
                    index === mainImage ? "border-4 border-blue-600" : ""
                  }`}
                  onClick={() => setMainImage(index)}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="mt-5 flex space-x-4 bg-[#FCEED5] rounded-[10px] mr-2">
            <div className="flex items-center space-x-2">
              <span className=" text-red-600 rounded-full p-2">❤️</span>
              <p className="text-sm font-bold text-blue-950">
                100% health guarantee for pets
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className=" text-yellow-600 rounded-full p-2">🐾</span>
              <p className="text-sm font-bold text-blue-950">
                100% guarantee of pet identification
              </p>
            </div>
          </div>

          {/* Social Share Icons */}
          <div className="mt-4">
            <div className="flex space-x-4 mt-2">
              <FaShare size={18} className="text-blue-950" />
              <p className="font-bold text-sm text-blue-950">Share:</p>
              <a href="#">
                <FaFacebookF size={18} className="text-[#99A2A5]" />
              </a>
              <a href="#">
                <FaTwitter size={18} className="text-[#99A2A5]" />
              </a>
              <a href="#">
                <FaInstagram size={18} className="text-[#99A2A5]" />
              </a>
              <a href="#">
                <FaEnvelope size={18} className="text-[#99A2A5]" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Pet Details */}
        <div className="w-1/2 pl-10">
          <div className="flex flex-col space-y-4">
            {/* Breadcrumb */}
            <div className="text-gray-400 text-sm">
              <a href="#" className="hover:underline">
                Home
              </a>{" "}
              {">"}
              <a href="#" className="hover:underline">
                {" "}
                Dog
              </a>{" "}
              {">"}
              <a href="#" className="hover:underline">
                {" "}
                Large Dog
              </a>{" "}
              {">"}
              <a href="#" className="hover:underline">
                {" "}
                Shiba Inu Sepia
              </a>
            </div>

            {/* Title and Price */}
            <div>
              <p className="text-sm text-gray-500 mt-2">SKU #1000078</p>
              <h1 className="text-2xl font-bold text-blue-950">
                Shiba Inu Sepia
              </h1>
              <p className="text-xl text-blue-950 mt-2 font-bold">
                34.000.000 VND
              </p>
            </div>
            {/* Buttons */}
            <div className="mt-7 flex space-x-4 pb-3">
              <button className="bg-blue-950 text-white px-4 py-2 w-[138px] h-[44px] rounded-[57px] hover:bg-blue-800 transition">
                Add to Cart
              </button>
              <button className="bg-white border-2 border-blue-950 text-blue-950 px-4 py-2 w-[217px] h-[44px] rounded-[57px] hover:bg-gray-100 transition">
                Contact Seller
              </button>
            </div>

            {/* Pet Details */}
            <div>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>
                  <div className="flex flex-row flex-cols-2 mb-2 mt-2">
                    <div className="flex-1">SKU</div>
                    <div className="flex-1">: #1000078</div>
                  </div>
                </li>
                <hr className="mb-2" />
                <li>
                  <div className="flex flex-row flex-cols-2 mb-2 mt-2">
                    <div className="flex-1">Gender</div>
                    <div className="flex-1">: Female</div>
                  </div>
                </li>
                <hr />
                <li>
                  <div className="flex flex-row flex-cols-2 mb-2 mt-2">
                    <div className="flex-1">Age</div>
                    <div className="flex-1">: 2 months</div>
                  </div>
                </li>
                <hr />
                <li>
                  <div className="flex flex-row flex-cols-2 mb-2 mt-2">
                    <div className="flex-1">Size</div>
                    <div className="flex-1">: Small</div>
                  </div>
                </li>
                <hr />

                <li>
                  <div className="flex flex-row flex-cols-2 mb-2 mt-2">
                    <div className="flex-1">Color</div>
                    <div className="flex-1">: Apricot & Tan</div>
                  </div>
                </li>
                <hr />
                <li>
                  <div className="flex flex-row flex-cols-2 mb-2 mt-2">
                    <div className="flex-1">Vaccinated</div>
                    <div className="flex-1">: Yes</div>
                  </div>
                </li>
                <hr />
                <li>
                  <div className="flex flex-row flex-cols-2 mb-2 mt-2">
                    <div className="flex-1">Dewormed</div>
                    <div className="flex-1">: Yes</div>
                  </div>
                </li>
                <hr />
                <li>
                  <div className="flex flex-row flex-cols-2 mb-2 mt-2">
                    <div className="flex-1">Cert</div>
                    <div className="flex-1">: Yes (MKA)</div>
                  </div>
                </li>
                <hr />
                <li>
                  <div className="flex flex-row flex-cols-2 mb-2 mt-2">
                    <div className="flex-1">Microchip</div>
                    <div className="flex-1">: Yes</div>
                  </div>
                </li>
                <hr />
                <li>
                  <div className="flex flex-row flex-cols-2 mb-2 mt-2">
                    <div className="flex-1">Location</div>
                    <div className="flex-1">: Vietnam</div>
                  </div>
                </li>
                <hr />
                <li>
                  <div className="flex flex-row flex-cols-2 mb-2 mt-2">
                    <div className="flex-1">Published Date</div>
                    <div className="flex-1">: 12-Oct-2022</div>
                  </div>
                </li>
                <hr />
                <li>
                  <div className="flex flex-row flex-cols-2 mb-2 mt-2">
                    <div className="flex-1">Additional Information</div>
                    <div className="flex-1">
                      : Pure breed Shih Tzu. <br />
                      Good body structure. <br />
                      With MKA certification and microchip. <br />
                      Father from champion lineage.
                    </div>
                  </div>
                </li>
                <hr />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
