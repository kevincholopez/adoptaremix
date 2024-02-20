import { createPool } from "mysql2/promise";

const pool = createPool({
    host: '148.113.168.52',
    user: 'adoptala_adminAdopta',
    password: 'PzvyVc547nV5',
    port: 3306,
    database: 'adoptala_AdoptaLaPlataDB'
})

export { pool }