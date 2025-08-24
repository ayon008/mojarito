"use client";
import Image from "next/image";
import React, { useState } from "react";
import leftImage from "../../../../public/images/slider-left-leaf.png";
import rightImage from "../../../../public/images/slider-right-leaf.png";
import { allCocktails } from "@/app/js/contants";
import leftArrow from "../../../../public/images/right-arrow.png";
import rightArrow from "../../../../public/images/left-arrow.png";
const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalCocktails = allCocktails.length;
  const goToSlide = (index: number) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };
  return (
    <section id="menu" aria-label="menu-heading">
      <Image src={leftImage} alt="slide-left" id="m-left-leaf" />
      <Image src={rightImage} alt="slide-right" id="m-right-leaf" />
      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>
      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={cocktail.id}
              className={`
				${isActive ? "text-white border-white" : "text-white/50 border-white/50"}
			 `}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>
      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>Prev</span>
            <Image src={leftArrow} alt="prev" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
