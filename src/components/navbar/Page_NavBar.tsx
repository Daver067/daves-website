import projects from "../home/projects";
import TopNav from "./top_nav";

const PageNav: React.FC = () => {
  return (
    <TopNav
      title="Dave's Page"
      childrenString={[
        { name: "Home", route: "/", type: "link" },
        {
          name: "My Projects",
          route: "#",
          type: "drop-down",
          childrenString: projects.map((project) => {
            return { name: project.name, route: project.route, type: "link" };
          }),
        },
        { name: "About Me", route: "/about", type: "link" },
        { name: "Contact", route: "/contact", type: "link" },
        { name: "Resume", route: "/resume", type: "link" },
      ]}
    />
  );
};

export default PageNav;
