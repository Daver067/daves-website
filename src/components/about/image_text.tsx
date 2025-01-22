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
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div
        className={` w-[80%] ${
          reverse ? "md:ml-auto mr-0" : "  md:mr-auto ml-0"
        } my-auto md:w-[45%] max-md:m-auto max-md:ml-auto max-md:mr-auto h-full`}
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
      <div className=" w-[80%] md:w-[45%] h-[full] my-2 self-center">{img}</div>
    </div>
  );
};

export default Image_And_Text;
