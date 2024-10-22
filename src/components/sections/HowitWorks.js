// ProductsPage.js
import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard";

const HowitWorks = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the API
  useEffect(() => {
    fetch("https://monitor-backend-rust.vercel.app/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container mx-auto pt-20 px-[127px] bg-white">
      <p className="text-[16px] text-black ml-3">
        Hard to choose right products for your pets?
      </p>
      <div className="flex flex-row items-baseline justify-between">
        <h1 className="text-[24px] ml-3 font-bold  text-blue-950 mb-8">
          Our Products
        </h1>
        <button className="bg-white text-blue-950 font-medium border-2 border-blue-950 w-[151px] h-[44px] flex items-center justify-center space-x-2 rounded-full  hover:bg-blue-50">
          <span className="text-blue-950 font-medium text-[14px]">
            View more &gt;
          </span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HowitWorks;
