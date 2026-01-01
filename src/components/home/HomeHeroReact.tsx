
import React from 'react';
import { motion } from 'framer-motion';

export default function HomeHeroReact() {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center bg-stone-100 text-stone-900 overflow-hidden relative">

            {/* Big Brand Text Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 select-none overflow-hidden">
                <span className="text-[20vw] font-medium leading-none whitespace-nowrap">KING KONG</span>
            </div>

            <div className="z-10 text-center px-6 space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-7xl md:text-9xl font-medium tracking-tighter mb-4">
                        KING-KONG
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-3xl font-light tracking-widest uppercase text-stone-600"
                >
                    Rule Your Comfort
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="pt-8"
                >
                    <a href="/sweatshirt" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-stone-900 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900" role="button">
                        Shop The Collection
                        <div className="absolute -inset-3 rounded-xl bg-stone-300 opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-200"></div>
                    </a>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </motion.div>
        </section>
    );
}
