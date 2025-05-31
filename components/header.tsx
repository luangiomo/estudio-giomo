import Link from "next/link";
import { MdCallMade } from "react-icons/md";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 py-4 w-full bg-background">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-5">
        <Link href={"/"}>
          <h1 className="custom-label font-bold">Estúdio Giomo</h1>
        </Link>
        <Link href={"/"}>
          <button type="button" className="custom-button group">
            <p className="custom-text flex gap-1 items-center group-hover:underline">
              <span>Entre em contato</span>
              <span>
                <MdCallMade />
              </span>
            </p>
          </button>
        </Link>
      </nav>
    </header>
  );
}
