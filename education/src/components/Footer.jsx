import { Link } from "react-router-dom";

import {
  ArrowUp,
  GraduationCap,


 
} from "lucide-react";

export default function Footer() {

  return (

    <footer className="bg-[#211c1f] py-10 text-white">

      <div className="container-wide">

        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-8 md:flex-row md:items-center">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-2.5"
          >

            <span className="grid h-9 w-9 place-items-center rounded-full bg-wine">

              <GraduationCap size={19} />

            </span>

            <span className="text-[15px] font-bold">

              edu<span className="text-rose">bloom</span>

            </span>

          </Link>

          {/* Footer Links */}

          <div className="flex flex-wrap gap-6 text-xs text-white/60">

            <Link to="/" className="hover:text-white">
              Home
            </Link>

            <Link to="/about" className="hover:text-white">
              About
            </Link>

            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>

          </div>

          {/* Social Links */}

          <div className="flex gap-4 text-white/70">

          </div>

        </div>

        {/* Copyright */}

        <div className="flex flex-col justify-between gap-4 pt-6 text-[11px] text-white/40 sm:flex-row">

          <p>
            © {new Date().getFullYear()} EduBloom. All rights reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
            }
            className="inline-flex items-center gap-2 hover:text-white"
          >

            Back to top

            <ArrowUp size={13} />

          </button>

        </div>

      </div>

    </footer>

  );

}