import HeroAbout from "@/src/components/about/about_hero";
import CarouselContainer from "@/src/components/about/carousel/carousel_container";
import Image_And_Text from "@/src/components/multi-use-components/image_text";
import Footer from "@/src/components/footer/footer";
import PageNav from "@/src/components/navbar/Page_NavBar";
import { Inter } from "next/font/google";
import photos_img from "@/src/img/photos";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  const slides = [
    photos_img.cambodia,
    photos_img.cycle,
    photos_img.engagement,
    photos_img.family,
    photos_img.running,
  ];
  return (
    <div className="min-h-screen">
      <PageNav />
      <HeroAbout />
      <Image_And_Text
        img={
          <div className=" w-[80%] m-auto py-11 ">
            <CarouselContainer slides={slides}></CarouselContainer>
          </div>
        }
        header="A little more about me"
        paragraphs={[
          "When I'm not working on a programming project, or working as an electrician, I spend a lot of my time outdoors. I am currently training for my first half ironman triathlon (swim 1900m, bike 90km, run 21km) for summer 2025.",
          "Summer weekends I try to spend time hiking in the Rocky Mountains with my fiance and dog.",
          "I'm also passionate about food and coffee. I'm always trying new recipes, and love trying new dishes at restaurants. All the eating is part of the reason why I had to get into a hobby where I perform cardio for hours at a time. It's worth it. ",
          "Travelling is another passion of mine, which is a driving motivator why I want to transition from a job where it is mandatory to be in person (electrician) to a job with remote possibilities. I spent the winter months of 2023-2024 backpacking across Asia, while also learning programming. I would love to be able to find meaningful work that allowed me some of that freedom.",
        ]}
      ></Image_And_Text>
      <Footer />
    </div>
  );
}
