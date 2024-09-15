import React, { useState } from "react";
import "./flippable.css";
interface Flippable {
  front: React.ReactElement;
  back: React.ReactElement;
}
const Flippable: React.FC<Flippable> = ({ front, back }) => {
  const [flipped, setFlipped] = useState(true);

  return (
    <div
      className="container"
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
      <div
        className={`  top-0 left-0 bottom-0 right-0 m-auto front absolute`}
        style={{
          transition: "transform 2s ease",
          backfaceVisibility: "hidden",
          transform: ` perspective(1000px) rotateY(${
            flipped ? "0deg" : "-180deg"
          })`,
        }}
      >
        {front}
      </div>
      <div
        className={` back top-0 left-0 bottom-0 right-0 m-auto absolute`}
        style={{
          transition: "transform 2s ease",
          backfaceVisibility: "hidden",
          transform: `perspective(1000px) rotateY(${
            flipped ? "180deg" : "0deg"
          })`,
        }}
      >
        {back}
      </div>
    </div>
  );
};

export default Flippable;
