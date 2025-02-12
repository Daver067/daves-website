import React, { useState, useEffect, useRef } from "react";

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
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const project = elementRef.current;

    if (!project) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(project);

    return () => {
      observer.unobserve(project);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={` min-h-[50vh] pt-5 w-screen text-lg lg:text-xl box-border transition-opacity duration-1200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }
        `}
    >
      <div
        className={`w-[95vw] lg:w-[70vw] mx-auto flex flex-col  ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div
          className={` w-[80%] ${
            reverse ? "lg:ml-auto mr-0" : "  lg:mr-auto ml-0"
          } mb-auto lg:w-[45%] max-lg:m-auto max-lg:ml-auto max-lg:mr-auto h-full`}
        >
          <h2 className="block text-2xl text-center underline decoration-1 underline-offset-4 pb-5">
            {header}
          </h2>
          <div className="mt-auto">
            {paragraphs.map((p, i) => {
              return (
                <p key={i} className="relative text-left py-2 ">
                  {p}
                </p>
              );
            })}
          </div>
        </div>
        <div className=" w-[80%] lg:w-[50%] h-[full] self-center">{img}</div>
      </div>
    </div>
  );
};

export default Image_And_Text;
