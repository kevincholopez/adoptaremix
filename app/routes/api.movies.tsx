import { json, LoaderFunction } from '@remix-run/node';
import { pool } from '~/config/bd'

export const loader: LoaderFunction = async () => {
    try {
        const result = await pool.query('SELECT * FROM EnAdopcion')
        return json(result[0])

    } catch (error) {
        console.error('Error al obtener datos de la base de datos:', error);
        return json({ message: '¡Hola desde el API de Remix!' + error });
    }
};