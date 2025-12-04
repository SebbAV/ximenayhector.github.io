"use client";

import { motion } from "framer-motion";
import Countdown from "./Countdown";

export default function Hero() {
    // Using the Civil Wedding date as the main countdown
    const weddingDate = "2026-02-06T00:00:00";

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image - Placeholder for now */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{
                    backgroundImage: "url('/banner.JPG')",
                    filter: "brightness(0.6)"
                }}
            />

            {/* Overlay Content */}
            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white mb-4 tracking-tight">
                        Ximena & Hector
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-20 md:mb-24 font-light tracking-widest uppercase">
                        ¡Nos Casamos!
                    </p>
                </motion.div>

                <Countdown targetDate={weddingDate} />

            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-0 right-0 z-20 text-center animate-bounce"
            >
                <p className="text-white/80 text-sm uppercase tracking-widest">Desliza para ver más</p>
            </motion.div>
        </section>
    );
}
