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
    <div className=" flex justify-center pt-4 mb-2 gap-5">
      <Link
        href={repo}
        className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center gap-2 dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
      >
        <FaGithub />
        See the Repo
      </Link>
      <Link
        href={website}
        className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center gap-2 dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
      >
        <IoIosGlobe />
        Visit the Page
      </Link>
    </div>
  );
};

export default RepoWebsiteButtons;
