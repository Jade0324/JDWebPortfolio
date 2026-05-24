import { useState, useEffect } from 'react';
import { Sun } from 'lucide-react';

export default function TopBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className="flex items-center justify-between mb-12">
      {/* Brand Label */}
      <div className="flex items-center gap-3">
        <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
        <span className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">
          JDROMERO // DEVELOPER PORTFOLIO
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="glass-card px-4 py-2 text-xs font-bold tracking-widest text-white/40 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-white/10" />
          {formattedTime} WIB
        </div>
        <button className="glass-card p-2 text-amber-400 hover:bg-white/10 transition-colors">
          <Sun size={20} />
        </button>
      </div>
    </div>
  );
}
