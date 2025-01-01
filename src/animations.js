// src/animations.js

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function runAnimations() {
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
    stagger: 0.2,
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
    stagger: 0.1,
    duration: 0.8,
    scrollTrigger: {
      trigger: mainContainer,
      start: "top 85%",
      end: "top 40%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".work", {
    opacity: 0.5,
    y: 50,
    scale: 0.9,
    duration: 5,
    ease: "power1.out",
    scrollTrigger: {
      trigger: workSection,
      start: "top 90%",
      end: "top 60%",
      scrub: 0.5,
    },
  });

  gsap.from(footer, {
    opacity: 1,
    y: 50,
    scale: 0.9,
    duration: 5,
    ease: "power1.out",
    scrollTrigger: {
      trigger: footer,
      start: "top 99%",
      end: "top 85%",
      scrub: 0.5,
    },
  });
});
}
