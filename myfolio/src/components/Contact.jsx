import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dk1j6la",
        "template_4xdl3qr",
        form.current,
        "Qic-STAJsZxeZd8eT"
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
        },
        () => {
          alert("Failed to send message.");
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-[#050816] text-white overflow-hidden"
    >
      
      {/* Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:45px_45px]"></div>

      {/* Main */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          
          <div className="inline-flex items-center gap-2 bg-[#101828] border border-cyan-500/20 px-4 py-2 rounded-full text-cyan-400 text-sm mb-7">
            
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>

            Contact Me
          </div>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Let’s Work
            <br />

            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              Together
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-8 mt-8 max-w-xl">
            Have a project idea or any query?
            Send me a message directly and I’ll
            get back to you soon.
          </p>

          {/* Contact Info */}
          <div className="mt-12 space-y-6">
            
            {/* Email */}
            <div className="flex items-center gap-5">
              
              <div className="w-14 h-14 rounded-2xl bg-[#101828] border border-cyan-500/10 flex items-center justify-center text-cyan-400 text-xl">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-gray-400">
                  Email
                </p>

                <a
                  href="mailto:vishwarajjasiwal42@gamil.com"
                  className="text-white hover:text-cyan-400 transition"
                >
                  vishwarajjasiwal42@gamil.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-5">
              
              <div className="w-14 h-14 rounded-2xl bg-[#101828] border border-purple-500/10 flex items-center justify-center text-purple-400 text-xl">
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-gray-400">
                  Phone
                </p>

                <a
                  href="tel:+91 99999 99999"
                  className="text-white hover:text-purple-400 transition"
                >
                  +91 99999 99999
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-5">
              
              <div className="w-14 h-14 rounded-2xl bg-[#101828] border border-pink-500/10 flex items-center justify-center text-pink-400 text-xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-gray-400">
                  Location
                </p>

                <p className="text-white">
                  Noida, India
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-[#101828]/90 border border-cyan-500/10 backdrop-blur-xl rounded-[35px] p-8 shadow-2xl"
        >
          
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >
            
            {/* Name */}
            <div>
              
              <label className="text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                name="user_name"
                required
                placeholder="Enter your name"
                className="w-full mt-3 bg-[#0f172a] border border-cyan-500/10 focus:border-cyan-400 outline-none rounded-2xl px-5 py-4 text-white"
              />
            </div>

            {/* Email */}
            <div>
              
              <label className="text-gray-300">
                Email Address
              </label>

              <input
                type="email"
                name="user_email"
                required
                placeholder="Enter your email"
                className="w-full mt-3 bg-[#0f172a] border border-cyan-500/10 focus:border-cyan-400 outline-none rounded-2xl px-5 py-4 text-white"
              />
            </div>

            {/* Subject */}
            <div>
              
              <label className="text-gray-300">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                placeholder="Enter subject"
                className="w-full mt-3 bg-[#0f172a] border border-cyan-500/10 focus:border-cyan-400 outline-none rounded-2xl px-5 py-4 text-white"
              />
            </div>

            {/* Message */}
            <div>
              
              <label className="text-gray-300">
                Message
              </label>

              <textarea
                rows="5"
                name="message"
                required
                placeholder="Write your message..."
                className="w-full mt-3 bg-[#0f172a] border border-cyan-500/10 focus:border-cyan-400 outline-none rounded-2xl px-5 py-4 text-white resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-500 py-4 rounded-2xl font-semibold hover:scale-[1.02] transition duration-300 shadow-lg shadow-purple-500/20"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}