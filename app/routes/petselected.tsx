import { useEffect, useState } from "react";
import styles from '~/styles/_index.css'
import type { LinksFunction } from "@remix-run/node";
import { url } from '~/config/conection'
import { useLocation } from "@remix-run/react"; 

export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

interface Animal {
    idPeludo: string;
    foto: string;
    nombrePeludo: string;
    edad: number;
    categoria: string;
}

export default function SeleccionPet() {
    const [pet, setPet] = useState<Animal>();
    const location = useLocation(); // Utiliza useLocation para obtener la ubicación actual

    // Extrae el valor del parámetro 'petSelected' de la ubicación actual

    const obtenerPeluditos = async () => {
        const petSelected = new URLSearchParams(location.search).get("petSelected");
        try {
            const res = await fetch(`${url.url}/api/EnAdopcion?petSelected=${petSelected}`)
            const data = await res.json();
            setPet(data[0]);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (pet === undefined)  {
            obtenerPeluditos()
        }
    })

    return (
        <main className="flex flex-col items-center justify-between p-12">
            <h2>Peludito de Adopta: {pet?.nombrePeludo}</h2>
            <img src={pet?.foto} alt="" />
        </main>
    )
}
