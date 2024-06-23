import styles from '~/styles/_index.css'
import type { LinksFunction } from "@remix-run/node";
import { Button, Card } from 'flowbite-react';

export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export default function HomeIn() {

    return (
        <main className="flex flex-col items-center justify-between p-12">
            <div className='lg:col-start-2 py-20 sm:centerDivs'>
                <h1 className={`titleLobby px-6`}>Bienvenido</h1>
                <br />
                <Card className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Registra mascotas
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Encontraras un listado de las mascotas que están en adopción.
                    </p>
                    <Button gradientDuoTone="redToYellow" href="/tablaMascotas">
                        Ingresar
                        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Button>
                </Card>
            </div>
        </main>
    )
}
