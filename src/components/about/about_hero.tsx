import Background from "../../img/me_and_pup.jpeg";
const HeroAbout = () => {
  return (
    <div
      className="h-screen -mt-10"
      style={{
        backgroundImage: `url(/me_and_pup.jpeg)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="h-screen bg-black/50">
        <div className="my-10 mx-32 ">
          <div className="overflow-x-hidden  pb-12">
            <section className="pt-12  sm:pt-16">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:flex-col md:flex md:flex-row gap-10  ">
                <div className="max-w-2xl mx-auto text-center m-auto ">
                  <h1 className="px-6 text-lg text-gray-300 font-inter">
                    Passionate, Dedicated, Innovative, Resourceful,
                    Self-Motivated
                  </h1>
                  <p className="mt-5 text-4xl font-bold leading-tight text-gray-100 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                    The software developer that will meet your needs
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroAbout;
