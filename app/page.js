"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Car from "../components/Car";

gsap.registerPlugin(ScrollTrigger);

const heading = "WELCOME ITZFIZZ";
const STATS = [
  { value: "72%", text: "Faster delivery times" },
  { value: "45%", text: "Fewer support tickets" },
  { value: "31%", text: "Increase in repeat customers" },
  { value: "88%", text: "Customer satisfaction score" },
];

export default function Home() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const animations = gsap.context(() => {
      // Show the heading, then the stats when the page opens.
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro.from(".headline span", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.05,
      });
      intro.from(".stat", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.25,
      }, "-=0.3");

      // Move the car across the road as the user scrolls.
      const scroll = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
        },
      });
      scroll.fromTo("#car", { x: "-65vw" }, { x: "65vw", ease: "none" }, 0);
      scroll.to("#headline", { y: -40, opacity: 0.3, ease: "none" }, 0);
    }, sectionRef);

    return () => animations.revert();
  }, []);

  return (
    <main>
      <section ref={sectionRef} className="hero">
        <h1 id="headline" className="headline">
          {heading.split("").map((letter, index) => (
            <span key={index} className={letter === " " ? "space" : "letter"}>
              {letter === " " ? "\u00a0" : letter}
            </span>
          ))}
        </h1>

        <div className="road">
          <div id="car">
            <Car />
          </div>
        </div>

        <div className="stats">
          {STATS.map((stat) => (
            <div key={stat.value} className="stat">
              <p className="stat-value">{stat.value}</p>
              <p className="stat-text">{stat.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
