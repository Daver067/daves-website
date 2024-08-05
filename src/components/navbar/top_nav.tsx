import HamburgerMenu from "./navbar_items/hamburger";
import CollapsibleMenu from "./navbar_items/collapsible_large_navbar";

interface TopNav {
  children: {
    name: string;
    route: string;
    type?: "drop-down" | "disabled" | "link";
    children?: { name: string; route: string; type?: "disabled" }[];
  }[];
}
const TopNav: React.FC<TopNav> = ({ children }) => {
  return (
    <nav className="relative flex w-full flex-nowrap items-center justify-between bg-tertiary-color py-2 text-neutral-500 shadow-dark-mild hover:text-tertiary-color focus:text-tertiary-color lg:flex-wrap lg:justify-start lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="ms-2">
          <a className="text-xl text-text-color" href="#">
            Dave's Page
          </a>
        </div>

        <HamburgerMenu children={children} />
        <CollapsibleMenu children={children} />
      </div>
    </nav>
  );
};

export default TopNav;
