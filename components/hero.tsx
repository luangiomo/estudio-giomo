import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-20">
      <h1 className="custom-title">
        Posicione sua marca de forma
        <br />
        <span className="text-blue-500 ">clara, profissional e alinhada</span>
        <br /> com o valor que seu negócio entrega.
      </h1>
      <Link href={"#plans"}>
        <button
          type="button"
          className="mt-24 custom-button-lg custom-button-primary"
        >
          Começar meu projeto
        </button>
      </Link>
    </section>
  );
}
