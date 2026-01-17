"use client";

import { Code, Terminal, Store, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

const Services = () => {
  const { t, language } = useLanguage();

  const icons = {
    BISNIS: <Store className="w-8 h-8" />,
    MARKETING: <Sparkles className="w-8 h-8" />,
    AKADEMIK: <Terminal className="w-8 h-8" />,
    ENTERPRISE: <Code className="w-8 h-8" />,
  };

  // 🔐 SAFE GUARD
  const services = t?.services?.items ?? [];

  return (
    <section id="services" className="relative px-4 py-20">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="block mb-4 text-sm font-bold tracking-widest text-cyan-400">
            {t?.services?.badge ?? "SERVICES"}
          </span>

          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            {t?.services?.title ?? "Our Services"}
          </h2>

          <p className="text-lg text-slate-400">
            {t?.services?.subtitle ?? "What we can help you with"}
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative p-8 transition-all duration-300 border group bg-gradient-to-br from-slate-900/90 to-slate-900/50 backdrop-blur-sm rounded-2xl border-slate-800/50 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              {/* Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 transition rounded-bl-full opacity-0 bg-gradient-to-br from-cyan-500/10 to-transparent group-hover:opacity-100" />

              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center justify-center transition border w-14 h-14 bg-slate-950 border-slate-800/50 rounded-xl text-cyan-400 group-hover:border-cyan-500/30 group-hover:scale-110">
                  {icons[service.tag] ?? <Code className="w-8 h-8" />}
                </div>

                <span className="text-xs font-bold tracking-widest text-slate-600">
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <h3 className="mb-3 text-2xl font-bold text-white">
                {service.title}
              </h3>

              {service.startingPrice && (
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gradient">
                    {service.startingPrice}
                  </span>
                </div>
              )}

              <p className="mb-6 text-slate-400">{service.description}</p>

              {/* Features */}
              {service.features?.length > 0 && (
                <div className="pb-6 mb-6 space-y-3 border-b border-slate-800/50">
                  {service.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-cyan-400" />
                      <span className="text-sm text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Examples */}
              {service.examples && (
                <div className="p-3 mb-6 border rounded-lg bg-slate-900/50 border-slate-800/50">
                  <div className="mb-1 text-xs font-semibold tracking-wider text-slate-500">
                    {language === "id" ? "COCOK UNTUK:" : "BEST FOR:"}
                  </div>
                  <div className="text-sm text-slate-400">
                    {service.examples}
                  </div>
                </div>
              )}

              {/* CTA */}
              <Link
                href="#contact"
                className="flex items-center justify-center w-full py-3 text-sm font-bold transition border-2 rounded-lg text-cyan-400 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/50"
              >
                {language === "id" ? "Pesan Sekarang" : "Order Now"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
