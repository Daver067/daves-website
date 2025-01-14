import { useState } from "react";

const ContactForm: React.FC = () => {
  const [textareaContent, setTextareaContent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex w-full justify-center my-12 font-poppins ">
      <div className="bg-zinc-600 w-[45%] text-gray-300 p-10 rounded-md">
        <form id="contactForm" method="POST" name={"formName"}>
          <input type="hidden" name="form-name" value={"formName"} />
          <div className="flex flex-col mb-12">
            <label className="mb-4" htmlFor="name">
              Name:
            </label>
            <input
              className="h-16 pl-4 rounded-xl text-slate-800 bg-gray-200"
              type="text"
              id="name"
              name="name"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </div>
          <div className="flex flex-col mb-12">
            <label className="mb-4" htmlFor="email">
              Email:{" "}
            </label>
            <input
              className="h-16 pl-4 rounded-xl text-slate-800 bg-gray-200"
              type="text"
              id="email"
              name="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className="flex flex-col mb-12">
            <label className="mb-4" htmlFor="message">
              Message:
            </label>
            <textarea
              className="h-72 px-4 py-2 rounded-xl text-slate-800 bg-gray-200"
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
