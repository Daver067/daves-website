import HeroHome from "@/src/components/home/hero_home";
import { Inter } from "next/font/google";
import ProjectsList from "../src/components/home/projects_list";
import PageNav from "@/src/components/navbar/Page_NavBar";
import Footer from "@/src/components/footer/footer";
import fs from "fs";
import path from "path";
import Resume from "@/src/components/resumes/resume";

// This runs on the server side
export const getStaticProps = async () => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "components",
    "resumes",
    "resume.md"
  );

  try {
    // Ensure file exists at the given path
    if (fs.existsSync(filePath)) {
      const markdownContent = fs.readFileSync(filePath, "utf-8");
      return {
        props: {
          markdownContent,
        },
      };
    } else {
      console.log(`File not found at ${filePath}`);
      return { props: { markdownContent: "" } }; // Fallback empty content if file doesn't exist
    }
  } catch (error) {
    console.error("Error reading markdown file:", error);
    return { props: { markdownContent: "" } }; // Fallback empty content in case of error
  }
};

const inter = Inter({ subsets: ["latin"] });

interface ResumeProp {
  markdownContent: string;
}

export default function ResumePage({ markdownContent }: ResumeProp) {
  return (
    <div className="min-h-screen tracking-wide font-poppins">
      <PageNav />
      <div className="pt-10">
        <Resume markdownContent={markdownContent} />
      </div>
      <Footer />
    </div>
  );
}
