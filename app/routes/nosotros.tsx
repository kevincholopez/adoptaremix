import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import styles from '~/styles/_index.css'
import type { LinksFunction } from "@remix-run/node";
import img1 from '~/assets/home/example1.webp'
import img2 from '~/assets/home/example2.webp'

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

export default function Adopta() {
    useEffect(() => {
        if (animals.length <= 0) {
            obtenerPeluditos()
        }
    })

    const [animals, setAnimals] = useState<Animal[]>([]);
    const [animalsFilter, setAnimalsFilter] = useState<Animal[]>([]);
    const [viewListGeneral, setViewListGeneral] = useState<boolean>(false);

    const listAnimals = animalsFilter.map((item, id) =>
        <a onClick={() => asignarIdAnimal(item.idPeludo)} key={id} href={`/adopta/petSelected`} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src={item.foto} alt="image" width={600} height={400}></img>
            <h1 className="text-center">{item.nombrePeludo}</h1>
            <h2 className="text-center">{item.edad} Años</h2>
        </a>
    );

    const obtenerPeluditos = async () => {
        try {
            // const res = await fetch(`${url.url}/api/adopcion`)
            // const data = await res.json();
            // console.log(data)
            // Assuming 'data' variable is declared somewhere
            // setAnimals(data);
            // setAnimalsFilter(data);

        } catch (err) {
            console.log(err);
        }
    };

    const asignarIdAnimal = (idPet: string) => {
        localStorage.setItem("idPet", idPet);
    };

    const filterAnimals = (animalSelected: string) => {
        if (animalSelected === "Todos") {
            setAnimalsFilter(animals);
        } else {
            setAnimalsFilter(animals.filter(s => s.categoria === animalSelected));
        }
    };

    const selectPet = (pet: Animal) => {
        setViewListGeneral(true);
    };
    return (
        <main className="flex flex-col items-center justify-between p-12">
            <div>
                <h1 className={`titleLobby centerTitles py-10`}>Nuestros objetivos</h1>
                <p className='textPrincipal text-center'>Rescatar y esterilizar animales en situación de abandono o maltrato, creando conciencia social en la comunidad que es un acto de amor, que la vida es la prioridad y que la eutanasia no es una opción para controlar la población animal.</p>
                <ul className='textPrincipal text-center list-disc'>
                    <li>Tener nuestro propio refugio para así Proporcionar a los animales un espacio adecuado durante su rehabilitación y el periodo de adopción.</li>
                    <li>Buscar el auto sostenimiento de la Fundación.</li>
                    <li>Fortalecer a nivel municipal y departamental la cultura de respeto hacia los animales.</li>
                    <li>Difundir por todos los medios posibles que los animales tienen derecho a la vida, al buen trato y a permanecer en un hogar apropiado.</li>
                    <li>Fomentar la tenencia responsable y el correcto cuidado de los animales.</li>
                    <li>Evitar y denunciar su maltrato y abandono.</li>
                    <li>Encontrar una familia responsable a cada uno de los animales rescatados.</li>
                </ul>
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-2 elevateText">
                <div className='py-20 sm:centerDivs'>
                    <img src={img1}></img>
                </div>
                <div className='lg:col-start-2 py-20 sm:centerDivs'>
                    <h1 className={`titleLobby centerTitles py-6`}>Mision</h1>
                    <p className='text-center textPrincipal p-4'>Rescatar, Esterilizar y Proteger animales caninos, felinos u otros que han sido víctimas de abandono o maltrato, promoviendo hogares de paso para poder rehabilitar y generar conciencia de una adopción responsable, educando con campañas y con ejemplo de amor para lograr una sociedad respetuosa hacia la vida de todo ser vivo con el fin de tener un mundo libre de maltrato y abandono animal.</p>
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-2 elevateText">
                <div className='py-20 sm:centerDivs'>
                    <h1 className={`titleLobby centerTitles py-6`}>Vision</h1>
                    <p className='text-center textPrincipal p-4'>Ser vistos como la mejor fundación del departamento del Huila, lograr sensibilización y respeto hacia todo ser vivo y la vida en general, comprometidos con obtener un cambio en nuestra sociedad fomentado el ejemplo de lucha por los derechos de los animales tales que sea impensable la crueldad de lag que hoy son objetivo.</p>
                </div>
                <div className='lg:col-start-2 py-20 sm:centerDivs'>
                    <img src={img2}></img>
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-14 px-14 pb-16'>
                {/* <VideoComponent video='https://www.youtube.com/watch?v=os5_JhHE9go'></VideoComponent>
                <VideoComponent video='https://www.youtube.com/watch?v=os5_JhHE9go'></VideoComponent>
                <VideoComponent video='https://www.youtube.com/watch?v=os5_JhHE9go'></VideoComponent> */}
                {/* <CarouselComponent /> */}
            </div>
        </main>
    )
}
