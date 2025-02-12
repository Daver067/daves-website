import { useState, useRef, useEffect } from "react";
import DropDownItem from "./dropdown_item";

interface DropDown {
  dropDownName: string;
  childrenString: {
    name: string;
    route: string;
    type: "disabled" | "drop-down" | "link";
  }[];
}

const DropDown: React.FC<DropDown> = ({ childrenString, dropDownName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (dropdownRef.current) {
      if (isOpen) {
        dropdownRef.current.style.height =
          dropdownRef.current.scrollHeight + "px";
      } else {
        dropdownRef.current.style.height = "0px";
      }
    }
  }, [isOpen]);

  return (
    <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0 text-xl lg:text-2xl">
      <div
        className="flex flex-wrap "
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="relative ms-2">
          <a
            className="flex items-center text-black transition duration-200 hover:text-black/80 dark:text-white/60 dark:hover:text-white/80 lg:px-2"
            href="#"
            type="button"
            aria-expanded={isOpen}
          >
            {dropDownName}
            <span className="ms-2 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </a>
          <ul
            ref={dropdownRef}
            className="absolute z-[1000] overflow-hidden transition-all duration-1000 ease-in-out bg-tertiary-color shadow-lg rounded-b-lg mt-4"
            style={{ height: "0px" }}
          >
            {childrenString.map((item) => (
              <DropDownItem
                key={item.name}
                name={item.name}
                route={item.route}
              />
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default DropDown;
