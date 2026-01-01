
import React from 'react';
import { motion } from 'framer-motion';

export default function FeaturedProductReact() {
    return (
        <section className="py-32 bg-white text-stone-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Product Image Side */}
                    <div className="relative group perspective-1000">
                        <motion.div
                            initial={{ opacity: 0, rotate: -5, x: -50 }}
                            whileInView={{ opacity: 1, rotate: -2, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute -inset-4 bg-orange-100 rounded-3xl"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            whileHover={{ scale: 1.02, rotate: 1 }}
                            className="relative bg-stone-200 rounded-2xl h-[600px] w-full flex items-center justify-center overflow-hidden shadow-xl z-10 cursor-pointer"
                        >
                            {/* In a real app, this would be an <img /> */}
                            <div className="absolute inset-0 bg-stone-300 flex items-center justify-center group-hover:bg-stone-200 transition-colors">
                                <span className="text-stone-500 font-bold text-2xl tracking-widest opacity-20 group-hover:scale-110 transition-transform duration-500">IMAGE</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Product Details Side */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-4"
                        >
                            <span className="px-4 py-1 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest rounded-full">New Arrival</span>
                            <span className="text-stone-500 font-medium">Limited Edition</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-6xl font-bold leading-tight"
                        >
                            The Essential <br />
                            <span className="text-stone-400">Cotton Sweatshirt</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl text-stone-600 leading-relaxed max-w-md"
                        >
                            Engineered for absolute comfort. 450gsm organic cotton, double-stitched seams, and a fit that feels like home.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-6 pt-4"
                        >
                            <a href="/sweatshirt" className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
                                Shop Now - $85
                            </a>
                            <a href="/sweatshirt" className="inline-flex items-center justify-center px-8 py-4 border-2 border-stone-200 text-stone-900 font-bold rounded-xl hover:border-stone-900 transition-colors">
                                View Details
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="grid grid-cols-3 gap-8 pt-8 border-t border-stone-100"
                        >
                            <div>
                                <span className="block text-2xl font-bold">450</span>
                                <span className="text-sm text-stone-500 uppercase tracking-wider">GSM Weight</span>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold">100%</span>
                                <span className="text-sm text-stone-500 uppercase tracking-wider">Organic</span>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold">Life</span>
                                <span className="text-sm text-stone-500 uppercase tracking-wider">Guarantee</span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
