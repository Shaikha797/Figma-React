import { ArrowUpRight } from "lucide-react";
import cleaning from "../assets/i.png";
import elect from "../assets/ggg.png";
import plum from "../assets/Group 837.png";
import ac from "../assets/Group 858.png";
import home from "../assets/Group 859.png";

const solutions = [
  {
    title: "Home Cleaning",
    description:
      "Manage cleaning bookings, schedules and service teams.",
    image: cleaning,
    bg: "#F5F0FC",
    layout: "small",
  },
  {
    title: "Electrical Services",
    description:
      "Coordinate electricians, service requests and job status.",
    image: elect,
    bg: "#F0F7F4",
    layout: "small",
  },
  {
    title: "Plumbing",
    description:
      "Organize plumbing jobs, appointments and assignments.",
    image: plum,
    bg: "#FAF6F1",
    layout: "small",
  },
  {
    title: "AC & Appliance Repair",
    description:
      "Schedule maintenance visits and manage repair requests.",
    image: ac,
    bg: "#F9F0F0",
    layout: "small",
  },
  {
    title: "Home Maintenance",
    subtitle: "& Handyman",
    description:
      "Manage home repairs, installations, and routine maintenance with ease. Schedule jobs, assign skilled professionals, track service progress, and keep every task organized from one platform.",
    image: home,
    bg: "#F0F3FC",
    layout: "large",
  },
];

function OurSolutions() {
  return (
    <section
      id="solutions"
      className="w-full bg-white pt-6 md:pt-8 pb-14 md:pb-20"
    >
      <div className="max-w-[1198px] mx-auto px-6 md:px-10 lg:px-[88px]">
        {/* SECTION HEADING */}
        <div className="text-center mb-10 md:mb-12">
          <p className="font-['Sora'] text-[10px] md:text-[11px] tracking-[4px] text-[#A49AAE] uppercase mb-2.5">
            OUR SOLUTIONS
          </p>

          <h2 className="font-['Sora'] font-bold text-[25px] md:text-[34px] leading-[1.2] text-[#191919]">
            One Platform.{" "}
            <span className="text-[#8624DD]">Every Home Service.</span>
          </h2>

          <p className="font-['Sora'] text-[11px] md:text-[13px] leading-[20px] text-[#77717D] max-w-[490px] mx-auto mt-2.5">
            Manage diverse home services through one customizable platform built
            to simplify bookings and service operations.
          </p>
        </div>

        {/* SOLUTION CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {solutions.map((solution) => {
            const isLarge = solution.layout === "large";

            return (
              <div
                key={solution.title}
                className={`
                  group relative overflow-hidden rounded-[16px]
                  p-6 md:p-7 min-h-[260px] md:min-h-[275px]
                  flex flex-col justify-between
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.05)]
                  ${isLarge ? "sm:col-span-2 lg:col-span-4 lg:flex-row lg:items-center" : "lg:col-span-2"}
                `}
                style={{ backgroundColor: solution.bg }}
              >
                {/* IMAGE */}
                <div
                  className={`
                    flex items-center justify-center
                    ${
                      isLarge
                        ? "order-1 lg:order-2 lg:w-[46%] h-[175px] md:h-[215px] mb-4 lg:mb-0"
                        : "w-full h-[140px] md:h-[150px] mb-3"
                    }
                  `}
                >
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className={`
                      object-contain transition-transform duration-300 group-hover:scale-105
                      ${isLarge ? "w-full h-full max-w-[240px]" : "w-full h-full max-w-[175px]"}
                    `}
                  />
                </div>

                {/* TEXT */}
                <div
                  className={`
                    relative z-10 text-left
                    ${isLarge ? "order-2 lg:order-1 lg:w-[54%] lg:pr-4" : ""}
                  `}
                >
                  <h3 className="font-['Sora'] font-bold text-[15px] md:text-[16px] text-[#202020] leading-[21px]">
                    {solution.title}
                    {solution.subtitle && (
                      <>
                        <br />
                        {solution.subtitle}
                      </>
                    )}
                  </h3>

                  <p
                    className={`
                      font-['Sora'] text-[11px] leading-[17px] text-[#77717D] mt-2
                      ${isLarge ? "max-w-[310px]" : "max-w-[235px]"}
                    `}
                  >
                    {solution.description}
                  </p>

                  <a
                    href="#solution"
                    className="inline-flex items-center gap-1.5 font-['Sora'] text-[11px] font-semibold text-[#8624DD] mt-3.5 group/link"
                  >
                    <span className="underline underline-offset-2">
                      Explore solution
                    </span>
                    <span className="w-[16px] h-[16px] rounded-full bg-[#8624DD] text-white flex items-center justify-center transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                      <ArrowUpRight size={10} strokeWidth={2.5} />
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OurSolutions;