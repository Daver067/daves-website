import HeroHome from "@/src/components/home/hero_home";
import TopNav from "@/src/components/navbar/top_nav";
import { Inter } from "next/font/google";
import ProjectsList from "../src/components/home/projects_list";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <TopNav
        children={[
          { name: "Home", route: "#", type: "link" },
          {
            name: "My Projects",
            route: "#",
            type: "drop-down",
            children: [
              { name: "Action", route: "#" },
              { name: "Another Action", route: "#" },
              { name: "One More", route: "#" },
            ],
          },
          { name: "About Me", route: "#", type: "link" },
          { name: "Contact", route: "#", type: "link" },
          { name: "Disabled", route: "#", type: "disabled" },
        ]}
      />
      <HeroHome />
      <ProjectsList />
    </div>
  );
}
