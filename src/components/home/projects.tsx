import phlingerPhoto from "../../img/projects/phlinger.png";
import mocc from "../../img/projects/mocc.png";
import solitaire from "../../img/projects/solitaire.png";
import personal from "../../img/projects/personal.png";
import cardsnpm from "../../img/projects/cards-package.png";

const projects = [
  {
    name: "Phone Phlinger",
    route: "/phlinger",
    img: phlingerPhoto,
    description: `Phone Phlinger is a tool used to make the Twilio interface more user 
      friendly. Twilio is a cloud communication platform used by many 
      organizations for phone, text, and email communications. Twilio products are developed as desktop experiences, 
      as Phone Phlinger is built with Twilio Paste assets, Phone Phlinger is also built as a desktop experience.
      Phone Phlinger enables easy use of Call-Forwarding, Voicemail, Whisper Messages, 
      Caller Greeting Messages, Call Recording, and Call Tracking for all of 
      your Twilio phone numbers. This app also includes email follow-ups upon ending 
      an active phone call. Included in the email is: the call recording (if available) and 
      basic call information: caller number, caller location, call duration. A Twilio 
      account is required. Sorry, the Repo is currently on private, please contact 
      me for a chance to view the Repo.`,
    repo: "https://www.davediemert.com/contact",
    website: "https://www.phone-phlinger.com",
    languages: [
      "python",
      "aws",
      "bash",
      "css",
      "gmail",
      "html",
      "javascript",
      "nextjs",
      "postgres",
      "react",
      "sqlite",
      "twilio",
      "vercel",
    ],
  },
  {
    name: "card-factory NPM Package",
    route: "/cardsPackage",
    img: cardsnpm,
    description: `This was built off of my project solitaire. The other developer and I decided to create
    an npm package to enable others to use our card foundations. We took the basics from Solitaire, cleaned up a lot of the smaller issues
    and added typescript support. The documentation included in the demo website is quite extensive and easy to follow along. `,
    repo: "https://github.com/Daver067/cards-npm-package",
    website: "https://card-factory.info",
    languages: ["html", "css", "javascript", "typescript", "vite"],
  },
  {
    name: "Calgary Cleaning Site",
    route: "/mocc",
    img: mocc,
    description: `This project was built for a client of a Calgary based cleaning site. 
      It is hosted on netlify, and is not optimized for SEO.`,
    repo: "https://github.com/Daver067/cleaning-site",
    website: "https://moveoutcleanerscalgary.ca",
    languages: ["html", "sass", "react", "javascript"],
  },
  {
    name: "Solitaire",
    route: "/solitaire",
    img: solitaire,
    description: `This project was my first collaborative effort. 
    Solitaire was built to learn how to use git with another developer, 
    along with learning how to combine skills and styles with another developer.
     This was built with vanilla JS, webpack, and is hosted on my github-pages.`,
    repo: "https://github.com/Daver067/card-games",
    website: "https://daver067.github.io/card-games/",
    languages: ["html", "css", "javascript", "webpack"],
  },
  {
    name: "Personal Site",
    route: "/personalsite",
    img: personal,
    description: "This site was built by me! I used NextJS and TailwindCSS. ",
    repo: "https://github.com/Daver067/daves-website",
    website: "https://www.davediemert.com/",
    languages: ["html", "css", "tailwind", "javascript", "nextjs", "vercel"],
  },
];

export default projects;
