import Link from "next/link";
import { MdCheck } from "react-icons/md";

export default function Plans() {
  type Plan = {
    name: string;
    price: number;
    itens: string[];
    wppLink?: string;
  };

  const plans: Plan[] = [
    {
      name: "Pacote Essencial",
      price: 349,
      itens: [
        "Logotipo Principal",
        "Variação do Logotipo",
        "Tipografias da Marca",
        "1 aplicação real em 3D",
        "Guia Simplificado da Marca",
        "Suporte de 7 dias após a entrega",
      ],
      wppLink:
        "https://api.whatsapp.com/send/?phone=5519971518502&text=Ol%C3%A1%2C+Caio%21+Me+interessei+pelo+Pacote+Essencial+e+gostaria+de+entender+como+podemos+prosseguir+com+meu+projeto.&type=phone_number&app_absent=0",
    },
    {
      name: "Pacote Avançado",
      price: 789,
      itens: [
        "Logotipo Principal",
        "Variações do Logotipo",
        "Tipografias da Marca",
        "5 a 7 aplicações real em 3D",
        "Padrão Visual Exclusivo",
        "3 Templates Editáveis para Redes Sociais",
        "Manual de Marca Completo",
        "Suporte de 30 dias após a entrega",
      ],
      wppLink:
        "https://api.whatsapp.com/send/?phone=5519971518502&text=Ol%C3%A1%2C+Caio%21+Me+interessei+pelo+Pacote+Avançado+e+gostaria+de+entender+como+podemos+prosseguir+com+meu+projeto.&type=phone_number&app_absent=0",
    },
  ];

  return (
    <section className="w-full flex flex-col gap-20 py-20" id="plans">
      <h2 className="custom-title text-center">
        Marcas <span className="text-blue-500">fortes</span> começam
        <br />
        com <span className="text-blue-500">escolhas</span> estratégicas.
      </h2>
      <div className="bg-linear-to-b from-blue-200 to-white pt-20 rounded-2xl">
        <ul className="w-4/5 flex gap-4 mx-auto">
          {plans.map((plan) => (
            <li
              className="custom-card bg-white flex flex-col justify-between w-full"
              key={plan.name}
            >
              <div>
                <span className="custom-text font-medium mb-2">
                  {plan.name}
                </span>
                <h3 className="custom-subtitle">R${plan.price},00</h3>
                <hr className="custom-divider" />
                <ul className="flex flex-col gap-3">
                  {plan.itens.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 custom-text"
                    >
                      <MdCheck className="text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <hr className="custom-divider" />
              </div>
              <Link href={plan.wppLink ?? ""} target="_blank">
                <button
                  type="button"
                  className="w-full custom-button custom-button-primary"
                >
                  Comece agora
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
