import { usePathname } from "next/navigation";

interface DropDownItem {
  route: string;
  name: string;
}
const DropDownItem: React.FC<DropDownItem> = ({ name, route }) => {
  const pathname = usePathname();
  return (
    <li>
      <a
        className={`block w-full whitespace-nowrap bg-tertiary-color px-4 py-2  font-normal  hover:text-white/80 ${
          pathname === route ? "text-white" : "text-white/60"
        } hover:bg-tertiary-color-hovering`}
        href={route}
      >
        {name}
      </a>
    </li>
  );
};
export default DropDownItem;
