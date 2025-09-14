import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Bot, TrendingUp, ArrowRight } from "lucide-react";
import AboutSection from "./AboutSection";
import TokenomicsSection from "./TokenomicsSection";
import RoadmapSection from "./RoadmapSection";
import HowToBuySection from "./HowToBuySection";
import CommunitySection from "./CommunitySection";
import Footer from "../components/Footer";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-[#0B0F1A] via-[#0F172A] to-[#0B0F1A] text-white">
      {/* 🌌 Global Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Logo/Icon */}
          {/* Logo/Icon (replace Bot with your actual logo) */}
          <div className="flex justify-center mb-8" data-aos="zoom-in">
            <div className="relative">
              {/* Logo Image */}
              <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.6)] bg-gradient-to-br from-green-400/20 to-cyan-400/20 flex items-center justify-center">
                <img
                  src="/logo.jpg"
                  alt="PolyPulse Logo"
                  className="w-20 h-20 object-contain"
                />
              </div>

              {/* Floating badge icon (optional, keeps the vibe) */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center shadow-md">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Sticker Badge */}
          <div className="mb-4" data-aos="fade-down">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold text-sm shadow-lg transform rotate-[-6deg]">
              🚀 AI Powered · Community Driven
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            data-aos="fade-up"
          >
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              PolyPulse
            </span>
          </h1>

          {/* Slogan */}
          <p
            className="text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            The first AI that bets on Polymarket and shares profits with the
            community.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="https://pump.fun" // 🔗 Replace with actual Pump.fun token link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-[0_0_25px_rgba(34,197,94,0.8)] transition"
            >
              Buy on Pump.fun
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>

            <a
              href="https://t.co/qFYRKLbRfL" // 🔗 Replace with your Telegram group link
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]"
            >
              Join Telegram
            </a>
          </div>

          {/* Beta Badge */}
          <div className="mt-12" data-aos="fade-up" data-aos-delay="600">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#111827] border border-green-500/50 text-green-400 shadow-md">
              🚀 Beta Version — November Launch Coming Soon
            </span>
          </div>
        </div>
      </section>

      {/* Other Sections (all share same bg now) */}
      <AboutSection />
      <TokenomicsSection />
      <RoadmapSection />
      <HowToBuySection />
      <CommunitySection />
      <Footer />
    </div>
  );
}
