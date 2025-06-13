const SoftwareIcons = ({ softwareIcons }) => {
  return (
    <div className="relative flex justify-center items-center gap-4 py-7 px-16">
      {/* Background with fading borders */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md shadow-2xl"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          borderRadius: "1rem",
        }}
      ></div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 blur-sm"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          borderRadius: "1rem",
        }}
      ></div>

      {softwareIcons.map((item, index) => {
        const isCenter = index === Math.floor(softwareIcons.length / 2)
        const distanceFromCenter = Math.abs(index - Math.floor(softwareIcons.length / 2))

        return (
          <div
            key={item.id}
            title={item.name}
            className="relative p-3 hover:scale-125 transition-all duration-300 group z-10"
            style={{
              filter: distanceFromCenter > 0 ? `blur(${distanceFromCenter * 0.5}px)` : "none",
              opacity: isCenter ? 1 : 0.7 - distanceFromCenter * 0.1,
              zIndex: isCenter ? 20 : 10,
            }}
          >
            <div className="relative z-10">{item.icon}</div>
          </div>
        )
      })}
    </div>
  )
}

export default SoftwareIcons
