import FAQ from "@/components/faq";
import Processes from "@/components/processes";
import Link from "next/link";
import Projects from "@/components/projects";
import Divider from "@/components/ui/divider";
import About from "@/components/about";
import Plans from "@/components/plans";

export default function Home() {
  // function formattedDate() {
  //   const data = new Date();
  //   const options: Intl.DateTimeFormatOptions = {
  //     day: "2-digit",
  //     month: "long",
  //     year: "numeric",
  //   };
  //   const formattedDate = data.toLocaleDateString("pt-BR", options);
  //   const customDate = formattedDate
  //     .replace(/ de /g, " ")
  //     .replace(/ (\d{4})$/, ", $1");

  //   return customDate;
  // }
  return (
    <main className="max-w-7xl mx-auto w-full px-5">
      <section className="w-full py-20">
        {/* <p className="font-medium font-sans text-xs text-[#66697f] mb-3">
            {formattedDate()}
          </p> */}
        <h1 className="font-sans font-semibold tracking-tighter text-5xl">
          Posicione sua marca de forma
          <br />
          <span className="text-blue-500 ">clara, profissional e alinhada</span>
          <br /> com o valor que seu negócio entrega.
        </h1>
        <Link href={"#plans"}>
          <button
            type="button"
            className="mt-24 w-fit font-sans px-8 py-3 rounded-full bg-zinc-200 tracking-tight font-semibold text-2xl border-2 border-transparent duration-300 transition-all cursor-pointer hover:bg-blue-500/20 hover:text-blue-500 hover:border-blue-500 hover:border-dashed"
          >
            Começar meu projeto
          </button>
        </Link>
      </section>
      <Projects />
      <Divider />
      <Processes />
      <Divider />
      <About />
      <Divider />
      <Plans />
      <Divider />
      <FAQ />
    </main>
  );
}
