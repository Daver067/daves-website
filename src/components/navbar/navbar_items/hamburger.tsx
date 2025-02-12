import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import HamburgerDropdown from "./hamburger-dropdown";

interface HamburgerMenu {
  childrenString: {
    name: string;
    route: string;
    type: "drop-down" | "disabled" | "link";
    childrenString?: {
      name: string;
      route: string;
      type: "disabled" | "drop-down" | "link";
    }[];
  }[];
}

const HamburgerMenu: React.FC<HamburgerMenu> = ({ childrenString }) => {
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
    setIsOpen(false);
  };

  const handleNavigation = (path: string) => {
    closeMenu();
    router.push(path);
  };

  return (
    <div className="lg:hidden relative">
      <button
        className="flex items-center px-3 py-2 rounded text-gray-500 hover:text-white hover:bg-gray-700 focus:outline-none"
        onClick={toggleMenu}
      >
        <span className="w-7 stroke-black/50 dark:stroke-neutral-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
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
              } else if (
                item.type === "drop-down" &&
                item.childrenString !== undefined
              ) {
                return (
                  <div
                    key={item.name}
                    className="block text-white text-2xl mb-4 hover:text-gray-300 cursor-pointer p-2 rounded-lg"
                  >
                    <HamburgerDropdown
                      parent={{ name: item.name, route: "#", type: item.type }}
                      childrenString={item.childrenString}
                      bubbleClose={closeMenu}
                    />
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

export default HamburgerMenu;
