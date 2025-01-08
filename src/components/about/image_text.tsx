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
    <div className={`py-20 text-lg box-border flex`}>
      <div className="w-[45%] my-2 mr-1">{img}</div>
      <div className="w-[45%]">
        <h1 className="block text-2xl text-center underline decoration-1 underline-offset-4 pb-4">
          {header}
        </h1>
        {paragraphs.map((p) => {
          return (
            <p className="relative leading-6 text-left p-2 text-base ">{p}</p>
          );
        })}
      </div>
    </div>
  );
};

export default Image_And_Text;
