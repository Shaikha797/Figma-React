function FeatureIcon({ type }) {
  const icons = {
    booking: (
      <path d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13H4V6a1 1 0 0 1 1-1Zm3 9 2 2 5-5" />
    ),
    team: (
      <path d="M16 19v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m6-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6-5a3 3 0 0 1 0 6m2 3a4 4 0 0 1 3 4v1" />
    ),
    payment: (
      <path d="M3 7h18v12H3zM3 11h18M7 15h4" />
    ),
    insights: (
      <path d="M4 20V10h4v10H4Zm6 0V4h4v16h-4Zm6 0v-7h4v7h-4Z" />
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
      className="w-5 h-5"
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

function PowerfulSolution({ illustration }) {
  return (
    <section className="w-full bg-[#FBF5FF] overflow-hidden">
      <div className="mx-auto max-w-[1198px] min-h-[466px] px-6 md:px-10 py-10 md:py-0">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[42px] items-center min-h-[466px]">

          {/* Left Content */}
          <div className="flex flex-col items-start">

            <p className="font-['Sora'] text-[13px] tracking-[4px] font-normal text-[#A49AAE] mb-3">
              POWERFUL SOLUTION
            </p>

            <h2 className="font-['Sora'] font-bold text-[30px] md:text-[34px] leading-[1.15] text-[#171717]">
              Everything You Need to
              <br className="hidden md:block" />
              Run Your <span className="text-[#8624DD]">Home Service</span>
              <br className="hidden md:block" />
              <span className="text-[#8624DD]">Business</span>
            </h2>

            <p className="font-['Sora'] text-[13px] leading-[19px] text-[#77717D] mt-3 max-w-[490px]">
              Manage bookings, service providers, customers, and payments with
              a feature-rich platform designed for home service businesses.
            </p>

            {/* Features */}
            <div className="flex flex-col gap-4 mt-6">

              {features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-3">

                  <div
                    className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-white ${
                      feature.purple ? "bg-[#8624DD]" : "bg-[#202020]"
                    }`}
                  >
                    <FeatureIcon type={feature.type} />
                  </div>

                  <div>
                    <h3 className="font-['Sora'] text-[13px] font-semibold text-[#202020]">
                      {feature.title}
                    </h3>

                    <p className="font-['Sora'] text-[10px] leading-[15px] text-[#88818D]">
                      {feature.description}
                    </p>
                  </div>

                </div>
              ))}

            </div>

            {/* Button */}
            <button className="mt-6 bg-[#8624DD] hover:bg-[#701BC0] text-white rounded-full px-5 py-2.5 flex items-center gap-3 font-['Sora'] text-[12px] font-semibold transition">
              Explore All Features

              <span className="w-5 h-5 rounded-full bg-white text-[#8624DD] flex items-center justify-center text-sm">
                ↗
              </span>
            </button>

            {/* Platform Labels */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6 text-[11px] font-['Sora'] text-[#68616F]">

              {["Customer App", "Service Partner App", "Admin Dashboard"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <span className="text-[#8624DD] text-base">✓</span>
                    {item}
                  </span>
                )
              )}

            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center items-center min-h-[350px] md:min-h-[466px]">

            {illustration && (
              <img
                src={illustration}
                alt="Home service professional using the Homier app"
                className="relative z-10 w-full max-w-[500px] h-auto object-contain"
              />
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

export default PowerfulSolution;