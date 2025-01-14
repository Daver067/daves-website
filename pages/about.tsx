import HeroAbout from "@/src/components/about/about_hero";
import PageNav from "@/src/components/navbar/Page_NavBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div>
      <PageNav />
      <HeroAbout />
    </div>
  );
}
