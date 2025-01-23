import React, { useState } from "react";
interface Image_And_Text {
  img: React.ReactElement;
  paragraphs: string[];
  header?: string;
  reverse?: boolean;
}
const Image_And_Text: React.FC<Image_And_Text> = ({
  img,
  paragraphs,
  header,
  reverse = false,
}) => {
  return (
    <div
      className={`text-lg box-border flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div
        className={` w-[80%] ${
          reverse ? "lg:ml-auto mr-0" : "  lg:mr-auto ml-0"
        } my-auto lg:w-[45%] max-lg:m-auto max-lg:ml-auto max-lg:mr-auto h-full`}
      >
        <h2 className="block text-2xl text-center underline decoration-1 underline-offset-4 pb-4">
          {header}
        </h2>
        {paragraphs.map((p, i) => {
          return (
            <p key={i} className="relative leading-6 text-left py-2 text-base ">
              {p}
            </p>
          );
        })}
      </div>
      <div className=" w-[80%] lg:w-[45%] h-[full] my-2 self-center">{img}</div>
    </div>
  );
};

export default Image_And_Text;
