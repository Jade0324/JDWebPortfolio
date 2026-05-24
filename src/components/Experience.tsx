import { motion } from 'motion/react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../constants';

export default function Experience() {
  return (
    <section className="glass-card p-8 md:p-12 mb-8">
      <div className="mb-10">
        <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-white/60">
          EXPERIENCE
        </span>
      </div>

      <div className="flex flex-col gap-6">
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 glass-card-hover"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-2xl font-bold text-white/20 shrink-0">
                {exp.company.charAt(0)}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-white/40 text-xs font-bold tracking-widest uppercase mb-1">
                      {exp.company}
                    </h4>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                  </div>
                  <button className="flex items-center gap-2 text-blue-400 text-xs font-bold tracking-widest hover:text-blue-300 transition-colors">
                    VIEW WORKS <ExternalLink size={14} />
                  </button>
                </div>
                
                <p className="text-white/60 leading-relaxed mb-6 max-w-3xl">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-white/20 tracking-widest uppercase">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} /> {exp.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={14} /> {exp.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
