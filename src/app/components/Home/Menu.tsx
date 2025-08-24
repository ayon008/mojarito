"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import leftImage from "../../../../public/images/slider-left-leaf.png";
import rightImage from "../../../../public/images/slider-right-leaf.png";
import { allCocktails } from "@/app/js/contants";
import leftArrow from "../../../../public/images/right-arrow.png";
import rightArrow from "../../../../public/images/left-arrow.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalCocktails = allCocktails.length;
  const goToSlide = (index: number) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };
  const getCocktailAt = (indexOffset: number) => {
    return allCocktails[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };
  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".details h2",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 100,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".details p",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 100,
        ease: "power1.inOut",
      }
    );
  }, [currentIndex]);

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
            <span>{prevCocktail?.name}</span>
            <Image src={leftArrow} alt="prev" />
          </button>
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail?.name}</span>
            <Image src={rightArrow} alt="next" />
          </button>
        </div>
        <div className="cocktail">
          <Image
            src={currentCocktail?.image}
            alt=""
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>
          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
