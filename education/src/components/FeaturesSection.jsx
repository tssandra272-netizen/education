import {
  Award,
  BookOpen,
  Users
} from "lucide-react";

import Reveal from "../components/Reveal";

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

export default function FeaturesSection() {
  return (
    <section
      id="why-us"
      className="section-pad bg-white"
    >

      <div className="container-wide">

        <Reveal className="mx-auto mb-12 max-w-2xl text-center">

          <p className="eyebrow mb-4">
            Why choose us
          </p>

          <h2 className="heading text-4xl md:text-5xl">
            A little learning can lead to{" "}
            <em className="text-wine">
              big things.
            </em>
          </h2>

          <p className="mt-5 text-sm leading-7 text-muted">
            We make learning personal, practical, and full of possibilities.
          </p>

        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.title}
                delay={index * 0.12}
              >

                <article className="h-full rounded-[26px] border border-black/5 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-soft">

                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blush text-wine">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.text}
                  </p>

                </article>

              </Reveal>
            );
          })}

        </div>

      </div>
    </section>
  );
}