import { json, LoaderFunction } from '@remix-run/node';
import { pool } from '~/config/bd'

export const loader: LoaderFunction = async ({params, request}) => {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const petSelected = searchParams.get("petSelected");
    console.log(petSelected)
    try {
        let sqlConsult = "SELECT imagen FROM imagenesEnAdopcion"
        if (petSelected != null) {
            sqlConsult = sqlConsult + ` WHERE idPeludo = ${petSelected}`
        }
        const result = await pool.query(sqlConsult)
        const data = json(result[0])

        
        return json(result[0])

    } catch (error) {
        console.error('Error al obtener datos de la base de datos:', error);
        return json({ message: '¡Hola desde el API de Remix!' + error });
    }
};