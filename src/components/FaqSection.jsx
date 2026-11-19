import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import faqBgHouse from "../assets/Group 2225.png"; // Replace with your actual image filename in src/assets/

const faqs = [
  {
    question: "What is Homier?",
    answer:
      "Homier is a platform designed to help home service businesses manage bookings, customers, service professionals, and daily operations.",
  },
  {
    question: "Who can use Homier?",
    answer:
      "Homier is built for cleaning agencies, plumbing and electrical contractors, appliance repair teams, beauty/wellness at-home providers, and multi-service home businesses of any size.",
  },
  {
    question: "Can I customize Homier with my own branding?",
    answer:
      "Yes. You can configure your brand logo, color palette, custom domain, service categories, pricing rules, and automated notification templates to match your business identity.",
  },
  {
    question: "Can I manage service providers and bookings?",
    answer:
      "Yes. You can schedule appointments, assign or auto-dispatch jobs to field professionals, track real-time job statuses, and handle payouts from one centralized dashboard.",
  },
  {
    question: "Does Homier support mobile apps?",
    answer:
      "Yes. Homier offers dedicated mobile experiences for both customers booking services and service professionals managing their daily schedules on the go.",
  },
  {
    question: "How can I get started with Homier?",
    answer:
      "Create an account, set up your service catalog and team members, and launch your booking portal in minutes—or schedule a personalized walkthrough with our onboarding team.",
  },
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-white py-16 md:py-24 overflow-hidden"
    >
      {/* BACKGROUND GRAPHIC (698x407, 0deg, opacity 0.3) */}
      <img
        src={faqBgHouse}
        alt=""
        aria-hidden="true"
        style={{ opacity: 0.3 }}
        className="pointer-events-none select-none hidden sm:block absolute bottom-0 left-0 w-[420px] md:w-[560px] xl:w-[698px] max-w-full max-h-[407px] rotate-0 object-contain object-left-bottom z-0"
      />

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative z-10 max-w-[1198px] mx-auto px-6 md:px-10 lg:px-[88px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT COLUMN: HEADING */}
          <div className="lg:col-span-5">
            <p className="font-['Sora'] text-[10px] md:text-[11px] tracking-[4px] text-[#A49AAE] uppercase mb-3">
              GOT QUESTIONS?
            </p>

            <h2 className="font-['Sora'] font-bold text-[28px] md:text-[36px] leading-[1.16] text-[#191919]">
              Everything You Need to
              <span className="block mt-0.5">
                Know{" "}
                <span className="text-[#8624DD]">About Homier</span>
              </span>
            </h2>

            <p className="font-['Sora'] text-[11px] md:text-[13px] leading-[21px] text-[#77717D] mt-4 max-w-[380px]">
              Find answers to common questions about managing your home service
              business with Homier.
            </p>
          </div>

          {/* RIGHT COLUMN: ACCORDION ITEMS */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-[10px] transition-all duration-200 ${
                    isOpen
                      ? "bg-[#FAF6FF] border-[1.5px] border-dashed border-[#C7A9EC] px-5 py-4"
                      : "bg-[#F5F1FA] border border-transparent px-5 py-3.5 hover:bg-[#EFE9F7]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span
                      className={`font-['Sora'] text-[12px] md:text-[13px] leading-[18px] transition-colors ${
                        isOpen
                          ? "font-semibold text-[#8624DD]"
                          : "font-medium text-[#3D3744]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span className="shrink-0 text-[#5C5566]">
                      {isOpen ? (
                        <ChevronUp size={15} strokeWidth={2} />
                      ) : (
                        <ChevronDown size={15} strokeWidth={2} />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 pt-3 border-t border-[#E6DCF3]">
                      <p className="font-['Sora'] text-[11px] md:text-[12px] leading-[19px] text-[#6E6776]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;