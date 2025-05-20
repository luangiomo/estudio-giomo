import Link from "next/link";
import { ReactElement } from "react";
import { IconType } from "react-icons";
import {
  SiBehance,
  SiDribbble,
  SiInstagram,
  SiLinkedin,
  SiWhatsapp,
} from "react-icons/si";

type Social = {
  name: string;
  link: string;
  icon: ReactElement<IconType>;
  about?: string;
};
const socials: Social[] = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/estudiogiomo",
    icon: <SiInstagram />,
  },
  {
    name: "Behance",
    link: "https://www.behance.net/estudiogiomo",
    icon: <SiBehance />,
  },
  {
    name: "Dribbble",
    link: "https://www.instagram.com/estudiogiomo/",
    icon: <SiDribbble />,
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/5519971518502",
    icon: <SiWhatsapp />,
  },
  {
    name: "LinkedIn",
    link: "https://www.instagram.com/estudiogiomo/",
    icon: <SiLinkedin />,
  },
];

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto py-14 border-t border-[#122a6914] font-sans">
      <div className="flex items-center text-[#66697f]">
        <p className="text-sm">{`© ${new Date().getFullYear()} Estúdio Giomo.`}</p>
        <div className="w-px h-5 bg-[#122a6914] mx-6" />
        <ul className="flex text-base gap-4">
          {socials.map((social) => (
            <Link
              href={social.link}
              about={social.about}
              key={social.name}
              target="_blank"
            >
              <li className="h-6 aspect-square rounded-sm flex justify-center items-center hover:text-black transition-colors duration-150">
                {social.icon}
              </li>
            </Link>
          ))}
        </ul>
        <p className="ml-auto text-sm">Desenvolvido por @luangiomo</p>
      </div>
    </footer>
  );
}
