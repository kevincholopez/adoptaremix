import { useEffect, useState } from "react";
import styles from '~/styles/_index.css'
import type { LinksFunction } from "@remix-run/node";
import { url } from '~/config/conection'
import { useLocation } from "@remix-run/react";
import { Tabs } from 'flowbite-react';
import CarouselComponent from '~/shared/components/carousel/carousel'

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
    raza: String;
    foto: string;
    nombrePeludo: string;
    edad: number;
    categoria: string;
    contacto: String;
    sexo: String;
    color: String;
    tamano: String;
    vacunado: String;
    castrado: String;
    historia: String;
}

interface AnimalImage {
    imagen: string;
}

export default function SeleccionPet() {
    const [pet, setPet] = useState<Animal>();
    const [petImages, setPetImages] = useState<AnimalImage[]>([]);
    const location = useLocation(); // Utiliza useLocation para obtener la ubicación actual

    // Extrae el valor del parámetro 'petSelected' de la ubicación actual

    const obtenerPeluditos = async () => {
        const petSelected = new URLSearchParams(location.search).get("petSelected");
        try {
            const res = await fetch(`${url.url}/api/EnAdopcion?petSelected=${petSelected}`)
            const data = await res.json();
            const resImages = await fetch(`${url.url}/api/EnAdopcionImagenes?petSelected=${petSelected}`)
            const dataImage = await resImages.json();
            setPetImages(dataImage)
            setPet(data[0]);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (pet === undefined) {
            obtenerPeluditos()
        }
    })

    return (
        <main className="flex flex-col items-center justify-between p-12">
            <h3 className="subTitlePrincipal text-center px-6">Peludito de Adopta: </h3>
            <h1 className="titleLobby centerTitles px-6 pb-10">{pet?.nombrePeludo} </h1>
            <div className="lg:grid lg:grid-cols-2 lg:gap-2 elevateText">
                <div className="col-start-1 w-screen">
                    <CarouselComponent listImages={petImages} />
                </div>
                <div className="col-start-2 w-screen">
                    <Tabs className="" aria-label="Pills" style="pills">
                        <Tabs.Item active title="Descripción">
                            <p className="font-medium textPrincipal p-4">Edad:
                                <span className="font-light px-6">{pet?.nombrePeludo}</span>
                            </p>
                            <p className="font-medium textPrincipal p-4">Raza:
                                <span className="font-light px-6">{pet?.raza}</span>
                            </p>
                            <p className="font-medium textPrincipal p-4">Sexo:
                                <span className="font-light px-6">{pet?.sexo}</span>
                            </p>
                            <p className="font-medium textPrincipal p-4">Color:
                                <span className="font-light px-6">{pet?.color}</span>
                            </p>
                            <p className="font-medium textPrincipal p-4">Tamaño:
                                <span className="font-light px-6">{pet?.tamano}</span>
                            </p>
                            <p className="font-medium textPrincipal p-4">Vacunado:
                                <span className="font-light px-6">{pet?.vacunado}</span>
                            </p>
                            <p className="font-medium textPrincipal p-4">Castrado:
                                <span className="font-light px-6">{pet?.castrado}</span>
                            </p>
                        </Tabs.Item>
                        <Tabs.Item title="Historia">
                            <p className="font-medium textPrincipal p-4">{pet?.historia}</p>
                        </Tabs.Item>
                    </Tabs>
                </div>
            </div>
        </main >
    )
}
