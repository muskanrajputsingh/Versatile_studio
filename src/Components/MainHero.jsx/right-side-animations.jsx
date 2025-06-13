import FloatingPainPoints from "../ui/floating-pain-points"
import SoftwareIcons from "../ui/software-icons"
import FloatingSolutions from "../ui/floating-solutions"

const RightSideAnimations = ({ painPoints, softwareIcons }) => {
  return (
    <div className="absolute top-[-16px] right-0 w-1/2 h-full flex items-start justify-end pr-8 lg:pr-16 z-20">
      <div className="flex flex-col items-end space-y-2 max-w-lg pt-4">
        {/* Floating Pain Points Cards */}
        <FloatingPainPoints painPoints={painPoints} />

        {/* Software Icons Container */}
        <SoftwareIcons softwareIcons={softwareIcons} />

        {/* Bottom Solution Cards */}
        <FloatingSolutions />
      </div>
    </div>
  )
}

export default RightSideAnimations
