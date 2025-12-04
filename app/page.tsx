import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Gifts from "@/components/Gifts";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Hero />
      <Events />
      <Gifts />
      <Gallery />

      <footer className="py-8 text-center text-stone-500 text-sm bg-stone-100">
        <p>© 2026 Ximena & Hector. Con amor.</p>
      </footer>
    </main>
  );
}
