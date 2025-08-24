"use client";
import { featureLists, goodLists } from "@/app/js/contants";
import Image from "next/image";
import React from "react";
import image1 from "@/../public/images/under-img.jpg";
import checkImage from "@/../public/images/check.png";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: "786" });
  useGSAP(() => {
    const startValue = isMobile ? "top 20%" : "top top";
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: startValue,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });
    t1.to(".will-fade", {
      opacity: 0,
      stagger: 0.02,
      ease: "power1.inOut",
    });
    t1.to(".masked-img", {
      scale: 1.3,
      maskPosition: "center",
      maskSize: "400%",
      duration: 1,
      ease: "power1.inOut",
    });
    t1.to("#masked-content", {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <section id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The ART</h2>

        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Image src={checkImage} alt="check" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
          <div className="cocktail-img">
            <Image
              src={image1}
              alt="cocktail"
              className="abs-center masked-img size-full object-contain"
            />
          </div>
          <ul className="space-y-4 will-fade">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <Image src={checkImage} alt="check" />
                <p className="md:w-fit w-60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>
              This isn’t just a drink. It’s a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Art;
