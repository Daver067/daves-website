import DropDown from "./dropdown";
import NavbarItem from "./navbar_item";
interface CollapsibleMenu {
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
const CollapsibleMenu: React.FC<CollapsibleMenu> = ({ childrenString }) => {
  return (
    <div
      className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
      id="navbarSupportedContent2"
    >
      <ul className="w-full list-style-none justify-center flex flex-col ps-0 lg:mt-1 lg:flex-row text-l lg:text-xl">
        {childrenString.map((item) => {
          if (item.type === "drop-down") {
            if (item.childrenString === undefined) return;
            return (
              <DropDown
                key={item.name}
                dropDownName={item.name}
                childrenString={item.childrenString}
              />
            );
          } else
            return (
              <NavbarItem
                key={item.name}
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
