import { json, LoaderFunction } from '@remix-run/node';
import type * as node from "@remix-run/node";
import { pool } from '~/config/bd'

export async function action({ request }: node.ActionFunctionArgs) {
    try {
        // Leer el cuerpo de la solicitud para obtener los datos enviados por el cliente
        const body = await request.json();

        let sqlConsult = `UPDATE EnAdopcion SET nombrePeludo = '${body.name}', raza = '${body.raza}', edad = ${body.edad}, contacto = ${body.contacto}, categoria = '${body.tipoPeludito}', sexo = '${body.sexo}', color = '${body.color}', tamano = '${body.tamano}', vacunado = '${body.vacunado}', castrado = '${body.castrado}', historia = '${body.historia}' WHERE idPeludo = ${body.idPeludo}`
        const result = await pool.query(sqlConsult)
        if (result[0] !== null && result[0] !== undefined) {
            return json({ code: 200, message: "Se actualizo la mascota", idPeludo: result[0].insertId })
        } 
        
    } catch (error) {
        // Si ocurre algún error, devolvemos una respuesta de error
        console.log(error)
        return json({ code: 500, message: 'Error interno del servidor: ' });
    }
};