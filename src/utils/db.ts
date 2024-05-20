import { Pool } from 'pg'
import { loadEnvConfig } from '@next/env'

loadEnvConfig(process.cwd())
const db = new Pool({
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    host: process.env.HOST
})
console.log("test===??")
console.log("här", process.env.USER)
export default db