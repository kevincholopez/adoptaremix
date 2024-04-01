import Logo from "~/assets/header/logo.webp";
import { Navbar } from 'flowbite-react';
import { useState } from 'react';
import { Button } from "flowbite-react";


const redesSociales = [
    { src: "Facebook", href: "https://www.facebook.com/profile.php?id=100064622622179" },
    { src: "Instagram", href: "https://www.instagram.com/adoptalaplatahuila/?hl=es" },
    { src: "TikTok", href: "https://www.tiktok.com/@adoptalaplatahuil" },
    { src: "Twitter", href: "https://www.facebook.com/profile.php?id=100064622622179" }
]


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="/">
                <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Fundacion Adopta La Plata</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="/" active>
                inicio
                </Navbar.Link>
                <Navbar.Link href="/nosotros">Sobre nosotros</Navbar.Link>
                <Navbar.Link href="/adopta">Adopta</Navbar.Link>
                <Navbar.Link href="/contactenos">Contactenos</Navbar.Link>
                <Navbar.Link href="/login">Ingresar</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
