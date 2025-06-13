import GlowButton from "../ui/glow-button"
import { Check } from "lucide-react"

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-start pl-25 lg:pl-30 pointer-events-auto">
      <div className="max-w-2xl text-slate-100">
        {/* Webflow certified expert badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 mb-8">
          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-sm font-medium text-white">Webflow certified expert</span>
        </div>

        {/* Main heading */}
        <h1
          className="font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "Ubuntu, sans-serif", fontSize: "70px" }}
        >
          Webflow
          <br />
          development
          <br />
          agency
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
          We specialize in Webflow development and exceptional UI/UX design to make your brand shine.
        </p>

        {/* CTA Button */}
        <GlowButton>Start a project</GlowButton>
      </div>
    </div>
  )
}

export default Hero
