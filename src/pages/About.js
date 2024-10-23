import React, { useState, useEffect } from "react";
import CategoryBanner from "../components/sections/CategoryBanner";
import PuppyCategory from "../components/sections/PuppyCategory";
import PetDetail from "../components/sections/PetDetail";
import CustomerCarousel from "../components/sections/CustomerCarousel";
import PetSecondList from "../components/sections/PetSecondList";

const About = () => {
  return (
    <>
      <PetDetail />
      <CustomerCarousel />
      <PetSecondList />
    </>
  );
};

export default About;
