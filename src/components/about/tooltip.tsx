import React, { useState } from "react";
interface Tooltip {
  text: string;
  children: React.ReactElement;
}
const Tooltip: React.FC<Tooltip> = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  const handleMouseOver = () => {
    setVisible(true);
  };

  const handleMouseExit = () => {
    setVisible(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => handleMouseOver()}
      onMouseLeave={() => handleMouseExit()}
    >
      <div className="absolute">
        <div
          className={`${
            visible ? "visible" : "invisible"
          } absolute p-1 left-0 top-10 overflow-visible z-50 text-left bg-slate-400 rounded-md text-slate-700 `}
        >
          {text}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
