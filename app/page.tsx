import About from "@/components/about";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import Plans from "@/components/plans";
import Processes from "@/components/processes";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto w-full px-5">
      <Hero />
      <hr className="custom-divider" />
      <Projects />
      <hr className="custom-divider" />
      <Processes />
      <hr className="custom-divider" />
      <About />
      <hr className="custom-divider" />
      <Plans />
      <hr className="custom-divider" />
      <FAQ />
    </main>
  );
}
