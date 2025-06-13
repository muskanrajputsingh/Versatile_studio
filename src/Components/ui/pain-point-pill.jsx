const PainPointPill = ({ text, icon }) => (
  <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md shadow-xl border border-white/20 w-max hover:bg-white/20 transition-all duration-300">
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-sm font-medium text-white whitespace-nowrap">{text}</span>
    </div>
  </div>
)

export default PainPointPill
