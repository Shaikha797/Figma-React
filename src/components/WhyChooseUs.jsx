import allInOne from "../assets/Group 838.png";
import growBusiness from "../assets/Group 839.png";
import custom from "../assets/abc.png";
import Real from "../assets/efg.png";

const features = [
  {
    title: "All-in-One Platform",
    description:
      "Customer app, service partner app and admin dashboard in a single solution.",
    image: allInOne,
    bg: "#F4EDFC",
  },
  {
    title: "Grow Your Business",
    description:
      "Manage bookings, track performance and increase revenue with powerful tools.",
    image: growBusiness,
    bg: "#EFF7F3",
  },
  {
    title: "Fully Customizable",
    description:
      "Manage bookings, track performance and increase revenue with powerful tools.",
    image: custom,
    bg: "#FAF5EF",
  },
  {
    title: "Reliable & Scalable",
    description:
      "Secure, stable and built to support your business as you grow.",
    image: Real,
    bg: "#F0F3FC",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="features"
      className="w-full bg-white px-6 md:px-10 lg:px-[88px] pt-10 pb-16 md:pb-20"
    >
      <div className="max-w-[1198px] mx-auto">
        {/* SECTION HEADING */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-['Sora'] font-bold text-[26px] sm:text-[32px] md:text-[36px] leading-[1.2] text-[#191919]">
            Why Businesses Choose{" "}
            <span className="text-[#8624DD]">Homier</span>
          </h2>

          <p className="font-['Sora'] font-normal text-[12px] sm:text-[13px] md:text-[14px] leading-[21px] text-[#77717D] mt-2.5 max-w-[540px] mx-auto">
            A complete, customizable platform to manage your home service
            business with ease and efficiency.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group w-full min-h-[265px] rounded-[16px] px-6 pt-7 pb-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.05)]"
              style={{ backgroundColor: feature.bg }}
            >
              {/* ILLUSTRATION (Larger scale to fill the upper card space) */}
              <div className="w-full h-[145px] flex items-center justify-center mb-3">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-[175px] h-[140px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* CARD TEXT */}
              <div className="text-left">
                <h3 className="font-['Sora'] font-bold text-[15px] md:text-[16px] leading-[21px] text-[#202020]">
                  {feature.title}
                </h3>

                <p className="font-['Sora'] font-normal text-[11px] md:text-[12px] leading-[18px] text-[#77717D] mt-2">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;