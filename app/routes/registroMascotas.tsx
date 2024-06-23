import React, { useState, useEffect } from 'react';
import styles from '~/styles/_index.css'
import type { LinksFunction } from "@remix-run/node";
import { Button, Checkbox, Label, TextInput, Select, Textarea, FileInput, Spinner } from 'flowbite-react';
import { url } from "~/config/conection";
import { uploadfile } from '~/config/firebase'

export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

interface PictureInterfaz {
    images: File[]
}

export default function RegistroMascotas() {
    const [idPeludo, setIdPeludo] = useState('');
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
    const [sendFormLoading, setSendFormLoading] = useState(false)
    const [dataActualizada, setDataActualizada] = useState(false);

    useEffect(() => {
        // console.log(foto)
        const petSelected = new URLSearchParams(location.search).get("idPeludo");
        if (petSelected != null && !dataActualizada) {
            obtenerPeluditos();
        }
    })

    const obtenerPeluditos = async () => {
        const petSelected = new URLSearchParams(location.search).get("idPeludo");
        try {
            const res = await fetch(`${url.url}/api/EnAdopcion?petSelected=${petSelected}`)
            const data = await res.json();
            setIdPeludo(data[0].idPeludo)
            setName(data[0].nombrePeludo)
            setRaza(data[0].raza)
            setEdad(data[0].edad)
            setContacto(data[0].contacto)
            setTipoPeludito(data[0].categoria)
            setSexo(data[0].sexo)
            setColor(data[0].color)
            setTamano(data[0].tamano)
            setCastrado(data[0].castrado)
            setVacunado(data[0].vacunado)
            setHistoria(data[0].historia)
            setDataActualizada(true)
        } catch (err) {
            console.log(err);
        }
    };

    const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
        setSendFormLoading(true)
        e.preventDefault();
        try {
            const petSelected = new URLSearchParams(location.search).get("idPeludo");
            let data = null;
            if (petSelected == null) {
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
                    "historia": historia
                }
                const settings = {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body)
                };
    
                const res = await fetch(`${url.url}/api/registroMascotas`, settings)
                data = await res.json();
            } else {
                const body = {
                    "idPeludo": idPeludo,
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
                    "historia": historia
                }
                const settings = {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body)
                };
    
                const res = await fetch(`${url.url}/api/actualizarMascota`, settings)
                data = await res.json();
            }
            // Obtener el elemento input
            const inputElement: HTMLInputElement | null = document.getElementById('foto') as HTMLInputElement;

            const files = inputElement.files

            if (files && files.length > 0) {
                for (let i = 0; i < files.length; i++) {
                    const file: File = files[i];
                    const { v4: uuidv4 } = require('uuid');
                    const imageUploaded = await uploadfile(file, uuidv4())
                    const bodyimagens = {
                        "idPeludo": data.idPeludo,
                        "urlImagen": imageUploaded,
                        "idImagen": uuidv4()
                    }
                    const settingsImagens = {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(bodyimagens)
                    };
                    const resImage = fetch(`${url.url}/api/registroMascotasImagenes`, settingsImagens)
                    setSendFormLoading(false)
                }
            } else {
                console.log('Ningún archivo seleccionado');
            }
            window.location.href = '/tablaMascotas'

        } catch (err) {
            console.log(err);
        }
    }

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
                        <FileInput accept="image/jpeg" id="foto" multiple />
                    </div>
                    <Button type="submit" className={`${sendFormLoading ? 'hidden' : ''}`}>Registrar peludito</Button>
                    <Button className={`${sendFormLoading ? '' : 'hidden'}`} color="gray">
                        <Spinner aria-label="Alternate spinner button example" size="sm" />
                        <span className="pl-3">Cargando...</span>
                    </Button>
                </form>
            </div>
        </main>
    )
}
