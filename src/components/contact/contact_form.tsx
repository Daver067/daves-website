import verifyForm from "@/pages/api/verifyForm";
import Image from "next/image";
import { useState } from "react";
import daverPhoto from "../../img/daver_photo.jpg";

const ContactForm: React.FC = () => {
  const [textareaContent, setTextareaContent] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string[]>([]);

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setError([]);
    try {
      const formValid = verifyForm({
        name,
        email,
        message: textareaContent,
      });
      if (formValid !== true) {
        const problems = [];
        for (const num in formValid.list) {
          problems.push(formValid.list[num]);
        }
        setError(problems);
        throw formValid;
      }
    } catch (error) {
      console.log(error);
      return;
    }
    const req = { name: name, email: email, message: textareaContent };

    try {
      let response = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify(req),
      });
      if (response.status !== 200) {
        response = await response.json();
        throw response;
      }
      response = await response.json();
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex w-full justify-center my-4 md:my-12 ">
      {submitted ? (
        <div className="w-full bg-black">
          <div className="flex items-center justify-center  py-10">
            <div className="mx-auto overflow-hidden rounded-3xl text-gray-700 shadow-md">
              <div className="h-10 bg-zinc-600 pt-10 sm:h-16"></div>
              <div className="flex flex-col items-center bg-gray-100 px-4 sm:px-20 pt-4 sm:pt-10 pb-8 sm:pb-16">
                <h2 className="mb-2  text-2xl font-bold text-slate-500 sm:text-4xl">
                  Thank You!
                </h2>
                <p className="mb-8 font-normal sm:font-medium text-gray-500">
                  I{"'"}ll reach out as soon as possible
                </p>
                <div className="flex items-center rounded-xl bg-zinc-600 p-4">
                  <Image
                    className="h-12 w-12 rounded-full border-4 border-white object-cover"
                    src={daverPhoto}
                    alt="Daver Pic"
                    height={12}
                    width={12}
                  />
                  <div className="ml-4 w-56">
                    <p className="text-xs font-medium text-gray-300">From</p>
                    <p className="font-medium text-gray-100">Dave Diemert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-zinc-600 w-[75%] md:w-[25%] text-gray-300 p-5 md:p-5 rounded-md">
          <form id="contactForm">
            <input type="hidden" name="form-name" value={"formName"} />
            <div className="">
              {error.map((err) => {
                return (
                  <div key={err} className="text-red-300">
                    {err}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col mb-6 md:mb-6">
              <label className="mb-4" htmlFor="name">
                Name:
              </label>
              <input
                className="h-8 md:h-8 px-4 rounded-xl text-slate-800 bg-gray-200"
                placeholder="Your name here"
                type="text"
                id="name"
                name="name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </div>
            <div className="flex flex-col mb-6 md:mb-6">
              <label className="mb-4" htmlFor="email">
                Email:{" "}
              </label>
              <input
                className="h-8 md:h-8 px-4 rounded-xl text-slate-800 bg-gray-200"
                placeholder="Your email here"
                type="text"
                id="email"
                name="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            <div className="flex flex-col mb-6 md:mb-6">
              <label className="mb-4" htmlFor="message">
                Message:
              </label>
              <textarea
                className=" h-36 md:h-36 px-4 py-2 rounded-xl text-slate-800 bg-gray-200"
                placeholder="Leave me a message!"
                id="message"
                name="message"
                value={textareaContent}
                onChange={(e) => setTextareaContent(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className="text-gray-200 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
