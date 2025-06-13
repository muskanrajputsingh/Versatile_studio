import { useRef } from "react"
import {
  MonitorSmartphone,
  Palette,
  Clock,
  GaugeCircle,
  Smartphone,
  AlertTriangle,
  BarChart3,
  ShieldAlert,
  Bold,
  Figma,
  Globe,
  Triangle,
  LucideImage,
  Framer,
  PenTool,
} from "lucide-react"

// Import components
import Navbar from "../Navbar/Navbar"
import Hero from "./Hero"
import WhoWeAreSection from "./who-we-are-section"
import RightSideAnimations from "./right-side-animations"
import { floatingAnimationsCSS } from "../ui/floating-animations"

// Pain Points data
const painPoints = [
  { id: 1, text: "Lack of SEO", icon: <Palette className="w-4 h-4 text-pink-400" /> },
  { id: 2, text: "Poor UI/UX", icon: <AlertTriangle className="w-4 h-4 text-yellow-400" /> },
  { id: 3, text: "Bad visual hierarchy", icon: <BarChart3 className="w-4 h-4 text-blue-400" /> },
  { id: 4, text: "Risk of security", icon: <ShieldAlert className="w-4 h-4 text-orange-400" /> },
  { id: 5, text: "Mobile Incompatibility", icon: <Smartphone className="w-4 h-4 text-teal-400" /> },
  { id: 6, text: "Poor performance", icon: <GaugeCircle className="w-4 h-4 text-orange-400" /> },
  { id: 7, text: "Slow loading time", icon: <Clock className="w-4 h-4 text-blue-400" /> },
  { id: 8, text: "Outdated design", icon: <MonitorSmartphone className="w-4 h-4 text-sky-400" /> },
]

// Software Icons data
const softwareIcons = [
  {
    id: "behance",
    icon: <Bold className="w-6 h-6 text-slate-400 hover:text-slate-200 transition-colors" />,
    name: "Behance",
  },
  {
    id: "figma",
    icon: <Figma className="w-6 h-6 text-purple-400 hover:text-purple-300 transition-colors" />,
    name: "Figma",
  },
  {
    id: "webflow",
    icon: <Globe className="w-6 h-6 text-blue-500 hover:text-blue-400 transition-colors" />,
    name: "Webflow",
  },
  {
    id: "vercel",
    icon: <Triangle className="w-6 h-6 text-white fill-current hover:opacity-80 transition-opacity" />,
    name: "Vercel",
  },
  {
    id: "photoshop",
    icon: <LucideImage className="w-6 h-6 text-sky-400 hover:text-sky-300 transition-colors" />,
    name: "Photoshop",
  },
  {
    id: "framer",
    icon: <Framer className="w-6 h-6 text-pink-500 hover:text-pink-400 transition-colors" />,
    name: "Framer",
  },
  {
    id: "xd",
    icon: <PenTool className="w-6 h-6 text-rose-400 hover:text-rose-300 transition-colors" />,
    name: "Adobe XD",
  },
]

export default function HeroSection() {
  const heroRef = useRef(null)
  return (
    <div className="relative h-[200vh] w-full" ref={heroRef}>
      {/* Inject CSS for animations */}
      <style>{floatingAnimationsCSS}</style>

      {/* Sticky container that stays in viewport while scrolling within hero section */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background Image - sticky within hero section */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Screenshot 2025-06-12 121916.png')",
          }}
        />

        {/* Right side content - Fixed within sticky container, starts from very top */}
        <RightSideAnimations painPoints={painPoints} softwareIcons={softwareIcons} />
      </div>

      {/* Scrollable content container - positioned absolutely to allow scrolling */}
      <div className="absolute top-0 left-0 w-full h-full z-30 pointer-events-none">
        {/* Navigation Bar - Scrolls with the content */}
        <Navbar />

        {/* Main hero content - adjusted for inline navigation */}
        <Hero />

        {/* Who we are section - adjusted for inline navigation */}
        <WhoWeAreSection />
      </div>
    </div>
  )
}
