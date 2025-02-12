import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import languagepics from "../../img/languages";
import Flippable from "../flippable/Flippable";
import Link from "next/link";
import { IoIosGlobe } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

interface Project {
  name: string;
  route: string;
  img: StaticImageData;
  description: string;
  repo: string;
  website: string;
  languages: string[];
}
const Project: React.FC<Project> = ({
  name,
  route,
  img,
  description,
  repo,
  website,
  languages,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef(null);

  useEffect(() => {
    const project = projectRef.current;

    if (!project) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(project);

    return () => {
      observer.unobserve(project);
    };
  }, []);

  const back = (
    <div className="h-full w-full grid grid-cols-4 gap-2 bg-zinc-600">
      {languages.map((language: string) => {
        return (
          <div
            key={language}
            className="flex align-middle items-center justify-center"
          >
            {languagepics[language as keyof typeof languagepics]}
          </div>
        );
      })}
    </div>
  );

  const front = (
    <div className="">
      <Image className="" src={img} alt={name} height={600} width={900} />
    </div>
  );

  return (
    <div
      ref={projectRef}
      className={`w-full xl:px-[15vw] pb-3 border-t-2 border-zinc-500 py-[5vh] lg:py-[10vh] transition-opacity duration-1200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h4 className="mb-4 mx-auto lg:mb-10 text-4xl md:text-6xl font-bold leading-tight font-poppins text-center">
        <Link href={route} id={route}>
          {name}
        </Link>
      </h4>
      <div className="h-full pt-4 px-4 mx-auto flex flex-col md:flex-row min-h-64 md:min-h-[50vh] md:gap-20 xs-items-center ">
        <div className="w-[90%] h-80 md:w-[30%] relative my-2 self-center ">
          <Flippable front={front} back={back} />
        </div>
        <div className=" w-full md:w-[70%] text-center flex flex-col text-text-color ">
          <p className="m-auto px-6 text-lg md:text-xl text-left font-poppins">
            {description}
          </p>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row justify-center pt-4 mb-2 gap-0 md:gap-5 ">
        <Link
          href={repo}
          className="text-white bg-tertiary-color hover:scale-125 hover:-rotate-6  duration-300 focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 text-center items-center ms-2 me-2 gap-2 mb-2 flex justify-center"
        >
          <FaGithub />
          See the Repo
        </Link>
        <Link
          className="text-white bg-tertiary-color hover:scale-125 duration-300 focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 text-center items-center gap-2 me-2 ms-2 mb-2 flex justify-center"
          href={route}
        >
          More Info
        </Link>
        <Link
          href={website}
          className="text-white bg-tertiary-color hover:scale-125 hover:rotate-6 duration-300 focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 text-center items-center gap-2 ms-2 me-2 mb-2 flex justify-center"
        >
          <IoIosGlobe />
          Visit the Page
        </Link>
      </div>
    </div>
  );
};

export default Project;
