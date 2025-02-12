import HamburgerMenu from "./navbar_items/hamburger";
import CollapsibleMenu from "./navbar_items/collapsible_large_navbar";

interface TopNav {
  title: string;
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
const TopNav: React.FC<TopNav> = ({ childrenString, title }) => {
  return (
    <nav className="sticky z-50 top-0 flex w-full flex-nowrap items-center justify-between bg-tertiary-color py-2 text-neutral-500 shadow-dark-mild hover:text-tertiary-color focus:text-tertiary-color lg:flex-wrap lg:justify-start lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="ms-2">
          <h1 className="text-2xl text-text-color">{title}</h1>
        </div>

        <HamburgerMenu childrenString={childrenString} />
        <CollapsibleMenu childrenString={childrenString} />
      </div>
    </nav>
  );
};

export default TopNav;
