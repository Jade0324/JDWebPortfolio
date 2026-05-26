import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Image as ImageIcon, Sparkles } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    id: '1',
    title: 'Hack the Flood 2025',
    category: 'HACKATHON',
    description: 'Brainstorming and developing a real-time smart flood reporting dashboard with the team.',
    image: 'https://picsum.photos/seed/flood2025/800/500',
    date: 'February 2025'
  },
  {
    id: '2',
    title: 'Google Developers Group (GDG)',
    category: 'COMMUNITY',
    description: 'Collaborating and speaking with students about dev tools, open-source, and cloud credits.',
    image: 'https://picsum.photos/seed/gdgmeet/800/500',
    date: 'April 2026'
  },
  {
    id: '3',
    title: 'UMAK 2025 Competition',
    category: 'WEB DEV',
    description: 'Intense countdown hours crafting highly responsive Web interfaces under pressure.',
    image: 'https://picsum.photos/seed/umakcomp/800/500',
    date: 'March 2025'
  },
  {
    id: '4',
    title: 'CodeSpark Hackathon',
    category: 'AWARD',
    description: 'Secured 3rd place with our automated security inspection prototype.',
    image: 'https://picsum.photos/seed/spark3rd/800/500',
    date: 'January 2026'
  },
  {
    id: '5',
    title: 'Exoskeleton Prototyping',
    category: 'HARDWARE',
    description: 'Fine-tuning microcontroller calibration and sensory modules for motion support.',
    image: 'https://picsum.photos/seed/exodev/800/500',
    date: 'October 2024'
  },
  {
    id: '6',
    title: "Romero's Party Needs",
    category: 'COORDINATION',
    description: 'Setting up high-end stage lighting and sound equipment layouts for celebration events.',
    image: 'https://picsum.photos/seed/partycoord/800/500',
    date: 'Active Operations'
  }
];

export default function Gallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update button visibility based on scroll position
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      // Use offset margin of 5px to avoid subpixel floating inaccuracies
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      // Run once on load
      checkScroll();
      // Also check on window resize
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75; // Scroll 75% of the visible container
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="glass-card p-8 md:p-12 mb-8 relative overflow-hidden">
      {/* Visual Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 relative z-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="bg-amber-500/10 text-amber-500 border border-amber-500/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 animate-spin duration-3000" />
              GALLERY & MILESTONES
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-2.5">
            <ImageIcon className="text-white/40" size={24} />
            Moments on the Field
          </h2>
          <p className="text-sm text-white/50 max-w-xl">
            A visual timeline of competitions, tech conferences, community networking, and hands-on production events.
          </p>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-2 self-end sm:self-center">
          <button
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-300 ${
              canScrollLeft
                ? 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 cursor-pointer'
                : 'bg-white/5 border-white/5 text-white/20 cursor-not-allowed'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-300 ${
              canScrollRight
                ? 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 cursor-pointer'
                : 'bg-white/5 border-white/5 text-white/20 cursor-not-allowed'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Scrollable Carousel Wrapper */}
      <div className="relative w-full -mx-4 px-4 sm:mx-0 sm:px-0">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth pb-4 select-none scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-track]:bg-transparent"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="w-[280px] sm:w-[340px] shrink-0 glass-card bg-white/[0.02] hover:bg-white/[0.05] border-white/10 hover:border-white/20 transition-all duration-300 p-4 flex flex-col justify-between group"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div>
                {/* Visual Image container with referrerPolicy */}
                <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4 relative bg-navy-950/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                  />
                  {/* Category Pill Tag */}
                  <span className="absolute top-3 left-3 bg-navy-950/80 border border-white/10 text-white/90 text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                <div className="text-left space-y-1">
                  <span className="block text-[10px] font-mono text-amber-400 font-bold tracking-wide">
                    {item.date}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
