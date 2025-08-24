import React from "react";
import Hero from "./components/Home/Hero";
import Cocktail from "./components/Home/Cocktail";
import About from "./components/Home/About";
import Art from "./components/Home/Art";

const page = () => {
  return (
    <div>
      <Hero />
      <Cocktail />
      <About />
      <Art />
    </div>
  );
};

export default page;
