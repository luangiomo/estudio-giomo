import { MdCheck } from "react-icons/md";
import Divider from "./ui/divider";

export default function Plans() {
  type Plan = {
    name: string;
    price: number;
    itens: string[];
    main?: boolean;
  };

  const plans: Plan[] = [
    {
      name: "Pacote Essencial",
      price: 349,
      itens: [
        "Logotipo Principal",
        "Variação do Logotipo",
        "Tipografias do projeto",
        "1 Aplicação Real em 3D",
        "Mini Manual de utilização",
        "Suporte de 30 dias após a entrega",
      ],
    },
    {
      name: "Pacote Avançado",
      price: 589,
      itens: [
        "Logotipo Principal",
        "Variação do Logotipo",
        "Tipografias do projeto",
        "5 a 7 Aplicação Real em 3D",
        "Pattern Exclusivo da Marca",
        "3 Modelos editáveis de post para rede social",
        "Manual de Marca",
        "Suporte de 60 dias após a entrega",
      ],
      main: true,
    },
  ];

  return (
    <section className="w-full flex flex-col gap-20 py-20">
      <h2 className="font-sans font-semibold tracking-tighter text-5xl text-center">
        Chegou a <span className="text-blue-500">hora</span> de mudar a sua{" "}
        <span className="text-blue-500">marca</span>.
      </h2>
      <div className="bg-linear-to-b from-blue-200 to-white pt-20 rounded-2xl">
        <ul className="w-4/5 flex gap-4  mx-auto">
          {plans.map((plan) => (
            <li
              className="flex flex-col justify-between w-full bg-white p-6 rounded-lg"
              key={plan.name}
            >
              <div>
                <span className="flex items-center gap-3 font-inter font-medium mb-2">
                  {plan.name}
                </span>
                <h3 className="font-sans font-semibold tracking-tighter text-3xl">
                  R${plan.price},00
                </h3>
                <Divider />
                <ul className="flex flex-col gap-3">
                  {plan.itens.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-inter font-medium"
                    >
                      <MdCheck className="text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Divider />
              </div>
              <button
                type="button"
                className={`
                  ${
                    plan.main
                      ? "border-transparent bg-blue-500 text-white hover:bg-blue-700"
                      : "border-zinc-200 bg-white text-black hover:bg-zinc-200"
                  }
                mt-6 w-full font-inter px-3 py-1.5 rounded-lg border font-medium cursor-pointer transition duration-300
                `}
              >
                Comece agora
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
