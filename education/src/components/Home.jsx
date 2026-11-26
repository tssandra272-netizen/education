
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

import {
  ArrowRight,
  Award,
  BookOpen,
  Play,
  Sparkles,
  Users
} from "lucide-react";

import { Link } from "react-router-dom";

const features = [
  {
    icon: BookOpen,
    title: "Learn by doing",
    text: "Practical lessons built around real-world skills and meaningful projects."
  },
  {
    icon: Users,
    title: "Expert mentors",
    text: "Get support and guidance from mentors who want to see you succeed."
  },
  {
    icon: Award,
    title: "Achieve your goals",
    text: "Build confidence, celebrate progress, and show what you can do."
  }
];

export default function Home() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-purple-50 pb-20 pt-36 md:pb-28 md:pt-44">

        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full border border-purple-200/60" />

        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full border border-purple-200/60" />

        <div className="container-wide relative grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="max-w-[620px]">

            <Reveal>
              <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-purple-700">
                <Sparkles size={15} className="text-violet-500" />
                Your next chapter starts here
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-5xl font-bold text-gray-900 md:text-7xl">
                Make room for{" "}
                <em className="not-italic text-purple-700">
                  what's possible.
                </em>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-lg text-sm leading-7 text-gray-600 md:text-base">
                Thoughtful learning, inspiring mentors, and practical
                skills to help you grow with confidence.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">

                <Link
                  to="/about"
                  className="flex items-center gap-3 rounded-full bg-purple-700 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-purple-900"
                >
                  Discover EduBloom
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="#why-us"
                  className="flex items-center gap-2 rounded-full border border-purple-200 bg-white px-5 py-4 text-sm font-semibold text-purple-900 transition hover:bg-purple-100"
                >
                  <Play size={14} className="text-purple-700" />
                  Learn more
                </a>

              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-6 text-xs text-gray-600">
                <span>✓ Learn at your pace</span>
                <span>✓ Expert mentors</span>
                <span>✓ Practical skills</span>
              </div>
            </Reveal>

          </div>

          {/* RIGHT IMAGE */}
          <Reveal delay={0.2} y={40}>
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >

              <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full bg-purple-300/50 blur-2xl" />

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1100&q=85"
                alt="Students learning together"
                className="relative h-[360px] w-full rounded-[34px] border-[9px] border-white object-cover shadow-xl md:h-[490px]"
              />

              <div className="absolute -bottom-5 right-5 rounded-2xl border border-purple-100 bg-white px-5 py-4 shadow-xl">
                <p className="text-2xl font-bold text-purple-700">
                  Learn.
                </p>
                <p className="text-xs text-gray-500">
                  Grow. Bloom.
                </p>
              </div>

            </motion.div>
          </Reveal>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="why-us" className="bg-white py-20 md:py-28">

        <div className="container-wide">

          <Reveal className="mx-auto mb-12 max-w-2xl text-center">

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-purple-700">
              Why choose us
            </p>

            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              A little learning can lead to{" "}
              <em className="not-italic text-purple-700">
                big things.
              </em>
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-600">
              We make learning personal, practical, and full of possibilities.
            </p>

          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.12}>

                  <article className="h-full rounded-[26px] border border-purple-100 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-purple-100 text-purple-700">
                      <Icon size={25} />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {item.text}
                    </p>

                  </article>

                </Reveal>
              );
            })}

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-purple-900 py-20 text-white">

        <div className="container-wide flex flex-col justify-between gap-8 md:flex-row md:items-center">

          <Reveal>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-purple-200">
              Start your journey
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Your future starts{" "}
              <em className="not-italic text-purple-300">
                today.
              </em>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-white/70">
              Have a question or want to learn more?
              We'd love to hear from you.
            </p>

          </Reveal>

          <Reveal delay={0.2}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold text-purple-800 transition hover:-translate-y-1 hover:bg-purple-100"
            >
              Contact us
              <ArrowRight size={16} />
            </Link>
          </Reveal>

        </div>
      </section>

    </main>
  );
}
