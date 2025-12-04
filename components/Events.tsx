"use client";

import { MapPin, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Events() {
    const events = [
        {
            title: "Boda Civil",
            date: "Viernes, 6 de Febrero, 2026",
            time: "17:00 HRS",
            location: "Hacienda Catrina",
            address: "Blvd. Mineral de Peñafiel Sur #600, Col, Guanajuato Puerto Interior, 36275 Silao de la Victoria, Gto.",
            mapLink: "https://maps.app.goo.gl/5rppoQozi5kPaMaYA",
            image: "/religious-bg.jpg",
            dressCode: "Cocktail",
            dressCodeDetails: "Ellas: Vestido corto o midi\nEllos: Traje"
        },
        {
            title: "Boda Religiosa",
            date: "Sábado, 21 de Febrero, 2026",
            time: "18:00 HRS",
            location: "Hacienda la cassia",
            address: "Blvd. Aeropuerto 2401, Fracciones de los Aguirre, 37680 León de los Aldama, Gto.",
            mapLink: "https://maps.app.goo.gl/AwwdX39N7ubVvU6Y6",
            image: "/civil-bg.jpeg",

            dressCode: "Formal",
            dressCodeDetails: "Ellas: Vestido largo\nEllos: Traje oscuro"
        }
    ];

    return (
        <section className="py-20 px-4 bg-stone-50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-4">Celebración</h2>
                    <p className="text-stone-600 max-w-2xl mx-auto">
                        Acompáñanos a celebrar nuestra unión en estos momentos especiales.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div
                                className="h-48 bg-stone-200 relative bg-cover bg-center"
                                style={{ backgroundImage: `url(${event.image})` }}
                            >
                            </div>

                            <div className="p-8">
                                <h3 className="font-serif text-2xl text-stone-800 mb-6 border-b border-stone-100 pb-4">
                                    {event.title}
                                </h3>

                                <div className="space-y-4 text-stone-600">
                                    <div className="flex items-start gap-3">
                                        <Calendar className="w-5 h-5 mt-1 text-stone-400" />
                                        <p>{event.date}</p>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 mt-1 text-stone-400" />
                                        <p>{event.time}</p>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 mt-1 text-stone-400" />
                                        <div>
                                            <p className="font-medium text-stone-800">{event.location}</p>
                                            <p className="text-sm mb-2">{event.address}</p>
                                            <a
                                                href={event.mapLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-stone-500 underline text-sm hover:text-stone-800 transition-colors"
                                            >
                                                Ver ubicación en mapa
                                            </a>
                                        </div>
                                    </div>

                                    {/* Dress Code */}
                                    <div className="mt-6 pt-6 border-t border-stone-100">
                                        <h4 className="font-serif text-lg text-stone-800 mb-2">Código de Vestimenta</h4>
                                        <p className="text-stone-600 font-medium mb-1">{event.dressCode}</p>
                                        <p className="text-stone-500 text-sm whitespace-pre-line">
                                            {event.dressCodeDetails}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
