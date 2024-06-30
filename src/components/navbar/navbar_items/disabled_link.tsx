interface DisabledLink {
  linkName: string;
}
const DisabledLink: React.FC<DisabledLink> = ({ linkName }) => {
  return (
    <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
      <a className="pointer-events-none text-black/30 dark:text-white/30 lg:px-2">
        {linkName}
      </a>
    </li>
  );
};
export default DisabledLink;
