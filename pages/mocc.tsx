import { Inter } from "next/font/google";
import PageNav from "@/src/components/navbar/Page_NavBar";
import Footer from "@/src/components/footer/footer";
import Image from "next/image";
import Image_And_Text from "@/src/components/multi-use-components/image_text";
import moccHome from "../src/img/projects/mocc_home.png";
import moccContent from "../src/img/projects/mocc_content.png";
import moccContact from "../src/img/projects/mocc_contact.png";
import RepoWebsiteButtons from "@/src/components/multi-use-components/repo_website_buttons";

const inter = Inter({ subsets: ["latin"] });

export default function Mocc() {
  return (
    <div className="min-h-screen tracking-wide font-poppings">
      <PageNav />
      <h2 className="w-full text-center text-4xl pt-20 pb-5 md:pb-20 underline decoration-1 underline-offset-4">
        Calgary Cleaning Site
      </h2>
      <Image_And_Text
        img={
          <div className=" w-full m-auto ">
            <Image
              height={500}
              width={1000}
              src={moccHome}
              alt="screenshot of mocc home page"
            ></Image>
          </div>
        }
        header="What Tech Stack Did I Use?"
        paragraphs={[
          `          This move out cleaning site is built using React, SASS Javascript and
          HTML. This was my first professional project, outside of the scope of
          The Odin Project, and personal projects.`,
        ]}
      ></Image_And_Text>
      <Image_And_Text
        reverse={true}
        img={
          <div className=" w-full m-auto ">
            <Image
              height={500}
              width={1000}
              src={moccContent}
              alt="screenshot of mocc content"
            ></Image>
          </div>
        }
        header="Where's It Hosted?"
        paragraphs={[
          `The cleaning site is hosted on netlify, taking advantage of the free
          plan. The contact forms are hooked up and working! If you live in the
          Calgary area and are looking for a cleaning service please feel free
          to submit a form!`,
        ]}
      ></Image_And_Text>
      <Image_And_Text
        img={
          <div className=" w-full m-auto ">
            <Image
              height={500}
              width={1000}
              src={moccContact}
              alt="screenshot of mocc contact page"
            ></Image>
          </div>
        }
        header="What Were The Biggest Hurdles?"
        paragraphs={[
          `Through most of my projects in The Odin Project I'll admit I kind
          of brushed off the CSS, on the mentality of "as long as it works
          who cares what it looks like". Well, that put me at a disadvantage
          when it came to building this site... I was unfamiliar with responsive
          design, having built nothing meant for phones. Overall, I am happy
          with the outcome, looking at it now I see some improvements I could
          have made for better visual appeal, but it's just a step in my
          learning adventure.`,
        ]}
      ></Image_And_Text>
      <RepoWebsiteButtons projectArr={1} />
      <Footer />
    </div>
  );
}
