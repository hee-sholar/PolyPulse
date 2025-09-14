import { MessageCircle, Twitter, Users, Bell } from "lucide-react"

export default function CommunitySection() {
  const socialLinks = [
    {
      name: "Telegram",
      icon: MessageCircle,
      description: "Join our main chat for updates and discussions",
      members: "1.2K+",
      link: "https://t.co/qFYRKLbRfL",
    },
    {
      name: "Twitter/X",
      icon: Twitter,
      description: "Follow us for the latest news and announcements",
      members: "850+",
      link: " https://x.com/polypulsee?t=AvAMFCxRrYgfpnBJm7tC1A&s=09",
    },
    {
      name: "Discord",
      icon: Users,
      description: "Connect with fellow PolyPulse holders",
      members: "600+",
      link: "https://discord.gg/polyPulse",
    },
  ]

  return (
    <section className="py-24 px-4 relative z-10" id="community">
      <div 
        className="max-w-6xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-12"
        data-aos="fade-up"
      >
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the <span className="text-green-400">Community</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            All updates, rewards, and important announcements will be shared through our community channels.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {socialLinks.map((s, i) => (
            <div
              key={i}
              className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-green-400/50 shadow-md hover:shadow-green-400/20 transition-all text-center"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-cyan-400 rounded-xl flex items-center justify-center">
                <s.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.name}</h3>
              <p className="text-gray-400 mb-3">{s.description}</p>
              <div className="flex items-center justify-center gap-2 mb-4 text-green-400">
                <Users className="w-4 h-4" /> <span>{s.members} members</span>
              </div>
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full border border-green-400 text-green-400 px-4 py-2 rounded-lg hover:bg-green-400 hover:text-white transition"
              >
                Join {s.name}
              </a>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div
          className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg text-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Bell className="w-10 h-10 mx-auto mb-4 text-green-400" />
          <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
          <p className="text-gray-300 mb-6">
            Be the first to know about AI trading results, rewards, and project updates. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.co/qFYRKLbRfL"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              <MessageCircle className="inline mr-2 w-4 h-4" /> Join Telegram
            </a>
            <a
              href=" https://x.com/polypulsee?t=AvAMFCxRrYgfpnBJm7tC1A&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition"
            >
              <Twitter className="inline mr-2 w-4 h-4" /> Follow on X
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
