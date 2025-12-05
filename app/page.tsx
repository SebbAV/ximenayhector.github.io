import Hero from "@/components/Hero";
import Events from "@/components/Events";
import RSVP from "@/components/RSVP";
import Gifts from "@/components/Gifts";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "rgba(250, 250, 249, 1)" }}>
      <Hero />
      <Events />
      <RSVP />
      <Gifts />
      <Gallery />

      <footer className="py-8 text-center text-sm" style={{ backgroundColor: "var(--classic-blue-dark)" }}>
        <p className="text-white/90">© 2026 Ximena & Hector.  Hecho con ❤️ por su amigo Sebastian.</p>
      </footer>
    </main>
  );
}
