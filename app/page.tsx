import Hero from "./components/home/Hero";
import Work from "./components/home/Work";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-[550px] mx-auto flex-col items-center gap-16 pt-[80px] pb-[80px] bg-white">
      <Hero />
      <Work />
    </main>
  );
}
