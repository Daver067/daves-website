import HeroAbout from "@/src/components/about/about_hero";
import Footer from "@/src/components/footer/footer";
import PageNav from "@/src/components/navbar/Page_NavBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div className="min-h-screen">
      <PageNav />
      <HeroAbout />
      <Footer />
    </div>
  );
}
