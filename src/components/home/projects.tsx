import phlingerPhoto from "../../img/phlinger.png";
import mocc from "../../img/mocc.png";
import solitaire from "../../img/solitaire.png";
import personal from "../../img/personal.png";

const projects = [
  {
    name: "Phone Phlinger",
    img: phlingerPhoto,
    description:
      "Phone Phlinger is a tool used to make Twilio interface more user friendly. It enables easy use of Call-Forwarding, Voicemail, Whisper Messages, Caller Greeting Messages, Call Recording, and Call Tracking for all of your Twilio phone numbers. It also includes email followups on all calls to your Twilio Phone Numbers. A Twilio account is required. Sorry, the Repo is currently on private, please contact me for a chance to view the Repo.",
    repo: "https://www.google.com",
    website: "https://phlinger-frontend-paste.vercel.app",
    languages: [
      "python",
      "aws",
      "bash",
      "css",
      "gmail",
      "html",
      "js",
      "nextjs",
      "postgres",
      "react",
      "sqlite",
      "twilio",
    ],
  },
  {
    name: "Calgary Cleaning Site",
    img: mocc,
    description:
      "This project was built for a client of a Calgary based cleaning site. It is hosted on netlify, and is not optimized for SEO.",
    repo: "https://github.com/Daver067/cleaning-site",
    website: "https://moveoutcleanerscalgary.ca",
    languages: ["html", "sass", "react", "js"],
  },
  {
    name: "Solitaire",
    img: solitaire,
    description:
      "This project was my first collaborative effort. Solitaire was built to learn how to use git with another developer, along with learning how to combine skills and styles with another developer. This was built with vanilla JS.",
    repo: "https://github.com/Daver067/card-games",
    website: "https://daver067.github.io/card-games/",
    languages: ["html", "css", "js", "webpack"],
  },
  {
    name: "Personal Site",
    img: personal,
    description: "This site was built by me! I used NextJS, TailwindCSS ",
    repo: "  https://github.com/Daver067/daves-website",
    website: "https://google.com",
    languages: ["html", "css", "tailwind", "js", "nextjs"],
  },
];

export default projects;
