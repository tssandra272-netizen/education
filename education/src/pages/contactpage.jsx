import { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  ArrowRight,
  Leaf
} from "lucide-react";

import { motion } from "framer-motion";
import Reveal from "../components/Reveal.jsx";

export default function Contactpage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  const contactDetails = [
    {
      icon: Mail,
      title: "Email us",
      detail: "hello@edubloom.com"
    },
    {
      icon: Phone,
      title: "Call us",
      detail: "+91 98765 43210"
    },
    {
      icon: MapPin,
      title: "Find us",
      detail: "Kerala, India"
    }
  ];

  return (
    <main className="overflow-hidden bg-[#F7F5E8] text-[#263B30]">

      {/* HERO SECTION */}

      <section className="relative px-6 pb-24 pt-40 md:pt-48">

        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#DCE9D5] blur-3xl opacity-70" />

        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#B7CFB2] blur-3xl opacity-40" />

        <div className="container-wide relative text-center">

          <Reveal>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#285943]/20 bg-[#E5EEDC] px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[#285943]">

              <Sparkles size={14} />

              Let's Connect

            </div>

            <h1 className="heading text-5xl leading-tight text-[#183D2B] md:text-7xl">

              We'd love to{" "}

              <em className="text-[#58845F]">
                hear from you.
              </em>

            </h1>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#687B69] md:text-base">

              Every great journey begins with a conversation.
              Tell us what you're looking for and let's grow together.

            </p>

            <a
              href="#contact-form"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#285943] px-7 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#183D2B]"
            >
              Get in touch
              <ArrowRight size={17} />
            </a>

          </Reveal>

        </div>

      </section>


      {/* CONTACT SECTION */}

      <section
        id="contact-form"
        className="bg-[#FFFDF5] px-6 py-20 md:py-28"
      >

        <div className="container-wide grid items-start gap-14 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <Reveal>

            <div className="max-w-lg">

              <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#58845F]">

                <Leaf size={15} />

                Contact Information

              </div>

              <h2 className="heading text-4xl leading-tight text-[#183D2B] md:text-5xl">

                Let's start a{" "}

                <em className="text-[#58845F]">
                  conversation.
                </em>

              </h2>

              <p className="mt-6 text-sm leading-8 text-[#687B69]">

                Have questions about our learning programs?
                Need guidance choosing the right course?
                We're always happy to help you.

              </p>


              <div className="mt-12 space-y-5">

                {contactDetails.map((item, index) => {

                  const Icon = item.icon;

                  return (

                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-5 rounded-2xl border border-[#285943]/10 bg-[#F7F5E8] p-5 transition"
                    >

                      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#285943] text-white">

                        <Icon size={23} />

                      </div>

                      <div>

                        <p className="text-xs font-semibold uppercase tracking-wider text-[#82917E]">
                          {item.title}
                        </p>

                        <h3 className="mt-1 font-bold text-[#183D2B]">
                          {item.detail}
                        </h3>

                      </div>

                    </motion.div>

                  );

                })}

              </div>

            </div>

          </Reveal>


          {/* RIGHT CONTACT FORM */}

          <Reveal delay={0.2}>

            <div className="relative rounded-[32px] border border-[#285943]/10 bg-[#F7F5E8] p-7 shadow-[0_20px_60px_rgba(40,89,67,0.08)] md:p-10">

              <div className="absolute -right-3 -top-3 grid h-14 w-14 place-items-center rounded-2xl bg-[#285943] text-white shadow-lg">

                <Send size={23} />

              </div>

              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#58845F]">
                Send a message
              </p>

              <h2 className="heading text-3xl text-[#183D2B] md:text-4xl">

                Tell us what's on{" "}

                <em className="text-[#58845F]">
                  your mind.
                </em>

              </h2>

              <p className="mt-4 text-sm leading-7 text-[#687B69]">

                Fill in the details below. We'd love to hear from you.

              </p>


              {submitted ? (

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-10 rounded-2xl bg-[#FFFDF5] p-10 text-center"
                >

                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#E5EEDC] text-[#285943]">

                    <Leaf size={30} />

                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-[#285943]">
                    Thank you!
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#687B69]">
                    Your form was submitted successfully.
                  </p>

                </motion.div>

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-[#263B30]">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      required
                      className="w-full rounded-xl border border-[#285943]/15 bg-[#FFFDF5] px-5 py-4 text-sm text-[#263B30] outline-none transition placeholder:text-[#A0AA9A] focus:border-[#285943] focus:ring-2 focus:ring-[#285943]/10"
                    />

                  </div>


                  <div>

                    <label className="mb-2 block text-sm font-semibold text-[#263B30]">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="w-full rounded-xl border border-[#285943]/15 bg-[#FFFDF5] px-5 py-4 text-sm text-[#263B30] outline-none transition placeholder:text-[#A0AA9A] focus:border-[#285943] focus:ring-2 focus:ring-[#285943]/10"
                    />

                  </div>


                  <div>

                    <label className="mb-2 block text-sm font-semibold text-[#263B30]">
                      Subject
                    </label>

                    <input
                      type="text"
                      placeholder="What is this about?"
                      required
                      className="w-full rounded-xl border border-[#285943]/15 bg-[#FFFDF5] px-5 py-4 text-sm text-[#263B30] outline-none transition placeholder:text-[#A0AA9A] focus:border-[#285943] focus:ring-2 focus:ring-[#285943]/10"
                    />

                  </div>


                  <div>

                    <label className="mb-2 block text-sm font-semibold text-[#263B30]">
                      Message
                    </label>

                    <textarea
                      rows="5"
                      placeholder="Write your message here..."
                      required
                      className="w-full resize-none rounded-xl border border-[#285943]/15 bg-[#FFFDF5] px-5 py-4 text-sm text-[#263B30] outline-none transition placeholder:text-[#A0AA9A] focus:border-[#285943] focus:ring-2 focus:ring-[#285943]/10"
                    />

                  </div>


                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#285943] px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#183D2B]"
                  >

                    Send Message

                    <Send
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />

                  </button>

                </form>

              )}

            </div>

          </Reveal>

        </div>

      </section>


      {/* BOTTOM CTA */}

      <section className="bg-[#183D2B] px-6 py-24 text-center text-[#FFFDF5]">

        <Reveal>

          <div className="mb-5 flex justify-center">

            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-[#C6DDBD]">

              <Leaf size={27} />

            </div>

          </div>

          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#C6DDBD]">
            Your journey matters
          </p>

          <h2 className="heading text-4xl md:text-6xl">

            Let's make something{" "}

            <em className="text-[#C6DDBD]">
              wonderful.
            </em>

          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/60">

            Your next chapter starts with one simple conversation.

          </p>

        </Reveal>

      </section>

    </main>
  );
}