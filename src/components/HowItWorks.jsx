const steps = [
  {
    number: "01",
    title: "Book a Service",
    description:
      "Customers select a service, choose a time slot, and confirm their booking.",
    icon: "▣",
    purple: true,
    iconFirst: true,
  },
  {
    number: "02",
    title: "Assign a Professional",
    description:
      "Manage service requests and assign the right professional for the job.",
    icon: "♟",
    purple: false,
    iconFirst: false,
  },
  {
    number: "03",
    title: "Complete the Service",
    description:
      "Providers deliver the service and update the booking status.",
    icon: "🔧",
    purple: true,
    iconFirst: true,
  },
  {
    number: "04",
    title: "Track Your Business",
    description:
      "Monitor bookings, payments, and performance from your admin dashboard.",
    icon: "▥",
    purple: false,
    iconFirst: false,
  },
];

const solutions = [
  {
    title: "Home Cleaning",
    description:
      "Manage cleaning bookings, schedules and service teams.",
    icon: "🧹",
    symbol: "♟",
    bg: "bg-[#F6F0FC]",
  },
  {
    title: "Electrical Services",
    description:
      "Coordinate electrical service requests, jobs and professionals.",
    icon: "💡",
    symbol: "ϟ",
    bg: "bg-[#EFF7F3]",
  },
  {
    title: "Plumbing",
    description:
      "Manage plumbing jobs, appointments and service professionals.",
    icon: "🔧",
    symbol: "🔧",
    bg: "bg-[#FAF6F1]",
  },
];

function HowItWorks() {
  return (
    <section className="w-full bg-white px-5 py-16">
      <div className="max-w-[1198px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="font-['Sora'] text-[13px] tracking-[4px] text-[#A5A5A5]">
            HOW IT WORKS
          </p>

          <h2 className="font-['Sora'] font-bold text-[28px] md:text-[34px] leading-[1.1] mt-3 text-[#191919]">
            From Booking to Completion,
            <br />
            <span className="text-[#8624DD]">Made Simple</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5">

          {/* Connecting line */}
          <svg
            className="hidden lg:block absolute top-[75px] left-0 w-full h-[100px] pointer-events-none"
            viewBox="0 0 1198 100"
            preserveAspectRatio="none"
          >
            <path
              d="M10 70 C150 35 200 20 300 45 S500 100 600 60 S800 25 900 45 S1080 90 1188 65"
              stroke="#F2E5FF"
              strokeWidth="15"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative z-10 flex flex-col items-start"
            >
              {/* Icon first for alternating layout */}
              {step.iconFirst && (
                <div
                  className={`w-[46px] h-[46px] rounded-full flex items-center justify-center text-white text-[22px] mb-4 ${
                    step.purple ? "bg-[#8624DD]" : "bg-[#191919]"
                  }`}
                >
                  {step.icon}
                </div>
              )}

              <h3 className="font-['Sora'] font-semibold text-[13px] text-[#202020]">
                {step.title}
              </h3>

              <p className="font-['Sora'] text-[11px] leading-[15px] text-[#777777] max-w-[180px] mt-1">
                {step.description}
              </p>

              {!step.iconFirst && (
                <div
                  className={`w-[46px] h-[46px] rounded-full flex items-center justify-center text-white text-[22px] mt-4 ${
                    step.purple ? "bg-[#8624DD]" : "bg-[#191919]"
                  }`}
                >
                  {step.icon}
                </div>
              )}
            </div>
          ))}

        </div>

        {/* Divider */}
        <div className="border-t border-[#EEEEEE] mt-16 mb-10" />

      </div>
    </section>
  );
}

function OurSolutions() {
  return (
    <section className="w-full bg-white px-5 pb-16">
      <div className="max-w-[1198px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-8">
          <p className="font-['Sora'] text-[13px] tracking-[4px] text-[#A5A5A5]">
            OUR SOLUTIONS
          </p>

          <h2 className="font-['Sora'] font-bold text-[28px] md:text-[34px] leading-tight mt-3 text-[#191919]">
            One Platform.{" "}
            <span className="text-[#8624DD]">
              Every Home Service.
            </span>
          </h2>

          <p className="font-['Sora'] text-[14px] md:text-[15px] leading-[22px] text-[#777777] mt-2 max-w-[600px] mx-auto">
            Manage diverse home services through one customizable platform
            built to simplify bookings and service operations.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {solutions.map((solution) => (
            <div
              key={solution.title}
              className={`${solution.bg} rounded-[15px] p-5 min-h-[260px]`}
            >
              {/* Illustration placeholder */}
              <div className="relative h-[125px] flex items-center justify-center">
                <div className="absolute w-[110px] h-[110px] rounded-full bg-white/70" />

                <span className="relative text-[76px]">
                  {solution.icon}
                </span>

                <span className="absolute bottom-3 left-[22%] w-[48px] h-[48px] rounded-full bg-white shadow-sm flex items-center justify-center text-[24px] text-[#8624DD]">
                  {solution.symbol}
                </span>
              </div>

              {/* Card content */}
              <h3 className="font-['Sora'] font-semibold text-[13px] text-[#202020] mt-2">
                {solution.title}
              </h3>

              <p className="font-['Sora'] text-[11px] leading-[15px] text-[#777777] mt-1">
                {solution.description}
              </p>

              <button className="font-['Sora'] text-[10px] font-medium text-[#8624DD] mt-2">
                Explore solution ↗
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

function HowItWorksAndSolutions() {
  return (
    <>
      <HowItWorks />
      <OurSolutions />
    </>
  );
}

export default HowItWorksAndSolutions;