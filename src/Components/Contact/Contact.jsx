import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FiMail, FiThumbsUp } from "react-icons/fi";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wunwgkl",
        "template_kzp2qr6",
        formRef.current,
        "APIBdnVaPnB3d3Y4f",
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <>
      <section
        className="c h-full w-full flex flex-col items-center justify-center py-24 relative"
        style={{ background: "linear-gradient(to right, white, lightblue)" }}
      >
        <div className="header pb-8">
          <h1 className="text-3xl font-bold">Contact Me</h1>
        </div>

        <div className="c-main w-2/3 p-4 flex flex-col justify-center items-center">
          <div className="c-left h-screen w-5 bg-blue-600 absolute left-0 rounded-r-full hover:bg-blue-800"></div>
          <div className="c-right h-screen w-5 bg-blue-600 absolute right-0 rounded-l-full hover:bg-blue-800"></div>
          <p className="text-md justify-center text-center italic">
            For discussions and opportunities, connect with me directly at{" "}
            <br />
            <a
              className="underline underline-offset-2 text-blue-600 hover:text-indigo-700"
              href="mailto:soham0110banik@gmail.com"
            >
              soham0110banik@gmail.com
            </a>
            <br /> or through the form below.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="lg:w-1/2 sm:w-full flex flex-col gap-4 my-5 rounded-lg text-indigo-700"
          >
            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              className="w-full border-2 border-indigo-700 p-2 rounded-lg my-2"
              required
            />
            <input
              type="text"
              placeholder="Your Email"
              name="user_email"
              className="w-full border-2 border-indigo-700 p-2 rounded-lg mb-2"
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              name="user_message"
              className="w-full border-2 border-indigo-700 p-2 rounded-lg mb-4"
              required
            />
            <button
              className={`bg-indigo-700 hover:bg-indigo-800 border border-blue-900 rounded-lg text-white w-fit flex items-center flex p-2 ml-auto ${
                done ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={done}
            >
              {!done ? (
                <>
                  Submit <FiMail size={20} className="ml-2" />
                </>
              ) : (
                <>
                  Email Sent <FiThumbsUp size={20} className="ml-2" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
