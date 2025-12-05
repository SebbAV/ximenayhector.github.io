"use client";

import { MapPin, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Events() {
    const event = {
        title: "Boda Religiosa",
        date: "Sábado, 21 de Febrero, 2026",
        time: "18:00 HRS",
        location: "Hacienda la cassia",
        address: "Blvd. Aeropuerto 2401, Fracciones de los Aguirre, 37680 León de los Aldama, Gto.",
        mapLink: "https://maps.app.goo.gl/AwwdX39N7ubVvU6Y6",
        image: "/civil-bg.jpeg",
        dressCode: "Formal",
        dressCodeDetails: "Ellas: Vestido largo\nEllos: Traje oscuro"
    };

    return (
        <section className="py-20 px-4" style={{ background: "linear-gradient(135deg, var(--classic-blue) 0%, var(--classic-blue-dark) 100%)" }}>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-4xl md:text-5xl mb-4 text-white">Celebración</h2>
                    <p className="text-white/90 max-w-2xl mx-auto">
                        Acompáñanos a celebrar nuestra unión en este momento especial.
                    </p>
                </motion.div>

                {/* Single centered card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto rounded-xl shadow-2xl overflow-hidden transition-all duration-300 border-2 border-white/20 hover:border-white/40"
                >
                    {/* Event Image */}
                    <div
                        className="h-64 md:h-80 bg-stone-200 relative bg-cover bg-center"
                        style={{ backgroundImage: `url(${event.image})` }}
                    >
                    </div>

                    {/* Event Details */}
                    <div className="p-8 md:p-12 bg-white/95">
                        <h3 className="font-serif text-3xl md:text-4xl mb-8 text-center pb-6 border-b-2" style={{ color: "var(--classic-blue)", borderColor: "var(--classic-blue-light)" }}>
                            {event.title}
                        </h3>

                        <div className="space-y-6 text-stone-700">
                            {/* Date */}
                            <div className="flex items-start gap-4">
                                <Calendar className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: "var(--classic-blue)" }} />
                                <div>
                                    <p className="font-medium text-lg">{event.date}</p>
                                </div>
                            </div>

                            {/* Time */}
                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: "var(--classic-blue)" }} />
                                <div>
                                    <p className="font-medium text-lg">{event.time}</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: "var(--classic-blue)" }} />
                                <div className="flex-1">
                                    <p className="font-semibold text-lg mb-1" style={{ color: "var(--classic-blue)" }}>{event.location}</p>
                                    <p className="text-stone-600 mb-3">{event.address}</p>
                                    <a
                                        href={event.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-6 py-2 rounded-lg text-white font-medium transition-all duration-300 hover:shadow-lg"
                                        style={{ backgroundColor: "var(--classic-blue)" }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--classic-blue-light)"}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "var(--classic-blue)"}
                                    >
                                        Ver ubicación en mapa
                                    </a>
                                </div>
                            </div>

                            {/* Dress Code */}
                            <div className="mt-8 pt-8 border-t-2" style={{ borderColor: "var(--classic-blue-accent)" }}>
                                <h4 className="font-serif text-xl mb-3" style={{ color: "var(--classic-blue)" }}>Código de Vestimenta</h4>
                                <p className="font-semibold text-lg mb-2" style={{ color: "var(--classic-blue-light)" }}>{event.dressCode}</p>
                                <p className="text-stone-600 whitespace-pre-line leading-relaxed">
                                    {event.dressCodeDetails}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
