import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { FiChevronsDown } from "react-icons/fi";

interface HamburgerDropdown {
  parent: {
    name: string;
    route: string;
    type: "drop-down";
  };
  childrenString: {
    name: string;
    route: string;
    type: "drop-down" | "disabled" | "link";
  }[];
  bubbleClose: () => void;
}

const HamburgerDropdown: React.FC<HamburgerDropdown> = ({
  parent,
  childrenString,
  bubbleClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    bubbleClose();
    setIsOpen(false);
  };

  const handleNavigation = (path: string) => {
    closeMenu();
    router.push(path);
  };

  return (
    <div className="lg:hidden">
      <div className="flex gap-2" onClick={toggleMenu}>
        <button className=" ">{parent.name}</button>
        <FiChevronsDown className="m-auto" />
      </div>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-slate-800 bg-opacity-90 z-50 flex justify-center items-center"
          onClick={closeMenu}
        >
          <div
            className="bg-slate-800 bg-opacity-0 p-4 rounded-lg shadow-lg"
            ref={ref}
            onClick={(e) => e.stopPropagation()}
          >
            {childrenString.map((item) => {
              if (item.type === "link") {
                return (
                  <div
                    key={item.name}
                    className="block text-white text-2xl mb-4 hover:text-gray-300 cursor-pointer p-2 rounded-lg"
                    onClick={() => handleNavigation(item.route)}
                  >
                    {item.name}
                  </div>
                );
              } else if (item.type === "drop-down") {
                return (
                  <div
                    key={item.name}
                    className="block text-white text-2xl mb-4 hover:text-gray-300 cursor-pointer p-2 rounded-lg"
                    onClick={() => handleNavigation(item.route)}
                  >
                    {item.name}
                  </div>
                );
              } else if (item.type === "disabled") {
                return (
                  <div
                    key={item.name}
                    className="block text-grey text-2xl mb-4 p-2 rounded-lg"
                  >
                    {item.name}
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerDropdown;
