import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
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

  const [mainImage, setMainImage] = useState(0); // Track main image index

  const handleNext = () => {
    setMainImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setMainImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="pt-[8rem] px-[120px] pb-20 bg-white">
      <div className="flex justify-between">
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
          <div className="mt-5 flex space-x-4">
            <div className="flex items-center space-x-2">
              <span className="bg-red-100 text-red-600 rounded-full p-2">
                ❤️
              </span>
              <p className="text-sm font-medium">
                100% health guarantee for pets
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-yellow-100 text-yellow-600 rounded-full p-2">
                🐾
              </span>
              <p className="text-sm font-medium">
                100% guarantee of pet identification
              </p>
            </div>
          </div>

          {/* Social Share Icons */}
          <div className="mt-4">
            <p className="font-semibold">Share:</p>
            <div className="flex space-x-4 mt-2">
              <a href="#">
                <FaFacebookF size={24} className="text-blue-600" />
              </a>
              <a href="#">
                <FaTwitter size={24} className="text-blue-400" />
              </a>
              <a href="#">
                <FaInstagram size={24} className="text-pink-600" />
              </a>
              <a href="#">
                <FaEnvelope size={24} className="text-gray-600" />
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
              <span> Shiba Inu Sepia</span>
            </div>

            {/* Title and Price */}
            <div>
              <h1 className="text-3xl font-bold">Shiba Inu Sepia</h1>
              <p className="text-xl text-gray-500 mt-2">$1,000</p>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-600 text-base">
                Meet the Shiba Inu! This adorable and energetic pup is known for
                its fluffy coat and cute pointy ears. Shibas are loyal,
                confident, and independent, making them the perfect addition to
                any home.
              </p>
            </div>

            {/* Pet Details */}
            <div>
              <p className="font-semibold text-lg">Details:</p>
              <ul className="text-gray-600 space-y-1">
                <li>Breed: Shiba Inu</li>
                <li>Color: Sepia</li>
                <li>Age: 3 months</li>
                <li>Gender: Male</li>
                <li>Weight: 15 lbs</li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
              <button className="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                Contact Seller
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
