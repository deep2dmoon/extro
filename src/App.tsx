import { motion } from 'framer-motion';
import { PartyPopper, Heart, Calendar, MessageSquare } from 'lucide-react';
import { useEffect } from 'react';
import { triggerConfetti } from './components/Confetti';
import { Envelope } from './components/Envelope';
import './App.css';

function App() {
  useEffect(() => {
    triggerConfetti();
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] selection:bg-purple-200 bg-grain">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 }
            }
          }}
          className="text-center z-10 px-4"
        >
          <motion.div
            variants={{
              hidden: { scale: 0, rotate: -180 },
              visible: { scale: 1, rotate: 0 }
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="inline-block p-6 rounded-full bg-white shadow-2xl text-purple-600 mb-8 border border-purple-100"
          >
            <PartyPopper size={56} className="animate-bounce" />
          </motion.div>

          <motion.h1
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            className="text-7xl md:text-9xl premium-text mb-6 font-black tracking-tight"
          >
            Happy <br className="md:hidden" /> Birthday!
          </motion.h1>

          <motion.p
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            className="text-xl md:text-3xl text-gray-500 font-light tracking-[0.2em] mb-12 uppercase"
          >
            Aramide <span className="font-bold text-gray-900 mx-2">Blessings</span> Extrofret
          </motion.p>

          <motion.button
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { scale: 1, opacity: 1 }
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(109, 40, 217, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={triggerConfetti}
            className="px-10 py-5 bg-purple-600 text-white rounded-2xl font-bold shadow-2xl hover:bg-purple-700 transition-all flex items-center gap-3 mx-auto group"
          >
            Celebrate Again
            <Heart size={24} className="group-hover:fill-current transition-all animate-pulse" />
          </motion.button>
        </motion.div>

        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-br from-purple-200 to-pink-100 rounded-full blur-[100px]"
              animate={{
                x: [0, (i % 2 === 0 ? 100 : -100), 0],
                y: [0, (i % 3 === 0 ? 150 : -50), 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 15 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                width: `${100 + Math.random() * 300}px`,
                height: `${100 + Math.random() * 300}px`,
                left: `${(i * 15) % 100}%`,
                top: `${(i * 25) % 100}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Memories Section */}
      <section id="memories" className="py-32 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl premium-text mb-6 font-black">Captured Moments</h2>
          <div className="h-2 w-24 bg-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 font-medium uppercase tracking-[0.3em]">The best is yet to come</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
          {[
            { url: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&auto=format&fit=crop', title: 'Sweeter than honey', rotate: -3 },
            { url: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?w=800&auto=format&fit=crop', title: 'Unforgettable vibes', rotate: 2 },
            { url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&auto=format&fit=crop', title: 'Pure happiness', rotate: -2 }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: item.rotate }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ y: -20, rotate: 0, scale: 1.02, zIndex: 10 }}
              className="bg-white p-4 pb-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-sm border border-gray-100 flex flex-col gap-4 group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1 italic">Memory #{i + 1}</p>
                <p className="text-gray-900 font-serif text-2xl lowercase italic">"{item.title}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Message Section */}
      <section id="wishes">
        <Envelope message="May your year be filled with as much joy as you bring to everyone around you! You deserve the world and more. ❤️" />
      </section>

      {/* Footer */}
      <footer className="py-32 text-center bg-[#fafafa] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full blur-[100px] opacity-20" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative z-10"
        >
          <Heart className="mx-auto text-pink-500 mb-8 animate-pulse" fill="currentColor" size={40} />
          <p className="text-gray-400 font-medium tracking-widest uppercase text-sm mb-4">Celebrated with Joy</p>
          <div className="h-px w-12 bg-gray-200 mx-auto mb-8" />
          <p className="text-gray-900 font-serif italic text-xl">For someone truly extraordinary.</p>
        </motion.div>
      </footer>

      {/* Feature Navigation */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 glass-card px-8 py-5 flex gap-12 items-center z-50 shadow-2xl border border-white/40">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-purple-600 hover:scale-110 transition-transform group"
        >
          <PartyPopper size={26} className="group-hover:rotate-12 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-widest">Main</span>
        </button>
        <button
          onClick={() => document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-purple-600 hover:scale-110 transition-all group"
        >
          <Calendar size={26} className="group-hover:-rotate-12 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-widest">Gallery</span>
        </button>
        <button
          onClick={() => document.getElementById('wishes')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-purple-600 hover:scale-110 transition-all group"
        >
          <MessageSquare size={26} className="group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-widest">Note</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
