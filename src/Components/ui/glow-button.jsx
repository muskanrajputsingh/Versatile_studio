// Animated Border Drawing Button Component
const GlowButton = ({ children, onClick }) => {
  return (
    <button className="glow-button group" onClick={onClick}>
      <span>{children}</span>
      <span className="border-line border-top" />
      <span className="border-line border-right" />
      <span className="border-line border-bottom" />
      <span className="border-line border-left" />
    </button>
  )
}

export default GlowButton
