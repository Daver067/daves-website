import DisabledLink from "./navbar_items/disabled_link";
import NavbarItem from "./navbar_items/navbar_item";
import HamburgerMenu from "./navbar_items/hamburger";

interface TopNav {}
const TopNav: React.FC<TopNav> = ({}) => {
  return (
    <nav className="relative flex w-full flex-nowrap items-center justify-between bg-tertiary-color py-2 text-neutral-500 shadow-dark-mild hover:text-tertiary-color focus:text-tertiary-color lg:flex-wrap lg:justify-start lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="ms-2">
          <a className="text-xl text-text-color" href="#">
            Dave's Page
          </a>
        </div>

        <HamburgerMenu />

        {/* Collapsible navbar container */}
        <div
          className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
          id="navbarSupportedContent2"
        >
          {/* Left links */}{" "}
          <ul className="w-full list-style-none justify-center flex flex-col ps-0 lg:mt-1 lg:flex-row">
            <NavbarItem linkName="Home" linkRoute="#" selected />
            <NavbarItem linkName="My Projects" linkRoute="#" />
            <NavbarItem linkName="About Me" linkRoute="#" />
            <NavbarItem linkName="Contact" linkRoute="#" />
            <DisabledLink linkName="disabled" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
