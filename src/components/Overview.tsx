import { motion } from 'motion/react';

export default function Overview() {
  return (
    <section className="glass-card p-8 md:p-12 mb-8">
      <div className="mb-6">
        <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-white/60">
          OVERVIEW
        </span>
      </div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold leading-tight mb-8"
      >
        A high-performing <span className="text-blue-400">Software Engineer</span> specializing in <span className="text-purple-400">JavaScript, Python, and C++</span>.
      </motion.h2>
      
      <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-4xl">
        I blend technical troubleshooting skills with operational experience to deliver efficient, secure solutions. From modern web applications to hardware integration prototypes like exoskeletons, I focus on building technology that solves real-world problems.
      </p>
    </section>
  );
}
