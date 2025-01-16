import languagespics from "../../img/languages";
import Image_And_Text from "./image_text";
import Tooltip from "./tooltip";
import CarouselContainer from "./carousel/carousel_container";
import photos_img from "@/src/img/photos";

const HeroAbout = () => {
  const slides = [
    photos_img.cambodia,
    photos_img.cycle,
    photos_img.engagement,
    photos_img.family,
    photos_img.running,
  ];
  return (
    <div className="h-full w w-full bg-black font-poppins">
      <div className="w-full text-center text-4xl pt-20 pb-5 md:pb-20 underline decoration-1 underline-offset-4">
        About Me
      </div>
      <div className="w-full flex justify-center bg-zinc-800 flex-col py-10 px:2 md:px-32 md:flex-row">
        <div className=" w-[80%] m-auto text-base md:pl-10 md:w-[40%] mb-10 md:mb-auto">
          <div className="text-2xl pb-8 text-center">Hey I{`'`}m Dave!</div>
          <div className=" tracking-wide">
            <p className="pb-4">
              I{`'`}m a self taught web developer from Alberta, Canada where I
              also work full time as a licensed Electrician.
            </p>
            <p className="pb-4">
              I began my programming journey following{" "}
              <a
                className="text-blue-500 hover:text-blue-700 hover:underline transition duration-200 ease-in-out"
                href="https://www.theodinproject.com"
              >
                The Odin Project{`'`}s
              </a>{" "}
              Full Stack JavaScript Course.
            </p>
            <p className="pb-4">
              After The Odin Project I continued my learning working on personal
              projects such as Solitaire, Phone Phlinger, and this personal
              site.
            </p>
            <p>
              I prefer the functional side of programming as opposed to the
              design aspect. I have a knack for solving problems, and that is
              what I enjoy most from programming.
            </p>
          </div>
        </div>
        <div className="text-lg m-auto w-[80%] md:w-[40%] ">
          <div className="text-2xl pb-10 text-center">Some of my skills</div>
          <div className="flex flex-wrap gap-10 justify-around">
            {Object.entries(languagespics).map(([key, value], index) => {
              return (
                <Tooltip key={index} text={key}>
                  {value}
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
      <div className="md:mx-32">
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
            "Travelling is another passion of mine, which is a driving motivator why I want to transition from a job where it is mandatory to be in person (electrician) to a job with remote possibilities. I spent the winter months of 2023-2024 backpacking across Asia, and would love to be able to find meaningful work that allowed me some of that freedom.",
          ]}
        ></Image_And_Text>
      </div>
    </div>
  );
};
export default HeroAbout;
