import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

export default function CTASection() {
  return (
    <section className="bg-ink py-20 text-white">

      <div className="container-wide flex flex-col justify-between gap-8 md:flex-row md:items-center">

        <Reveal>

          <p className="eyebrow mb-4 !text-rose">
            Start your journey
          </p>

          <h2 className="heading text-4xl md:text-5xl">
            Your future starts{" "}
            <em className="text-rose">
              today.
            </em>
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-6 text-white/60">
            Have a question or want to learn more?
            We'd love to hear from you.
          </p>

        </Reveal>

        <Reveal delay={0.2}>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold text-ink transition hover:bg-rose"
          >
            Contact us
            <ArrowRight size={16} />
          </Link>

        </Reveal>

      </div>
    </section>
  );
}