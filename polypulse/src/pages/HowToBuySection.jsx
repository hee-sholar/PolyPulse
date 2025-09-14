"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Wallet, Download, ShoppingCart, ArrowRight } from "lucide-react"

export default function HowToBuySection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const steps = [
    {
      step: 1,
      icon: Download,
      title: "Download Phantom Wallet",
      description: "Install Phantom wallet on mobile or as a browser extension to get started.",
    },
    {
      step: 2,
      icon: Wallet,
      title: "Buy SOL",
      description: "Purchase Solana (SOL) from your favorite exchange and transfer it to Phantom.",
    },
    {
      step: 3,
      icon: ShoppingCart,
      title: "Purchase on Pump.fun",
      description: "Connect your wallet on Pump.fun and swap SOL for PolyPulse tokens.",
    },
  ]

  return (
    <section className="relative py-24 px-6 bg-[#0B0F1A] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 left-0 w-[400px] h-[400px] bg-green-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How to{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Buy PolyPulse
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Get started in just three simple steps. Join the community and start earning rewards.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 mb-16 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-2xl bg-[#111827]/60 border border-green-500/20 shadow-lg hover:shadow-green-400/30 backdrop-blur-sm transition transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Step Badge */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-400 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                {step.step}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-400 to-cyan-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                <step.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title + Description */}
              <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>

              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center" data-aos="zoom-in">
          <button
            onClick={() => window.open("https://pump.fun", "_blank")}
            className="relative bg-gradient-to-r from-green-400 to-cyan-400 hover:opacity-90 text-black font-semibold px-12 py-4 text-lg rounded-full shadow-lg transition-all"
          >
            Buy Now on Pump.fun
            <ArrowRight className="ml-2 inline-block w-6 h-6" />
          </button>

          <div className="mt-6 inline-block px-4 py-2 border border-gray-600 rounded-full text-gray-400 text-sm shadow-inner">
            Contract Address: <span className="text-white">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  )
}
