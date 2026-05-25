import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, PenTool, Film, Radio, Briefcase, MessageSquare } from 'lucide-react';
import { SKILLS } from '../constants';

const iconMap: Record<string, any> = {
  Code,
  PenTool,
  Film,
  Radio,
  Briefcase,
  MessageSquare,
};

export default function Expertise() {
  const [activeSkill, setActiveSkill] = useState(SKILLS[0]);

  return (
    <section className="glass-card p-8 md:p-12 mb-8">
      <div className="mb-10">
        <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-white/60">
          EXPERTISE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {SKILLS.map((skill) => {
            const Icon = iconMap[skill.icon];
            const isActive = activeSkill.id === skill.id;
            
            return (
              <button
                key={skill.id}
                onClick={() => setActiveSkill(skill)}
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left border ${
                  isActive 
                    ? 'bg-white/10 border-white/10 shadow-xl' 
                    : 'text-white/40 border-transparent hover:text-white hover:bg-white/5'
                }`}
              >
                <div className={`p-2 rounded-xl transition-colors duration-300 ${isActive ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-white/60'}`}>
                  <Icon size={20} />
                </div>
                <span className="font-bold">{skill.name}</span>
              </button>
            );
          })}
        </div>
 
        {/* Content */}
        <div className="lg:col-span-8">
          <div className="glass-card p-8 border-blue-500/20 bg-blue-500/5 h-[460px] sm:h-[380px] lg:h-[400px] overflow-y-auto flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkill.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="h-full flex flex-col justify-between text-left"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                    {(() => {
                      const Icon = iconMap[activeSkill.icon];
                      return <Icon size={32} />;
                    })()}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{activeSkill.name}</h3>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6">
                    {activeSkill.description}
                  </p>
                </div>
  
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-4 flex items-center gap-2">
                    <span className="w-4 h-px bg-white/20" />
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeSkill.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
