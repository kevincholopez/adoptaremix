import React, { useState, useEffect } from 'react';
import styles from '~/styles/_index.css'
import type { LinksFunction } from "@remix-run/node";
import { Button, Label, TextInput, Select, Textarea, FileInput, Spinner, Modal } from 'flowbite-react';
import { url } from "~/config/conection";
import { uploadfile } from '~/config/firebase'
import { Table } from "flowbite-react";

export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

interface Animal {
    idPeludo: number;
    nombrePeludo: string;
    raza: string;
    edad: number;
    foto: string;
    contacto: number;
    categoria: string;
    sexo: string;
    color: string;
    tamano: string;
    vacunado: string;
    castrado: string;
}

export default function TablaMascotas() {
    const [animals, setAnimals] = useState<Animal[]>([]);
    const [animalsFilter, setAnimalsFilter] = useState<Animal[]>([]);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        if (animals.length <= 0) {
            obtenerPeluditos()
        }
    })

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

    const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
        // setSendFormLoading(true)
        // e.preventDefault();
        // try {
        //     const petSelected = new URLSearchParams(location.search).get("idPeludo");
        //     let data = null;
        //     if (petSelected == null) {
        //         const body = {
        //             "name": name,
        //             "raza": raza,
        //             "edad": edad,
        //             "contacto": contacto,
        //             "tipoPeludito": tipoPeludito,
        //             "sexo": sexo,
        //             "color": color,
        //             "tamano": tamano,
        //             "vacunado": vacunado,
        //             "castrado": castrado,
        //             "historia": historia
        //         }
        //         const settings = {
        //             method: 'POST',
        //             headers: {
        //                 Accept: 'application/json',
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify(body)
        //         };

        //         const res = await fetch(`${url.url}/api/registroMascotas`, settings)
        //         data = await res.json();
        //     } else {
        //         const body = {
        //             "idPeludo": idPeludo,
        //             "name": name,
        //             "raza": raza,
        //             "edad": edad,
        //             "contacto": contacto,
        //             "tipoPeludito": tipoPeludito,
        //             "sexo": sexo,
        //             "color": color,
        //             "tamano": tamano,
        //             "vacunado": vacunado,
        //             "castrado": castrado,
        //             "historia": historia
        //         }
        //         const settings = {
        //             method: 'PUT',
        //             headers: {
        //                 Accept: 'application/json',
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify(body)
        //         };

        //         const res = await fetch(`${url.url}/api/actualizarMascota`, settings)
        //         data = await res.json();
        //     }
        //     // Obtener el elemento input
        //     const inputElement: HTMLInputElement | null = document.getElementById('foto') as HTMLInputElement;

        //     const files = inputElement.files

        //     if (files && files.length > 0) {
        //         for (let i = 0; i < files.length; i++) {
        //             const file: File = files[i];
        //             const { v4: uuidv4 } = require('uuid');
        //             const imageUploaded = await uploadfile(file, uuidv4())
        //             const bodyimagens = {
        //                 "idPeludo": data.idPeludo,
        //                 "urlImagen": imageUploaded,
        //                 "idImagen": uuidv4()
        //             }
        //             const settingsImagens = {
        //                 method: 'POST',
        //                 headers: {
        //                     Accept: 'application/json',
        //                     'Content-Type': 'application/json',
        //                 },
        //                 body: JSON.stringify(bodyimagens)
        //             };
        //             const resImage = fetch(`${url.url}/api/registroMascotasImagenes`, settingsImagens)
        //             setSendFormLoading(false)
        //         }
        //     } else {
        //         console.log('Ningún archivo seleccionado');
        //     }

        // } catch (err) {
        //     console.log(err);
        // }
    }

    const listAnimals = animalsFilter.map((item, id) =>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Notificaciones</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Esta seguro de eliminar este elemento, recuerde que se eliminara la información de la mascota y las imágenes relacionadas a este registro.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => eliminarMascota(item.idPeludo)}>Aceptar</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Rechazar
                    </Button>
                </Modal.Footer>
            </Modal>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.nombrePeludo}
            </Table.Cell>
            <Table.Cell>{item.raza}</Table.Cell>
            <Table.Cell>{item.edad}</Table.Cell>
            <Table.Cell>{item.contacto}</Table.Cell>
            <Table.Cell>{item.categoria}</Table.Cell>
            <Table.Cell>{item.sexo}</Table.Cell>
            <Table.Cell>{item.color}</Table.Cell>
            <Table.Cell>{item.tamano}</Table.Cell>
            <Table.Cell>{item.vacunado}</Table.Cell>
            <Table.Cell>{item.castrado}</Table.Cell>
            <Table.Cell><img width={150} src={item.foto}></img></Table.Cell>
            <Table.Cell>
                <a href={`/registroMascotas?idPeludo=${item.idPeludo}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Editar
                </a>
            </Table.Cell>
            <Table.Cell>
                <a href='#' onClick={() => setOpenModal(true)} className="font-medium text-red-600 hover:underline dark:text-red-500">
                    Eliminar
                </a>
            </Table.Cell>
        </Table.Row>
    );

    const eliminarMascota = async (idPet: number) => {
        try {
            const body = {
                "idPeludo": idPet
            }
            const settings = {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            };
    
            const res = await fetch(`${url.url}/api/eliminarMascota`, settings)
            const data = await res.json();
            setOpenModal(false)
            obtenerPeluditos()
        } catch (error) {
            console.log("error + " + error)
        }

    };

    const asignarIdAnimal = (idPet: string) => {
        localStorage.setItem("idPet", idPet);
    };

    return (
        <main className="flex flex-col items-center justify-between p-12">
            <div className='lg:col-start-2 py-20 sm:centerDivs'>
                <h3 className={`subTitlePrincipal px-6`}>!Hora de darle un hogar!</h3>
                <h1 className={`titleLobby px-6`}>Listado de mascotas en adopción</h1>
                <br />
                <div className="flex flex-wrap gap-2">
                    <Button gradientDuoTone="redToYellow" href="/registroMascotas">Agregar</Button>
                </div>
                <br />
                <div className="overflow-x-auto">
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>Nombre</Table.HeadCell>
                            <Table.HeadCell>Raza</Table.HeadCell>
                            <Table.HeadCell>Edad</Table.HeadCell>
                            <Table.HeadCell>Contacto</Table.HeadCell>
                            <Table.HeadCell>Categoría</Table.HeadCell>
                            <Table.HeadCell>Sexo</Table.HeadCell>
                            <Table.HeadCell>Color</Table.HeadCell>
                            <Table.HeadCell>Tamaño</Table.HeadCell>
                            <Table.HeadCell>Vacunado</Table.HeadCell>
                            <Table.HeadCell>Castrado</Table.HeadCell>
                            <Table.HeadCell>Foto</Table.HeadCell>
                            <Table.HeadCell>
                                <span className="sr-only">Edit</span>
                            </Table.HeadCell>
                            <Table.HeadCell>
                                <span className="sr-only">Delete</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {listAnimals}
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </main>
    )
}
