// src/components/HamburgerMenu.tsx
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface HamburgerMenu {
  children: { name: string; route: string; type?: "drop-down" | "disabled" }[];
}

const HamburgerMenu: React.FC<HamburgerMenu> = ({ children }) => {
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
          className="fixed top-0 left-0 w-full h-full bg-slate-800 bg-opacity-50 z-50 flex justify-center items-center"
          onClick={closeMenu}
        >
          <div
            className="bg-slate-800 bg-opacity-0 p-4 rounded-lg shadow-lg"
            ref={ref}
            onClick={(e) => e.stopPropagation()}
          >
            {children.map((item) => {
              return (
                <div
                  className="block text-white text-2xl mb-4 hover:text-gray-300 cursor-pointer p-2 rounded-lg"
                  onClick={() => handleNavigation(item.route)}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
