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
    <section className="flex justify-between py-20 mx-auto">
      <div className="flex flex-col justify-between">
        <h2 className="custom-title">
          Processos <span className="text-blue-500 ">claros</span>.
          <br />
          Resultados <span className="text-blue-500 ">reais</span>.
        </h2>
        <div>
          <h3 className="custom-subtitle space-x-3">
            <span>{`0${active + 1}.`}</span>
            <span>{processes.at(active)?.title}</span>
          </h3>
          <p className="custom-text">{processes.at(active)?.description}</p>
        </div>
      </div>
      <ul>
        {processes.map((process, index) => (
          <li
            key={process.title}
            className={`custom-card
              ${active === index ? "bg-zinc-100" : "bg-transparent"}`}
            onMouseEnter={() => setActive(index)}
          >
            <div className="flex gap-4">
              <Image
                className=""
                src={`/icons/${index + 1}.svg`}
                alt="ok"
                width={24}
                height={24}
              />
              <h3 className="custom-subtitle">{process.title}</h3>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
