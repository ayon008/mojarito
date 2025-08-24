import React from "react";
// import Banner from "./components/Home/Banner";
import Hero from "./components/Home/Hero";
import Cocktail from "./components/Home/Cocktail";
import About from "./components/Home/About";

const page = () => {
  return (
    <div>
      <Hero />
      <Cocktail />
      <About />
    </div>
  );
};

export default page;
