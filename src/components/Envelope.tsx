import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useState } from 'react';

interface EnvelopeProps {
    message: string;
}

export const Envelope = ({ message }: EnvelopeProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center py-24 md:py-48 relative overflow-hidden px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16 md:mb-24 z-10"
            >
                <span className="text-pink-500 text-[10px] md:text-xs font-black uppercase tracking-[0.8em] mb-4 block">Private Archive</span>
                <h2 className="text-4xl md:text-8xl font-serif italic text-white mb-6">A Secret Note</h2>
                <div className="w-12 h-px bg-white/20 mx-auto" />
            </motion.div>

            <div
                className="relative perspective-1000 group cursor-pointer scale-[0.8] xs:scale-90 sm:scale-100"
                onClick={() => setIsOpen(!isOpen)}
            >
                <motion.div
                    animate={isOpen ? { y: 120 } : { y: 0 }}
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                    className="relative w-[300px] h-[200px] xs:w-[340px] xs:h-[230px] sm:w-[500px] sm:h-[350px]"
                >
                    {/* Letter */}
                    <motion.div
                        initial={{ y: 0, opacity: 0 }}
                        animate={isOpen ? { y: -350, opacity: 1, scale: 1.08, rotate: -1, zIndex: 40 } : { y: 0, opacity: 0, scale: 0.95, rotate: 0, zIndex: 15 }}
                        transition={{
                            type: "spring",
                            stiffness: 80,
                            damping: 18,
                            delay: isOpen ? 0.3 : 0
                        }}
                        className="absolute inset-x-4 sm:inset-x-8 top-6 bg-[#1a1a1a] p-6 sm:p-10 rounded-sm shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/5 flex flex-col items-center min-h-[300px] sm:min-h-[350px] max-h-[400px] sm:max-h-[500px] backdrop-blur-xl"
                    >
                        <div className="w-full overflow-y-auto pr-2 custom-scrollbar flex flex-col items-center">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="shrink-0"
                            >
                                <Heart className="text-pink-600 mb-8 fill-pink-600/20" size={32} />
                            </motion.div>
                            <p className="text-white/90 font-serif italic text-xl sm:text-2xl text-center leading-relaxed mb-8">
                                "{message}"
                            </p>
                            <div className="mt-auto w-full flex justify-between items-center opacity-20 shrink-0">
                                <div className="h-px w-8 bg-white" />
                                <span className="text-[10px] uppercase tracking-[0.5em]">confidential</span>
                                <div className="h-px w-8 bg-white" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Envelope Back */}
                    <div className="absolute inset-0 bg-[#121214] rounded-lg shadow-2xl z-10 border border-white/10" />

                    {/* Envelope Flap (3D) */}
                    <motion.div
                        initial={false}
                        animate={{ rotateX: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
                        style={{ transformOrigin: "top" }}
                        className="absolute inset-x-0 top-0 h-1/2 bg-[#1a1a1c] rounded-t-lg z-30 shadow-2xl origin-top border-t border-white/10"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            {!isOpen && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="w-12 h-12 rounded-full bg-black border border-gold/30 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                                        <span className="text-[8px] font-black tracking-widest">AB</span>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>

                    {/* Envelope Front Sides */}
                    <div className="absolute inset-0 z-20 overflow-hidden rounded-lg">
                        <div className="absolute inset-0 bg-[#121214]" style={{ clipPath: 'polygon(0 0, 50% 50%, 0 100%)' }} />
                        <div className="absolute inset-0 bg-[#121214]" style={{ clipPath: 'polygon(100% 0, 50% 50%, 100% 100%)' }} />
                        <div className="absolute inset-0 bg-[#0c0c0d]" style={{ clipPath: 'polygon(0 100%, 50% 50%, 100% 100%)' }} />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
