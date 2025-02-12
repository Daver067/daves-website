import languagespics from "../../img/languages";
import Tooltip from "./tooltip";
import React, { useState, useEffect, useRef } from "react";

const HeroAbout = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflowX = "hidden";

    setTimeout(() => {
      skillRefs.current.forEach((skill, index) => {
        if (skill) {
          const randomX = Math.random() > 0.5 ? "-100vw" : "100vw";
          const randomY = Math.random() > 0.5 ? "-100vh" : "100vh";

          skill.style.transform = `translate(${randomX}, ${randomY})`;
          skill.style.opacity = "0";

          setTimeout(() => {
            skill.style.transition = "transform 1s ease-out, opacity 0.5s";
            skill.style.transform = "translate(0, 0)";
            skill.style.opacity = "1";
          }, index * 125 + 50);
        }
      });

      setTimeout(() => {
        document.body.style.overflowX = "auto";
      }, skillRefs.current.length * 125 + 1000);
    }, 500);
  }, []);

  return (
    <div
      className="w-full bg-black font-poppins text-lg lg:text-xl overflow-hidden"
      style={{
        minHeight: `calc(100vh - ${navbarHeight}px - ((100vh - 80vh - ${navbarHeight}px) / 2))`,
        marginTop: `calc((100vh - 80vh - ${navbarHeight}px) / 2)`,
      }}
    >
      <div className="min-h-[80vh]">
        <div
          className="w-full text-center text-4xl underline decoration-1 underline-offset-4"
          style={{
            paddingBottom: `calc((100vh - 80vh - ${navbarHeight}px) / 2)`,
          }}
        >
          About Me
        </div>
        <div className="w-full bg-zinc-800">
          <div className="w-[95vw] mx-auto flex justify-center flex-col lg:flex-row lg:w-[80vw]">
            <div className="w-[80%] mx-auto lg:w-[45%] mb-10 lg:mb-auto lg:pb-5">
              <div className="text-2xl text-center py-5">Hey I{`'`}m Dave!</div>
              <div className="tracking-wide">
                <p className="pb-4">
                  I{`'`}m a self-taught web developer from Alberta, Canada where
                  I also work full-time as a licensed Electrician.
                </p>
                <p className="pb-4">
                  I began my programming journey following{" "}
                  <a
                    className="text-blue-500 hover:text-blue-700 hover:underline transition duration-200 ease-in-out"
                    href="https://www.theodinproject.com"
                  >
                    The Odin Project{`'`}s
                  </a>{" "}
                  Full Stack JavaScript Course.
                </p>
                <p className="pb-4">
                  After The Odin Project, I continued my learning working on
                  personal projects such as Solitaire, Phone Phlinger, and this
                  personal site.
                </p>
                <p>
                  I prefer the functional side of programming as opposed to the
                  design aspect. I have a knack for solving problems, and that
                  is what I enjoy most from programming.
                </p>
              </div>
            </div>
            <div className="mx-auto w-[80%] lg:w-[30%] pb-5">
              <div className="text-2xl py-5 text-center">Some of my skills</div>
              <div className="flex flex-wrap gap-10 justify-around items-center m-auto">
                {Object.entries(languagespics).map(([key, value], index) => (
                  <div
                    key={index}
                    ref={(el) => {
                      skillRefs.current[index] = el;
                    }}
                    className="opacity-0"
                  >
                    <Tooltip text={key}>{value}</Tooltip>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
