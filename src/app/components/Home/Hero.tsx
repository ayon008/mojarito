"use client";
import Image from "next/image";
import React, { useRef } from "react";
import left_leaf from "../../../../public/images/hero-left-leaf.png";
import right_leaf from "../../../../public/images/hero-right-leaf.png";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(SplitText);

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isMobile = useMediaQuery({ query: "max-width: 786px" });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars , words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(".text-gradient", {
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.06,
    });
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      stagger: 0.06,
      ease: "expo.out",
      delay: 1,
    });

    const leaf = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      },
    });
    leaf.to(".right-leaf", {
      y: 200,
    });
    leaf.to(
      ".left-leaf",
      {
        y: -200,
      },
      0
    );

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    const videoElement = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });
    if (videoRef.current) {
      videoRef.current.onloadeddata = () => {
        videoElement.to(videoRef.current, {
          currentTime: videoRef.current?.duration,
        });
      };
    }
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <Image src={left_leaf} alt="left-leaf" className="left-leaf" />
        <Image src={right_leaf} alt="right-leaf" className="right-leaf" />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#cocktails">View cocktails</a>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
          className=""
        ></video>
      </div>
    </>
  );
};

export default Hero;
