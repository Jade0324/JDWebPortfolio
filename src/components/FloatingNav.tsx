import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { User, Cpu, Briefcase, Newspaper, Calendar } from 'lucide-react';

const navItems = [
  { id: 'profile', icon: User, label: 'Profile' },
  { id: 'expertise', icon: Cpu, label: 'Expertise' },
  { id: 'projects', icon: Briefcase, label: 'Projects' },
  { id: 'press', icon: Newspaper, label: 'Press' },
  { id: 'experience', icon: Calendar, label: 'Experience' },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once initially

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Desktop Floating Navigation */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="glass-card p-2 flex flex-col gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full transition-all duration-300 group relative cursor-pointer ${
                  isActive ? 'bg-white text-navy-950' : 'text-white/40 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon size={20} />
                <span className="absolute right-full mr-4 px-2 py-1 rounded bg-white text-navy-950 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Floating Navigation */}
      <nav className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="glass-card px-4 py-2 flex items-center gap-4 shadow-2xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                whileTap={{ scale: 0.95 }}
                className={`p-2.5 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer ${
                  isActive ? 'bg-white text-navy-950 scale-110 shadow-lg' : 'text-white/40'
                }`}
              >
                <Icon size={18} />
              </motion.button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
