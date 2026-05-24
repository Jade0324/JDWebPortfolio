import { motion } from 'motion/react';
import { ArrowRight, Newspaper } from 'lucide-react';
import { PRESS } from '../constants';

export default function Press() {
  return (
    <section className="glass-card p-8 md:p-12 mb-8">
      <div className="flex items-center justify-between mb-10">
        <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-white/60">
          IN THE PRESS
        </span>
        <span className="text-[10px] font-bold tracking-widest text-white/20 uppercase">
          MEDIA COVERAGE
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Featured Press */}
        <motion.div 
          className="md:col-span-2 glass-card overflow-hidden relative group aspect-[16/10] md:aspect-auto"
          whileHover={{ y: -5 }}
        >
          <img 
            src={PRESS[0].image} 
            alt={PRESS[0].title}
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
          <div className="absolute bottom-0 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-navy-950 font-bold text-[10px]">
                DN
              </div>
              <span className="font-bold text-sm">{PRESS[0].source}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight max-w-2xl">
              {PRESS[0].title}
            </h3>
            <button className="flex items-center gap-2 text-xs font-bold tracking-widest hover:gap-4 transition-all">
              FEATURED STORY <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>

        {/* Smaller Press Items */}
        <div className="flex flex-col gap-6">
          {PRESS.slice(1).map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -5 }}
              className="glass-card overflow-hidden flex flex-col h-full glass-card-hover"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-white/10 rounded-full" />
                  <span className="text-xs font-bold text-white/60">{item.source}</span>
                </div>
                <h4 className="font-bold mb-6 line-clamp-3">
                  {item.title}
                </h4>
                <div className="mt-auto flex items-center justify-between text-[10px] font-bold tracking-widest text-white/40">
                  <span className="flex items-center gap-2 uppercase">
                    <Newspaper size={12} /> READ ARTICLE
                  </span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
