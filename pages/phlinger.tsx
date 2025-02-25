import { Inter } from "next/font/google";
import PageNav from "@/src/components/navbar/Page_NavBar";
import Footer from "@/src/components/footer/footer";
import Image from "next/image";
import Image_And_Text from "@/src/components/multi-use-components/image_text";
import phlingerAsset from "../src/img/projects/phone_phlinger_create_asset.png";
import TextBesideText from "@/src/components/multi-use-components/text_beside_more_text";
import RepoWebsiteButtons from "@/src/components/multi-use-components/repo_website_buttons";

const inter = Inter({ subsets: ["latin"] });

export default function Phlinger() {
  return (
    <div className=" min-h-screen flex flex-col tracking-wide font-poppins ">
      <PageNav />
      <h2 className="project-page-h2 md:py-20"> Phone Phlinger</h2>
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
          `Phone Phlinger is an app targeted towards rank and rent online businesses. 
          Rank and rent businesses will develop web pages, locally rank them to the top of google, 
          and then try to sell the leads that are generated from their website. Leads that come in from a phone number 
          listed on the webpage are the most valuable, and easiest to convert to a sale. There are multiple choices for 
          getting cheap local VOIP phone numbers online, Twilio is a well known provider. The Twilio interface is aimed at 
          developers, and can be overwhelming to set up something as simple as call forwarding. Phone Phlinger makes call 
          forwarding a breeze, along with lots of extras. Phone Phlinger can handle call forwarding, voicemail, whisper messages, 
          caller greetings, call recording, and call tracking with email notifications.`,
        ]}
      ></Image_And_Text>
      <div className="md:mt-28"></div>
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
          `Of course! Check out the demo video! I only use a trial Twilio account for testing calls,
           so please ignore the warning message at the start of my phone calls. A paid Twilio account
            wont have those warnings. Also sorry for the blurs, those are my actual phone numbers and personal email addresses!`,
        ]}
      ></Image_And_Text>

      <TextBesideText
        header1="How Does It Work?"
        paragraphs1={[
          `Well, that's a secret! Actually, it's just a little convuluted to 
          maintain it's 0$ spending limit. Phone Phlinger has taken on many 
          shapes, from a simple flask backend, to hosted on amazon ec2 (turns 
          out thats not free), to what it is today!`,
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
        header2="Why Did I Make This?"
        paragraphs2={[
          `The origins of Phone Phlinger came from a conversation with someone 
            about the frustrations with the cost of similar call tracking software.`,
          `I took a look into Twilio's API and figured I would be able to offer 
            assistance in making a simple application that could handle the needs of
            this client. Besides, any developer can make simple CRUD app like a To-Do 
            list, or mock e-commerce by following online tutorials... I can assure you, 
            there was no walkthrough on how to create a call handling and call tracking 
            app.`,
          `So, in my spare time while backpacking across Asia, the Phlinger was born!`,
          `It is in a state of perpetual updates, and feature additions. On-boarding of
            new clients still requires a manual process, but apart from the inital setup, 
            everything is working exceptionally for all of my clients. (There's one, I have one
            client for this.)`,
        ]}
      ></TextBesideText>
      <RepoWebsiteButtons projectArr={0} />
      <Footer />
    </div>
  );
}
