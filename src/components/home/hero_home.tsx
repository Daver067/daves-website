import React, { useState, useEffect, useRef } from "react";
import daverPhoto from "../../img/daver_photo.jpg";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const HeroHome = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  return (
    <div
      style={{
        height: `calc(100vh - ${navbarHeight}px - ((100vh - 80vh - ${navbarHeight}px) / 2))`,
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
                <motion.h3
                  initial={{ opacity: 0, x: 1000 }}
                  animate={isInView && isLoaded ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="py-6 text-xl text-gray-300"
                >
                  Passionate, Dedicated, Innovative, Resourceful, Self-Motivated
                </motion.h3>
                <motion.h2
                  initial={{ opacity: 0, x: -1000 }}
                  animate={isInView && isLoaded ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="mt-5 text-4xl font-bold text-gray-100"
                >
                  The software developer that will meet your needs
                </motion.h2>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 1000 }}
                animate={isInView && isLoaded ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`transition-all duration-1000 w-full sm:w-1/3 md:w-1/4 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={daverPhoto}
                  alt="Photo of me (Dave) drinking coffee"
                  width={480}
                  height={640}
                  className="w-52 md:w-72 rounded-full m-auto"
                  onLoadingComplete={() => setIsLoaded(true)}
                  loading="eager"
                  priority
                />
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
