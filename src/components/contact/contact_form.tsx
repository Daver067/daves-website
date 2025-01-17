import { useState } from "react";

const ContactForm: React.FC = () => {
  const [textareaContent, setTextareaContent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex w-full justify-center my-4 md:my-12 font-poppins ">
      <div className="bg-zinc-600 w-[60%] md:w-[25%] text-gray-300 p-5 md:p-5 rounded-md">
        <form id="contactForm" method="POST" name={"formName"}>
          <input type="hidden" name="form-name" value={"formName"} />
          <div className="flex flex-col mb-6 md:mb-6">
            <label className="mb-4" htmlFor="name">
              Name:
            </label>
            <input
              className="h-8 md:h-8 pl-4 rounded-xl text-slate-800 bg-gray-200"
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
              className="h-8 md:h-8 pl-4 rounded-xl text-slate-800 bg-gray-200"
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
                e.preventDefault();
                console.log(name);
                console.log(email);
                console.log(textareaContent);
              }}
              className="text-gray-200 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
