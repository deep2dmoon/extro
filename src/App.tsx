import { motion, useScroll, useTransform } from 'framer-motion';
import { PartyPopper, Heart, Calendar, MessageSquare, ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { triggerConfetti } from './components/Confetti';
import { Envelope } from './components/Envelope';
import './App.css';

// Asset Imports
import img0 from './assets/IMG-20260223-WA0000.jpg';
import img1 from './assets/IMG-20260223-WA0001.jpg';
import img2 from './assets/IMG-20260223-WA0002.jpg';
import img3 from './assets/IMG-20260223-WA0003.jpg';

const MeshBackground = () => (
  <div className="mesh-container">
    <div className="mesh-ball top-[-20%] left-[-10%] bg-[#2d1b69]" />
    <div className="mesh-ball top-[40%] right-[-10%] bg-[#ff0055] [animation-delay:-5s]" />
    <div className="mesh-ball bottom-[-10%] left-[20%] bg-[#c9a227] [animation-delay:-10s]" />
  </div>
);

const CharacterReveal = ({ text, className, delay = 0, style }: { text: string; className?: string; delay?: number; style?: React.CSSProperties }) => {
  return (
    <span className={className} style={style}>
      {Array.from(text).map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: delay + i * 0.04,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out hidden md:block"
      style={{ marginLeft: '-16px', marginTop: '-16px' }}
    />
  );
};

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => {
    triggerConfetti();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen selection:bg-pink-500/30 bg-grain text-white overflow-x-hidden cursor-none">
      <CustomCursor />
      <MeshBackground />

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
        <div className="w-full max-w-[1600px] mx-auto z-10">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.87, 0, 0.13, 1] }}
            className="w-16 md:w-24 h-px bg-white/30 mb-8 md:mb-16 origin-left"
          />

          <div className="relative">
            <h1 className="text-[clamp(3.5rem,15vw,14rem)] leading-[0.85] md:leading-[0.8] font-black uppercase tracking-tighter mb-4">
              <CharacterReveal text="Happy" className="block" />
              <div className="flex flex-wrap items-baseline">
                <CharacterReveal text="Birthday" className="block text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.6)' } as any} />
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                  className="text-[0.25em] md:text-[0.2em] font-serif italic lowercase tracking-normal text-pink-500 ml-2 md:ml-4"
                >
                  to you
                </motion.span>
              </div>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mt-8 md:mt-12 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="max-w-md"
            >
              <p className="text-base md:text-xl font-light text-white/60 leading-relaxed tracking-wide">
                Dedicated to the one who makes every moment <span className="text-white font-medium">unforgettable</span>. Your light shines brighter than any star.
              </p>
            </motion.div>

            <div className="text-left md:text-right">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="mb-6 md:mb-8"
              >
                <span className="text-[10px] uppercase tracking-[0.6em] text-white/40 block mb-2">Honoring</span>
                <span className="text-2xl md:text-5xl font-serif italic text-white leading-none block">Aramide Blessings</span>
                <span className="text-lg md:text-2xl font-black uppercase tracking-widest text-pink-500 block mt-1">Extrofret</span>
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(236, 72, 153, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={triggerConfetti}
                className="group relative px-10 py-5 md:px-14 md:py-7 rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-[length:200%_auto] hover:bg-right transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(236,72,153,0.2)] border border-white/20"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 text-[11px] md:text-sm font-black uppercase tracking-[0.4em] text-white transition-colors">Invoke Joy</span>
              </motion.button>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 md:gap-6 opacity-30"
        >
          <span className="text-[8px] md:text-[9px] uppercase tracking-[1em]">The Exhibition</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={14} />
          </motion.div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section id="memories" className="py-32 md:py-64 p-6 overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-0 relative">

            {/* Column 1 */}
            <div className="md:col-span-5 md:pt-32">
              <motion.div
                style={{ y: typeof window !== 'undefined' && window.innerWidth > 768 ? y : 0 }}
                className="relative aspect-[3/4] w-full bg-white/5 overflow-hidden group border border-white/10 rounded-[2.5rem]"
              >
                <img
                  src={img0}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  alt="Memory 1"
                />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white z-10">
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] opacity-50 block mb-1 md:mb-2">Scene 01</span>
                  <p className="text-2xl md:text-3xl font-serif italic">Pure Delicacy</p>
                </div>
              </motion.div>
            </div>

            {/* Middle text */}
            <div className="md:col-span-2 flex items-center justify-center p-6 md:p-12">
              <div className="md:rotate-90">
                <span className="text-[9px] md:text-[10px] uppercase tracking-[1em] md:tracking-[1.5em] opacity-20 whitespace-nowrap">Archives of Elegance</span>
              </div>
            </div>

            {/* Column 2 */}
            <div className="md:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative aspect-[4/5] w-full bg-white/5 overflow-hidden group border border-white/10 rounded-[2.5rem]"
              >
                <img
                  src={img1}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  alt="Memory 2"
                />
                <div className="absolute top-6 right-6 md:top-8 md:right-8 text-right z-10">
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] opacity-50 block mb-1 md:mb-2">Scene 02</span>
                  <p className="text-2xl md:text-3xl font-serif italic">Golden Hours</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 md:mt-24 md:ml-[-20%] relative aspect-video md:w-[120%] bg-white/5 overflow-hidden group border border-white/10 rounded-[2.5rem]"
              >
                <img
                  src={img2}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
                  alt="Memory 3"
                />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10">
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] opacity-50 block mb-1 md:mb-2">Scene 03</span>
                  <p className="text-2xl md:text-4xl font-serif italic">Infinite Vibe</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-16 md:mt-24 relative aspect-square w-full md:w-[80%] ml-auto bg-white/5 overflow-hidden group border border-white/10 rounded-[2.5rem]"
              >
                <img
                  src={img3}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  alt="Memory 4"
                />
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-right z-10">
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] opacity-50 block mb-1 md:mb-2">Scene 04</span>
                  <p className="text-2xl md:text-3xl font-serif italic">Divine Essence</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section id="wishes" className="py-32 md:py-64 bg-black/40 backdrop-blur-xl">
        <Envelope message="May your year be as extraordinary as your soul. Happy Birthday, Aramide! ❤️" />
      </section>

      {/* Final Footer */}
      <footer className="py-32 md:py-48 text-center relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-12"
          >
            <Heart size={32} className="text-pink-500 mx-auto mb-8 md:mb-12 stroke-[1px]" />
            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter mb-4 md:mb-8 italic font-serif">A Legacy of Joy.</h2>
            <div className="w-12 md:w-16 h-px bg-white/20 mx-auto mb-6 md:mb-8" />
            <p className="text-white/40 uppercase tracking-[0.6em] md:tracking-[0.8em] text-[8px] md:text-[10px]">Est. 2026 // For Aramide</p>
          </motion.div>
        </div>
      </footer>

      {/* Navigation */}
      <nav className="fixed bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50 p-2 glass-card rounded-full border border-white/10 shadow-2xl">
        {[
          { id: 'top', icon: <PartyPopper size={18} /> },
          { id: 'memories', icon: <Calendar size={18} /> },
          { id: 'wishes', icon: <MessageSquare size={18} /> }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => item.id === 'top' ? window.scrollTo({ top: 0, behavior: 'smooth' }) : document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
            className="w-12 h-12 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
          >
            {item.icon}
          </button>
        ))}
      </nav>

      {/* Custom Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-pink-500 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}

export default App;
