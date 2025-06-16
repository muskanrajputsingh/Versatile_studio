import { useState } from "react";
import GlowButton from "../ui/glow-button";
import { X } from "lucide-react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-start pl-25 lg:pl-30 pointer-events-auto">
        <div className="max-w-2xl text-slate-100">
          {/* Badge */}
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
            <span className="text-sm font-medium text-white">Soft-tech certified expert</span>
          </div>

          {/* Heading */}
          <h1
            className="font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "Ubuntu, sans-serif", fontSize: "70px" }}
          >
            Versatile Studio
            <br />
            development
            <br />
            agency
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
            We specialize in Versatile Studio development and exceptional UI/UX design to make your brand shine.
          </p>

          {/* Button */}
          <GlowButton onClick={() => setIsModalOpen(true)}>Start a project</GlowButton>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
       <div 
       className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-blue-900 to-purple-900 bg-opacity-95 backdrop-blur-sm overflow-y-auto"
       onClick={() => setIsModalOpen(false)}
     >     
         <div 
        className="relative bg-white/10 backdrop-blur-md text-white rounded-xl shadow-2xl w-full max-w-2xl p-8 z-50 border border-white/20 max-h-screen overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors cursor-pointer z-50 pointer-events-auto"
            >
              <X size={24} />
            </button>

            <h2 className="text-3xl font-bold text-white mb-6">Start Your Project</h2>

            <form onSubmit={handleFormSubmit} className="grid grid-cols-1 gap-4 pointer-events-auto">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors cursor-text pointer-events-auto" 
                required 
              />
              <input 
                type="text" 
                placeholder="Company Name" 
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors cursor-text pointer-events-auto" 
              />
              <input 
                type="text" 
                placeholder="Contact No." 
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors cursor-text pointer-events-auto" 
              />
              <input 
                type="email" 
                placeholder="Contact Email" 
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors cursor-text pointer-events-auto" 
                required 
              />
              <input 
                type="text" 
                placeholder="Project Name" 
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors cursor-text pointer-events-auto" 
                required 
              />
              <textarea 
                placeholder="Project Description" 
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors min-h-[90px] cursor-text pointer-events-auto resize" 
                rows={2}
              />
              <input 
                type="text" 
                placeholder="Deadline (e.g., 30 June 2025)" 
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors cursor-text pointer-events-auto" 
              />
              <input 
                type="text" 
                placeholder="Budget (e.g., ₹50,000)" 
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors cursor-text pointer-events-auto" 
              />
             <textarea 
                placeholder="Special Note" 
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors min-h-[80px] cursor-text pointer-events-auto resize" 
                rows={1}
              />

              <button
                type="submit"
                className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] font-medium cursor-pointer pointer-events-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
