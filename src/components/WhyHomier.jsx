import allInOneImg from "../assets/Group 829.png";
import customizableImg from "../assets/Group 2210.png";
import streamlinedImg from "../assets/Group 2209.png";
import growthImg from "../assets/Group 2208.png";

const benefits = [
  {
    image: allInOneImg,
    alt: "All-in-One Management",
    title: (
      <>
        All-in-One
        <br />
        Management
      </>
    ),
    description:
      "Manage bookings, service professionals, customers, and payments from one centralized dashboard.",
    bg: "#F3ECFA",
  },
  {
    image: customizableImg,
    alt: "Fully Customizable Platform",
    title: (
      <>
        Fully Customizable
        <br />
        Platform
      </>
    ),
    description:
      "Customize services, workflows, branding, and platform settings to match your business needs.",
    bg: "#ECF5F1",
  },
  {
    image: streamlinedImg,
    alt: "Streamlined Operations",
    title: (
      <>
        Streamlined
        <br />
        Operations
      </>
    ),
    description:
      "Organize appointments, assign jobs, and track service progress with less manual effort.",
    bg: "#F8F3EC",
  },
  {
    image: growthImg,
    alt: "Built for Business Growth",
    title: (
      <>
        Built for Business
        <br />
        Growth
      </>
    ),
    description:
      "Support more bookings, expand your service offerings, and monitor business performance as you grow.",
    bg: "#EEF2FA",
  },
];

function WhyHomier() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1198px] mx-auto px-6 md:px-10 lg:px-[88px]">
        {/* SECTION HEADING */}
        <div className="text-center mb-14 md:mb-16">
          <p className="font-['Sora'] text-[10px] md:text-[11px] tracking-[4px] text-[#A49AAE] uppercase mb-3">
            WHY HOMIER
          </p>

          <h2 className="font-['Sora'] font-bold text-[25px] md:text-[34px] leading-[1.2] text-[#191919]">
            Everything You Need to Grow Your
            <span className="block text-[#8624DD]">
              Home Service Business
            </span>
          </h2>

          <p className="font-['Sora'] text-[11px] md:text-[13px] leading-[21px] text-[#77717D] max-w-[540px] mx-auto mt-3">
            Simplify daily operations, deliver better customer experiences, and
            grow your business with one flexible platform.
          </p>
        </div>

        {/* BENEFIT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-5">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative px-6 pt-14 pb-8 text-center transition-transform duration-300 hover:-translate-y-1"
            >
              {/* SVG CARD SHAPE WITH CONCAVE TOP NOTCH */}
              <svg
                aria-hidden="true"
                viewBox="0 0 280 260"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <path
                  d="
                    M 16 0
                    H 86
                    C 96 0, 102 6, 106 16
                    C 112 31, 125 40, 140 40
                    C 155 40, 168 31, 174 16
                    C 178 6, 184 0, 194 0
                    H 264
                    Q 280 0, 280 16
                    V 244
                    Q 280 260, 264 260
                    H 16
                    Q 0 260, 0 244
                    V 16
                    Q 0 0, 16 0
                    Z
                  "
                  fill={benefit.bg}
                />
              </svg>

              {/* FLOATING WHITE CIRCLE IMAGE BADGE NESTED IN NOTCH */}
              <div className="absolute -top-[26px] left-1/2 -translate-x-1/2 z-10 w-[56px] h-[56px] rounded-full bg-white shadow-[0_6px_18px_rgba(30,15,50,0.07)] flex items-center justify-center p-2.5 overflow-hidden">
                {benefit.image ? (
                  <img
                    src={benefit.image}
                    alt={benefit.alt}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="w-3 h-3 rounded-full bg-[#8624DD]" />
                )}
              </div>

              {/* CARD CONTENT */}
              <div className="relative z-10">
                <h3 className="font-['Sora'] font-bold text-[15px] md:text-[16px] leading-[22px] text-[#202020]">
                  {benefit.title}
                </h3>

                <p className="font-['Sora'] text-[11px] leading-[18px] text-[#77717D] mt-3">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyHomier;