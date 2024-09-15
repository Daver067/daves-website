import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import python from "../../img/languages/python.svg";
import languagepics from "./languages";
import { Languages } from "next/dist/lib/metadata/types/alternative-urls-types";

interface Project {
  name: string;
  img: StaticImageData;
  description: string;
  repo: string;
  website: string;
  languages: string[];
}
const Project: React.FC<Project> = ({
  name,
  img,
  description,
  repo,
  website,
  languages,
}) => {
  const [flipped, setFlipped] = useState(true);
  const router = useRouter();
  const back = (
    <div
      className={` ${
        flipped ? "" : "flipped"
      } back top-0 left-0 bottom-0 right-0 m-auto absolute grid grid-cols-4 gap-2`}
    >
      {languages.map((language: string) => {
        return (
          <div className="flex align-middle items-center justify-center">
            {languagepics[language as keyof typeof languagepics]}
          </div>
        );
      })}
    </div>
  );

  const front = (
    <Image
      src={img}
      className={` ${
        flipped ? "" : "flipped"
      } top-0 left-0 bottom-0 right-0 m-auto front absolute`}
      alt={name}
    />
  );

  return (
    <div>
      <div className="pb-3 border-b-2 border-zinc-500">
        <div className="h-full pt-4 px-4 mx-auto max-w-7xl sm:px-6 flex lg:px-8 min-h-64 ">
          <div
            className="w-[30%] relative"
            onMouseEnter={(e) => {
              const { target } = e;
              if (target instanceof HTMLElement) {
                setFlipped(!flipped);
              }
            }}
            onMouseLeave={(e) => {
              const { target } = e;
              if (target instanceof HTMLElement) {
                setFlipped(!flipped);
              }
            }}
          >
            {back} {front}
          </div>
          <div className="flex flex-col items-center w-[70%] text-center text-gray-300 ">
            <h1 className="mb-4 text-4xl font-bold leading-tight font-pj">
              {name}
            </h1>
            <p className="px-6 text-lg text-left font-inter">{description}</p>
            <div className="flex justify-evenly mt-auto pt-4 mb-2">
              <button
                onClick={() => router.push(repo)}
                type="button"
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                See the Repo
              </button>
              <button
                onClick={() => router.push(website)}
                type="button"
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="4.22" y1="4.22" x2="19.78" y2="19.78" />
                  <line x1="4.22" y1="19.78" x2="19.78" y2="4.22" />
                  <circle cx="12" cy="12" r="1" />
                </svg>
                Visit the Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
