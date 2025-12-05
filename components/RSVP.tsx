"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
    name: string;
    email: string;
    attendance: "yes" | "no" | "";
    guests: string;
    message: string;
}

export default function RSVP() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        attendance: "",
        guests: "1",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    // TODO: Replace with your Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzhT9VtORQV-XU_L4JxQ-F51_GYmfgXZjn2xhUc8DBU3Lyqq4gixpzaxkWUVRd9PxO3/exec";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.email || !formData.attendance) {
            setErrorMessage("Por favor completa todos los campos requeridos.");
            setSubmitStatus("error");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors", // Google Apps Script requires this
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    attendance: formData.attendance,
                    guests: formData.attendance === "yes" ? formData.guests : "0",
                    message: formData.message,
                    timestamp: new Date().toISOString()
                })
            });

            // With no-cors, we can't read the response, so we assume success
            setSubmitStatus("success");
            setFormData({
                name: "",
                email: "",
                attendance: "",
                guests: "1",
                message: ""
            });
        } catch (error) {
            console.error("Error submitting RSVP:", error);
            setSubmitStatus("error");
            setErrorMessage("Hubo un error al enviar tu confirmación. Por favor intenta de nuevo.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <Heart className="w-12 h-12 mx-auto mb-4" style={{ color: "var(--classic-blue)" }} />
                    <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-4">
                        Confirma tu Asistencia
                    </h2>
                    <p className="text-stone-600 max-w-2xl mx-auto">
                        Tu presencia es muy importante para nosotros. Por favor confirma si podrás acompañarnos en este día tan especial.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="rounded-xl shadow-lg p-8 md:p-10"
                    style={{
                        background: "linear-gradient(135deg, rgba(46, 64, 87, 0.03) 0%, rgba(245, 245, 244, 0.8) 100%)"
                    }}
                >
                    {/* Name Field */}
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-stone-700 font-medium mb-2">
                            Nombre Completo <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 transition-all"
                            onFocus={(e) => e.target.style.borderColor = "var(--classic-blue)"}
                            onBlur={(e) => e.target.style.borderColor = "#d6d3d1"}
                            placeholder="Tu nombre"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-stone-700 font-medium mb-2">
                            Correo Electrónico <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 transition-all"
                            onFocus={(e) => e.target.style.borderColor = "var(--classic-blue)"}
                            onBlur={(e) => e.target.style.borderColor = "#d6d3d1"}
                            placeholder="tu@email.com"
                            required
                        />
                    </div>

                    {/* Attendance Field */}
                    <div className="mb-6">
                        <label className="block text-stone-700 font-medium mb-3">
                            ¿Confirmas tu asistencia? <span className="text-red-500">*</span>
                        </label>
                        <div className="flex gap-4">
                            <label className="flex-1">
                                <input
                                    type="radio"
                                    name="attendance"
                                    value="yes"
                                    checked={formData.attendance === "yes"}
                                    onChange={(e) => setFormData({ ...formData, attendance: "yes" })}
                                    className="sr-only peer"
                                    required
                                />
                                <div className="cursor-pointer px-6 py-3 rounded-lg border-2 border-stone-300 text-center transition-all peer-checked:border-[var(--classic-blue)] peer-checked:bg-[var(--classic-blue-accent)] peer-checked:text-[var(--classic-blue)] hover:border-stone-400">
                                    ¡Sí, asistiré!
                                </div>
                            </label>
                            <label className="flex-1">
                                <input
                                    type="radio"
                                    name="attendance"
                                    value="no"
                                    checked={formData.attendance === "no"}
                                    onChange={(e) => setFormData({ ...formData, attendance: "no" })}
                                    className="sr-only peer"
                                />
                                <div className="cursor-pointer px-6 py-3 rounded-lg border-2 border-stone-300 text-center transition-all peer-checked:border-stone-500 peer-checked:bg-stone-100 peer-checked:text-stone-700 hover:border-stone-400">
                                    No podré asistir
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Number of Guests (only if attending) */}
                    {formData.attendance === "yes" && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mb-6"
                        >
                            <label htmlFor="guests" className="block text-stone-700 font-medium mb-2">
                                Número de Invitados
                            </label>
                            <select
                                id="guests"
                                value={formData.guests}
                                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 transition-all"
                                onFocus={(e) => e.target.style.borderColor = "var(--classic-blue)"}
                                onBlur={(e) => e.target.style.borderColor = "#d6d3d1"}
                            >
                                {[1, 2, 3, 4, 5].map(num => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </select>
                        </motion.div>
                    )}

                    {/* Message/Dietary Restrictions */}
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-stone-700 font-medium mb-2">
                            Mensaje o Restricciones Alimentarias (Opcional)
                        </label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 transition-all resize-none"
                            onFocus={(e) => e.target.style.borderColor = "var(--classic-blue)"}
                            onBlur={(e) => e.target.style.borderColor = "#d6d3d1"}
                            placeholder="Déjanos un mensaje o indícanos si tienes alguna restricción alimentaria..."
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-lg font-medium text-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                            backgroundColor: "var(--classic-blue)",
                        }}
                        onMouseEnter={(e) => {
                            if (!isSubmitting) {
                                e.currentTarget.style.backgroundColor = "var(--classic-blue-light)";
                            }
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--classic-blue)";
                        }}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Enviando...
                            </>
                        ) : (
                            "Enviar Confirmación"
                        )}
                    </button>

                    {/* Success Message */}
                    {submitStatus === "success" && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
                        >
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-green-800 font-medium">¡Confirmación enviada!</p>
                                <p className="text-green-700 text-sm mt-1">
                                    Gracias por confirmar tu asistencia. ¡Nos vemos pronto!
                                </p>
                            </div>
                        </motion.div>
                    )}

                    {/* Error Message */}
                    {submitStatus === "error" && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                        >
                            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-red-800 font-medium">Error al enviar</p>
                                <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
                            </div>
                        </motion.div>
                    )}
                </motion.form>
            </div>
        </section>
    );
}
