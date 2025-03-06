import { Inter } from "next/font/google";
import PageNav from "@/src/components/navbar/Page_NavBar";
import Footer from "@/src/components/footer/footer";
import Image_And_Text from "@/src/components/multi-use-components/image_text";
import Image from "next/image";
import cardFactory from "../src/img/projects/card-factory.png";
import npmImage from "../src/img/projects/cards-package.png";
import RepoWebsiteButtons from "@/src/components/multi-use-components/repo_website_buttons";
import FadeIn from "@/src/components/multi-use-components/fadeIn";

const inter = Inter({ subsets: ["latin"] });

export default function Solitaire() {
  return (
    <div className="min-h-screen font-poppins text-lg lg:text-xl tracking-wide">
      <PageNav />
      <h2 className="project-page-h2 md:py-20"> card-factory NPM Package</h2>

      <Image_And_Text
        img={
          <div className=" w-full m-auto ">
            <Image
              height={500}
              width={1000}
              src={npmImage}
              alt="npm page for card-factory"
            ></Image>
          </div>
        }
        header="Why Did I Make This?"
        paragraphs={[
          `Solitaire was made in a way that we always planned on extending it to other types of cards. The logical next step was to build an npm package where 
          anyone could use the product we have built!`,
        ]}
      ></Image_And_Text>

      <div className="md:mt-28"></div>
      <Image_And_Text
        reverse={true}
        img={
          <div className=" w-full m-auto ">
            <Image
              height={500}
              width={1000}
              src={cardFactory}
              alt="card-factory home page"
            ></Image>
          </div>
        }
        header="Are there any other similar packages?"
        paragraphs={[
          `On my searching I could only find a couple of similar packages, none of which had as many features as what we planned on making. 
          A lot of packages will provide nicer looking cards (we aimed for no images, only text and css). But none offered anything for interactivity or 
          animation, or easy to understand rules systems. I believe that the ease of using our package can enable beginner programmers to build card games easily!)`,
        ]}
      ></Image_And_Text>
      <div className="md:mt-28"></div>

      <FadeIn>
        <div className="px-0 max-w-[80%] md:max-w-[70%] m-auto mb-20">
          <h3 className="block text-2xl text-center underline decoration-1 underline-offset-4 pb-4">
            Any Hurdles On This Project?
          </h3>
          <p className="relative text-left py-2 ">
            I think the biggest struggle I faced was dealing with different
            internet explorers. I typically spend most of my time using chrome
            and debugging / styling in chrome. Everything was working and
            looking great until I booted up Safari and found that a lot of
            things I had done to alter the drag image for drag and drop were not
            working correctly. Then the discovery that drag and drop
            functionality didn{"'"}t translate to touch and drop was a little
            heart breaking at first. Overall I am happy with how the drag/touch
            and drop works, I know there still is a bit of work to be done for
            Safari and ios to look the same as chrome.
          </p>
        </div>
      </FadeIn>
      <div className="md:mt-28"></div>

      <FadeIn>
        <div className="px-0 max-w-[80%] md:max-w-[70%] m-auto mb-20">
          <h3 className="block text-2xl text-center underline decoration-1 underline-offset-4 pb-4">
            Any Further Plans With This Project?
          </h3>
          <p className="relative text-left py-2 ">
            I hope to have this open source project have other collaborators and
            for it to be used by lots of people! I am still working on it, and
            plan to continue with updates.
          </p>
        </div>
      </FadeIn>
      <FadeIn>
        <RepoWebsiteButtons projectArr={2} />
      </FadeIn>
      <Footer />
    </div>
  );
}
