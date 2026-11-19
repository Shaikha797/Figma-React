const steps = [
  {
    title: "Book a Service",
    description:
      "Customers select a service, choose a time slot, and confirm their booking.",
    icon: "calendar",
    purple: true,
    iconPosition: "top",
  },
  {
    title: "Assign a Professional",
    description:
      "Manage service requests and assign the right professional for the job.",
    icon: "user",
    purple: false,
    iconPosition: "bottom",
  },
  {
    title: "Complete the Service",
    description:
      "Providers deliver the service and update the booking status.",
    icon: "tool",
    purple: true,
    iconPosition: "top",
  },
  {
    title: "Track Your Business",
    description:
      "Monitor bookings, payments, and performance from your admin dashboard.",
    icon: "chart",
    purple: false,
    iconPosition: "bottom",
  },
];

function StepIcon({ type }) {
  const paths = {
    calendar: (
      <>
        <rect x="4" y="5" width="16" height="16" rx="2.5" />
        <path d="M8 3v4M16 3v4M4 10h16M9.5 15l2 2 3.5-3.5" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8.5" r="3.2" />
        <path d="M5.5 19.5c0-3.2 2.9-5.5 6.5-5.5s6.5 2.3 6.5 5.5" />
      </>
    ),
    tool: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
    chart: (
      <>
        <path d="M6 19v-6" />
        <path d="M12 19V7" />
        <path d="M18 19v-9" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-[22px] h-[22px]"
    >
      {paths[type]}
    </svg>
  );
}

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full bg-white px-6 md:px-10 lg:px-[88px] pt-14 md:pt-16 pb-8 md:pb-10"
    >
      <div className="max-w-[1198px] mx-auto">
        {/* HEADING */}
        <div className="text-center mb-10 md:mb-12">
          <p className="font-['Sora'] text-[10px] md:text-[11px] tracking-[4px] text-[#A49AAE] uppercase mb-2.5">
            HOW IT WORKS
          </p>

          <h2 className="font-['Sora'] font-bold text-[26px] md:text-[34px] leading-[1.2] text-[#191919]">
            From Booking to Completion,
            <span className="block text-[#8624DD]">Made Simple</span>
          </h2>
        </div>

        {/* STEPS GRID */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* CONNECTING WAVE CURVE (DESKTOP) */}
          <svg
            aria-hidden="true"
            className="hidden lg:block absolute top-[18px] -left-3 w-[calc(100%+24px)] h-[126px] pointer-events-none"
            viewBox="0 0 1100 126"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="howItWorksWave"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#EFE4FC" stopOpacity="0.4" />
                <stop offset="15%" stopColor="#EFE4FC" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#EFE4FC" stopOpacity="0.95" />
                <stop offset="85%" stopColor="#EFE4FC" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#EFE4FC" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d="M 8 106 C 132 82, 224 28, 325 28 C 426 28, 515 106, 605 106 C 695 106, 785 28, 875 28 C 955 28, 1022 74, 1092 106"
              stroke="url(#howItWorksWave)"
              strokeWidth="12"
              strokeLinecap="round"
            />
          </svg>

          {steps.map((step) => (
            <div
              key={step.title}
              className="relative z-10 flex flex-col justify-between items-start min-h-[146px]"
            >
              {/* TOP ICON (Steps 1 & 3) */}
              {step.iconPosition === "top" && (
                <div
                  className={`w-[50px] h-[50px] rounded-full flex items-center justify-center text-white mb-4 shadow-[0_8px_20px_rgba(0,0,0,0.08)] ${
                    step.purple ? "bg-[#8624DD]" : "bg-[#191919]"
                  }`}
                >
                  <StepIcon type={step.icon} />
                </div>
              )}

              {/* TRANSPARENT TEXT BLOCK OVER WAVE */}
              <div className="bg-transparent py-0.5">
                <h3 className="font-['Sora'] font-bold text-[14px] md:text-[15px] leading-[20px] text-[#202020]">
                  {step.title}
                </h3>

                <p className="font-['Sora'] text-[11px] leading-[17px] text-[#77717D] mt-1.5 max-w-[215px]">
                  {step.description}
                </p>
              </div>

              {/* BOTTOM ICON (Steps 2 & 4) */}
              {step.iconPosition === "bottom" && (
                <div
                  className={`w-[50px] h-[50px] rounded-full flex items-center justify-center text-white mt-4 shadow-[0_8px_20px_rgba(0,0,0,0.08)] ${
                    step.purple ? "bg-[#8624DD]" : "bg-[#191919]"
                  }`}
                >
                  <StepIcon type={step.icon} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* BOTTOM DIVIDER */}
        <div className="border-t border-[#EFECEF] mt-10" />
      </div>
    </section>
  );
}

export default HowItWorks;