"use client";
import Image from "next/image";
import React from "react";
import leftImage from "@/../public/images/cocktail-left-leaf.png";
import rightImage from "@/../public/images/cocktail-right-leaf.png";
import { cocktailLists, mockTailLists } from "../../js/contants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cocktail = () => {
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    t1.from("#c-left-leaf", {
      x: -100,
      y: 100,
    });
    t1.from(
      "#c-right-leaf",
      {
        x: -100,
        y: 100,
      },
      0
    );
  }, []);
  return (
    <section id="cocktails" className="noisy">
      <Image src={leftImage} alt="l-leaf" id="c-left-leaf" />
      <Image src={rightImage} alt="r-leaf" id="c-right-leaf" />
      <div className="list">
        <div className="popular">
          <h2>Most Popular Cocktails</h2>
          <ul>
            {cocktailLists.map((cocktail, index) => {
              return (
                <li key={index}>
                  <div className="md:me-28">
                    <h3>{cocktail.name}</h3>
                    <p>
                      {cocktail.country}| {cocktail.detail}
                    </p>
                  </div>
                  <span>{cocktail.price}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="loved">
          <h2>Most loved Mocktails</h2>
          <ul>
            {mockTailLists.map((cocktail, index) => {
              return (
                <li key={index}>
                  <div className="md:me-28">
                    <h3>{cocktail.name}</h3>
                    <p>
                      {cocktail.country}| {cocktail.detail}
                    </p>
                  </div>
                  <span>{cocktail.price}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktail;
