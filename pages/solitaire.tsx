import { Inter } from "next/font/google";
import PageNav from "@/src/components/navbar/Page_NavBar";
import { useRouter } from "next/navigation";
import Footer from "@/src/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Solitaire() {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <PageNav />
      <h2 className="w-full text-center text-4xl pt-20 pb-5 md:pb-20 underline decoration-1 underline-offset-4">
        Solitaire
      </h2>
      <div className="px-10 md:px-64 mb-20">
        <h3 className="block text-2xl text-center underline decoration-1 underline-offset-4 pb-4">
          Why Did You Make This?
        </h3>
        <p className="relative leading-6 text-left p-2 text-base font-poppins">
          This was a project outside of the scope of The Odin Project. Myself
          and another developer had decided we wanted first hand experience what
          it would be like to both be working on a repo and decided we would
          build something together. We chose a solitaire game.
        </p>
      </div>

      <div className="px-10 md:px-64 mb-20">
        <h3 className="block text-2xl text-center underline decoration-1 underline-offset-4 pb-4">
          What Were The Biggest Hurdles?
        </h3>
        <p className="relative leading-6 text-left p-2 text-base font-poppins">
          Interacting with git with another person left us a little bit stunned
          at first, and building something from the ground up definitely left us
          with a lot of merge conflicts to deal with. Overall, it was a great
          experience and cemented concepts such as working in separate branches,
          committing often and commenting your code. We had a lot of struggles
          with Objects during the early phase of Solitaire. We had a core
          misunderstanding of copying objects, where we were copying the
          reference values and not deeply copying objects. When the core of card
          handling was complete, we went separate directions for logic where he
          worked on logic for double clicking on cards to move them to a legal
          move and I worked on single click from one sepecific pile to another.
          My biggest issue during Solitaire logic was stacking listeners on
          cards. Once a card moved to a new pile I needed to remove the original
          listener. A lot of fighting with binding finally led me to a solution.
          I had the task of mashing the two separate logics together once they
          were completed, and as you can see, Solitaire is playable using one or
          both methods!
        </p>
      </div>
      <div className="px-10 md:px-64 mb-20">
        <h3 className="block text-2xl text-center underline decoration-1 underline-offset-4 pb-4">
          Any Further Plans With This Project?
        </h3>
        <p className="relative leading-6 text-left p-2 text-base font-poppins">
          Yes! The other developer and I are actually considering making a npm
          package for handling cards. It{"'"}s still in early stages, but we are
          optimistic!
        </p>
      </div>
      <div className=" flex justify-evenly pt-4 mb-2">
        <button
          onClick={() => router.push("https://github.com/Daver067/card-games")}
          type="button"
          className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
              clipRule="evenodd"
            />
          </svg>
          See the Repo
        </button>
        <button
          onClick={() => router.push("https://daver067.github.io/card-games/")}
          type="button"
          className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="2" x2="12" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <line x1="4.22" y1="4.22" x2="19.78" y2="19.78" />
            <line x1="4.22" y1="19.78" x2="19.78" y2="4.22" />
            <circle cx="12" cy="12" r="1" />
          </svg>
          Visit the Page
        </button>
      </div>
      <Footer />
    </div>
  );
}
