import { Inter } from "next/font/google";
import PageNav from "@/src/components/navbar/Page_NavBar";
import { useRouter } from "next/navigation";
import Footer from "@/src/components/footer/footer";
import Image from "next/image";
import Image_And_Text from "@/src/components/about/image_text";
import phlingerAsset from "../src/img/projects/phone_phlinger_create_asset.png";
import callLog from "../src/img/projects/call_log_screenshot.png";
const inter = Inter({ subsets: ["latin"] });

export default function Phlinger() {
  const router = useRouter();

  return (
    <div className=" min-h-screen flex flex-col ">
      <PageNav />
      <h2 className="w-full text-center text-4xl pt-20 pb-5 lg:pb-20 underline decoration-1 underline-offset-4">
        Phone Phlinger
      </h2>
      <div className=" lg:max-w-[70%] m-auto pb-20 px-0">
        <Image_And_Text
          img={
            <div className=" w-full m-auto ">
              <Image
                height={500}
                width={1000}
                src={phlingerAsset}
                alt="screenshot of app phone phliner"
              ></Image>
            </div>
          }
          header="What Is It?"
          paragraphs={[
            " Phone Phlinger is an app targeted towards rank and rent online businesses. Rank and rent businesses will develop web pages, locally rank them to the top of google, and then try to sell the leads that are generated from their website. Leads that come in from a phone number listed on the webpage are the most valuable, and easiest to convert to a sale. There are multiple choices for getting cheap local VOIP phone numbers online, Twilio is a well known provider. The Twilio interface is aimed at developers, and can be overwhelming to set up something as simple as call forwarding. Phone Phlinger makes call forwarding a breeze, along with lots of extras. Phone Phlinger can handle call forwarding, voicemail, whisper messages, caller greetings, call recording, and call tracking with email notifications.",
          ]}
        ></Image_And_Text>
      </div>
      <div className=" lg:max-w-[70%] m-auto pb-20 mt-0 lg:mt-6 px-0">
        <Image_And_Text
          reverse={true}
          img={
            <div className=" w-full m-auto ">
              <iframe
                className=" w-full aspect-video self-stretch lg:min-h-96 m-auto mb-20"
                src="https://www.youtube.com/embed/5NRnloSXdsA"
                title="Phone Phlinger Demo"
                aria-hidden="true"
              />{" "}
            </div>
          }
          header="Can You Show Me A Demo?"
          paragraphs={[
            "                    Of course! Check out the demo video! I only use a trial Twilio account for testing calls, so please ignore the warning message at the start of my phone calls. A paid Twilio account wont have those warnings. Also sorry for the blurs, those are my actual phone numbers and personal email addresses!",
          ]}
        ></Image_And_Text>
      </div>

      <div className=" lg:max-w-[70%] m-auto pb-20 mt-0 lg:mt-6 px-0">
        <Image_And_Text
          img={
            <div className=" w-full m-auto ">
              <Image
                height={500}
                width={1000}
                src={callLog}
                alt="screenshot of call logs on phone phlinger"
              ></Image>
            </div>
          }
          header="How Does It Work?"
          paragraphs={[
            `Well, that's a secret! Actually, it's just a little convuluted to maintain it's 0$ spending limit. Phone Phlinger has taken on many shapes, from a simple flask backend, to hosted on amazon ec2 (turns out thats not free), to what it is today! I built this for my fiance, who was annoyed at paying the pricetag of other similar software.`,
            `The front end is built with NextJS, using twilio's paste package
          for a lot of designs, the site is hosted on vercel. There is a
          Postgres Database which handles user information, accessed with
          prisma. Login information is handled by auth0. All phone logic is
          handled by twilio serverless functions, which are uploaded to users
          twilio accounts from a python backend hosted on pythonanywhere by
          running a bash script accessing the twilio command line interface
          tool. User recordings (for voicemails, caller greetings, whisper
          messages) are stored in an amazon s3 bucket, as per twilio
          documentation. Updating information on the webpage Phone Phlinger
          edits JSON data saved on users specific twilio sync accounts. The
          emails are from the gmail API, also accessed through the python
          backend.`,
            `I understand that was a bit of a mouthful, but I'm happy to talk
          about anything more in depth, just get in contact with me!`,
          ]}
        ></Image_And_Text>
      </div>
      <div className=" flex justify-center pt-4 mb-2">
        <button
          onClick={() =>
            router.push("https://daves-website-theta.vercel.app/contact")
          }
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
          onClick={() =>
            router.push("https://phlinger-frontend-paste.vercel.app")
          }
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
