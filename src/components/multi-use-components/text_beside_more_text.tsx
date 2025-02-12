import React from "react";
import FadeIn from "./fadeIn";

interface TextBesideText {
  header1: string;
  paragraphs1: string[];
  header2: string;
  paragraphs2: string[];
  reverse?: boolean;
}
const TextBesideText: React.FC<TextBesideText> = ({
  header1,
  paragraphs1,
  header2,
  paragraphs2,
  reverse = false,
}) => {
  return (
    <FadeIn>
      <div
        className={` min-h-[50vh] pt-5 w-screen text-lg lg:text-xl box-border transition-opacity duration-1200
        `}
      >
        <div
          className={`w-[95vw]  lg:w-[70vw] mx-auto flex flex-col gap-10 lg:gap-0 ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <div
            className={` w-[80%] ${
              reverse ? "lg:ml-auto mr-0" : "  lg:mr-auto ml-0"
            } mt-0 mb-auto lg:w-[45%] max-lg:mb-auto max-lg:mt-auto max-lg:ml-auto max-lg:mr-auto h-full`}
          >
            <h2 className="block text-2xl text-center underline decoration-1 underline-offset-4 pb-4">
              {header1}
            </h2>
            {paragraphs1.map((p, i) => {
              return (
                <p key={i} className="relative text-left py-2  ">
                  {p}
                </p>
              );
            })}
          </div>
          <div
            className={` w-[80%] ${
              reverse ? "lg:ml-0 mr-auto" : "  lg:mr-0 ml-auto"
            } mt-0 mb-auto lg:w-[45%] max-lg:mb-auto max-lg:mt-auto max-lg:ml-auto max-lg:mr-auto h-full`}
          >
            <h2 className="block text-2xl text-center underline decoration-1 underline-offset-4 pb-4">
              {header2}
            </h2>
            {paragraphs2.map((p, i) => {
              return (
                <p key={i} className="relative text-left py-2">
                  {p}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default TextBesideText;
