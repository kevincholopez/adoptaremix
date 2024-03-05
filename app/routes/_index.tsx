import type { MetaFunction } from "@remix-run/node";
import styles from '~/styles/_index.css'
import type { LinksFunction } from "@remix-run/node";
import CarouselComponent from '~/shared/components/carousel/carousel'

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

export default function Index() {

  return (
    <main>
      <div className='bg-repeat-x backgroundBanner'>
        <div className='overlay'></div>
        <div className="lg:grid lg:grid-cols-4 lg:gap-2 elevateText">
          <div className='lg:col-start-2 py-20 sm:centerDivs'>
            <h1 className={`titleLobby pb-6`}>Fundación Adopta la Plata Huila</h1>
            <h2 className={`textPrincipal py-6`}>Descubre nuestra misión y valores en Fundación Adopta la Plata Huila en La Plata, Huila, Colombia.</h2>
            <a href="/nosotros">
              <button
                // onClick={async () => envioSMS()}
                className={`buttonPrincipal`}>Conoce más</button>
            </a>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 elevateText secondSpace">
        <div className='sm:px-5 lg:px-20 lg:py-12'>
          <h3 className={`subTitlePrincipal pb-6`}>Elige a tu compañero peludo perfecto</h3>
          <h1 className={`titleLobby pb-6`}>Puntos a tener en cuenta para la adopción de tu peludito</h1>
        </div>
        <div className='lg:px-20 lg:py-12'>
          <h2 className={`textPrincipal pb-6`}>La idea de traer una nueva mascota a tu hogar puede ser emocionante y a la vez desafiante. Antes de decidirte por ese amigo peludo perfecto, los futuros dueños deben considerar todos los aspectos de la adopción para tomar una decisión informada. Tomar medidas reflexivas como entender el compromiso financiero involucrado, investigar diferentes razas/especies y buscar ayuda de profesionales en el bienestar animal puede asegurarte de elegir la mejor mascota para ti y tu familia. ¡Elegir adoptar también contribuye a poner fin a la sobrepoblación de mascotas, es una decisión en la que todos ganan!</h2>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-2 elevateText">
        <div className='col-start-2 col-span-2 px-20 py-12'>
          <h1 className={`titleLobby centerTitles pb-6`}>Nuestra historia</h1>
          <h2 className={`textPrincipal centerTitles pb-6`}>Este conmovedor video muestra el vínculo inquebrantable entre un dueño de mascota y su compañero amado, seguramente traerá lágrimas de alegría a los amantes de los animales en todas partes.</h2>
        </div>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-14 px-14 pb-16'>
        <video src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" controls width={500} height={600}></video>
        <video src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" controls width={500} height={600}></video>
        <video src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" controls width={500} height={600}></video>
      </div>
      <div className='secondSpace'>
        <h1 className={`titleLobby col-start-2 col-span-3 centerTitles p-10`}>Posibles mascotas en adopción para dueños de mascotas</h1>
      </div>
      <div className="h-96">
        <CarouselComponent />
      </div>
    </main>
  );
}
