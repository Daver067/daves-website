const ContactHero: React.FC = () => {
  return (
    <div className="h-full w w-full bg-black/50 font-poppins">
      <div className="w-full text-center text-4xl pt-5 md:pt-20 pb-10 underline decoration-1 underline-offset-4">
        Contact
      </div>
      <p className=" w-full px-4 md:px-10 text-center ">
        If you would like to contact me, please complete the form below.{" "}
        <br></br> I look forward to hearing from you!
      </p>
    </div>
  );
};

export default ContactHero;
