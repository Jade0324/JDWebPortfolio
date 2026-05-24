import { motion } from 'motion/react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { PROJECTS } from '../constants';

export default function Projects() {
  return (
    <section className="glass-card p-8 md:p-12 mb-8">
      <div className="flex items-center justify-between mb-10">
        <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-white/60">
          PROJECTS
        </span>
        <button className="flex items-center gap-2 text-xs font-bold tracking-widest text-white/40 hover:text-white transition-colors">
          ALL PROJECTS <ChevronDown size={14} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group glass-card overflow-hidden glass-card-hover"
          >
            <div className="aspect-video overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 bg-white text-navy-950 rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold tracking-widest text-white/40 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-white/50 line-clamp-2 mb-6">
                {project.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white/20">{project.year}</span>
                {project.featured && (
                  <span className="bg-amber-500/10 text-amber-500 border border-amber-500/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest">
                    ★ FEATURED
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="text-white/40 hover:text-white font-bold text-sm transition-colors border-b border-white/10 pb-1">
          View More
        </button>
      </div>
    </section>
  );
}
