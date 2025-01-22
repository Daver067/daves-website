import languagespics from "../../img/languages";
import Tooltip from "./tooltip";

const HeroAbout = () => {
  return (
    <div className="h-full w w-full bg-black font-poppins">
      <div className="w-full text-center text-4xl pt-5 md:pt-10 pb-5 md:pb-10 underline decoration-1 underline-offset-4">
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
    </div>
  );
};
export default HeroAbout;
