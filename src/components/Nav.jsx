import { ChevronDown, Phone } from "lucide-react";
import logo from "../assets/Frame.png";
import logoText from "../assets/Frame(1).png";

const Nav = () => {
  return (
    <nav className="absolute top-0 left-0 z-50 w-full px-6 md:px-12 lg:px-[88px]">
      <div className="mx-auto flex h-16 md:h-20 max-w-[1198px] items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-white shrink-0">
          <img
            src={logo}
            alt="Homier Logo"
            className="w-[26px] h-[26px] object-contain"
          />
          <img
            src={logoText}
            alt="Homier"
            className="h-[22px] w-auto object-contain"
          />
        </a>

        {/* Navigation Links */}
        <div className="hidden items-center gap-7 lg:gap-8 font-['Sora'] text-[12px] font-medium text-white md:flex">
          <a href="/" className="transition-colors hover:text-white/80">
            Home
          </a>

          <a href="#platform" className="transition-colors hover:text-white/80">
            Platform
          </a>

          <div className="group relative flex cursor-pointer items-center gap-1 py-2">
            <span className="transition-colors group-hover:text-white/80">
              Solutions
            </span>
            <ChevronDown
              size={13}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:rotate-180"
            />

            <div className="invisible absolute left-0 top-full w-44 rounded-xl bg-white p-2 text-[#202020] opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <a
                href="#solutions"
                className="block rounded-lg px-3 py-2 text-[11px] font-medium hover:bg-[#F7F2FC] hover:text-[#8624DD]"
              >
                Home Services
              </a>
              <a
                href="#solutions"
                className="block rounded-lg px-3 py-2 text-[11px] font-medium hover:bg-[#F7F2FC] hover:text-[#8624DD]"
              >
                Business Tools
              </a>
            </div>
          </div>

          <div className="group relative flex cursor-pointer items-center gap-1 py-2">
            <span className="transition-colors group-hover:text-white/80">
              Features
            </span>
            <ChevronDown
              size={13}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:rotate-180"
            />

            <div className="invisible absolute left-0 top-full w-44 rounded-xl bg-white p-2 text-[#202020] opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <a
                href="#features"
                className="block rounded-lg px-3 py-2 text-[11px] font-medium hover:bg-[#F7F2FC] hover:text-[#8624DD]"
              >
                Booking
              </a>
              <a
                href="#features"
                className="block rounded-lg px-3 py-2 text-[11px] font-medium hover:bg-[#F7F2FC] hover:text-[#8624DD]"
              >
                Management
              </a>
            </div>
          </div>
        </div>

        {/* Demo Button */}
        <a
          href="#contact"
          className="flex items-center gap-2.5 rounded-full bg-white pl-4 pr-1.5 py-1.5 font-['Sora'] text-[11px] font-semibold text-[#8624DD] shadow-sm transition-colors hover:bg-[#F7F2FC]"
        >
          <span>Book a Demo</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#8624DD] text-white">
            <Phone size={11} strokeWidth={2.2} className="fill-current" />
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Nav;