import background from "../assets/Purple Technology Icon Network 1.png";
import phoneMockup from "../assets/Free Standing iPhone Duo 1(2).png";
import { ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section className="relative w-full h-[832px] bg-[#8624DD] rounded-b-[24px] overflow-hidden">

      {/* Background Pattern */}
      <img
        src={background}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

{/* Hero Content */}
<div className="
  absolute
  top-[132px]
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
">
        {/* Small Heading */}
<p className="
  w-full
  font-['Sora']
  font-normal
  text-[12px]
  md:text-[16px]
  leading-[100%]
  tracking-[0.2em]
  text-center
  text-white/60
">
  HOME SERVICE MANAGEMENT SOFTWARE
</p>

        {/* Script Heading */}
        <h2 className="
  w-full
  font-['Rage_Italic']
  font-normal
  text-[42px]
  md:text-[71.52px]
  leading-[110%]
  tracking-normal
  text-center
  text-[#E5BFFF]
">
  Launch Your Own
</h2>

        {/* Main Heading */}
        <h1 className="
  w-full
  font-['Sora']
  font-semibold
  text-[30px]
  sm:text-[40px]
  md:text-[51.09px]
  leading-[108%]
  text-center
  text-white
">
  Home Service Business
  <br />
  Platform
</h1>

        {/* Description */}
        <p className="w-[661px] h-[40px] font-['Sora'] font-normal text-[16px] leading-[16px] tracking-normal text-center text-white">
  Manage bookings, connect customers with service professionals, and grow your business with one powerful, fully customizable platform.
</p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-[10px]">

          <button className="h-[36px] px-[18px] flex items-center gap-[10px] rounded-full bg-white text-[#8624DD] text-[12px] font-semibold">
            Book a Demo
            <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-[#8624DD] text-white">
              <ArrowUpRight size={15} />
            </span>
          </button>

          <button className="h-[36px] px-[18px] flex items-center gap-[10px] rounded-full border border-white text-white text-[12px] font-semibold">
            Explore Features
            <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-white text-[#8624DD]">
              <ArrowUpRight size={15} />
            </span>
          </button>

        </div>
      </div>
      {/* iPhone Mockup */}
<img
  src={phoneMockup}
  alt="Homier mobile app preview"
  className="
    absolute
    top-[458px] left-[383.38px]
    w-[685.25px] h-[379.62px]
    object-cover

    max-md:top-auto
    max-md:left-1/2
    max-md:-translate-x-1/2
    max-md:bottom-0
    max-md:w-[95%]
    max-md:h-auto
    max-md:object-contain
  "
/>

    </section>
  );
}

export default Hero;