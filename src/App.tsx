import { motion } from 'motion/react';
import ProfileHeader from './components/ProfileHeader';
import Overview from './components/Overview';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Press from './components/Press';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import FloatingNav from './components/FloatingNav';
import TopBar from './components/TopBar';

export default function App() {
  return (
    <div className="min-h-screen relative selection:bg-blue-500/30">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <FloatingNav />

      <main className="max-w-6xl mx-auto px-6 py-12 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <TopBar />
          <div id="profile">
            <ProfileHeader />
          </div>
          <Overview />
          
          <div id="expertise">
            <Expertise />
          </div>
          
          <div id="projects">
            <Projects />
          </div>
          
          <div id="press">
            <Press />
          </div>
          
          <div id="experience">
            <Experience />
          </div>

          <div id="gallery">
            <Gallery />
          </div>

          {/* Footer */}
          <footer className="mt-24 pb-12 border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-white/20 uppercase">
              <span>© 2026 JOHN DAVID ROMERO</span>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <span>ALL RIGHTS RESERVED</span>
            </div>
            
            <div className="flex items-center gap-8">
              {['Twitter', 'Instagram', 'LinkedIn', 'YouTube'].map(social => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-xs font-bold tracking-widest text-white/20 hover:text-white transition-colors uppercase"
                >
                  {social}
                </a>
              ))}
            </div>
          </footer>
        </motion.div>
      </main>
    </div>
  );
}
