import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import { BiPaperPlane } from "react-icons/bi";
import { contactItems } from "../data";

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [data, setData] = useState(initialState);
  const [error, setError] = useState({});

  function onChangeHandler(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newError = {};
    const emailRegex = /^[a-zA-Z][^\s@]*@[^\s@]+\.[^\s@]+$/;

    if (!data.name) {
      newError.name = "Name is required!";
    } else if (data.name.length < 3) {
      newError.name = "Name too short!";
    }

    if (!data.email) {
      newError.email = "Email is required!";
    } else if (!emailRegex.test(data.email)) {
      newError.email = "Invalid email address!";
    }

    if (!data.message) {
      newError.message = "Message is required!";
    } else if (data.message.length < 10) {
      newError.message = "Message too short!";
    }

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    const submittedData = data;

    emailjs
      .send(
        "service_5ylvz1p",
        "template_ek6jrbt",
        {
          name: submittedData.name,
          email: submittedData.email,
          message: submittedData.message,
        },
        "ZaP5qUhgvUvXH1EUh",
      )
      .then(() => {
        alert("Message sent!");
        setData(initialState);
        setError({});
      })
      .catch((err) => {
        console.log(err);
        setError({ submitError: "Something went wrong!" });
      });
  }

  return (
    <motion.section
      id="contact"
      className="pt-34 lg:pt-45 pb-15 lg:pb-30 overflow-x-clip"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-2 mb-10 md:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-800 dark:text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center  mb-2"
          >
            Get In{" "}
            <span className="tracking-tighter bg-linear-to-b from-black dark:from-neutral-50 via-(--purple-700) dark:via-(--purple-300) to-(--purple-400) dark:to-(--purple-600) bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "6rem", opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="w-16 md:w-24 h-0.5 bg-linear-to-r from-(--purple-500) to-(--purple-700) dark:to-(--purple-300) rounded-full"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-center font-medium text-gray-700 dark:text-gray-400 leading-relaxed pt-4"
          >
            Have an opportunity or project in mind? Send a quick message - I
            usually respond within 24 hours.
          </motion.p>
        </motion.div>

        <div className="flex lg:flex-row flex-col items-center md:gap-y-8 gap-y-12 md:gap-x-8 gap-x-12 ">
          <motion.div
            className="w-full px-4 py-6 border border-neutral-300/80 dark:border-neutral-700/80 rounded-2xl dark:bg-(--purple-950)/70 bg-(--purple-50)/70"
            // initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-semibold mb-4 dark:text-white">
              {" "}
              Send me a message
            </h4>

            <form
              action=""
              onSubmit={(e) => handleSubmit(e)}
              className="flex flex-col"
            >
              <label
                htmlFor="name"
                className=" mt-4 mb-1 text-black dark:text-white"
              >
                Name
              </label>

              <input
                type="text"
                value={data.name}
                autoComplete="off"
                placeholder="John Doe"
                name="name"
                onChange={(e) => onChangeHandler(e)}
                className="text-gray-600 dark:text-gray-400 rounded-lg px-3 py-2 border focus:outline-none border-neutral-300/80 dark:border-neutral-700/80"
              />

              {error.name && (
                <p className=" mt-1 text-xs text-red-700 text-start">
                  {error.name}
                </p>
              )}

              <label
                htmlFor="email"
                className=" mt-4 mb-1 text-black dark:text-white"
              >
                Email
              </label>

              <input
                type="email"
                value={data.email}
                autoComplete="off"
                placeholder="john@example.com"
                name="email"
                onChange={(e) => onChangeHandler(e)}
                className="text-gray-600 dark:text-gray-400 rounded-lg px-3 py-2 border border-neutral-300/80 dark:border-neutral-700/80 focus:outline-none"
              />

              {error.email && (
                <p className=" mt-1 text-xs text-red-700 text-start">
                  {error.email}
                </p>
              )}

              <label
                htmlFor="message"
                className=" mt-4 mb-1 text-black dark:text-white"
              >
                Message
              </label>

              <textarea
                name="message"
                value={data.message}
                autoComplete="off"
                placeholder="Your Message"
                onChange={(e) => onChangeHandler(e)}
                className="text-gray-600 dark:text-gray-400 rounded-lg px-3 py-2 border border-neutral-300/80 dark:border-neutral-700/80 focus:outline-none"
              />

              {error.message && (
                <p className=" mt-1 text-xs text-red-700 text-start">
                  {error.message}
                </p>
              )}

              <motion.button
                whileTap={{ scale: 0.97 }}
                className="mt-6 px-4 py-3 md:px-6 md:py-3 text-sm md:text-base font-medium rounded-lg text-white bg-linear-to-r from-(--purple-800) dark:from-(--purple-700) to-(--purple-500) cursor-pointer"
              >
                Submit
              </motion.button>

              {error.submitError && (
                <p className=" mt-4 text-xs text-red-700 text-center">
                  {error.submitError}
                </p>
              )}
            </form>
          </motion.div>

          <motion.div
            className="w-full"
            // initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="flex items-center gap-2 text-2xl mb-4 font-semibold dark:text-white">
              <BiPaperPlane /> <span>Connect with me</span>
            </h4>

            <div className="flex flex-col gap-4">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                const isClickable = Boolean(item.url);

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="py-3 px-2 sm:px-4 flex items-center gap-2 sm:gap-4 border border-neutral-300/80 dark:border-neutral-700/80 rounded-xl dark:bg-(--purple-950)/70 bg-(--purple-50)/70"
                  >
                    <motion.a
                      href={item.url || undefined}
                      target="_blank"
                      rel={isClickable ? "noopener noreferrer" : undefined}
                      whileHover={{ rotate: 8, scale: 1.08 }}
                      className="p-3 rounded-full bg-(--purple-200) dark:bg-(--purple-800) text-(--purple-700) dark:text-(--purple-300)"
                    >
                      <Icon className="text-[20px]" />
                    </motion.a>

                    <div>
                      <span className="font-semibold dark:text-white ">
                        {item.title}
                      </span>

                      <p className="text-gray-600 dark:text-gray-400 sm:text-sm text-xs">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
