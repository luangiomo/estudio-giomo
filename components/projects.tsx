import React from "react";
import Image, { StaticImageData } from "next/image";
import Apex from "@/app/assets/apex..jpg";
import Corea from "@/app/assets/corea.jpg";
import IntegraContabil from "@/app/assets/integra-contabil.jpg";
import NataliaTorres from "@/app/assets/natalia-torres.jpg";
import AdvocaciaAlbuquerque from "@/app/assets/advocacia-albuquerque.jpg";

export default function Projects() {
  type Project = {
    name: string;
    primaryColor: string;
    secondaryColor: string;
    background: StaticImageData;
  };
  const projects: Project[] = [
    {
      name: "Corea",
      primaryColor: "#7A8F7B",
      secondaryColor: "#F1E9E1",
      background: Corea,
    },
    {
      name: "Integra Contábil",
      primaryColor: "#0B4256",
      secondaryColor: "#F8B332",
      background: IntegraContabil,
    },
    {
      name: "Natália Torres Psicóloga",
      primaryColor: "#38002D",
      secondaryColor: "#D19DC4",
      background: NataliaTorres,
    },
    {
      name: "apex.",
      primaryColor: "#D3A123",
      secondaryColor: "#151515",
      background: Apex,
    },
    {
      name: "Advocacia Albuquerque",
      primaryColor: "#2E66C2",
      secondaryColor: "#072758",
      background: AdvocaciaAlbuquerque,
    },
  ];
  return (
    <section className="grid grid-cols-3 gap-5 w-full py-20">
      {projects.map((project) => (
        <div
          key={project.name}
          className="group relative overflow-hidden aspect-4/3 rounded-xl flex flex-col justify-end group cursor-pointer bg-black hover:opacity-80"
        >
          <Image
            src={project.background}
            alt={project.name}
            fill
            className="group-hover:opacity-10 transition-all duration-300"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="opacity-0 group-hover:opacity-100 z-10 flex flex-col justify-center gap-1 leading-tight font-inter translate-y-8 group-hover:-translate-y-0 py-4 px-6 transition-all duration-300">
            <p className="font-medium text-white">{project.name}</p>
          </div>
        </div>
      ))}
      <div className="custom-card flex justify-center items-end">
        <div className="flex flex-col justify-center items-center gap-6 leading-tight text-center font-inter">
          <div>
            <p className="custom-label">Sua marca pode ser a próxima</p>
            <p className="custom-text">
              Crie uma identidade visual única e memorável.
            </p>
          </div>
          <button type="button" className="custom-button custom-button-primary">
            Comece agora
          </button>
        </div>
      </div>
    </section>
  );
}
