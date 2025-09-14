import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Brain, DollarSign, Users, Zap } from "lucide-react"

export default function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const features = [
    {
      icon: Brain,
      title: "Intelligent Betting",
      description:
        "Our AI analyzes market data, detects trends, and makes optimized bets on Polymarket prediction markets.",
      sticker: "✨ AI Powered",
    },
    {
      icon: DollarSign,
      title: "Profit Sharing",
      description:
        "Stake PolyPulse tokens and receive USDC rewards directly from AI trading profits — no middleman.",
      sticker: "💸 Rewards in USDC",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Every holder benefits. Governance and staking empower the community to shape PolyPulse’s future.",
      sticker: "🔥 Community First",
    },
    {
      icon: Zap,
      title: "Automated Returns",
      description:
        "Set it and forget it. PolyPulse AI works 24/7 with auto-rewards designed for sustainable growth.",
      sticker: "⚡ Always On",
    },
  ]

  return (
    <section className="relative py-24 px-6 bg-[#0B0F1A] overflow-hidden" id="about">
      {/* Top Divider Glow */}
      <div className="absolute top-0 left-1/2 w-72 h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 -translate-x-1/2 rounded-full blur-md opacity-70" />

      {/* Background Glow Orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Makes{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              PolyPulse
            </span>{" "}
            Unique?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            PolyPulse merges advanced AI trading with DeFi principles, giving
            the community real profit-sharing opportunities — a new way to
            benefit from prediction markets.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-[#111827]/60 border border-green-500/20 hover:border-green-500/60 shadow-lg hover:shadow-green-500/20 transition duration-300 text-center backdrop-blur transform hover:-translate-y-2"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              {/* Sticker Badge */}
              <span className="absolute -top-3 right-3 text-xs font-medium px-3 py-1 bg-gradient-to-r from-green-400 to-cyan-400 text-white rounded-full shadow-md">
                {feature.sticker}
              </span>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-cyan-400 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title + Desc */}
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="600">
          <a
            href="#whitepaper" // 🔗 Replace with actual link later
            className="inline-block px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-lg transition"
          >
            📄 Read the Whitepaper
          </a>
        </div>
      </div>
    </section>
  )
}
