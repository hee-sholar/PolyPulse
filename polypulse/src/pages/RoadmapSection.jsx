"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { CheckCircle, Clock, Rocket } from "lucide-react"

export default function RoadmapSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      status: "done",
      icon: Clock,
      items: [
        "Token launch on Pump.fun",
        "Beta website deployment",
        "Community building",
        "Initial marketing campaign",
      ],
    },
    {
      phase: "Phase 2",
      title: "AI Integration",
      status: "current",
      icon: Rocket,
      items: [
        "AI bot development",
        "Telegram bot launch",
        "Manual reward distribution",
        "Community feedback integration",
      ],
    },
    {
      phase: "Phase 3",
      title: "Automation",
      status: "upcoming",
      icon: Rocket,
      items: ["Automated staking system", "Real-time dashboard", "USDC reward distribution", "Performance analytics"],
    },
    {
      phase: "Phase 4",
      title: "Full Launch",
      status: "upcoming",
      icon: Rocket,
      items: ["Complete AI integration", "Automated buyback system", "DEX listings", "Advanced trading strategies"],
    },
  ]

  return (
    <section className="relative py-24 px-6 bg-[#0B0F1A] overflow-hidden" id="roadmap">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-20 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Development{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Roadmap
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Step-by-step path from launch to full AI-powered trading automation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-purple-500/40 ml-6">
          {phases.map((phase, index) => (
            <div key={index} className="mb-12 ml-6 relative" data-aos="fade-up" data-aos-delay={index * 200}>
              {/* Timeline Dot */}
              <span
                className={`absolute -left-[22px] top-2 w-6 h-6 rounded-full flex items-center justify-center ring-4 ${
                  phase.status === "done"
                    ? "bg-green-400 ring-green-400/30"
                    : phase.status === "current"
                    ? "bg-purple-400 ring-purple-400/40 animate-pulse"
                    : "bg-gray-600 ring-gray-500/30"
                }`}
              >
                <phase.icon className="w-3.5 h-3.5 text-black" />
              </span>

              {/* Card */}
              <div
                className={`p-6 rounded-xl border backdrop-blur transition duration-300 hover:scale-[1.02] ${
                  phase.status === "done"
                    ? "bg-green-500/10 border-green-500/40"
                    : phase.status === "current"
                    ? "bg-purple-500/10 border-purple-500/40"
                    : "bg-gray-800/30 border-gray-700"
                }`}
              >
                {/* Phase Sticker */}
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${
                    phase.status === "done"
                      ? "bg-green-500/80 text-white"
                      : phase.status === "current"
                      ? "bg-purple-500/80 text-white"
                      : "bg-gray-600/70 text-gray-200"
                  }`}
                >
                  {phase.phase}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">{phase.title}</h3>

                {/* Items */}
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircle
                        className={`w-4 h-4 mt-0.5 ${
                          phase.status === "done" || phase.status === "current"
                            ? "text-purple-400"
                            : "text-gray-600"
                        }`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline End */}
        <div className="mt-12 text-center" data-aos="zoom-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900/60 border border-purple-400/30 rounded-full shadow-md">
            <Clock className="w-5 h-5 text-purple-400" />
            <span className="text-gray-200 font-medium">
              Expected Full Launch: <span className="text-white">November 2024</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
