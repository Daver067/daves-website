import React, { useState } from "react";
interface Image_And_Text {
  img: React.ReactElement;
  paragraphs: string[];
  header?: string;
}
const Image_And_Text: React.FC<Image_And_Text> = ({
  img,
  paragraphs,
  header,
}) => {
  return (
    <div className={`py-20 text-lg box-border flex flex-col md:flex-row`}>
      <div className=" w-[80%] m-auto md:w-[45%] h-full">
        <h1 className="block text-2xl text-center underline decoration-1 underline-offset-4 pb-4">
          {header}
        </h1>
        {paragraphs.map((p, i) => {
          return (
            <p
              key={i}
              className="relative leading-6 text-center md:text-left p-2 text-base "
            >
              {p}
            </p>
          );
        })}
      </div>
      <div className=" w-[80%] md:w-[45%] h-full my-2 mr-1 self-center">
        {img}
      </div>
    </div>
  );
};

export default Image_And_Text;
