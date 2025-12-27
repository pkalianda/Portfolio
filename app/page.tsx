import Hero from "./components/home/Hero";
import Navigation from "./components/shared/Navigation";
import Work from "./components/home/Work";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center gap-[120px] pb-[80px] bg-white">
      <Navigation />
      <Hero />
      <Work />
    </main>
  );
}
