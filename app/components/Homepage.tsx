import { useState, useEffect, useSyncExternalStore } from "react";
import { banner, cards } from "../data/homepage";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ExternalLink, Phone, Mail, MapPin } from "lucide-react";

export function Homepage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div
          className="
            absolute -left-120 right-0 -top-[100vh] -bottom-16 bg-[#00a8b5] rotate-[-12deg] origin-top-left drop-shadow-md pointer-events-none
            [@media(max-width:576px)]:bottom-100 transition-all duration-500 ease-in-out
        "
        />

        <div className="px-16 py-10 relative z-10 [@media(max-width:576px)]:px-6">
          <div className="w-full transition-all duration-500">
            {/* Card */}
            <div
              className="
                    bg-white px-6 pb-6 shadow-md z-10 overflow-visible
                    [@media(min-width:992px)]:flex [@media(min-width:992px)]:flex-row [@media(min-width:992px)]:items-stretch [@media(min-width:992px)]:flex-1 [@media(min-width:992px)]:pt-6 [@media(min-width:992px)]:mt-8 [@media(min-width:992px)]:mb-8
                    [@media(min-width:576px)_and_(max-width:991px)]:block [@media(min-width:576px)_and_(max-width:991px)]:w-full [@media(min-width:576px)_and_(max-width:991px)]:mt-16 [@media(min-width:576px)_and_(max-width:991px)]:pt-16
                    [@media(max-width:576px)]:flex [@media(max-width:576px)]:flex-col [@media(max-width:576px)]:m-0 [@media(max-width:576px)]:p-0 [@media(max-width:576px)]:gap-6 [@media(max-width:576px)]:bg-transparent [@media(max-width:576px)]:shadow-none
                    transition-all duration-500 ease-in-out
                "
            >
              {/* Banner name — visible <992px, sits top-right of card */}
              <div className="hidden [@media(min-width:576px)_and_(max-width:991px)]:block absolute top-4 right-4 px-4 py-4">
                <h1 className="text-white text-3xl font-bold">{banner.name}</h1>
              </div>

              {/* Image: overflows card by 32px on all sides at ≥992px, float-left at <992px */}
              <div
                className="
                    relative overflow-visible shadow-md flex-shrink-0 mr-3 float-left
                    [@media(min-width:992px)]:w-80 [@media(min-width:992px)]:self-stretch [@media(min-width:992px)]:-ml-6 [@media(min-width:992px)]:-my-16
                    [@media(min-width:576px)_and_(max-width:991px)]:max-w-[74%] [@media(min-width:576px)_and_(max-width:991px)]:-ml-16 [@media(min-width:576px)_and_(max-width:991px)]:-mt-34
                    [@media(max-width:576px)]:w-full [@media(max-width:576px)]:self-stretch [@media(max-width:576px)]:m-0 [@media(max-width:576px)]:p-0
                    transition-[width,margin] duration-500 ease-in-out
                "
                style={{
                  shapeOutside: `url(${banner.imageURL})`,
                  shapeImageThreshold: "0.5",
                  shapeMargin: "12px",
                }}
              >
                <img
                  src={banner.imageURL}
                  alt={banner.name}
                  className="w-full h-full object-cover [@media(max-width:576px)]:aspect-[3/4]"
                />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-4 [@media(min-width:576px)_and_(max-width:992px)]:hidden">
                  <h1 className="text-white text-center text-3xl font-bold">
                    {banner.name}
                  </h1>
                </div>
              </div>

              {/* Single set of text elements — float context handles wrapping at <992px */}
              <div className="flex flex-col [@media(min-width:576px)_and_(max-width:991px)]:block">
                <h2 className="text-3xl font-semibold text-slate-900 mb-4 [@media(max-width:992px)]:text-center">
                  About me
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {banner.description}
                </p>
                <div className="flex gap-4 justify-end mt-4 [@media(max-width:576px)]:justify-center">
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
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section
        id="projects"
        className="px-16 py-10 bg-white [@media(max-width:576px)]:px-6"
      >
        <div className="flex flex-col mx-auto gap-2">
          <h2 className="text-3xl font-bold text-slate-900 [@media(max-width:576px)]:text-center">
            My work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded overflow-hidden shadow-sm border border-slate-100 flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                <img
                  src={card.imageURL}
                  alt={card.title}
                  className="w-full object-cover aspect-[3/2]"
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
      <section
        id="contact"
        className="flex flex-row gap-6 bg-[#00a8b5] px-16 py-10 [@media(max-width:768px)]:flex-col [@media(max-width:576px)]:px-0 [@media(max-width:576px)]:py-0"
      >
        <div className="mx-auto flex flex-col md:flex-row gap-12 items-center [@media(max-width:576px)]:px-6 [@media(max-width:576px)]:py-10">
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
            <div className="flex gap-4 mt-2 text-black [@media(max-width:576px)]:justify-center">
              <a href={banner.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-6 h-6 hover:opacity-70 transition-opacity [@media(max-width:576px)]:w-10 [@media(max-width:576px)]:h-10" />
              </a>
              <a
                href={banner.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6 hover:opacity-70 transition-opacity [@media(max-width:576px)]:w-10 [@media(max-width:576px)]:h-10" />
              </a>
              <a
                href={banner.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="w-6 h-6 hover:opacity-70 transition-opacity [@media(max-width:576px)]:w-10 [@media(max-width:576px)]:h-10" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full max-w-120 [@media(max-width:768px)]:max-w-full">
          <img
            src="https://placehold.co/380x300/0097a7/ffffff?text=Get+In+Touch"
            alt="Contact"
            className="w-full object-cover rounded shadow-md aspect-[4/3] [@media(max-width:576px)]:aspect-[3/4]"
          />
        </div>
      </section>
    </div>
  );
}
