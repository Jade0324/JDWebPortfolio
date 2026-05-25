import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, MessageSquare, Github, Instagram, Linkedin, Youtube, Trophy, ChevronDown, ChevronUp } from 'lucide-react';

const otherAchievements = [
  { name: 'UMAK 2025 Competitor', tag: 'Web Dev' },
  { name: 'GDG Innolympics 2026', tag: 'Competitor' },
  { name: 'Explicit CodeSpark Hackathon', tag: '3rd Place' },
  { name: 'UP Hack-It-Up 2026', tag: 'Participant' },
  { name: 'Morph Build in Payments', tag: 'Developer' },
];

export default function ProfileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="glass-card p-8 md:p-12 mb-8 relative overflow-hidden">
      {/* Top Section: Avatar & Info */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative pt-12 shrink-0 animate-fade-in"
        >
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/jdromero/400/400" 
              alt="John David Romero" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider flex items-center gap-1.5 backdrop-blur-sm whitespace-nowrap shadow-lg">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            AVAILABLE FOR WORK
          </div>
        </motion.div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight text-white inline-block"
          >
            John David Romero
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 mb-8 font-medium"
          >
            Software Engineer \ BSIT Student
          </motion.p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-navy-950 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white/90 transition-colors cursor-pointer"
            >
              <Download size={18} />
              Resume
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/5 border border-white/10 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <MessageSquare size={18} />
              Let's Talk
            </motion.button>
            
            <div className="h-8 w-px bg-white/10 mx-2 hidden sm:block" />
            
            <div className="flex items-center gap-3">
              {[Github, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, color: '#fff' }}
                  className="text-white/40 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Competitions Dropdown aligned bottom-right */}
      <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-blue-600/20 to-blue-500/5 border border-blue-500/20 px-5 py-3.5 rounded-2xl w-full md:w-auto relative overflow-hidden group">
          {/* Subtle glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex items-center gap-3 shrink-0">
            {/* Google Developers colors */}
            <div className="flex gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]" />
            </div>
            <div className="h-6 w-px bg-white/10 hidden sm:block" />
          </div>

          <div className="text-center sm:text-left min-w-0">
            <span className="block text-[9px] font-bold tracking-[0.25em] text-blue-400 uppercase leading-none mb-1">
              I'M PART OF
            </span>
            <span className="block text-sm md:text-base font-extrabold text-white tracking-tight uppercase">
              Google Developers Group
            </span>
            <span className="block text-[10px] text-white/50 leading-none mt-0.5">
              Member & Student Advocate
            </span>
          </div>
        </div>

        {/* Competitions Dropdown Container */}
        <div className="relative w-full md:w-80 shrink-0 z-40 max-w-full">
          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full bg-white/5 border text-white p-4 rounded-2xl flex items-center justify-between cursor-pointer shadow-xl select-none transition-all duration-300 backdrop-blur-sm ${
              isOpen ? 'bg-white/15 border-white/25 shadow-black/50' : 'border-white/10 hover:bg-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <Trophy className="text-amber-400 shrink-0 animate-pulse" size={20} />
              <div className="text-left min-w-0">
                <span className="block text-[10px] font-bold tracking-widest uppercase text-amber-400/90">Featured Competition</span>
                <span className="block text-sm font-bold truncate text-white">Hack the Flood 2025</span>
                <span className="block text-[11px] text-white/60 font-medium">Top 10 Finalist</span>
              </div>
            </div>
            <div className="text-white/60 p-1 shrink-0 group-hover:text-white transition-colors">
              {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
          </motion.div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full mb-3 left-0 right-0 bg-navy-950/95 border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-md z-50 text-left"
              >
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                  <h4 className="text-xs font-bold tracking-widest text-white/40 uppercase">Other Achievements</h4>
                  <span className="text-[10px] bg-white/10 text-white/80 px-2 py-0.5 rounded-full font-bold font-mono">5 More</span>
                </div>
                <ul className="flex flex-col gap-3">
                  {otherAchievements.map((item, idx) => (
                    <li key={idx} className="flex items-center justify-between gap-3 text-sm group">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="w-2 h-2 rounded bg-amber-500 shrink-0 group-hover:scale-125 transition-transform" />
                        <span className="font-medium text-white/80 group-hover:text-white transition-colors truncate">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold bg-white/5 text-white/60 border border-white/10 px-2 py-1 rounded-md shrink-0 whitespace-nowrap uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}


