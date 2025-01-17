import HeroHome from "@/src/components/home/hero_home";
import { Inter } from "next/font/google";
import ProjectsList from "../src/components/home/projects_list";
import PageNav from "@/src/components/navbar/Page_NavBar";
import Footer from "@/src/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen">
      <PageNav />
      <HeroHome />
      <ProjectsList />
      <Footer />
    </div>
  );
}
