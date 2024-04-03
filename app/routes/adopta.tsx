import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import styles from '~/styles/_index.css'
import type { LinksFunction } from "@remix-run/node";
import {url} from '~/config/conection' 

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
    const [data, setData] = useState(null);
    useEffect(() => {
        if (animals.length <= 0) {
            obtenerPeluditos()
        }
    })

    const [animals, setAnimals] = useState<Animal[]>([]);
    const [animalsFilter, setAnimalsFilter] = useState<Animal[]>([]);
    const [viewListGeneral, setViewListGeneral] = useState<boolean>(false);

    const listAnimals = animalsFilter.map((item, id) =>
        <a onClick={() => asignarIdAnimal(item.idPeludo)} key={id} href={`/petSelected?petSelected=${item.idPeludo}`} className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src={item.foto} alt="image" width={600} height={400}></img>
            <div className="footerDivs">
                <h1 className="titleLobby text-center">{item.nombrePeludo}</h1>
                <h2 className="textPrincipal text-center">{item.edad} Años</h2>
            </div>
        </a>
    );

    const obtenerPeluditos = async () => {
        try {
            const res = await fetch(`${url.url}/api/EnAdopcion`)
            const data = await res.json();
            setAnimals(data);
            setAnimalsFilter(data);
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
                <h1 className={`titleLobby centerTitles py-10`}>Lista de peluditos en adopción</h1>
                <p className='textPrincipal text-center'>Estos son nuestros ángeles que buscan poder encontrar su hogar para siempre. Una vez escojas al peludito que quieras adoptar, vuelve a la página de adopción, lee cuidadosamente nuestros requisitos, proceso de adopción y por último, rellena el formulario de adopción.</p>
            </div>
            <div className='p-10'>
                <button onClick={() => filterAnimals("Todos")} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                    <span className="textPrincipal relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Todos
                    </span>
                </button>
                <button onClick={() => filterAnimals("Perro")} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                    <span className="textPrincipal relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Perros
                    </span>
                </button>
                <button onClick={() => filterAnimals("Gato")} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                    <span className="textPrincipal relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Gatos
                    </span>
                </button>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-2 elevateText">
                {listAnimals}
            </div>

        </main>
    )
}
