import ls from "../assets/fls.png";

import {
  LayoutDashboard,
  CalendarCheck,
  Users,
  ChartNoAxesColumnIncreasing,
  ArrowUpRight,
} from "lucide-react";

const platformFeatures = [
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    description: "Manage your entire operation from one place.",
    purple: true,
  },
  {
    icon: CalendarCheck,
    title: "Booking Management",
    description: "View, schedule, and track service requests.",
    purple: false,
  },
  {
    icon: Users,
    title: "Service Provider App",
    description: "Help professionals manage jobs and appointments.",
    purple: true,
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    title: "Reports & Analytics",
    description: "Track revenue, bookings, and business growth.",
    purple: false,
  },
];

function HomierPlatform() {
  return (
    <section className="relative w-full bg-[#F7F2FC] overflow-hidden py-16 lg:py-0 lg:h-[760px] xl:h-[812px] flex items-center">
      {/* SOFT AMBIENT LAVENDER GLOWS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 right-12 w-96 h-96 rounded-full bg-[#E5D2FA]/55 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-16 w-80 h-80 rounded-full bg-[#E8D8FA]/50 blur-3xl"
      />

      {/* MAIN CONTAINER (LEFT CONTENT) */}
      <div className="relative z-10 w-full max-w-[1198px] mx-auto px-6 md:px-10 lg:px-[88px]">
        <div className="w-full lg:w-[48%]">
          {/* Small Heading */}
          <p className="font-['Sora'] text-[10px] md:text-[11px] tracking-[4px] text-[#A49AAE] uppercase mb-3">
            THE HOMIER PLATFORM
          </p>

          {/* Main Heading */}
          <h2 className="font-['Sora'] font-bold text-[26px] md:text-[32px] lg:text-[34px] leading-[1.18] text-[#191919]">
            Everything You Need to
            <br />
            Manage Your <span className="text-[#8624DD]">Home</span>
            <br />
            <span className="text-[#8624DD]">Service Business</span>
          </h2>

          {/* Description */}
          <p className="font-['Sora'] text-[12px] md:text-[13px] leading-[20px] text-[#6E6776] mt-3.5 max-w-[400px]">
            Manage bookings, coordinate service professionals, track payments,
            and monitor your business performance all from one powerful
            platform.
          </p>

          {/* FEATURES */}
          <div className="flex flex-col gap-4 mt-7">
            {platformFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="flex items-center gap-3.5">
                  {/* Feature Icon */}
                  <div
                    className={`w-[38px] h-[38px] shrink-0 rounded-full flex items-center justify-center text-white shadow-sm ${
                      feature.purple ? "bg-[#8624DD]" : "bg-[#191919]"
                    }`}
                  >
                    <Icon size={18} strokeWidth={2} />
                  </div>

                  {/* Feature Text */}
                  <div>
                    <h3 className="font-['Sora'] font-bold text-[13px] md:text-[14px] leading-[18px] text-[#202020]">
                      {feature.title}
                    </h3>

                    <p className="font-['Sora'] text-[11px] leading-[16px] text-[#7A7382] mt-0.5">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* EXPLORE PLATFORM BUTTON */}
          <button
            type="button"
            className="mt-8 bg-[#8624DD] hover:bg-[#701BC0] transition-colors text-white rounded-full pl-5 pr-2 py-2 inline-flex items-center gap-3 font-['Sora'] text-[12px] font-semibold cursor-pointer shadow-[0_8px_20px_rgba(134,36,221,0.25)]"
          >
            <span>Explore Platform</span>

            <span className="w-[24px] h-[24px] rounded-full bg-white text-[#8624DD] flex items-center justify-center">
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </span>
          </button>
        </div>

        {/* MOBILE / TABLET IMAGE */}
        <div className="mt-10 lg:hidden flex justify-center">
          <img
            src={ls}
            alt="Homier laptop and smartphone mockup"
            className="w-full max-w-[560px] h-auto object-contain"
          />
        </div>
      </div>

      {/* DESKTOP IMAGE (Spans full section height and bleeds flush to right edge) */}
      <div className="hidden lg:flex items-center justify-end absolute inset-y-0 right-0 w-[54%] pointer-events-none">
        <img
          src={ls}
          alt="Homier laptop and smartphone mockup"
          className="h-full w-full object-contain object-right-bottom scale-[1.04] origin-bottom-right drop-shadow-[0_20px_40px_rgba(25,10,45,0.12)]"
        />
      </div>
    </section>
  );
}

export default HomierPlatform;