import HeroHome from "@/src/components/home/hero_home";
import TopNav from "@/src/components/navbar/top_nav";
import { Inter } from "next/font/google";
import ProjectsList from "../src/components/home/projects_list";
import projects from "@/src/components/home/projects";
import PageNav from "@/src/components/navbar/Page_NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <PageNav />
      <HeroHome />
      <ProjectsList />
    </div>
  );
}
