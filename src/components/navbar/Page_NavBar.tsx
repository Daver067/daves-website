import projects from "../home/projects";
import TopNav from "./top_nav";

const PageNav: React.FC = () => {
  return (
    <TopNav
      title="Dave's Page"
      children={[
        { name: "Home", route: "/", type: "link" },
        {
          name: "My Projects",
          route: "#",
          type: "drop-down",
          children: projects.map((project) => {
            return { name: project.name, route: project.route };
          }),
        },
        { name: "About Me", route: "/about", type: "link" },
        { name: "Contact", route: "/contact", type: "link" },
      ]}
    />
  );
};

export default PageNav;
