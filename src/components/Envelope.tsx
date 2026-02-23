import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useState } from 'react';

interface EnvelopeProps {
    message: string;
}

export const Envelope = ({ message }: EnvelopeProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center py-32 bg-white relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16 z-10"
            >
                <h2 className="text-5xl md:text-7xl premium-text mb-6 font-black">A Secret Note</h2>
                <p className="text-gray-400 text-lg font-medium tracking-widest uppercase">Click to unveil your message</p>
            </motion.div>

            <div
                className="relative perspective-1000 group cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <motion.div
                    animate={isOpen ? { y: 100 } : { y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="relative w-[340px] h-[230px] sm:w-[450px] sm:h-[300px]"
                >
                    {/* Letter */}
                    <motion.div
                        initial={{ y: 0, opacity: 0 }}
                        animate={isOpen ? { y: -180, opacity: 1, scale: 1.05 } : { y: 0, opacity: 0, scale: 0.9 }}
                        className="absolute inset-x-6 top-4 bg-white p-8 rounded-sm shadow-2xl z-0 border border-purple-50 flex flex-col items-center justify-center min-h-[250px]"
                    >
                        <Heart className="text-pink-500 mb-6 fill-current animate-pulse" size={32} />
                        <p className="text-gray-800 font-serif italic text-xl sm:text-2xl text-center leading-relaxed">
                            "{message}"
                        </p>
                    </motion.div>

                    {/* Envelope Back */}
                    <div className="absolute inset-0 bg-purple-100 rounded-lg shadow-xl z-10" />

                    {/* Envelope Flap (3D) */}
                    <motion.div
                        initial={false}
                        animate={{ rotateX: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        style={{ transformOrigin: "top" }}
                        className="absolute inset-x-0 top-0 h-1/2 bg-purple-200 rounded-t-lg z-30 shadow-sm origin-top"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            {!isOpen && <Heart className="text-purple-400" size={24} />}
                        </div>
                    </motion.div>

                    {/* Envelope Front Sides */}
                    <div className="absolute inset-0 z-20 overflow-hidden rounded-lg">
                        <div className="absolute inset-0 bg-purple-100" style={{ clipPath: 'polygon(0 0, 50% 50%, 0 100%)' }} />
                        <div className="absolute inset-0 bg-purple-100" style={{ clipPath: 'polygon(100% 0, 50% 50%, 100% 100%)' }} />
                        <div className="absolute inset-0 bg-purple-50" style={{ clipPath: 'polygon(0 100%, 50% 50%, 100% 100%)' }} />
                    </div>
                </motion.div>

                {/* Celebration Decorations */}
                <AnimatePresence>
                    {isOpen && [...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0, y: 0 }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0],
                                y: -200 - Math.random() * 200,
                                x: (Math.random() - 0.5) * 300
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 2, ease: "easeOut", delay: i * 0.1 }}
                            className="absolute top-1/2 left-1/2 text-pink-400 pointer-events-none"
                        >
                            <Heart fill="currentColor" size={24} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Background elements for this section */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-50 rounded-full blur-[100px] -z-10 opacity-50" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-50 rounded-full blur-[100px] -z-10 opacity-50" />
        </div>
    );
};
