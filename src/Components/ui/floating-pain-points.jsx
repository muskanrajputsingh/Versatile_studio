import PainPointPill from "./pain-point-pill"

const FloatingPainPoints = ({ painPoints }) => {
  return (
    <div className="relative h-87 w-full overflow-hidden">
      {/* Card 1 */}
      <div className="absolute top-0 left-4 animate-float-1">
        <PainPointPill text={painPoints[0].text} icon={painPoints[0].icon} />
      </div>

      {/* Card 2 */}
      <div className="absolute top-0 left-24 animate-float-2">
        <PainPointPill text={painPoints[1].text} icon={painPoints[1].icon} />
      </div>

      {/* Card 3 */}
      <div className="absolute top-0 left-44 animate-float-3">
        <PainPointPill text={painPoints[2].text} icon={painPoints[2].icon} />
      </div>

      {/* Card 4 */}
      <div className="absolute top-0 left-64 animate-float-4">
        <PainPointPill text={painPoints[3].text} icon={painPoints[3].icon} />
      </div>

      {/* Card 5 */}
      <div className="absolute top-0 left-8 animate-float-5">
        <PainPointPill text={painPoints[4].text} icon={painPoints[4].icon} />
      </div>

      {/* Card 6 */}
      <div className="absolute top-0 left-28 animate-float-6">
        <PainPointPill text={painPoints[5].text} icon={painPoints[5].icon} />
      </div>

      {/* Card 7 */}
      <div className="absolute top-0 left-48 animate-float-7">
        <PainPointPill text={painPoints[6].text} icon={painPoints[6].icon} />
      </div>

      {/* Card 8 */}
      <div className="absolute top-0 left-68 animate-float-8">
        <PainPointPill text={painPoints[7].text} icon={painPoints[7].icon} />
      </div>
    </div>
  )
}

export default FloatingPainPoints
