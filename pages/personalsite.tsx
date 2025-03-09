import { Inter } from "next/font/google";
import PageNav from "@/src/components/navbar/Page_NavBar";
import { useRouter } from "next/navigation";
import Footer from "@/src/components/footer/footer";
import TextBesideText from "@/src/components/multi-use-components/text_beside_more_text";
import RepoWebsiteButtons from "@/src/components/multi-use-components/repo_website_buttons";
import FadeIn from "@/src/components/multi-use-components/fadeIn";

const inter = Inter({ subsets: ["latin"] });

export default function PersonalSite() {
  const router = useRouter();
  return (
    <div className="min-h-screen font-poppins tracking-wide text-lg lg:text-xl">
      <PageNav />
      <h2 className="project-page-h2 md:py-20">This Website!</h2>
      <TextBesideText
        header1="What Tech Stack Did I Use?"
        paragraphs1={[
          `This website is built with NextJS, TailwindCSS, and is hosted on
          Vercel!`,
        ]}
        header2="Did I Use Any Libraries?"
        paragraphs2={[
          `I used react-icons for some of the icons throughout my site as well as tailwindCSS. I built a lot of the animations originally using IntersectionObserver, 
          which later led me to find out Safari and Firefox don't have much support for it. I decided to use a library - framer-motion for my animations. Framer motion is the only component library I
          have used, everything else was built exclusively by me!`,
        ]}
      ></TextBesideText>

      <FadeIn>
        <div className="px-0 max-w-[80%] md:max-w-[70%] m-auto my-10 md:pb-32">
          <h3 className="block text-2xl text-center underline decoration-1 underline-offset-4 pb-4">
            Why Did You Make This?
          </h3>
          <p className="relative text-left py-2 ">
            I wanted somewhere to be able to show off all of my cool projects!
            Maybe it will convince you to hire me, maybe it{"'"}ll do the
            opposite!
          </p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="px-0 max-w-[80%] md:max-w-[70%] m-auto my-10 md:my-36">
          <h3 className="block text-2xl text-center underline decoration-1 underline-offset-4 pb-4">
            Any Further Plans With This Project?
          </h3>
          <p className="relative text-left py-2 ">
            I{"'"}m going to keep updating this site as I build more cool
            things!
          </p>
        </div>
      </FadeIn>
      <RepoWebsiteButtons projectArr={4} />
      <Footer />
    </div>
  );
}
