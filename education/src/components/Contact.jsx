import { useState } from "react";

import {
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send
} from "lucide-react";

import Reveal from "../components/Reveal.jsx";

export default function Contact() {

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {

    event.preventDefault();

    setSubmitted(true);

  }

  return (

    <main className="min-h-screen bg-blush pb-20 pt-36 md:pt-44">

      <div className="container-wide">

        {/* CONTACT HEADING */}

        <Reveal className="mb-12 max-w-2xl">

          <p className="eyebrow mb-5">

            We're happy to help

          </p>

          <h1 className="heading text-5xl md:text-7xl">

            Let's start a{" "}

            <em className="text-wine">
              conversation.
            </em>

          </h1>

          <p className="mt-6 text-sm leading-7 text-muted">

            Have a question? Send us a message and
            our team will be happy to help.

          </p>

        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">

          {/* CONTACT DETAILS */}

          <Reveal>

            <aside className="rounded-[26px] bg-ink p-7 text-white md:p-9">

              <p className="eyebrow !text-rose">

                Contact details

              </p>

              <h2 className="heading mt-3 text-3xl">

                We're here for you.

              </h2>

              <div className="mt-9 space-y-7">

                {/* EMAIL */}

                <div className="flex gap-4">

                  <Mail className="shrink-0 text-rose" />

                  <div>

                    <p className="text-xs text-white/50">
                      Email us
                    </p>

                    <a
                      href="mailto:hello@edubloom.com"
                      className="text-sm font-semibold hover:text-rose"
                    >
                      hello@edubloom.com
                    </a>

                  </div>

                </div>

                {/* PHONE */}

                <div className="flex gap-4">

                  <Phone className="shrink-0 text-rose" />

                  <div>

                    <p className="text-xs text-white/50">
                      Call us
                    </p>

                    <a
                      href="tel:+910000000000"
                      className="text-sm font-semibold hover:text-rose"
                    >
                      +91 00000 00000
                    </a>

                  </div>

                </div>

                {/* LOCATION */}

                <div className="flex gap-4">

                  <MapPin className="shrink-0 text-rose" />

                  <div>

                    <p className="text-xs text-white/50">
                      Location
                    </p>

                    <p className="text-sm font-semibold">
                      Kerala, India
                    </p>

                  </div>

                </div>

              </div>

            </aside>

          </Reveal>

          {/* CONTACT FORM */}

          <Reveal delay={0.15}>

            <form
              onSubmit={handleSubmit}
              className="rounded-[26px] bg-white p-6 shadow-soft md:p-9"
            >

              <h2 className="heading text-3xl">

                Send us a message

              </h2>

              <p className="mt-2 text-sm text-muted">

                Fill in the form and we'll get back to you.

              </p>

              {submitted ? (

                <div className="mt-8 rounded-2xl bg-green-50 p-7 text-center">

                  <CheckCircle2
                    className="mx-auto text-green-700"
                    size={36}
                  />

                  <h3 className="mt-3 font-bold text-green-900">

                    Thank you!

                  </h3>

                  <p className="mt-2 text-sm text-green-800">

                    Your message was submitted in this frontend demo.

                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm font-bold text-wine"
                  >

                    Send another message

                  </button>

                </div>

              ) : (

                <div className="mt-7 space-y-5">

                  {/* NAME AND EMAIL */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <label className="block text-xs font-semibold">

                      Your name

                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        className="form-field"
                      />

                    </label>

                    <label className="block text-xs font-semibold">

                      Email address

                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        className="form-field"
                      />

                    </label>

                  </div>

                  {/* SUBJECT */}

                  <label className="block text-xs font-semibold">

                    Subject

                    <input
                      required
                      name="subject"
                      type="text"
                      placeholder="How can we help?"
                      className="form-field"
                    />

                  </label>

                  {/* MESSAGE */}

                  <label className="block text-xs font-semibold">

                    Message

                    <textarea
                      required
                      name="message"
                      rows="5"
                      placeholder="Write your message..."
                      className="form-field resize-none"
                    />

                  </label>

                  {/* SUBMIT BUTTON */}

                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 rounded-full bg-wine px-7 py-4 text-sm font-semibold text-white transition hover:bg-ink"
                  >

                    Send message

                    <Send size={15} />

                  </button>

                </div>

              )}

            </form>

          </Reveal>

        </div>

      </div>

    </main>

  );

}