const SolutionCard = ({ title, icon }) => (
  <div className="relative p-6 rounded-2xl bg-slate-800/40 backdrop-blur-md shadow-2xl border border-slate-600/50 hover:bg-slate-700/50 transition-all duration-300 w-full min-h-[120px] flex flex-col justify-center group">
    <div className="flex items-center gap-4">
      <div className="group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-base font-semibold text-slate-100 leading-tight">{title}</h3>
    </div>
  </div>
)

export default SolutionCard
