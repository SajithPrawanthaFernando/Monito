import React, { useEffect, useState } from "react";
import axios from "axios";

const CustomerCarousel = () => {
  const [customers, setCustomers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5; // Number of items to display per slide

  useEffect(() => {
    // Fetch customer data from the API
    axios
      .get("https://monitor-backend-rust.vercel.app/api/customers")
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching customer data:", error);
      });
  }, []);

  const goToSlide = (index) => {
    // Circular rotation logic
    const reorderedCustomers = [
      ...customers.slice(index),
      ...customers.slice(0, index),
    ];
    setCustomers(reorderedCustomers);
    setCurrentIndex(0); // Reset currentIndex to always start from 0 after rotation
  };

  return (
    <div className="px-[130px]  pt-10 pb-10 bg-white">
      <h2 className="text-[24px] text-blue-950 font-bold mb-6 text-left">
        Our Lovely Customers
      </h2>

      {customers.length > 0 && (
        <div className="relative">
          <div className="flex transition-transform duration-500 ease-in-out overflow-hidden">
            {customers.slice(0, itemsPerPage).map((customer, index) => (
              <div
                key={index}
                className="min-w-[20%] pt-4 pb-4 pr-4 flex justify-center"
              >
                <div className="rounded-lg shadow-lg overflow-hidden w-full max-w-[250px]">
                  <img
                    src={customer.image}
                    alt={customer.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="text-center p-3">
                    <p className="font-semibold text-lg">{customer.name}</p>
                    <p className="text-sm text-gray-600">{customer.pet}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots for Slide Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {customers.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full mx-1 ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerCarousel;
