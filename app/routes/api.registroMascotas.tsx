import { json, LoaderFunction } from '@remix-run/node';
import type * as node from "@remix-run/node";
import { pool } from '~/config/bd'

export async function action({ request }: node.ActionFunctionArgs) {
    try {
        // Leer el cuerpo de la solicitud para obtener los datos enviados por el cliente
        console.log(request.body)
        const body = await request.json();
        // Procesar los datos según sea necesario
        console.log('Datos recibidos:', body);

        let sqlConsult = `INSERT INTO EnAdopcion (nombrePeludo, raza, edad, contacto, categoria, sexo, color, tamano, vacunado, castrado, historia) VALUES ('${body.name}', '${body.raza}', ${body.edad}, ${body.contacto}, '${body.tipoPeludito}', '${body.sexo}', '${body.color}', '${body.tamano}', '${body.vacunado}', '${body.castrado}', '${body.historia}' )`
        // if (petSelected != null) {
        //     sqlConsult = sqlConsult + ` WHERE idPeludo = ${petSelected}`
        // }
        const result = await pool.query(sqlConsult)
        console.log(result)
        return json({ code: 200, message: "Se registro la mascota" })
        

        // Por ejemplo, aquí estamos devolviendo una respuesta de éxito
        return json({ code: 200, message: 'Datos recibidos correctamente' });
    } catch (error) {
        // Si ocurre algún error, devolvemos una respuesta de error
        console.log(error)
        return json({ code: 500, message: 'Error interno del servidor: ' });
    }
};