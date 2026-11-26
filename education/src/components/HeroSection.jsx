import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

import {
  ArrowRight,
  Play,
  Sparkles
} from "lucide-react";
j
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-blush pb-20 pt-36 md:pb-28 md:pt-44 ">

      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full border border-rose/20" />

      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full border border-rose/20" />

      <div className="container-wide relative grid items-center gap-12 lg:grid-cols-2">

        <div className="max-w-[620px]">

          <Reveal>
            <div className="eyebrow mb-5 flex items-center gap-2">
              <Sparkles size={13} />
              Your next chapter starts here
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="heading text-5xl md:text-7xl">
              Make room for{" "}
              <em className="text-wine">
                what's possible.
              </em>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-lg text-sm leading-7 text-muted md:text-base">
              Thoughtful learning, inspiring mentors, and practical
              skills to help you grow with confidence.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">

              <Link
                to="/about"
                className="flex items-center gap-3 rounded-full bg-wine px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-ink"
              >
                Discover EduBloom
                <ArrowRight size={16} />
              </Link>

              <a
                href="#why-us"
                className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-4 text-sm font-semibold"
              >
                <Play size={14} />
                Learn more
              </a>

            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap gap-6 text-xs text-muted">
              <span>✓ Learn at your pace</span>
              <span>✓ Expert mentors</span>
              <span>✓ Practical skills</span>
            </div>
          </Reveal>

        </div>

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

            <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full bg-rose/20 blur-2xl" />

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1100&q=85"
              alt="Students learning together"
              className="relative h-[360px] w-full rounded-[34px] border-[9px] border-white object-cover shadow-soft md:h-[490px]"
            />

            <div className="absolute -bottom-5 right-5 rounded-2xl bg-white px-5 py-4 shadow-soft">
              <p className="text-2xl font-bold text-wine">
                Learn.
              </p>
              <p className="text-xs text-muted">
                Grow. Bloom.
              </p>
            </div>

          </motion.div>

        </Reveal>

      </div>
    </section>
  );
}