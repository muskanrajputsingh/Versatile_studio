import { Check } from "lucide-react"

const WhoWeAreSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-start pl-25 lg:pl-30 py-20 pointer-events-auto">
      <div className="max-w-2xl text-slate-100">
        {/* Who we are heading */}
        <h3 className="text-sm font-medium text-slate-400 mb-4 tracking-wide uppercase">Who we are</h3>

        {/* Main description */}
        <h2
          className="text-3xl lg:text-3xl font-medium text-white mb-8 leading-tight"
          style={{ fontFamily: "Ubuntu, sans-serif" }}
        >
          We're a team of Versatile Studio developers and UI/UX designers dedicated to creating high-performance websites
          that leave a lasting "WOW" factor.
        </h2>

        {/* Benefits list */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-7 h-7 border-2 border-slate-400 rounded-full flex items-center justify-center flex-shrink-0 bg-transparent">
              <Check className="w-4 h-4 text-slate-400" />
            </div>
            <p className="text-[1.1rem] text-slate-300">Partner with certified Versatile Studio team.</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-7 h-7 border-2 border-slate-400 rounded-full flex items-center justify-center flex-shrink-0 bg-transparent">
              <Check className="w-4 h-4 text-slate-400" />
            </div>
            <p className="text-[1.1rem] text-slate-300">
              Benefit from our experience in crafting over 200+ high-impact websites.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-7 h-7 border-2 border-slate-400 rounded-full flex items-center justify-center flex-shrink-0 bg-transparent">
              <Check className="w-4 h-4 text-slate-400" />
            </div>
            <p className="text-[1.1rem] text-slate-300">Free up your time and let us work our web magic!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAreSection
