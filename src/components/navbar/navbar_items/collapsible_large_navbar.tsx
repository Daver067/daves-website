// src/components/CollapsibleMenu.tsx
import DropDown from "./dropdown";
import NavbarItem from "./navbar_item";
interface CollapsibleMenu {
  children: {
    name: string;
    route: string;
    type?: "drop-down" | "disabled" | "link";
    children?: { name: string; route: string; type?: "disabled" }[];
  }[];
}
const CollapsibleMenu: React.FC<CollapsibleMenu> = ({ children }) => {
  return (
    <div
      className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
      id="navbarSupportedContent2"
    >
      <ul className="w-full list-style-none justify-center flex flex-col ps-0 lg:mt-1 lg:flex-row">
        {children.map((item) => {
          if (item.type === "drop-down") {
            if (item.children === undefined) return;
            return (
              <DropDown dropDownName={item.name} children={item.children} />
            );
          } else
            return (
              <NavbarItem
                linkName={item.name}
                linkRoute={item.route}
                type={item.type}
              />
            );
        })}
      </ul>
    </div>
  );
};

export default CollapsibleMenu;
