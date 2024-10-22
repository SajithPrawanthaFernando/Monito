import React, { useState, useEffect } from "react";
import CategoryBanner from "../components/sections/CategoryBanner";
import PuppyCategory from "../components/sections/PuppyCategory";

const Category = () => {
  return (
    <>
      <CategoryBanner />
      <PuppyCategory />
    </>
  );
};

export default Category;
