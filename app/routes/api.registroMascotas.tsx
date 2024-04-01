import { json, LoaderFunction } from '@remix-run/node';
import { pool } from '~/config/bd'

export const loader: LoaderFunction = async ({params, request}) => {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    console.log(request)
    try {
        let sqlConsult = `SELECT * FROM Usuario WHERE identificacion = ${identificacion}`
        // if (petSelected != null) {
        //     sqlConsult = sqlConsult + ` WHERE idPeludo = ${petSelected}`
        // }
        const result = await pool.query(sqlConsult)
        if (result[0][0].password == password) {
            return json({ code: 200, message: "ingreso" })
        } else {
            return json({ code: 400, message: "Contraseña incorrecta" })
        }

    } catch (error) {
        return json({ code: 500, message: 'usuario no existe: ' + error });
    }
};