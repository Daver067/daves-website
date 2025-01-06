import languagespics from "../home/languages";

const HeroAbout = () => {
  return (
    <div className="h-full w w-full bg-black/50">
      <div className="w-full text-center text-4xl py-20 underline decoration-1 underline-offset-4">
        About Me
      </div>
      <div className="w-full flex justify-center gap-10">
        <div className="w-[40%] text-base px-10">
          <div className="text-2xl pb-8">Hey I'm Dave!</div>
          <div className="font-poppins tracking-wide">
            <p className="pb-4">
              I'm a self taught web developer from Alberta, Canada where I also
              work full time as a licensed Electrician.
            </p>
            <p className="pb-4">
              I began my programming journey following{" "}
              <a
                className="text-blue-500 hover:text-blue-700 hover:underline transition duration-200 ease-in-out"
                href="https://www.theodinproject.com"
              >
                The Odin Project's
              </a>{" "}
              Full Stack JavaScript Course.
            </p>
            <p>
              After The Odin Project I continued my learning working on personal
              projects such as Solitaire, and Phone Phlinger, and this personal
              site.
            </p>
          </div>
        </div>
        <div className="w-[40%] text-lg px-10">
          <div className="text-2xl pb-4">Some of my skills</div>
          <div className="flex flex-wrap gap-6">
            {Object.keys(languagespics).map((language) => {
              return languagespics[language];
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroAbout;
