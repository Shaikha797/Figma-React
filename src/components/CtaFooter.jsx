import { ArrowUpRight, Phone, Mail } from "lucide-react";
import mobileMockupImg from "../assets/Untitled-1 2.png";

const footerLinks = {
  Solutions: [
    { label: "Home Cleaning", href: "#home-cleaning" },
    { label: "Electrical Services", href: "#electrical-services" },
    { label: "Plumbing", href: "#plumbing" },
    { label: "AC & Appliance Repair", href: "#ac-appliance-repair" },
  ],
  Platform: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Book a Demo", href: "#book-a-demo" },
  ],
  Resources: [
    { label: "About Us", href: "#about-us" },
    { label: "Blog", href: "#blog" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ],
};

function CtaFooter() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* SPLIT BACKGROUND: TOP WHITE, BOTTOM DARK #111111 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none flex flex-col"
      >
        <div className="h-[240px] md:h-[275px] w-full bg-white" />
        <div className="flex-1 w-full bg-[#111111]" />
      </div>

      {/* FAINT HOUSE OUTLINE WATERMARKS ON LEFT & RIGHT OF DARK FOOTER */}
      <svg
        aria-hidden="true"
        viewBox="0 0 260 260"
        fill="none"
        className="pointer-events-none select-none hidden md:block absolute bottom-8 left-4 w-[250px] h-[250px] text-white/[0.035]"
      >
        <path
          d="M30 115 L130 35 L230 115 V225 H30 Z"
          stroke="currentColor"
          strokeWidth="18"
          strokeLinejoin="round"
        />
      </svg>

      <svg
        aria-hidden="true"
        viewBox="0 0 260 260"
        fill="none"
        className="pointer-events-none select-none hidden md:block absolute bottom-8 right-4 w-[250px] h-[250px] text-white/[0.035]"
      >
        <path
          d="M30 115 L130 35 L230 115 V225 H30 Z"
          stroke="currentColor"
          strokeWidth="18"
          strokeLinejoin="round"
        />
      </svg>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-[1198px] mx-auto px-6 md:px-10 lg:px-[88px] pt-6 pb-14">
        {/* ================= OVERLAPPING CTA CARD ================= */}
        <div className="relative rounded-t-[28px] p-[1.5px] bg-gradient-to-b from-[#8624DD] via-[#C9A4F5]/70 to-transparent">
          <div className="relative rounded-t-[27px] bg-white overflow-hidden pt-12 md:pt-14 px-6 text-center">
            {/* SOFT TOP-LEFT & TOP-RIGHT LAVENDER RADIAL GLOWS */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-12 -left-12 w-72 h-72 rounded-full bg-[#B983F5]/30 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-12 -right-12 w-72 h-72 rounded-full bg-[#B983F5]/30 blur-3xl"
            />

            {/* SMOOTH FADE INTO DARK SECTION AT BOTTOM OF CARD */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#111111]"
            />

            {/* CTA TEXT CONTENT */}
            <div className="relative z-10 max-w-[600px] mx-auto">
              <p className="font-['Sora'] text-[10px] md:text-[11px] tracking-[4px] text-[#8E8599] uppercase mb-3">
                READY TO GET STARTED?
              </p>

              <h2 className="font-['Sora'] font-bold text-[26px] md:text-[36px] leading-[1.2] text-[#191919]">
                Ready to Build Your
                <span className="block text-[#8624DD]">
                  Home Service Business?
                </span>
              </h2>

              <p className="font-['Sora'] text-[11px] md:text-[13px] leading-[21px] text-[#6E6776] max-w-[490px] mx-auto mt-3">
                Launch a smarter way to manage bookings, coordinate
                professionals, and grow your home service business with Homier.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-wrap items-center justify-center gap-3.5 mt-7">
                <a
                  href="#book-demo"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#8624DD] hover:bg-[#731BC2] text-white font-['Sora'] font-medium text-[12px] pl-5 pr-2 py-2 shadow-[0_8px_20px_rgba(134,36,221,0.28)] transition-all duration-200"
                >
                  <span>Book a Demo</span>
                  <span className="w-6 h-6 rounded-full bg-white text-[#8624DD] flex items-center justify-center">
                    <ArrowUpRight size={13} strokeWidth={2.5} />
                  </span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 rounded-full bg-white hover:bg-[#FAF6FF] text-[#8624DD] border border-[#D8BEFA] font-['Sora'] font-medium text-[12px] pl-5 pr-2 py-2 transition-all duration-200"
                >
                  <span>Talk to Our Team</span>
                  <span className="w-6 h-6 rounded-full bg-[#8624DD] text-white flex items-center justify-center">
                    <ArrowUpRight size={13} strokeWidth={2.5} />
                  </span>
                </a>
              </div>
            </div>

            {/* ANGLED DARK PEDESTAL BEHIND PHONE */}
            <div className="relative z-10 mt-10 md:mt-12 flex justify-center">
              <div
                aria-hidden="true"
                className="w-[82%] max-w-[680px] h-[54px] md:h-[64px] bg-[#161616]"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 96% 100%, 4% 100%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* LANDSCAPE PHONE MOCKUP STRADDLING TRANSITION */}
<div className="relative z-20 -mt-[42px] md:-mt-[50px] flex justify-center px-4">
  <img
    src={mobileMockupImg}
    alt="Homier Mobile App Preview"
    className="w-full max-w-[540px] md:max-w-[600px] h-auto object-contain drop-shadow-[0_24px_38px_rgba(0,0,0,0.65)]"
  />
</div>

        {/* ================= DARK FOOTER CONTENT ================= */}
        <div className="mt-10 md:mt-14">
          {/* TOP ROW: BRAND LOGO & TAGLINE (LEFT) + MADE BY & APP STORES (RIGHT) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-white/10">
            <div>
              <a href="#" className="inline-flex items-center gap-2.5">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M5 13.5L16 5L27 13.5V24C27 25.6569 25.6569 27 24 27H8C6.34315 27 5 25.6569 5 24V13.5Z"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5 21C13.6 22.1 18.4 22.1 19.5 21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="font-['Sora'] font-bold text-[22px] tracking-tight text-white">
                  Homier
                </span>
              </a>

              <p className="font-['Sora'] text-[11px] md:text-[12px] text-[#9A95A1] mt-3 max-w-[380px]">
                A smarter platform for managing and growing your home service
                business.
              </p>
            </div>

            <div className="flex flex-col md:items-end gap-3.5">
              <div className="flex items-center gap-2">
                <span className="font-['Sora'] text-[10px] text-[#8E8A94]">
                  Made by
                </span>
                <span className="font-['Sora'] font-bold text-[13px] tracking-wider text-white uppercase">
                  LILAC
                  <span className="block text-[7px] font-medium tracking-[2px] text-[#9A95A1] -mt-1">
                    INFOTECH
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href="#google-play"
                  className="inline-flex items-center gap-2 rounded-[6px] bg-white px-3 py-1.5 text-[#111111] hover:opacity-90 transition-opacity"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M3.6 2.4c-.3.3-.5.8-.5 1.4v16.4c0 .6.2 1.1.5 1.4l.1.1 9.2-9.2v-.2L3.7 2.3l-.1.1z"
                    />
                    <path
                      fill="#34A853"
                      d="M16 15.6l-3.1-3.1v-.2L16 9.2l.1.1 3.6 2.1c1 .6 1 1.5 0 2.1l-3.6 2-.1.1z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M16.1 15.5L12.9 12.3 3.6 21.6c.3.4.9.4 1.6 0l10.9-6.1z"
                    />
                    <path
                      fill="#EA4335"
                      d="M16.1 9.3L5.2 3.1c-.7-.4-1.3-.4-1.6 0l9.3 9.3 3.2-3.1z"
                    />
                  </svg>
                  <div className="text-left leading-none">
                    <span className="block text-[7px] uppercase tracking-wider text-[#555]">
                      GET IT ON
                    </span>
                    <span className="font-['Sora'] font-semibold text-[11px]">
                      Google Play
                    </span>
                  </div>
                </a>

                <a
                  href="#app-store"
                  className="inline-flex items-center gap-2 rounded-[6px] bg-white px-3 py-1.5 text-[#111111] hover:opacity-90 transition-opacity"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.96 6.33c.67-.81 1.12-1.94 1-3.08-.96.04-2.13.64-2.82 1.45-.61.7-1.15 1.85-1.01 2.97 1.08.08 2.16-.53 2.83-1.34z" />
                  </svg>
                  <div className="text-left leading-none">
                    <span className="block text-[7px] text-[#555]">
                      Download on the
                    </span>
                    <span className="font-['Sora'] font-semibold text-[11px]">
                      App Store
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW: 3 LINK COLUMNS (LEFT) + COPYRIGHT & CONTACT (RIGHT) */}
          <div className="pt-8 flex flex-col lg:flex-row justify-between gap-10">
            <div className="grid grid-cols-3 gap-8 sm:gap-14">
              {Object.entries(footerLinks).map(([heading, links]) => (
                <div key={heading}>
                  <h3 className="font-['Sora'] font-semibold text-[11px] md:text-[12px] text-white mb-3.5">
                    {heading}
                  </h3>
                  <ul className="space-y-2.5">
                    {links.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="font-['Sora'] text-[10px] md:text-[11px] text-[#8E8A94] hover:text-white transition-colors"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col lg:items-end justify-between gap-4">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-['Sora'] text-[10px] text-[#7D7885]">
                <span>© 2026 Lilac Homier. All rights reserved.</span>
                <a
                  href="#privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <span>|</span>
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms &amp; Conditions
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="tel:+918360139952"
                  className="inline-flex items-center gap-2 font-['Sora'] font-medium text-[12px] md:text-[13px] text-white hover:text-[#C7A9EC] transition-colors"
                >
                  <Phone
                    size={14}
                    className="text-[#8624DD] fill-[#8624DD]"
                  />
                  <span>+91 83601 39952</span>
                </a>

                <a
                  href="mailto:info@lilacinfotech.com"
                  className="inline-flex items-center gap-2 font-['Sora'] font-medium text-[12px] md:text-[13px] text-white hover:text-[#C7A9EC] transition-colors"
                >
                  <Mail size={14} className="text-[#8624DD]" />
                  <span>info@lilacinfotech.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default CtaFooter;