interface DropDownItem {
  route: string;
  name: string;
}
const DropDownItem: React.FC<DropDownItem> = ({ name, route }) => {
  return (
    <li>
      <a
        className="block w-full whitespace-nowrap bg-tertiary-color px-4 py-2 text-sm font-normal text-text-color hover:text-text-color-hovering hover:bg-tertiary-color-hovering"
        href={route}
      >
        {name}
      </a>
    </li>
  );
};
export default DropDownItem;
