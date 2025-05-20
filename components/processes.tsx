"use client";

import Image from "next/image";
import { useState } from "react";

type Process = {
  title: string;
  description: string;
  process?: string;
};

const processes: Process[] = [
  {
    title: "Início da Parceria",
    description: "Primeiro contato, termos, prazos e pagamento.",
    // process:
    //   "Alinhamos expectativas, escopo, valores e prazos antes de iniciar o projeto.",
  },
  {
    title: "Briefing",
    description: "Conhecer a fundo sua marca, valores e objetivos.",
    // process:
    //   "Você responde perguntas estratégicas para entendermos sua marca e seus objetivos.",
  },
  {
    title: "Moodboard",
    description: "Referências visuais que alinham o estilo da marca.",
    // process:
    //   "Montamos um painel visual com estilos, cores e inspirações que guiarão o projeto.",
  },
  {
    title: "Esboço Inicial",
    description: "Primeiras opções de logotipo para sua aprovação.",
    // process:
    //   "Apresentamos variações iniciais do logotipo com base no briefing e no moodboard.",
  },
  {
    title: "Criação do Logotipo",
    description: "Desenvolvimento do logotipo, com ajustes após sua aprovação.",
    // process:
    //   "Refinamos a proposta escolhida, com foco em alinhamento visual e versatilidade.",
  },
  {
    title: "Refinamentos",
    description: "Ajustes baseados no seu feedback.",
    // process:
    //   "Fazemos ajustes finais no logotipo com base no seu retorno, até chegar ao ideal.",
  },
  {
    title: "Entrega Final",
    description: "Arquivos finais e manual de aplicação prontos para uso.",
    // process:
    //   "Você recebe todos os arquivos do logotipo e um manual para uso correto da marca.",
  },
];

export default function Processes() {
  const [active, setActive] = useState<number>(0);
  return (
    <section className="w-4/5 flex justify-between py-20 mx-auto">
      <div className="flex flex-col justify-between">
        <h2 className="font-sans font-semibold tracking-tighter text-5xl">
          Processos <span className="text-blue-500 ">claros</span>. <br />{" "}
          Resultados <span className="text-blue-500 ">reais</span>.
        </h2>

        <div>
          <h3 className="space-x-3 font-sans font-semibold tracking-tighter text-3xl">
            <span>{`0${active + 1}.`}</span>
            <span>{processes.at(active)?.title}</span>
          </h3>
          <p className="text-base text-[#66697f] font-inter">
            {processes.at(active)?.description}
            <br /> {processes.at(active)?.process}
          </p>
        </div>
      </div>
      <div className="flex gap-6">
        <ul className="flex flex-col">
          {processes.map((process, index) => (
            <li
              key={process.title}
              className={`flex gap-6 items-center px-6 py-6  rounded-xl
                ${active === index ? "bg-zinc-100" : "bg-transparent"}
                `}
              onMouseEnter={() => setActive(index)}
            >
              <div
                className={`aspect-square flex items-center justify-center rounded-xl cursor-pointer`}
              >
                <div className="flex justify-end items-center gap-3">
                  <Image
                    src={`/icons/${index + 1}.svg`}
                    alt="ok"
                    width={24}
                    height={24}
                  />{" "}
                </div>
              </div>
              <h3 className="space-x-3 font-sans font-semibold tracking-tighter text-3xl">
                <span>{process.title}</span>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
