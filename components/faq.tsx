"use client";

import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

type FAQ = {
  question: string;
  answer: string;
};

const frequentlyAskedQuestions: FAQ[] = [
  {
    question: "Qual o prazo de entrega para os pacotes?",
    answer:
      "O prazo de entrega do Pacote Básico é de até 5 dias úteis, enquanto o Pacote Avançado tem um prazo de até 7 dias úteis. Esse prazo pode variar para mais ou para menos, dependendo das alterações solicitadas durante o processo.",
  },
  {
    question: "E se eu não gostar do projeto?",
    answer:
      "Nós sempre procuramos fazer o projeto com base nas informações e estilos passados no briefing. Faremos as alterações necessárias dentro da quantidade definida para o pacote. Se, mesmo após as alterações o resultado ainda não atender às suas expectativas, iremos conversar para iniciar um novo projeto, com um prazo estendido, para que você receba uma identidade visual que realmente te represente.",
  },
  {
    question: "Qual a diferença entre o pacote Básico e o Avançado?",
    answer:
      "Nós sempre procuramos fazer o projeto com base nas informações e estilos passados no briefing. Faremos as alterações necessárias dentro da quantidade definida para o pacote. Se, mesmo após as alterações o resultado ainda não atender às suas expectativas, iremos conversar para iniciar um novo projeto, com um prazo estendido, para que você receba uma identidade visual que realmente te represente.",
  },
  {
    question: "Preciso já ter um nome definido para o meu negócio?",
    answer:
      "Não é necessário. Caso ainda não tenha um nome definido, podemos trabalhar juntos em um projeto de Naming para desenvolver um nome que combine com a proposta da sua marca. Podemos também seguir com o desenvolvimento da identidade visual com o nome que você já possui.",
  },
  {
    question: "Quais são os formatos dos arquivos entregáveis?",
    answer:
      "Os arquivos entregues incluem versões em formatos editáveis (como .AI e .PSD), além de versões finais em formatos mais comuns, como .JPG, .PNG e .PDF. Isso garante que você tenha flexibilidade para usar sua identidade visual em diferentes plataformas e aplicações.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "O pagamento pode ser feito de duas formas: 50% no início do projeto e 50% após a aprovação do projeto, ou 100% no início. O pagamento é feito via PIX, mas se preferir, podemos conversar sobre outras formas de pagamento.",
  },
  {
    question: "Posso fazer alterações no projeto?",
    answer:
      "Sim, é possível fazer alterações. No Pacote Básico, você tem direito a 3 alterações, no Pacote Avançado, são 5 alterações. Após isso, as alterações adicionais podem ser cobradas separadamente.",
  },
  {
    question: "Posso solicitar itens adicionais?",
    answer:
      "Sim, você pode solicitar itens adicionais além dos que estão inclusos no projeto, como materiais de papelaria, redes sociais, mockups, entre outros. Esses itens terão um custo extra, e o valor será informado antes do início do desenvolvimento, ou você pode pedir após o projeto ser finalizado, sem problema nenhum.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<string>("");
  return (
    <section className="w-full flex flex-col justify-between gap-20 py-20 px-10">
      <h2 className="font-sans font-semibold tracking-tighter text-5xl text-center">
        Perguntas <span className="text-blue-500">frequentes</span>.
      </h2>
      <ul className="w-4/5 mx-auto">
        {frequentlyAskedQuestions.map((faq) => (
          <li
            className=" items-center px-6 py-4 first:border-0 border-t border-zinc-200 cursor-pointer"
            key={faq.question}
            onClick={() => setActive(faq.question)}
          >
            <div className="font-sans font-semibold tracking-tight text-xl flex justify-between gap-6">
              <p>{faq.question}</p>
              <MdKeyboardArrowUp
                className={`
                  ${active === faq.question ? "rotate-180" : "rotate-0"}
                transition duration-300`}
              />
            </div>
            <div
              className={`
                ${active === faq.question ? "h-fit" : "h-0"} 
              overflow-hidden transition-[height] duration-800`}
            >
              <p className="font-inter text-base text-[#66697f] py-3 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
