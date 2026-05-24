import { motion } from 'motion/react';
import { Download, MessageSquare, Github, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function ProfileHeader() {
  return (
    <section className="glass-card p-8 md:p-12 mb-8 relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative pt-12"
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
            className="text-5xl md:text-7xl font-bold mb-2 tracking-tight"
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
              className="bg-white text-navy-950 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white/90 transition-colors"
            >
              <Download size={18} />
              Resume
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/5 border border-white/10 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-colors"
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
    </section>
  );
}
