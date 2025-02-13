import { Inter } from "next/font/google";
import PageNav from "@/src/components/navbar/Page_NavBar";
import Footer from "@/src/components/footer/footer";
import Image_And_Text from "@/src/components/multi-use-components/image_text";
import Image from "next/image";
import solitairePlaying from "../src/img/projects/solitaire_in_progress.png";
import RepoWebsiteButtons from "@/src/components/multi-use-components/repo_website_buttons";
import FadeIn from "@/src/components/multi-use-components/fadeIn";

const inter = Inter({ subsets: ["latin"] });

export default function Solitaire() {
  return (
    <div className="min-h-screen font-poppins text-lg lg:text-xl tracking-wide">
      <PageNav />
      <h2 className="project-page-h2 md:py-20"> Solitaire</h2>

      <Image_And_Text
        img={
          <div className=" w-full m-auto ">
            <Image
              height={500}
              width={1000}
              src={solitairePlaying}
              alt="solitaire game in progress"
            ></Image>
          </div>
        }
        header="Why Did I Make This?"
        paragraphs={[
          `This was a project outside of the scope of The Odin Project. Myself
          and another developer had decided we wanted first hand experience what
          it would be like to both be working on a repo and decided we would
          build something together. We chose a solitaire game.`,
        ]}
      ></Image_And_Text>

      <FadeIn>
        <div className="px-0 max-w-[80%] md:max-w-[70%] m-auto mb-20">
          <h3 className="block text-2xl text-center underline decoration-1 underline-offset-4 pb-4">
            What Were The Biggest Hurdles?
          </h3>
          <p className="relative text-left py-2 ">
            Interacting with git with another person left us a little bit
            stunned at first, and building something from the ground up
            definitely left us with a lot of merge conflicts to deal with.
            Overall, it was a great experience and cemented concepts such as
            working in separate branches, committing often and commenting your
            code. We had a lot of struggles with Objects during the early phase
            of Solitaire. We had a core misunderstanding of copying objects,
            where we were copying the reference values and not deeply copying
            objects. When the core of card handling was complete, we went
            separate directions for logic where he worked on logic for double
            clicking on cards to move them to a legal move and I worked on
            single click from one sepecific pile to another. My biggest issue
            during Solitaire logic was stacking listeners on cards. Once a card
            moved to a new pile I needed to remove the original listener. A lot
            of fighting with binding finally led me to a solution. I had the
            task of mashing the two separate logics together once they were
            completed, and as you can see, Solitaire is playable using one or
            both methods!
          </p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="px-0 max-w-[80%] md:max-w-[70%] m-auto mb-20">
          <h3 className="block text-2xl text-center underline decoration-1 underline-offset-4 pb-4">
            Any Further Plans With This Project?
          </h3>
          <p className="relative text-left py-2 ">
            Yes! The other developer and I are actually considering making a npm
            package for handling cards. It{"'"}s still in early stages, but we
            are optimistic!
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
