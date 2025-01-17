import { Inter } from "next/font/google";
import PageNav from "@/src/components/navbar/Page_NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Phlinger() {
  return (
    <div>
      <PageNav />
      <div className="w-full text-center text-4xl pt-20 pb-5 md:pb-20 underline decoration-1 underline-offset-4">
        Phone Phlinger
      </div>
      <div className="px-64 mb-20">
        <h3 className="block text-2xl text-center underline decoration-1 underline-offset-4 pb-4">
          What Is It?
        </h3>
        <p className="relative leading-6 text-left p-2 text-base font-poppins">
          {" "}
          Phone Phlinger is an app targeted towards rank and rent online
          businesses. Rank and rent businesses will develop web pages, locally
          rank them to the top of google, and then try to sell the leads that
          are generated from their website. Leads that come in from a phone
          number listed on the webpage are the most valuable, and easiest to
          convert to a sale. There are multiple choices for getting cheap local
          VOIP phone numbers online, Twilio is a well known provider. The Twilio
          interface is aimed at developers, and can be overwhelming to set up
          something as simple as call forwarding. Phone Phlinger makes call
          forwarding a breeze, along with lots of extras. Phone Phlinger can
          handle call forwarding, voicemail, whisper messages, caller greetings,
          call recording, and call tracking with email notifications.
        </p>
      </div>
      <div className="px-64 mb-20">
        <h3 className="block text-2xl text-center underline decoration-1 underline-offset-4 pb-4">
          How Does It Work?
        </h3>
        <p className="relative leading-6 text-left p-2 text-base font-poppins">
          Well, that's a secret! Actually, it's just a little convuluted to
          maintain it's 0$ spending limit. Phone Phlinger has taken on many
          shapes, the one point of it was to keep it as cheap as possible. I
          built this for my fiance, who was annoyed at paying the pricetag of
          other similar software.{" "}
        </p>

        <p className="relative leading-6 text-left p-2 text-base font-poppins">
          The front end is built with NextJS, using twilio's paste package for a
          lot of designs, the site is hosted on vercel. There is a Postgres
          Database which handles user information, accessed with prisma. Login
          information is handled by auth0. All phone logic is handled by twilio
          serverless functions, which are uploaded to users twilio accounts from
          a python backend hosted on pythonanywhere by running a bash script
          accessing the twilio command line interface tool. User recordings (for
          voicemails, caller greetings, whisper messages) are stored in an
          amazon s3 bucket, as per twilio documentation. Updating information on
          the webpage Phone Phlinger edits JSON data saved on users specific
          twilio sync accounts. The emails are from the gmail API, also accessed
          through the python backend.
        </p>
      </div>
      <div className="px-64 mb-20">
        <h3 className="block text-2xl text-center underline decoration-1 underline-offset-4 pb-4">
          Can You Show Me A Demo?
        </h3>
        <p className="relative leading-6 text-left p-2 text-base font-poppins">
          Of course! Check out the demo video below! Sorry, looks like my screen
          capture took off the edges a bit.
        </p>
      </div>
      <iframe
        className="w-[50%] aspect-video self-stretch md:min-h-96 m-auto"
        src="https://www.youtube.com/embed/SR2PQSKpWY4"
        frameBorder="0"
        title="Product Overview Video"
        aria-hidden="true"
      />{" "}
    </div>
  );
}
