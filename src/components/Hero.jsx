import background from "../assets/Purple Technology Icon Network 1.png";
import phoneMockup from "../assets/Free Standing iPhone Duo 1(2).png";

import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const exploreFeatures = () => {
    document.getElementById("features")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      className="
        relative
        w-full
        h-[832px]
        bg-[#8624DD]
        rounded-b-[24px]
        mb-16
      "
    >
      {/* Background Pattern (wrapped so rounded corners stay clipped while bulge extends out) */}
      <div className="absolute inset-0 rounded-b-[24px] overflow-hidden pointer-events-none">
        <img
          src={background}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div
        className="
          absolute
          top-[80px]
          md:top-[132px]
          left-1/2
          -translate-x-1/2
          w-full
          max-w-[661px]
          px-4
          flex
          flex-col
          items-center
          text-center
          gap-[15px]
          z-10
        "
      >
        {/* Small Heading */}
        <p
          className="
            w-full
            font-['Sora']
            font-normal
            text-[12px]
            md:text-[16px]
            leading-[100%]
            tracking-[0.2em]
            text-center
            text-white/60
          "
        >
          HOME SERVICE MANAGEMENT SOFTWARE
        </p>

        {/* Script Heading (added Yellowtail fallback since Rage Italic isn't on Google Fonts) */}
        <h2
          className="
            w-full
            font-['Rage_Italic','Yellowtail',cursive]
            font-normal
            text-[42px]
            md:text-[71.52px]
            leading-[110%]
            tracking-normal
            text-center
            text-[#E5BFFF]
          "
        >
          Launch Your Own
        </h2>

        {/* Main Heading */}
        <h1
          className="
            w-full
            font-['Sora']
            font-semibold
            text-[30px]
            sm:text-[40px]
            md:text-[51.09px]
            leading-[108%]
            text-center
            text-white
          "
        >
          Home Service Business
          <br />
          Platform
        </h1>

        {/* Description */}
        <p
          className="
            w-full
            max-w-[661px]
            font-['Sora']
            font-normal
            text-[12px]
            md:text-[16px]
            leading-[150%]
            tracking-normal
            text-center
            text-white
          "
        >
          Manage bookings, connect customers with service professionals, and
          grow your business with one powerful, fully customizable platform.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-[10px] mt-2">
          {/* Book a Demo Button */}
          <button
            type="button"
            onClick={() => navigate("/book-demo")}
            className="
              h-[36px]
              px-[18px]
              flex
              items-center
              gap-[10px]
              rounded-full
              bg-white
              text-[#8624DD]
              text-[12px]
              font-semibold
              cursor-pointer
              hover:bg-gray-100
              transition
            "
          >
            Book a Demo
            <span
              className="
                flex
                items-center
                justify-center
                w-[22px]
                h-[22px]
                rounded-full
                bg-[#8624DD]
                text-white
              "
            >
              <ArrowUpRight size={15} />
            </span>
          </button>

          {/* Explore Features Button */}
          <button
            type="button"
            onClick={exploreFeatures}
            className="
              h-[36px]
              px-[18px]
              flex
              items-center
              gap-[10px]
              rounded-full
              border
              border-white
              text-white
              text-[12px]
              font-semibold
              cursor-pointer
              hover:bg-white
              hover:text-[#8624DD]
              transition
            "
          >
            Explore Features
            <span
              className="
                flex
                items-center
                justify-center
                w-[22px]
                h-[22px]
                rounded-full
                bg-white
                text-[#8624DD]
              "
            >
              <ArrowUpRight size={15} />
            </span>
          </button>
        </div>
      </div>

      {/* PURPLE BULGE EXTENSION UNDERNEATH DEVICE */}
      <div
        aria-hidden="true"
        className="
          absolute
          -bottom-[32px]
          md:-bottom-[40px]
          left-1/2
          -translate-x-1/2
          w-[92%]
          max-w-[640px]
          h-[33px]
          md:h-[41px]
          z-10
          pointer-events-none
        "
      >
        <svg
          viewBox="0 0 640 42"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0 0 H640 C622 0 614 6 606 18 L595 34 C590 40 584 42 574 42 H66 C56 42 50 40 45 34 L34 18 C26 6 18 0 0 0 Z"
            fill="#8624DD"
          />
        </svg>
      </div>

      {/* Tablet Mockup (Protruding into the bulge) */}
      <img
        src={phoneMockup}
        alt="Homier website and app preview"
        className="
          absolute
          z-20
          -bottom-[30px]
          md:-bottom-[36px]
          left-1/2
          -translate-x-1/2
          w-[685px]
          h-[380px]
          object-contain
          drop-shadow-[0_20px_35px_rgba(35,8,66,0.3)]
          transition-transform
          duration-500
          hover:scale-[1.02]
          max-md:w-[95%]
          max-md:h-auto
        "
      />
    </section>
  );
}

export default Hero;