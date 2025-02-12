import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import projects from "@/src/components/home/projects";
interface RepoWebsiteButtons {
  projectArr: number;
}
const RepoWebsiteButtons: React.FC<RepoWebsiteButtons> = ({ projectArr }) => {
  const { repo, website } = projects[projectArr];

  return (
    <div className=" flex flex-col md:flex-row justify-center pt-4 mb-2 gap-5">
      <Link
        href={repo}
        className="text-white max-md:me-8 max-md:ms-8 bg-tertiary-color hover:scale-125 hover:-rotate-6  duration-300 focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 text-center items-center ms-2 me-2 gap-2 mb-2 flex justify-center"
      >
        <FaGithub />
        See the Repo
      </Link>
      <Link
        href={website}
        className="text-white max-md:me-8 max-md:ms-8 bg-tertiary-color hover:scale-125 hover:rotate-6 duration-300 focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 text-center items-center gap-2 ms-2 me-2 mb-2 flex justify-center"
      >
        <IoIosGlobe />
        Visit the Page
      </Link>
    </div>
  );
};

export default RepoWebsiteButtons;
