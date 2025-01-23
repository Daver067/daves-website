import React, { useState } from "react";
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
  const router = useRouter();
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
      <Image className="" src={img} alt={name} height={400} width={600} />
    </div>
  );

  return (
    <div className="w-full lg:px-60 pb-3 border-t-2 border-zinc-500">
      <div className="h-full pt-4 px-4 mx-auto flex flex-col-reverse md:flex-row min-h-64 md:gap-20 xs-items-center ">
        <div className="w-[90%] h-80 md:w-[30%] relative my-2 self-center ">
          <Flippable front={front} back={back} />
        </div>
        <div className=" w-full md:w-[70%] text-center flex flex-col text-gray-300 ">
          <div className="mb-4 text-2xl md:text-4xl font-bold leading-tight font-poppins pt-4">
            <Link href={route} id={route}>
              {name}
            </Link>
          </div>

          <p className="m-auto px-6 text-s md:text-lg text-left font-poppins">
            {description}
          </p>
          <div className=" flex justify-center pt-4 mb-2 gap-5">
            <Link
              href={repo}
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center gap-2 dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              <FaGithub />
              See the Repo
            </Link>
            <Link
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
              href={route}
            >
              More Info
            </Link>
            <Link
              href={website}
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center gap-2 dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              <IoIosGlobe />
              Visit the Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
