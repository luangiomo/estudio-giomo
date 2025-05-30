import Image from "next/image";
import Profile from "@/public/profile.jpg";
export default function About() {
  return (
    <section className="py-20">
      <div className="w-4/5 flex gap-8 mx-auto">
        <Image
          src={Profile}
          alt="Minha foto de Perfil"
          className="w-2/6 rounded-xl"
          style={{ objectFit: "cover" }}
        />
        <div className="w-4/6 py-6">
          <h2 className="custom-subtitle">
            Olá, me chamo <span className="text-blue-500  ">Caio Giomo</span>
          </h2>
          <p className="custom-text pt-3 pb-10">
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
          </p>
          <button
            type="button"
            className="mt-auto custom-button custom-button-primary"
          >
            Entrar em contato
          </button>
        </div>
      </div>
    </section>
  );
}
