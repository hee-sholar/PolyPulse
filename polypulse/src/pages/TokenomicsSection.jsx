import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

export default function TokenomicsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  // Example Token Distribution (adjust values as needed)
  const data = [
    { name: "Community", value: 40, color: "#22c55e" },
    { name: "Staking", value: 25, color: "#06b6d4" },
    { name: "Team", value: 15, color: "#3b82f6" },
    { name: "Marketing", value: 10, color: "#eab308" },
    { name: "Liquidity", value: 10, color: "#f97316" },
  ]

  return (
    <section className="relative py-24 px-6 bg-[#0B0F1A] overflow-hidden" id="tokenomics">
      {/* Divider Glow */}
      <div className="absolute top-0 left-1/2 w-72 h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 -translate-x-1/2 rounded-full blur-md opacity-70" />

      {/* Background Glow Orbs */}
      <div className="absolute -top-32 left-0 w-96 h-96 bg-green-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Tokenomics
            </span>{" "}
            & Profit Flow
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Fixed supply: <span className="text-white font-semibold">1 Billion Tokens</span> — transparent distribution &
            profit-sharing for long-term sustainability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pie Chart */}
          <div className="h-80" data-aos="zoom-in">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  labelLine={false}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      stroke="none"
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Distribution + Profit Flow */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {data.map((item, i) => (
                <div
                  key={i}
                  className="relative p-5 rounded-xl bg-[#111827]/60 border border-green-500/20 hover:border-green-500/60 shadow-lg hover:shadow-green-500/20 transition duration-300 backdrop-blur"
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                >
                  <span className="absolute -top-3 right-3 text-xs font-medium px-3 py-1 bg-gradient-to-r from-green-400 to-cyan-400 text-white rounded-full shadow-md">
                    {item.name}
                  </span>
                  <p className="text-2xl font-bold text-white">
                    {item.value}%
                  </p>
                  <p className="text-gray-400 text-sm">of supply</p>
                </div>
              ))}
            </div>

            {/* Profit Flow */}
            <div
              className="mt-8 p-6 rounded-xl bg-[#111827]/60 border border-cyan-400/30 hover:border-cyan-400/60 shadow-lg transition backdrop-blur"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                Profit Flow
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>💸 <span className="text-white font-medium">50%</span> Rewards in USDC to stakers</li>
                <li>🔥 <span className="text-white font-medium">30%</span> Buyback & Burn</li>
                <li>🏦 <span className="text-white font-medium">20%</span> Treasury for growth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
