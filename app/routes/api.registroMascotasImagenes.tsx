import { json, LoaderFunction } from '@remix-run/node';
import type * as node from "@remix-run/node";
import { pool } from '~/config/bd'
import { uploadfile } from '~/config/firebase'

export async function action({ request }: node.ActionFunctionArgs) {
    try {
        // Leer el cuerpo de la solicitud para obtener los datos enviados por el cliente
        const body = await request.json();
        console.log(body)
        //Ejecutar la consulta SQL de inserción
        const sqlInsert = `INSERT INTO imagenesEnAdopcion (idImagen, idPeludo, imagen) VALUES (?, ?, ?)`;
        const insertResult = await pool.execute(sqlInsert, [body.idImagen, body.idPeludo, body.urlImagen]);

        // Ejecutar la consulta SQL de actualización
        const sqlUpdate = `UPDATE EnAdopcion SET foto = ? WHERE idPeludo = ?`;
        const updateResult = await pool.execute(sqlUpdate, [body.urlImagen, body.idPeludo]);

        //Verificar si se realizaron las consultas correctamente
        return json({ code: 200, message: "Se registró la imagen de la mascota." });
    } catch (error) {
        // Si ocurre algún error, devolvemos una respuesta de error
        console.error(error);
        return json({ code: 500, message: 'Error interno del servidor: ' + error });
    }
};