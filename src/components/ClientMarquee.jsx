import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const clients = [
  { name: "WhatsApp", icon: FaWhatsapp },
  { name: "Facebook", icon: FaFacebookF },
  { name: "Instagram", icon: FaInstagram },
  { name: "GitHub", icon: FaGithub },
  { name: "LinkedIn", icon: FaLinkedinIn },
  { name: "Twitter", icon: FaXTwitter },
];

function ClientMarquee() {
  return (
    <section className="w-full bg-white overflow-hidden py-7">
      <div className="max-w-[1198px] mx-auto">

        <div className="relative overflow-hidden">

          <div className="flex w-max animate-client-scroll hover:[animation-play-state:paused]">

            {[...clients, ...clients, ...clients].map((client, index) => {
              const Icon = client.icon;

              return (
                <div
                  key={index}
                  className="flex items-center justify-center gap-3 w-[190px] shrink-0 text-[#C5C5C5] hover:text-[#8624DD] transition-colors duration-300"
                >
                  <Icon className="text-[23px]" />

                  <span className="font-['Sora'] text-[14px] font-semibold">
                    {client.name}
                  </span>
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}

export default ClientMarquee;