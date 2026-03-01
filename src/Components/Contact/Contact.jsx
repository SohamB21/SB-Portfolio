import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiThumbsUp, FiSend, FiUser, FiMessageSquare, FiAlertCircle } from "react-icons/fi";
import { ThemeContext } from "../../context.jsx";
import { LINKS } from "../../assets/constants/links.js";
import { Sparkle, CurlyArrow, BurstStar, DotGrid } from "../Decorations/Decorations";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Standard field names often used in EmailJS templates:
    // {{from_name}}, {{from_email}}, {{message}}
    // These names should match what is set in your EmailJS dashboard template.
    emailjs
      .sendForm(
        "service_wunwgkl",
        "template_kzp2qr6",
        formRef.current,
        "APIBdnVaPnB3d3Y4f",
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          e.target.reset();
          setStatus("success");
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 5000);
        },
      );
  };

  return (
    <section id="Contact" className="w-full py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 -z-20 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}></div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Dot Grid - Left Side (Mustard) */}
        <div className="absolute bottom-40 -left-20 w-60 h-60 opacity-90 text-cta rotate-45">
          <DotGrid id="dots_contact_left" />
        </div>

        {/* Dot Grid - Right Side (Green) */}
        <div className="absolute top-60 -right-20 w-60 h-60 opacity-90 text-primary -rotate-45">
          <DotGrid id="dots_contact_right" />
        </div>
      </div>

      <div className="container mx-auto max-w-3xl relative z-10">

        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <span className={`font-yellowtail text-4xl md:text-5xl block transform -rotate-6 ${darkMode ? "text-cta" : "text-cta"}`}>
            Let's Work Together!
          </span>
          <h2 className={`text-5xl md:text-7xl font-black font-outfit uppercase tracking-tight ${darkMode ? "text-white" : "text-primary"}`}>
            Get In Touch
          </h2>
          <p className={`text-base md:text-lg max-w-xl mx-auto font-outfit pt-2 ${darkMode ? "text-slate-300" : "text-text-body"}`}>
            Have a project in mind or just want to reach out? I'd love to hear about it. Send me a message and let's create something amazing <span className="relative inline-block">together!
              <CurlyArrow className={`hidden md:block absolute left-4 top-4 w-24 h-24 rotate-12 ${darkMode ? "text-cta" : "text-primary opacity-80"}`} />
            </span>
          </p>
        </div>

        {/* Form Card */}
        <div className={`rounded-2xl p-8 md:p-12 shadow-xl ${darkMode
          ? "bg-slate-800 border border-slate-700 hover:border-slate-600"
          : "bg-white border border-gray-100"
          }`}>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

            {/* Name & Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ml-1 ${darkMode ? "text-cta" : "text-primary"
                  }`}>
                  Name
                </label>
                <div className="relative">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors ${darkMode ? "text-slate-500 group-focus-within:text-cta" : "text-gray-400 group-focus-within:text-primary"
                    }`}>
                    <FiUser size={18} />
                  </div>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                    title="Please tell me your name!"
                    onInvalid={(e) => e.target.setCustomValidity("Please tell me your name!")}
                    onInput={(e) => e.target.setCustomValidity("")}
                    className={`w-full pl-11 pr-4 py-4 rounded-xl border-2 outline-none font-outfit transition-all duration-300 ${darkMode
                      ? "bg-slate-900/50 border-slate-700 text-white focus:border-cta focus:bg-slate-900 placeholder-slate-600 focus:shadow-[0_0_20px_rgba(247,148,29,0.1)]"
                      : "bg-gray-50 border-gray-100 text-primary focus:border-primary focus:bg-white placeholder-gray-400 focus:shadow-[0_0_20px_rgba(0,104,55,0.1)]"
                      }`}
                    required
                  />
                </div>
              </div>

              <div className="group">
                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ml-1 ${darkMode ? "text-cta" : "text-primary"
                  }`}>
                  Email
                </label>
                <div className="relative">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors ${darkMode ? "text-slate-500 group-focus-within:text-cta" : "text-gray-400 group-focus-within:text-primary"
                    }`}>
                    <FiMail size={18} />
                  </div>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="your@email.com"
                    title="I'll need your email to reply back!"
                    onInvalid={(e) => {
                      if (e.target.validity.valueMissing) {
                        e.target.setCustomValidity("I'll need your email to reply back!");
                      } else if (e.target.validity.typeMismatch) {
                        e.target.setCustomValidity("This doesn't look like a valid email. Could you double-check it?");
                      }
                    }}
                    onInput={(e) => e.target.setCustomValidity("")}
                    className={`w-full pl-11 pr-4 py-4 rounded-xl border-2 outline-none font-outfit transition-all duration-300 ${darkMode
                      ? "bg-slate-900/50 border-slate-700 text-white focus:border-cta focus:bg-slate-900 placeholder-slate-600 focus:shadow-[0_0_20px_rgba(247,148,29,0.1)]"
                      : "bg-gray-50 border-gray-100 text-primary focus:border-primary focus:bg-white placeholder-gray-400 focus:shadow-[0_0_20px_rgba(0,104,55,0.1)]"
                      }`}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="group">
              <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ml-1 ${darkMode ? "text-cta" : "text-primary"
                }`}>
                Message
              </label>
              <div className="relative">
                <div className={`absolute left-4 top-5 pointer-events-none transition-colors ${darkMode ? "text-slate-500 group-focus-within:text-cta" : "text-gray-400 group-focus-within:text-primary"
                  }`}>
                  <FiMessageSquare size={18} />
                </div>
                <textarea
                  rows="5"
                  name="user_message"
                  placeholder="Tell me about your idea or anything that you want to discuss..."
                  title="Don't forget to write your message!"
                  onInvalid={(e) => e.target.setCustomValidity("Don't forget to write your message!")}
                  onInput={(e) => e.target.setCustomValidity("")}
                  className={`w-full pl-11 pr-4 py-4 rounded-xl border-2 outline-none font-outfit resize-none transition-all duration-300 ${darkMode
                    ? "bg-slate-900/50 border-slate-700 text-white focus:border-cta focus:bg-slate-900 placeholder-slate-600 focus:shadow-[0_0_20px_rgba(247,148,29,0.1)]"
                    : "bg-gray-50 border-gray-100 text-primary focus:border-primary focus:bg-white placeholder-gray-400 focus:shadow-[0_0_20px_rgba(0,104,55,0.1)]"
                    }`}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`group relative inline-flex items-center justify-center gap-3 px-12 py-4 rounded-full font-bold font-outfit tracking-wider transition-all duration-300 overflow-hidden ${status === "success"
                  ? "bg-green-600 text-white cursor-default shadow-lg"
                  : status === "error"
                    ? "bg-red-600 text-white"
                    : `${darkMode ? "bg-cta" : "bg-primary"} text-white shadow-lg hover:shadow-2xl hover:-translate-y-1`
                  }`}
              >
                {/* Button shine effect */}
                <div className={`absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent`} />

                <span className="relative text-sm">
                  {status === "idle" && "Send Message"}
                  {status === "sending" && "Sending..."}
                  {status === "success" && "Message Sent!"}
                  {status === "error" && "Failed to Send"}
                </span>
                <div className="relative transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  {status === "success" ? <FiThumbsUp size={18} /> : <FiSend size={18} />}
                </div>
              </button>
            </div>

            {/* Success Message */}
            {status === "success" && (
              <div className={`text-center p-4 rounded-xl ${darkMode ? "bg-green-900/30 border border-green-700/50" : "bg-green-50 border border-green-200"}`}>
                <p className={`text-sm font-semibold ${darkMode ? "text-green-400" : "text-green-700"}`}>
                  ✓ Thanks for reaching out! I'll get back to you soon.
                </p>
              </div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <div className={`text-center p-4 rounded-xl ${darkMode ? "bg-red-900/30 border border-red-700/50" : "bg-red-50 border border-red-200"}`}>
                <p className={`flex items-center justify-center gap-2 text-sm font-semibold ${darkMode ? "text-red-400" : "text-red-700"}`}>
                  <FiAlertCircle /> There was an issue sending your message. Please try again or email me directly.
                </p>
              </div>
            )}

          </form>
        </div>

        {/* Email Link Below */}
        <div className="text-center mt-8">
          <p className={`text-sm ${darkMode ? "text-slate-400" : "text-gray-600"}`}>
            Or email me directly at{" "}
            <a
              href={`mailto:${LINKS.email}`}
              className={`font-semibold underline ${darkMode ? "text-cta" : "text-primary"}`}
            >
              {LINKS.email}
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
