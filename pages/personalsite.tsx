import { Inter } from "next/font/google";
import PageNav from "@/src/components/navbar/Page_NavBar";
import { useRouter } from "next/navigation";
import Footer from "@/src/components/footer/footer";
import TextBesideText from "@/src/components/multi-use-components/text_beside_more_text";
import RepoWebsiteButtons from "@/src/components/multi-use-components/repo_website_buttons";

const inter = Inter({ subsets: ["latin"] });

export default function PersonalSite() {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <PageNav />
      <h2 className="w-full text-center text-4xl pt-20 pb-5 md:pb-20 underline decoration-1 underline-offset-4">
        This Website!
      </h2>
      <TextBesideText
        header1="What Tech Stack Did I Use?"
        paragraphs1={[
          `This website is built with NextJS, TailwindCSS, and is hosted on
          Vercel!`,
        ]}
        header2="Did I Use Any Libraries?"
        paragraphs2={[
          `I used react-icons for some of the icons throughout my site as well as tailwindCSS. I did not use any component libraries, everything you see here was made by me!`,
        ]}
      ></TextBesideText>

      <div className="px-0 max-w-[80%] md:max-w-[70%] m-auto mb-20">
        <h3 className="block text-2xl text-center underline decoration-1 underline-offset-4 pb-4">
          Why Did You Make This?
        </h3>
        <p className="relative leading-6 text-left py-2 text-base font-poppins">
          I wanted somewhere to be able to show off all of my cool projects!
          Maybe it will convince you to hire me, maybe it{"'"}ll do the
          opposite!
        </p>
      </div>
      <div className="px-0 max-w-[80%] md:max-w-[70%] m-auto mb-20">
        <h3 className="block text-2xl text-center underline decoration-1 underline-offset-4 pb-4">
          Any Further Plans With This Project?
        </h3>
        <p className="relative leading-6 text-left py-2 text-base font-poppins">
          I{"'"}m going to keep updating this site as I build more cool things!
        </p>
      </div>
      <RepoWebsiteButtons projectArr={3} />
      <Footer />
    </div>
  );
}
