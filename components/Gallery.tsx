"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Placeholder images - User should replace these
    const images = [
        "/gallery-1.jpg",
        "/gallery-2.jpg",
        "/gallery-3.jpg",
        "/gallery-5.jpg",
    ];

    useEffect(() => {
        if (!emblaApi) return;

        emblaApi.on("select", () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        });
    }, [emblaApi]);

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    return (
        <section className="py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, var(--classic-blue-dark) 0%, var(--classic-blue) 100%)" }}>
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="font-serif text-4xl md:text-5xl mb-4 text-white">Nuestra Historia</h2>
                    <p className="text-white/90">Momentos que nos han traído hasta aquí.</p>
                </motion.div>

                <div className="relative">
                    <div className="overflow-hidden rounded-xl shadow-2xl" ref={emblaRef}>
                        <div className="flex">
                            {images.map((src, index) => (
                                <div className="flex-[0_0_100%] min-w-0 relative aspect-[4/3] md:aspect-[16/9]" key={index}>
                                    <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={scrollPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg transition-all"
                        style={{ color: "var(--classic-blue)" }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--classic-blue)";
                            e.currentTarget.style.color = "white";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
                            e.currentTarget.style.color = "var(--classic-blue)";
                        }}
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg transition-all"
                        style={{ color: "var(--classic-blue)" }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--classic-blue)";
                            e.currentTarget.style.color = "white";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
                            e.currentTarget.style.color = "var(--classic-blue)";
                        }}
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex justify-center gap-2 mt-6">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className="w-3 h-3 rounded-full transition-colors"
                            style={{ backgroundColor: index === selectedIndex ? "var(--classic-blue)" : "#d6d3d1" }}
                            onClick={() => emblaApi && emblaApi.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
