import SolutionCard from "./solution-card"
import { Shield, BarChart3, Search } from "lucide-react"

const FloatingSolutions = () => {
  return (
    <div className="relative h-96 w-full max-w-2xl overflow-hidden mt-0">
      <div className="absolute top-0 left-4 animate-solution-1">
        <SolutionCard title="Secure website" icon={<Shield className="w-6 h-6 text-yellow-400" />} />
      </div>
      <div className="absolute top-0 right-4 animate-solution-2">
        <SolutionCard
          title="Lightning fast performance"
          icon={<BarChart3 className="w-6 h-6 text-orange-400" />}
        />
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-solution-3">
        <SolutionCard title="SEO optimized" icon={<Search className="w-6 h-6 text-green-400" />} />
      </div>
    </div>
  )
}

export default FloatingSolutions
