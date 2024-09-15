import Image from "next/image";
import python from "../../img/languages/python.svg";
import aws from "../../img/languages/aws-s3.svg";
import bash from "../../img/languages/bash-icon.svg";
import css from "../../img/languages/css-3.svg";
import gmail from "../../img/languages/google-gmail.svg";
import html from "../../img/languages/html-5.svg";
import js from "../../img/languages/javascript.svg";
import nextjs from "../../img/languages/nextjs-icon.svg";
import postgres from "../../img/languages/postgresql.svg";
import react from "../../img/languages/react.svg";
import sass from "../../img/languages/sass.svg";
import sqlite from "../../img/languages/sqlite.svg";
import tailwind from "../../img/languages/tailwindcss.svg";
import twilio from "../../img/languages/twilio.svg";
import vercel from "../../img/languages/vercel-icon.svg";
import webpack from "../../img/languages/webpack.svg";

const languagespics = {
  python: <Image src={python} alt="snake" className=" max-w-12 max-h-12 " />,
  aws: <Image src={aws} alt="snake" className=" max-w-12 max-h-12 " />,
  bash: <Image src={bash} alt="snake" className=" max-w-12 max-h-12 " />,
  css: <Image src={css} alt="snake" className=" max-w-12 max-h-12 " />,
  gmail: <Image src={gmail} alt="snake" className=" max-w-12 max-h-12 " />,
  html: <Image src={html} alt="snake" className=" max-w-12 max-h-12 " />,
  js: <Image src={js} alt="snake" className=" max-w-12 max-h-12 " />,
  nextjs: <Image src={nextjs} alt="snake" className=" max-w-12 max-h-12 " />,
  postgres: (
    <Image src={postgres} alt="snake" className=" max-w-12 max-h-12 " />
  ),
  react: <Image src={react} alt="snake" className=" max-w-12 max-h-12 " />,
  sass: <Image src={sass} alt="snake" className=" max-w-12 max-h-12 " />,
  sqlite: <Image src={sqlite} alt="snake" className=" max-w-12 max-h-12 " />,
  tailwind: (
    <Image src={tailwind} alt="snake" className=" max-w-12 max-h-12 " />
  ),
  twilio: <Image src={twilio} alt="snake" className=" max-w-12 max-h-12 " />,
  vercel: <Image src={vercel} alt="snake" className=" max-w-12 max-h-12 " />,
  webpack: <Image src={webpack} alt="snake" className=" max-w-12 max-h-12 " />,
};

export default languagespics;
