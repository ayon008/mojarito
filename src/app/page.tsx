import React from "react";
import Hero from "./components/Home/Hero";
import Cocktail from "./components/Home/Cocktail";
import About from "./components/Home/About";
import Art from "./components/Home/Art";
import Menu from "./components/Home/Menu";

const page = () => {
  return (
    <div>
      <Hero />
      <Cocktail />
      <About />
      <Art />
      <Menu />
    </div>
  );
};

export default page;
