
import {
  BookOpenCheck,
  Check,
  HeartHandshake,
  Lightbulb,
  Target
} from "lucide-react";

import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";

const values = [
  {
    icon: HeartHandshake,
    title: "People first",
    text: "Every learner deserves encouragement, respect, and a place to belong."
  },
  {
    icon: Target,
    title: "Purposeful learning",
    text: "We focus on useful knowledge you can take beyond the classroom."
  },
  {
    icon: Lightbulb,
    title: "Stay curious",
    text: "We celebrate questions, fresh ideas, and continuous growth."
  }
];

export default function About() {
  return (
    <main className="pt-28">

      {/* ABOUT HERO */}
      <section className="bg-pink-50 py-20 md:py-28">
        <div className="container-wide text-center">
          <Reveal>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-pink-600">
              A little about us
            </p>

            <h1 className="mx-auto max-w-4xl text-5xl font-bold text-gray-800 md:text-7xl">
              Learning should open{" "}
              <em className="not-italic text-pink-600">
                doors.
              </em>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
              We make meaningful education more welcoming,
              practical, and accessible for everyone.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2">

          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85"
              alt="Students collaborating"
              className="h-[350px] w-full rounded-[30px] object-cover shadow-lg md:h-[440px]"
            />
          </Reveal>

          <div>
            <Reveal>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-pink-600">
                Our story
              </p>

              <h2 className="text-4xl font-bold text-gray-800 md:text-5xl">
                Helping potential find its{" "}
                <em className="not-italic text-pink-600">
                  path.
                </em>
              </h2>

              <p className="mt-6 text-sm leading-7 text-gray-500">
                EduBloom began with a simple belief:
                education is most powerful when people can
                connect what they learn with what they want
                to achieve.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                We bring together thoughtful resources,
                practical experiences, and a supportive
                learning community.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-7 space-y-4">
                {[
                  "A welcoming space for every learner",
                  "Practical skills for everyday opportunities",
                  "Encouragement at every stage"
                ].map((text) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 text-sm font-semibold text-gray-700"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-pink-600 text-white">
                      <Check size={14} />
                    </span>
                    {text}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-pink-50 py-20 md:py-28">
        <div className="container-wide">

          <Reveal className="mb-12 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-pink-600">
              What guides us
            </p>

            <h2 className="text-4xl font-bold text-gray-800 md:text-5xl">
              Our values,{" "}
              <em className="not-italic text-pink-600">
                in action.
              </em>
            </h2>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.12}
                >
                  <article className="h-full rounded-[26px] border border-pink-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-pink-100 text-pink-600">
                      <Icon size={25} />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-gray-800">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {item.text}
                    </p>

                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-pink-700 py-16 text-center text-white">
        <Reveal className="container-wide">

          <BookOpenCheck
            className="mx-auto mb-5 text-pink-200"
            size={32}
          />

          <h2 className="text-4xl font-bold md:text-5xl">
            Grow into your next chapter.
          </h2>

          <p className="mt-4 text-sm text-white/80">
            We'd love to be part of your learning journey.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-4 text-sm font-bold text-pink-700 transition duration-300 hover:bg-pink-100 hover:-translate-y-1"
          >
            Get in touch
          </Link>

        </Reveal>
      </section>

    </main>
  );
}
