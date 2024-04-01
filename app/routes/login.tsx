import { useEffect, useState } from "react";
import styles from '~/styles/_index.css'
import type { LinksFunction } from "@remix-run/node";
import { TextInput, Label, Button, Spinner } from "flowbite-react";
import { url } from "~/config/conection";
import { useNavigate } from "@remix-run/react";

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

export default function login() {
    const [user, setUser] = useState("");
    const [pass, setPassword] = useState("");
    const [showLoading, setShowLoading] = useState(false);
    const [colorUser, setColorUser] = useState("gray");
    const [colorPassword, setColorPassword] = useState("gray");
    const [messageUser, setMesUser] = useState(false);
    const [messagePassword, setMesPassword] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('userLogin') !== undefined && localStorage.getItem('userLogin') !== null) {
            navigate('/registroMascotas')
        }
        // if (animals.length <= 0) {
        //     obtenerPeluditos()
        // }

    })
    // const [viewListGeneral, setViewListGeneral] = useState<boolean>(false);
    
    // const listAnimals = animalsFilter.map((item, id) =>
    //     <a onClick={() => asignarIdAnimal(item.idPeludo)} key={id} href={`/adopta/petSelected`} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    //         <img src={item.foto} alt="image" width={600} height={400}></img>
    //         <h1 className="text-center">{item.nombrePeludo}</h1>
    //         <h2 className="text-center">{item.edad} Años</h2>
    //     </a>
    // );

    const sendForm = async () => {
        setShowLoading(true)
        try {
            const res = await fetch(`${url.url}/api/login?identificacion=${user}&password=${pass}`)
            const data = await res.json();
            if (data.code == 200) {
            
                localStorage.setItem('userLogin', user)
                setShowLoading(false)
                setColorUser("gray")
                setColorPassword("gray")
                setMesUser(false)
                setMesPassword(false)
                navigate('/registroMascotas')
            } else if (data.code == 400) {
                setShowLoading(false)
                setColorPassword("failure")
                setColorUser("gray")
                setMesUser(false)
                setMesPassword(true)
            } else {
                setShowLoading(false)
                setColorUser("failure")
                setColorPassword("gray")
                setMesPassword(false)
                setMesUser(true)
            }
            // console.log(data)
            // Assuming 'data' variable is declared somewhere
            // setAnimals(data);
            // setAnimalsFilter(data);

        } catch (err) {
            setShowLoading(false)
            console.log(err);
        }
    };

    // const asignarIdAnimal = (idPet: string) => {
    //     localStorage.setItem("idPet", idPet);
    // };

    // const filterAnimals = (animalSelected: string) => {
    //     if (animalSelected === "Todos") {
    //         setAnimalsFilter(animals);
    //     } else {
    //         setAnimalsFilter(animals.filter(s => s.categoria === animalSelected));
    //     }
    // };

    // const selectPet = (pet: Animal) => {
    //     setViewListGeneral(true);
    // };
    return (
        <main className="flex flex-col items-center justify-between p-12">
            <div className='lg:col-start-2 py-20 sm:centerDivs'>
                <h3 className={`subTitlePrincipal px-6`}>Fundación adopta la plata</h3>
                <h1 className={`titleLobby px-6`}>inicia sesión</h1>
                <br />
                <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="user" value="Documento" />
                        </div>
                        <TextInput helperText={<>
                            <span className={`font-medium ${messageUser ? '' : 'hidden'}` }> Usuario no existe! </span>
                        </>} color={colorUser} onChange={(e) => setUser(e.target.value)} value={user} id="user" type="number" placeholder="Numero de documento" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="pass" value="Contraseña" />
                        </div>
                        <TextInput helperText={<>
                            <span className={`font-medium ${messagePassword ? '' : 'hidden'}`}>Contraseña incorrecta </span>
                        </>} color={colorPassword} onChange={(e) => setPassword(e.target.value)} value={pass} id="pass" type="password" placeholder="Ingrese la contraseña" required />
                    </div>
                    <Button onClick={sendForm} className={`${showLoading ? 'hidden' : ''}`}>Inicia Sesión</Button>
                    <Button className={`${showLoading ? '' : 'hidden'}`} color="gray">
                        <Spinner aria-label="Alternate spinner button example" size="sm" />
                        <span className="pl-3">Cargando...</span>
                    </Button>
                </form>
            </div>
        </main>
    )
}
