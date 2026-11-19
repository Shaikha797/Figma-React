import { ArrowUpRight, Check } from "lucide-react";
import illustration from "../assets/Group 850(1).png";

function FeatureIcon({ type }) {
  const icons = {
    booking: (
      <>
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16M9 15l2 2 4-4" />
      </>
    ),
    team: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20v-2a6 6 0 0 1 12 0v2M17 8a3 3 0 0 1 0 6m1 2a5 5 0 0 1 3 4" />
      </>
    ),
    payment: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18M7 15h4" />
      </>
    ),
    insights: (
      <>
        <path d="M4 20V11h4v9M10 20V4h4v16M16 20v-9h4v9" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-[18px] h-[18px]"
    >
      {icons[type]}
    </svg>
  );
}

const features = [
  {
    type: "booking",
    title: "Easy Booking Management",
    description: "Accept, assign, and track bookings in real time.",
    purple: true,
  },
  {
    type: "team",
    title: "Service Provider Management",
    description: "Onboard, manage, and monitor your service team.",
    purple: false,
  },
  {
    type: "payment",
    title: "Secure Payments",
    description: "Support multiple payment options with secure transactions.",
    purple: true,
  },
  {
    type: "insights",
    title: "Real-Time Insights",
    description: "Track performance with detailed reports and analytics.",
    purple: false,
  },
];

function PowerfulSolution() {
  return (
    <section className="relative w-full bg-[#F7F2FC] overflow-hidden">
      {/* SOFT AMBIENT RADIAL GLOWS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 right-8 w-80 h-80 rounded-full bg-[#E5D2FA]/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-12 w-72 h-72 rounded-full bg-[#E8D8FA]/50 blur-3xl"
      />

      <div className="relative z-10 max-w-[1198px] mx-auto px-6 md:px-10 lg:px-[88px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          {/* LEFT CONTENT */}
          <div className="md:col-span-6 py-14 md:py-16">
            {/* Small Heading */}
            <p className="font-['Sora'] text-[11px] md:text-[12px] font-normal tracking-[4px] text-[#9E95A8] uppercase mb-3">
              POWERFUL SOLUTION
            </p>

            {/* Main Heading */}
            <h2 className="font-['Sora'] font-bold text-[28px] md:text-[34px] lg:text-[36px] leading-[1.15] text-[#191919]">
              Everything You Need to
              <br />
              Run Your <span className="text-[#8624DD]">Home Service</span>
              <br />
              <span className="text-[#8624DD]">Business</span>
            </h2>

            {/* Description */}
            <p className="font-['Sora'] text-[12px] md:text-[13px] leading-[20px] text-[#6E6776] mt-3.5 max-w-[440px]">
              Manage bookings, service providers, customers, and payments with a
              feature-rich platform designed for home service businesses.
            </p>

            {/* Features */}
            <div className="flex flex-col gap-4 mt-7">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-3.5">
                  {/* Icon */}
                  <div
                    className={`w-[38px] h-[38px] shrink-0 rounded-full flex items-center justify-center text-white shadow-sm ${
                      feature.purple ? "bg-[#8624DD]" : "bg-[#191919]"
                    }`}
                  >
                    <FeatureIcon type={feature.type} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-['Sora'] font-bold text-[13px] md:text-[14px] leading-[18px] text-[#202020]">
                      {feature.title}
                    </h3>

                    <p className="font-['Sora'] text-[11px] leading-[16px] text-[#7A7382] mt-0.5">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <button
              type="button"
              className="mt-8 bg-[#8624DD] hover:bg-[#701BC0] transition-colors text-white rounded-full pl-5 pr-2 py-2 inline-flex items-center gap-3 font-['Sora'] text-[12px] font-semibold cursor-pointer shadow-[0_8px_20px_rgba(134,36,221,0.25)]"
            >
              <span>Explore All Features</span>

              <span className="w-[24px] h-[24px] rounded-full bg-white text-[#8624DD] flex items-center justify-center">
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </span>
            </button>

            {/* Platform Labels */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-7">
              {[
                "Customer App",
                "Service Partner App",
                "Admin Dashboard",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 font-['Sora'] font-medium text-[11px] md:text-[12px] text-[#5C5566]"
                >
                  <Check
                    size={14}
                    strokeWidth={2.5}
                    className="text-[#8624DD]"
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE (Flush to bottom edge) */}
          <div className="md:col-span-6 relative w-full flex items-end justify-center md:justify-end pt-4 md:pt-10">
            {illustration && (
              <img
                src={illustration}
                alt="Home service professional holding a phone"
                className="relative z-10 w-full max-w-[540px] max-h-[550px] h-auto object-contain object-bottom block"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PowerfulSolution;