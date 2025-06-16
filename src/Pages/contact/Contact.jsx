import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";

const badges = [
  { label: "Versatile Studio partner", color: "bg-blue-600", icon: "V" },
  { label: "Bootstrap partner", color: "bg-purple-600", icon: "B" },
  { label: "Awwwards honors", color: "bg-white text-black border border-gray-300", icon: "W." },
];

export default function Contact() {
  const [activeTab, setActiveTab] = useState("contact");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-purple-950 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">Contact us</h1>
          <p className="text-slate-300 mb-8 max-w-md">
            We'd love to hear more about your project! Please fill out the form with as much detail as you can. We'll reach out soon to discuss how we can help turn your idea into reality.
          </p>
          <div className="flex gap-4 mb-8 flex-wrap">
            {badges.map((badge, i) => (
              <span key={i} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm ${badge.color}`}>{badge.icon && <span className="font-bold text-lg">{badge.icon}</span>} {badge.label}</span>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-gray-300 mb-4">
              We are blessed to have met this team and <span className="font-semibold text-white">will do everything we can to retain them</span> in our orbit for future projects and collaborations.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Romain T" className="w-10 h-10 rounded-full object-cover border-2 border-white" />
              <div>
                <div className="font-bold text-white">Romain T</div>
                <div className="text-xs text-gray-400">Co-founder - e54.io</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side (Form) */}
        <div className="w-full">
         
            {/* <button
              className={`px-6 py-2 rounded-t-lg font-semibold text-white transition-all duration-200 focus:outline-none ${activeTab === "contact" ? "bg-[#181c23]" : "bg-transparent border-b-2 border-transparent hover:bg-[#23272f]"}`}
              onClick={() => setActiveTab("contact")}
            >
              Contact us
            </button> */}
         
          <div className="rounded-2xl bg-[#181c23]/80 shadow-xl p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">Full name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="What is your full name?"
                  className="w-full px-4 py-3 rounded-lg bg-[#13161b] border border-[#23272f] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Email address <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="The email address you check most"
                  className="w-full px-4 py-3 rounded-lg bg-[#13161b] border border-[#23272f] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Subject <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg bg-[#13161b] border border-[#23272f] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Message <span className="text-red-500">*</span></label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-[#13161b] border border-[#23272f] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-2 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white cursor-pointer font-semibold text-lg transition-all duration-200 shadow-md"
              >
                {submitted ? "Submitted!" : "Submit now"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
