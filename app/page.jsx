import Hero from "@/components/hero";
import Highlights from "@/components/highlights";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
}
