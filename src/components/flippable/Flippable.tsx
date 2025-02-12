import React, { useState, useEffect, useRef } from "react";

interface Flippable {
  front: React.ReactElement;
  back: React.ReactElement;
}

const Flippable: React.FC<Flippable> = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setFlipped(true);
            }, 1000);
            setTimeout(() => {
              setFlipped(false);
            }, 3000);
          }
        });
      },
      { threshold: 0.85 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className="w-full h-full relative"
      onMouseEnter={(e) => {
        const { target } = e;
        if (target instanceof HTMLElement) {
          setFlipped(true);
        }
      }}
      onMouseLeave={(e) => {
        const { target } = e;
        if (target instanceof HTMLElement) {
          setFlipped(false);
        }
      }}
    >
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center transition-transform duration-1000 ease-in-out`}
        style={{
          transform: `perspective(1000px) rotateY(${
            flipped ? "-180deg" : "0deg"
          })`,
          backfaceVisibility: "hidden",
        }}
      >
        {front}
      </div>
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center transition-transform duration-1000 ease-in-out`}
        style={{
          transform: `perspective(1000px) rotateY(${
            flipped ? "0deg" : "180deg"
          })`,
          backfaceVisibility: "hidden",
        }}
      >
        {back}
      </div>
    </div>
  );
};

export default Flippable;
