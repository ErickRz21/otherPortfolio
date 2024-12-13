// src/animations.js

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.querySelector(".main__container");
  const workSection = document.querySelector(".work");
  const footer = document.querySelector("footer");

  gsap.from(mainContainer, {
    opacity: 0,
    y: 50,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: mainContainer,
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    },
  });

  gsap.from(".main__container h1, .main__container h2, .gif", {
    opacity: 0,
    y: -30,
    stagger: 0.3,
    duration: 0.8,
    scrollTrigger: {
      trigger: mainContainer,
      start: "top 85%",
      end: "top 40%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".main__container p, .skills", {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: mainContainer,
      start: "top 85%",
      end: "top 40%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".work, .footer", {
    opacity: 0,
    y: 50,
    scale: 0.9,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: workSection,
      start: "top 80%",
      end: "top 50%",
      scrub: true,
    },
  });
});
