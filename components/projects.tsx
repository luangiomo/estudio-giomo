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
    <section>
      <div className="grid grid-cols-3 gap-5 w-full py-20">
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
        <div className="w-full rounded-xl border border-blue-100 bg-linear-to-b from-blue-200 to-white flex flex-col justify-end px-3">
          <div className="flex flex-col justify-center items-center gap-1 leading-tight text-center font-inter">
            <p className="text-[#262556] font-medium">
              Sua marca pode ser a próxima
            </p>
            <p className="text-sm text-[#66697f]">
              Crie uma identidade visual única e memorável.
            </p>
            <button
              type="button"
              className="px-3 py-1.5 rounded-lg bg-blue-500 border border-blue-500 text-white mb-10 mt-3 font-medium hover:bg-linear-to-b hover:from-blue-500 hover:to-blue-700 cursor-pointer"
            >
              Comece agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
