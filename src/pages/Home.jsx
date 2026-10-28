import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "../components/Navbar";
import { HourglassLogo } from "../components/HourglassLogo";

gsap.registerPlugin(ScrollTrigger);
gsap.config({ force3D: true });


const FEATURES = [
  {
    title: "affordable prices",
    body: (
      <>
        we're one of the few providers still offering lifetime licenses
        <br />
        choose between 30 days, 90 days, or lifetime access
      </>
    ),
  },
  {
    title: "user friendly",
    body: (
      <>
        easy to configure and easy to use
        <br />
        get a premade config from the web for servers like mmc, elevate, or hypixel
      </>
    ),
  },
  {
    title: "one step ahead",
    body: (
      <>
        passes all anticheat checks and avoids automated bans
        <br />
        getting caught takes an actual staff member
      </>
    ),
  },
  {
    title: "like a family",
    body: (
      <>
        we actually listen to our users, you tell us what you want, we make it happen
        <br />
        it's your client as much as ours
      </>
    ),
  },
];

export function Home() {
  const containerRef = useRef(null);
  const [plans, setPlans] = useState([]);

  
  useEffect(() => {
    let active = true;
    fetch("/api/payments/plans")
      .then((res) => res.json())
      .then((data) => {
        if (active && data?.plans) setPlans(data.plans);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  
  useEffect(() => {
    const ctx = gsap.context(() => {
      
      const heroItems = containerRef.current.querySelectorAll("[data-hero]");
      gsap.set(heroItems, { opacity: 0, y: 20 });
      gsap.to(heroItems, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.1,
      });

      
      const glow = containerRef.current.querySelector(".hero-closer-glow");
      if (glow) {
        gsap.fromTo(
          glow,
          { opacity: 0, y: 90 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", delay: 0.25 }
        );
      }

      
      const closer = containerRef.current.querySelector(".hero-closer");
      if (closer) {
        gsap.set(closer, { opacity: 0, y: 90 });
        gsap.to(closer, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.3 });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />

      <section className="relative min-h-screen flex flex-col px-4 sm:px-6 overflow-hidden pt-24 sm:pt-28 pb-16">
        
        <HourglassLogo
          style={{
            top: "6%",
            right: "min(-10rem, -12vw)",
            width: "min(30rem, 38vw)",
            transform: "rotate(7deg)",
          }}
        />
        <HourglassLogo
          style={{
            bottom: "8%",
            left: "min(-10rem, -12vw)",
            width: "min(22rem, 28vw)",
            transform: "rotate(-8deg)",
          }}
        />

        
        <div className="hero-closer-glow" aria-hidden="true" />

        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto my-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center text-left">
          
          <div>
            <h1 data-hero className="tracking-tight leading-[1.08]">
              <span className="block text-4xl sm:text-5xl xl:text-6xl font-semibold text-white">
                why <span className="hero-advanced-pill">timewarp</span>?
              </span>
            </h1>

            <p
              data-hero
              className="mt-6 text-lg sm:text-xl leading-relaxed bg-gradient-to-b from-black via-white to-black bg-clip-text text-transparent"
            >
              undetectable, lightweight, and fully customizable.
              <br />
              built for 1.7.10 & 1.8.9.
              <br />
              the way minecraft pvp used to be.
            </p>

            <Link
              data-hero
              to="/modules"
              className="group inline-flex items-center gap-2 mt-8 text-[1.05rem] font-medium text-text-primary/85 hover:text-white transition-colors duration-150"
            >
              <span>view modules</span>
              <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
            </Link>
          </div>

          
          <div data-hero className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
            {FEATURES.map((item) => (
              <div key={item.title} className="flex flex-col items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent-pink/10 flex items-center justify-center text-accent-pink">
                  <span className="text-xl">✦</span>
                </div>
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        
        <div className="hero-closer relative z-10 mx-auto w-full max-w-[1400px] mt-auto pt-20 text-center">
          <p data-hero className="text-2xl sm:text-3xl font-medium text-white tracking-tight leading-[1.3]">
            stop missing out.{" "}
            <Link
              to="/purchase"
              className="cta-pill inline-block px-3 py-[0.15em] mx-1 rounded-xl text-[1em] font-medium leading-none text-accent-pink hover:text-[#1e1e1e] transition-colors duration-500"
            >
              <span className="relative z-[1]">get timewarp</span>
            </Link>{" "}
            now.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;