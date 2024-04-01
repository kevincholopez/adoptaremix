import type { MetaFunction } from "@remix-run/node";
import React, { ChangeEvent, useState, useEffect } from 'react';
import styles from '~/styles/_index.css'
import type { LinksFunction } from "@remix-run/node";
import { Button, Checkbox, Label, TextInput, Select, Textarea, FileInput } from 'flowbite-react';
import { url } from "~/config/conection";

export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

interface Picture {
    data: File;
    url: string;
}

// interface Animal {
//     idPeludo: string;
//     foto: string;
//     nombrePeludo: string;
//     edad: number;
//     categoria: string;
// }

export default function RegistroMascotas() {
    const [name, setName] = useState('');
    const [raza, setRaza] = useState('');
    const [edad, setEdad] = useState(0);
    const [contacto, setContacto] = useState(0);
    const [tipoPeludito, setTipoPeludito] = useState('');
    const [sexo, setSexo] = useState('');
    const [color, setColor] = useState('');
    const [tamano, setTamano] = useState('');
    const [vacunado, setVacunado] = useState('');
    const [castrado, setCastrado] = useState('');
    const [historia, setHistoria] = useState('');
    const [pictures, setPictures] = useState<Picture[]>([]);

    useEffect(() => {
        // console.log(foto)
    })


    // const obtenerPeluditos = async () => {
    //     try {
    //         // const res = await fetch(`${url.url}/api/adopcion`)
    //         // const data = await res.json();
    //         // console.log(data)
    //         // Assuming 'data' variable is declared somewhere
    //         // setAnimals(data);
    //         // setAnimalsFilter(data);

    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const body = {
                "name": name,
                "raza": raza,
                "edad": edad,
                "contacto": contacto,
                "tipoPeludito": tipoPeludito,
                "sexo": sexo,
                "color": color,
                "tamano": tamano,
                "vacunado": vacunado,
                "castrado": castrado,
                "historia": historia,
                "pictures": pictures
            }
            console.log(body)
            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            };

            const res = await fetch(`${url.url}/api/registroMascotas`, settings)
            const data = await res.json();
            console.log(data)
            // Assuming 'data' variable is declared somewhere
            // setAnimals(data);
            // setAnimalsFilter(data);

        } catch (err) {
            console.log(err);
        }
    }

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        if (files) {
            const tempArr: Picture[] = [];

            [...files].forEach((file: File) => {
                console.log("file >>> ", file);

                tempArr.push({
                    data: file,
                    url: URL.createObjectURL(file)
                });
            });

            setPictures(tempArr);
            console.log("pictures >> ", tempArr);
        }
    };

    return (
        <main className="flex flex-col items-center justify-between p-12">
            <div className='lg:col-start-2 py-20 sm:centerDivs'>
                <h3 className={`subTitlePrincipal px-6`}>!Hora de darle un hogar!</h3>
                <h1 className={`titleLobby px-6`}>Registra a la mascota</h1>
                <p className='text-center textPrincipal p-6'>Al registrarlo, quedara en la base de datos de la fundacion para poder hallar un hogar ideal para el.</p>
                <form onSubmit={sendForm} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="nombrePeludo" value="Nombre del peludito" />
                        </div>
                        <TextInput onChange={(e) => setName(e.target.value)} value={name} id="nombrePeludo" type="text" placeholder="Nombre del peludito" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="raza" value="Raza" />
                        </div>
                        <TextInput onChange={(e) => setRaza(e.target.value)} value={raza} id="raza" type="text" placeholder="Raza" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="edad" value="Edad" />
                        </div>
                        <TextInput onChange={(e) => setEdad(Number(e.target.value))} value={edad} id="edad" type="number" placeholder="Edad" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="contacto" value="Contacto" />
                        </div>
                        <TextInput onChange={(e) => setContacto(Number(e.target.value))} value={contacto} id="contacto" type="number" placeholder="Numbero de celular" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="categoria" value="Tipo de peludito" />
                        </div>
                        <Select onChange={(e) => setTipoPeludito(e.target.value)} value={tipoPeludito} id="categoria" required>
                            <option value="">Seleccione una opcion</option>
                            <option value="Perro">Perro</option>
                            <option value="Gato">Gato</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="sexo" value="Sexo" />
                        </div>
                        <Select onChange={(e) => setSexo(e.target.value)} value={sexo} id="sexo" required>
                            <option value="">Seleccione una opcion</option>
                            <option value="Macho">Macho</option>
                            <option value="Hembra">Hembra</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="color" value="Color" />
                        </div>
                        <TextInput onChange={(e) => setColor(e.target.value)} value={color} id="color" type="text" placeholder="Color de la mascota" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="tamano" value="Tamaño" />
                        </div>
                        <Select onChange={(e) => setTamano(e.target.value)} value={tamano} id="tamano" required>
                            <option value="">Seleccione una opcion</option>
                            <option value="Grande">Grande</option>
                            <option value="Mediano">Mediano</option>
                            <option value="Pequeño">Pequeño</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="vacunado" value="Vacunado" />
                        </div>
                        <Select onChange={(e) => setVacunado(e.target.value)} value={vacunado} id="vacunado" required>
                            <option value="">Seleccione una opcion</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="castrado" value="Castrado" />
                        </div>
                        <Select onChange={(e) => setCastrado(e.target.value)} value={castrado} id="castrado" required>
                            <option value="">Seleccione una opcion</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="historia" value="Historia" />
                        </div>
                        <Textarea onChange={(e) => setHistoria(e.target.value)} value={historia} id="historia" placeholder="Cuenta la historia del peludito..." required rows={4} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="foto" value="Sube las fotos del peludito" />
                        </div>
                        <FileInput onChange={handleImageUpload} id="foto" multiple />
                    </div>
                    <Button type="submit">Registrar peludito</Button>
                </form>
            </div>
        </main>
    )
}
