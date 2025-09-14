"use client"

import { useEffect, useState } from "react"
import { MessageCircle, Twitter, Users, ArrowUp } from "lucide-react"

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false)

  // Show button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-white/5 backdrop-blur-xl border-t border-white/10 py-12 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">PolyPulse</h3>
            <p className="text-gray-300 leading-relaxed">
              The first AI that bets on Polymarket and shares profits with the community 
              through staking rewards.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-green-400 transition-colors">About</a></li>
              <li><a href="#tokenomics" className="text-gray-400 hover:text-green-400 transition-colors">Tokenomics</a></li>
              <li><a href="#roadmap" className="text-gray-400 hover:text-green-400 transition-colors">Roadmap</a></li>
              <li><a href="#community" className="text-gray-400 hover:text-green-400 transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Community</h4>
            <div className="flex gap-4">
              <a href="https://t.co/qFYRKLbRfL" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-green-400/20 rounded-lg flex items-center justify-center hover:bg-green-400 hover:text-white transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href=" https://x.com/polypulsee?t=AvAMFCxRrYgfpnBJm7tC1A&s=09" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-green-400/20 rounded-lg flex items-center justify-center hover:bg-green-400 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://discord.gg/polyPulse" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-green-400/20 rounded-lg flex items-center justify-center hover:bg-green-400 hover:text-white transition-all">
                <Users className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-8">
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
            <p className="text-sm text-red-400 leading-relaxed">
              <strong>⚠️ Disclaimer:</strong> This is an experimental beta project. 
              Only invest what you can afford to lose. No guarantees of returns or profits are made. 
              Past performance does not indicate future results.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2024 PolyPulse. All rights reserved.</p>
            <p className="text-sm text-gray-400">Built with ❤️ for the crypto community</p>
          </div>
        </div>
      </div>

      {/* Scroll To Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg transition z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  )
}
