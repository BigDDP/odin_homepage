import { banner, cards } from "../data/homepage";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ExternalLink, Phone, Mail, MapPin } from "lucide-react";

export function Homepage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* ── Hero ── */}

      <section className="bg-[#00a8b5] px-6 py-16 flex flex-row items-stretch">
        <div className="relative flex-1 overflow-hidden">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-0 min-h-[340px]">
            <div className="relative w-full md:w-[340px] flex-shrink-0 overflow-hidden">
              <img
                src={banner.imageURL}
                alt={banner.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-4">
                <h1 className="text-white text-3xl font-bold">{banner.name}</h1>
              </div>
            </div>

            <div className="bg-white flex-1 p-8 flex flex-col justify-between shadow-md overflow-hidden min-h-full">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-semibold text-slate-900">
                  About me
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {banner.description}
                </p>
              </div>

              <div className="flex gap-4 justify-end">
                <a
                  href={banner.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-6 h-6 text-slate-700 hover:text-slate-900 transition-colors" />
                </a>
                <a
                  href={banner.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-6 h-6 text-slate-700 hover:text-slate-900 transition-colors" />
                </a>
                <a
                  href={banner.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="w-6 h-6 text-slate-700 hover:text-slate-900 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-blue-500 rotate-[35deg] drop-shadow-md pointer-events-none" />
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="px-6 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">My work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded overflow-hidden shadow-sm border border-slate-100 flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                <img
                  src={card.imageURL}
                  alt={card.title}
                  className="w-full object-cover aspect-square"
                />
                <div className="p-4 flex flex-col gap-2 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-900">
                      {card.title}
                    </h4>
                    <div className="flex gap-2">
                      <a
                        href={card.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="w-4 h-4 text-slate-600 hover:text-slate-900 transition-colors" />
                      </a>
                      <a
                        href={card.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 text-slate-600 hover:text-slate-900 transition-colors" />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="bg-[#00a8b5] px-6 py-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          {/* Left */}
          <div className="flex-1 flex flex-col gap-4 text-white">
            <h2 className="text-3xl font-bold">Contact me</h2>
            <p className="font-semibold">
              Please get in touch if you think our work could be mutually
              beneficial!
            </p>
            <div className="flex flex-col gap-1 text-sm mt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>1234 Random Road</span>
              </div>
              <span className="ml-6">Random Town, California 12345</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>000 0000 0000</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span>notarealemail@email.com</span>
            </div>
            <div className="flex gap-4 mt-2">
              <a href={banner.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-6 h-6 hover:opacity-70 transition-opacity" />
              </a>
              <a
                href={banner.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6 hover:opacity-70 transition-opacity" />
              </a>
              <a
                href={banner.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="w-6 h-6 hover:opacity-70 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Right: image */}
          <div className="w-full md:w-[380px] flex-shrink-0">
            <img
              src="https://placehold.co/380x300/0097a7/ffffff?text=Get+In+Touch"
              alt="Contact"
              className="w-full object-cover rounded shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
