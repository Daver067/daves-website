import React, { useState, useEffect, useRef } from "react";
import daverPhoto from "../../img/daver_photo.jpg";
import Image from "next/image";

const HeroHome = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, []);

  return (
    <div
      className="h-screen"
      style={{
        marginTop: `calc((100vh - 80vh - ${navbarHeight}px) / 2)`,
      }}
    >
      <div className="h-[80vh] flex justify-center items-center bg-zinc-800 relative ">
        <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-black to-zinc-800"></div>
        <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-black to-zinc-800"></div>
        <div className="overflow-x-hidden w-full">
          <section ref={sectionRef} className="w-full">
            <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-10">
              <div className="max-w-2xl text-center flex-grow">
                <h3
                  className={`py-6 text-xl text-gray-300 font-poppins transition-all duration-1000 ${
                    isVisible
                      ? "animate-[slideInFromRight_1.0s_ease-out_forwards]"
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  Passionate, Dedicated, Innovative, Resourceful, Self-Motivated
                </h3>
                <h2
                  className={`mt-5 text-4xl font-bold leading-tight text-gray-100 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-poppins transition-all duration-1000 ${
                    isVisible
                      ? "animate-[slideInFromLeft_1.0s_ease-out_forwards]"
                      : "opacity-0 -translate-x-full"
                  }`}
                >
                  The software developer that will meet your needs
                </h2>
              </div>
              <div
                className={`transition-all duration-1000 w-full sm:w-1/3 md:w-1/4 ${
                  isVisible
                    ? "animate-[slideInFromRight_1.0s_ease-out_forwards]"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <Image
                  src={daverPhoto}
                  className="w-52 md:w-72 rounded-full m-auto"
                  alt="Photo of me (Dave) drinking coffee"
                  width={480}
                  height={640}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
