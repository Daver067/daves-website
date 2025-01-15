import React, { useState } from "react";
import daverPhoto from "../../img/daver_photo.jpg";
import Image from "next/image";

const HeroHome = () => {
  return (
    <div className="my-10 bg-zinc-800 lg:mx-32 mx-6 ">
      <div className="overflow-x-hidden  pb-12">
        <section className="pt-6  md:pt-16">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex-col flex md:flex-row gap-10  ">
            <div className="max-w-2xl mx-auto text-center m-auto ">
              <h1 className=" px-2 md:px-6 text-md text-gray-300 font-poppins">
                Passionate, Dedicated, Innovative, Resourceful, Self-Motivated
              </h1>
              <p className="mt-8 md:mt-5 text-2xl font-bold leading-tight text-gray-100 sm:leading-tight md:text-5xl lg:leading-tight font-poppins">
                The software developer that will meet your needs
              </p>
            </div>
            <Image
              src={daverPhoto}
              className="lg:w-60 rounded-full w-44 m-auto pt-6 md:pt-0"
              alt="Avatar"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
export default HeroHome;
