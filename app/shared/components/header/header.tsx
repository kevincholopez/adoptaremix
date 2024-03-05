import Logo from "~/assets/header/logo.webp";

const titulosHeader = [
    { titulo: "Inicio", href: "/" },
    { titulo: "Contáctenos", href: "#" },
    { titulo: "Nuestros peluditos", href: "/nuestrospeluditos" },
    { titulo: "Donaciones", href: "#" },
    { titulo: "Sobre nosotros", href: "#" },
]
const redesSociales = [
    { src: "Facebook", href: "https://www.facebook.com/profile.php?id=100064622622179" },
    { src: "Instagram", href: "https://www.instagram.com/adoptalaplatahuila/?hl=es" },
    { src: "TikTok", href: "https://www.tiktok.com/@adoptalaplatahuil" },
    { src: "Twitter", href: "https://www.facebook.com/profile.php?id=100064622622179" }
]
export default function Header() {
    return (
        <header>
            <div className="grid grid-cols-4 gap-2">
                <div className='centerLogo'>
                    <img width={70} height={70} id="logo" src={Logo} alt="Logo" />
                </div>
                <div className='centerElements col-span-2'>
                    <ul>
                        <a href="/">
                            <li>Inicio</li>
                        </a>
                        <a href="/nosotros">
                            <li>Sobre Nosotros</li>
                        </a>
                        <a href="/adopta">
                            <li>Adopta</li>
                        </a>
                        <a href="/contactenos">
                            <li>Contactenos</li>
                        </a>
                    </ul>
                </div>
            </div>
        </header>
    )
}
