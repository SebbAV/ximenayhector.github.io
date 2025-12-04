"use client";

import { Gift } from "lucide-react";
import { motion } from "framer-motion";

export default function Gifts() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Gift className="w-12 h-12 text-stone-400 mx-auto mb-6" />
                    <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-6">Mesa de Regalos</h2>
                    <p className="text-stone-600 mb-12 max-w-xl mx-auto">
                        Su presencia es nuestro mejor regalo. Si desean tener un detalle con nosotros,
                        hemos registrado algunas opciones en:
                    </p>

                    <div className="flex justify-center items-center gap-8 flex-wrap">
                        <a
                            href="https://www.liverpool.com.mx/tienda/home"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-4 p-8 rounded-xl hover:bg-stone-50 transition-colors duration-300 border border-stone-100"
                        >
                            {/* Liverpool Logo Placeholder - In a real app, use an Image component */}
                            <div className="w-48 h-16 bg-[#e10098] flex items-center justify-center text-white font-bold text-xl rounded shadow-sm group-hover:shadow-md transition-shadow">
                                Liverpool
                            </div>
                            <span className="text-stone-500 group-hover:text-stone-800 transition-colors">
                                Ver Mesa de Regalos
                            </span>
                        </a>

                        {/* Placeholder for another store if needed */}
                        {/* <div className="w-48 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-400">
              Otra Tienda
            </div> */}
                    </div>

                    <div className="mt-12 p-6 bg-stone-50 rounded-lg inline-block">
                        <p className="text-stone-600 font-medium">O si prefieren regalo en efectivo:</p>
                        <p className="text-stone-500 mt-2 font-mono text-sm">
                            Banco: BBVA<br />
                            Cuenta: 1234 5678 90<br />
                            CLABE: 012 345 67890123456 7
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
