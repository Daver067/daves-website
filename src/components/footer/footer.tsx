import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

interface Footer {}
const Footer: React.FC<Footer> = ({}) => {
  const router = useRouter();

  return (
    <div className=" mt-10 bg-tertiary-color min-h-[10vh] w-full p-5 font-poppins">
      <div className="flex justify-center">
        <div className="">
          <h3 className="text-center">Socials</h3>
          <div className="flex">
            <div className="flex flex-col">
              <a href="https://www.facebook.com/dave.diemert" className="">
                <div className="flex gap-4 ">
                  <FaFacebook className="m-auto" />
                  Facebook
                </div>
              </a>
              <a href="https://www.instagram.com/davediemert/" className="">
                <div className="flex gap-4 ">
                  <FaInstagram className="m-auto" /> Instagram
                </div>
              </a>
            </div>
            <div className="flex flex-col">
              <a
                href="https://www.linkedin.com/in/dave-diemert-a47135306/"
                className=""
              >
                <div className="flex gap-4 ">
                  <FaLinkedin className="m-auto" />
                  LinkedIn
                </div>
              </a>
              <a href="https://github.com/Daver067" className="">
                <div className="flex gap-4 ">
                  <FaGithub className="m-auto" />
                  Github
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
