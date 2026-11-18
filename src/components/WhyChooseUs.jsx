const features = [
  {
    title: "All-in-One Platform",
    description:
      "Customer app, service partner app and admin dashboard in a single solution.",
    icon: "📱",
    bg: "bg-[#F5F0FC]",
    iconBg: "bg-[#EAE0FA]",
  },
  {
    title: "Grow Your Business",
    description:
      "Manage bookings, track performance and increase revenue with powerful tools.",
    icon: "📈",
    bg: "bg-[#F0F7F4]",
    iconBg: "bg-[#DDEFE8]",
  },
  {
    title: "Fully Customizable",
    description:
      "Manage bookings, track performance and increase revenue with powerful tools.",
    icon: "⚙️",
    bg: "bg-[#FAF6F1]",
    iconBg: "bg-[#F8EBDD]",
  },
  {
    title: "Reliable & Scalable",
    description:
      "Secure, stable and built to support your business as you grow.",
    icon: "🛡️",
    bg: "bg-[#F0F3FC]",
    iconBg: "bg-[#DCE4FA]",
  },
];

function WhyChooseUs() {
  return (
    <section className="w-full px-5 py-12 md:py-16">
      <div className="mx-auto max-w-[1198px]">

        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="font-['Sora'] font-bold text-[28px] md:text-[34px] leading-tight text-[#191919]">
            Why Businesses Choose{" "}
            <span className="text-[#8624DD]">Homier</span>
          </h2>

          <p className="mt-1 font-['Sora'] text-[14px] md:text-[16px] font-normal leading-[22px] text-[#777777]">
            A complete, customizable platform to manage your home service business
            <br className="hidden md:block" />
            with ease and efficiency.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bg} rounded-[16px] min-h-[223px] p-5 flex flex-col`}
            >
              {/* Icon */}
              <div className="flex justify-center items-center h-[125px]">
                <div
                  className={`${feature.iconBg} w-[90px] h-[90px] rounded-full flex items-center justify-center`}
                >
                  <span className="text-[48px]">{feature.icon}</span>
                </div>
              </div>

              {/* Card Content */}
              <h3 className="font-['Sora'] font-semibold text-[14px] text-[#202020] mb-1">
                {feature.title}
              </h3>

              <p className="font-['Sora'] font-normal text-[11px] leading-[15px] text-[#777777]">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;