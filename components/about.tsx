import Image from "next/image";
import Profile from "@/public/profile.jpg";
export default function About() {
  return (
    <section className="w-full py-20 px-10 flex justify-center gap-8 transition-all duration-200 ease-out mx-auto">
      <Image
        src={Profile}
        alt="Minha foto de Perfil"
        className="w-2/6 rounded-xl transition-all duration-200 ease-out"
        style={{ objectFit: "cover" }}
      />
      <div className="w-3/6 py-6 flex flex-col justify-between  transition-all duration-200 ease-out">
        <div>
          <h2 className="font-sans font-semibold tracking-tighter text-3xl  transition-all duration-200 ease-out">
            Olá, me chamo{" "}
            <span className="text-blue-500   transition-all duration-200 ease-out">
              Caio Giomo
            </span>
          </h2>
          <p className="col-span-2 font-inter text-base text-[#66697f] mb-3 leading-relaxed mt-6 transition-all duration-200 ease-out">
            Sou o fundador do Estúdio Giomo e, há mais de 5 anos, ajudo marcas a
            se destacarem com identidades visuais estratégicas. Já são mais de
            70 projetos entregues para negócios de diferentes tamanhos e
            setores.
            <br />
            <br />
            Acredito que uma boa identidade visual vai além da beleza ela
            comunica, posiciona e gera resultado. Por isso, cada projeto é feito
            para refletir a essência da marca e criar conexão real com o
            público.
            <br />
            <br />
          </p>
        </div>
        <button
          type="button"
          className="mt-12 w-fit font-inter px-3 py-1.5 rounded-lg bg-blue-500 border border-blue-500 text-white font-medium hover:bg-linear-to-b hover:from-blue-500 hover:to-blue-700 cursor-pointer"
        >
          Entrar em contato
        </button>
      </div>
    </section>
  );
}
