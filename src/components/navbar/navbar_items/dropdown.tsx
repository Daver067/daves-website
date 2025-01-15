import DropDownItem from "./dropdown_item";
import { v4 as uuidv4 } from "uuid";
interface DropDown {
  dropDownName: string;
  childrenString: {
    route: string;
    name: string;
    type?: "disabled";
  }[];
}
const DropDown: React.FC<DropDown> = ({ childrenString, dropDownName }) => {
  const ulID = dropDownName;

  const openDropDown = () => {
    const dropdown = document.getElementById(ulID);
    if (dropdown == null) return;
    if (dropdown.classList.contains("hidden")) {
      dropdown.classList.remove("hidden");
    }
  };

  const closeDropDown = () => {
    const dropdown = document.getElementById(ulID);
    if (dropdown == null) return;
    dropdown.classList.add("hidden");
  };

  return (
    <li className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2">
      <div
        className="flex flex-wrap "
        onMouseLeave={closeDropDown}
        onMouseEnter={openDropDown}
      >
        <div className="relative ms-2">
          <a
            className="flex items-center  text-black transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
            href="#"
            type="button"
            id="dropdownMenuButton2"
            aria-expanded="false"
          >
            {dropDownName}
            <span className="ms-2 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
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
            id={ulID}
            className="absolute z-[1000] hidden float-left pt-5 m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-tertiary-color bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block "
          >
            {childrenString.map((item) => {
              return (
                <DropDownItem
                  key={item.name}
                  name={item.name}
                  route={item.route}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
};
export default DropDown;
