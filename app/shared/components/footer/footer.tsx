import Logo from "~/assets/header/logo.webp";
import type { LinksFunction } from "@remix-run/node";
import styles from "./style.css";

export const links: LinksFunction = () => {
    return [
        {
            rel: "stylesheet",
            href: styles,
        },
    ];
};


export default function Header() {
    const yearActual = new Date().getFullYear()
    return (
        <footer className='backFooter sm:text-center md:text-center'>
            <div className='p-10'>
                <img width={100} height={100} id="logo" src={Logo} alt="Logo" />
            </div>
            <h4>©{yearActual} Fundacion adopta la plata huila - Todos los derechos reservados.</h4>
        </footer>
    )
}