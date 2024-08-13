import { link } from "fs";
import DisabledLink from "./disabled_link";
import Link from "next/link";

interface NavbarItem {
  linkName: string;
  linkRoute: string;
  selected?: boolean;
  type?: "drop-down" | "disabled" | "link";
}
const NavbarItem: React.FC<NavbarItem> = ({
  linkName,
  linkRoute,
  selected = false,
  type,
}) => {
  if (type === "disabled") {
    return <DisabledLink linkName={linkName} />;
  }
  if (selected) {
    return (
      <li className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2">
        <Link
          className="text-black dark:text-white lg:px-2"
          aria-current="page"
          href={linkRoute}
        >
          {linkName}
        </Link>
      </li>
    );
  }

  return (
    <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
      <Link
        className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
        href={linkRoute}
      >
        {linkName}
      </Link>
    </li>
  );
};
export default NavbarItem;
