import type { MetaFunction } from "@remix-run/node";
import styles from '~/styles/_index.css'
import type { LinksFunction } from "@remix-run/node";
import imgContactenos from '~/assets/home/contactenos.webp'
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { useState } from "react";

export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export const meta: MetaFunction = () => {
    return [
        { title: "Adopta la Plata Huila" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Contactenos() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [observation, setObservation] = useState('');

    const sendForm = () => {

    }

    return (
        <main className="flex flex-col items-center justify-between p-12">
            <div className="lg:grid lg:grid-cols-2 lg:gap-2 elevateText">
                <div className='py-20 sm:centerDivs'>
                    <img src={imgContactenos}></img>
                </div>
                <div className='lg:col-start-2 py-20 sm:centerDivs'>
                    <h3 className={`subTitlePrincipal px-6`}>Contactenos</h3>
                    <h1 className={`titleLobby px-6`}>¿Tienes alguna pregunta?</h1>
                    <p className='text-center textPrincipal p-6'>¡Contáctanos siempre que tengas alguna pregunta! ¡Siempre estamos aquí para ti!</p>
                    <form onSubmit={() => sendForm()} className="flex flex-col gap-4 px-6">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Nombres" />
                            </div>
                            <TextInput onChange = {(e) => setName(e.target.value)} value = {name} id="name" type="text" placeholder="" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Tu correo" />
                            </div>
                            <TextInput onChange = {(e) => setPhone(e.target.value)} value = {phone} id="email" type="email" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="phone" value="Tu telefono" />
                            </div>
                            <TextInput onChange = {(e) => setEmail(e.target.value)} value = {email} id="phone" type="number" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="observation" value="Observación" />
                            </div>
                            <Textarea onChange = {(e) => setObservation(e.target.value)} value = {observation} id="observation" required />
                        </div>
                        <Button type="submit">Enviar</Button>
                    </form>
                </div>
            </div>
        </main>
    );
}
