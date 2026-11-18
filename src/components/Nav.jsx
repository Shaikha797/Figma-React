import { ChevronDown, Phone, Hexagon } from "lucide-react";
import logo from "../assets/Frame.png";
import logoText from "../assets/Frame(1).png"
const Nav = () => {
  return (
    <nav className="absolute top-0 left-0 z-50 w-full px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-white">
           <img
    src={logo}
    alt="Homier Logo"
    className="w-[27.69px] h-[27.69px] object-contain"
  />

   <img
    src={logoText}
    alt="Homier"
    className="w-[91.18px] h-[100px] object-contain"
  />
        </a>

        {/* Navigation Links */}
        <div className="hidden items-center gap-7 text-xs font-medium text-white md:flex">
          <a href="/" className="transition hover:text-purple-200">
            Home
          </a>

          <a href="#platform" className="transition hover:text-purple-200">
            Platform
          </a>

          <div className="group relative flex cursor-pointer items-center gap-1">
            Solutions
            <ChevronDown size={13} />

            <div className="invisible absolute left-0 top-full mt-3 w-40 rounded-lg bg-white p-3 text-gray-700 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              <a href="#solutions" className="block p-2 hover:text-purple-600">
                Home Services
              </a>
              <a href="#solutions" className="block p-2 hover:text-purple-600">
                Business Tools
              </a>
            </div>
          </div>

          <div className="group relative flex cursor-pointer items-center gap-1">
            Features
            <ChevronDown size={13} />

            <div className="invisible absolute left-0 top-full mt-3 w-40 rounded-lg bg-white p-3 text-gray-700 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              <a href="#features" className="block p-2 hover:text-purple-600">
                Booking
              </a>
              <a href="#features" className="block p-2 hover:text-purple-600">
                Management
              </a>
            </div>
          </div>
        </div>

        {/* Demo Button */}
        <a
          href="#contact"
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-semibold text-purple-700 transition hover:bg-purple-100"
        >
          Book a Demo

          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-white">
            <Phone size={11} />
          </span>
        </a>

      </div>
    </nav>
  );
};

export default Nav;