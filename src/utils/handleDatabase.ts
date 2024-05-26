import db from './db'

export async function getData() {
    try {
        const data = await db.query('SELECT * FROM quotes ORDER BY id')
        return data.rows
    }
    catch (error) {
        console.log(error)
        return 'Somthing went wrong'
    }
}

export async function saveData(quote: string, author: string) {
    try {
        await db.query("INSERT INTO quotes(author, quote) VALUES ($1, $2)", [author, quote])
        return 'Saved fr fr!'
    } catch (error) {
        console.log(error)
        return 'Somthing went wrong'
    }
}

export async function updateData(author: string, id: number) {
    try {
        await db.query("UPDATE quotes SET author = $1  WHERE id = $2", [author, id])
        return 'Updated'

    } catch (error) {
        console.log(error)
        return '3 Somthing went wrong'
    }
}

export async function deleteData(id: string) {
    try {
        await db.query("DELETE FROM quotes WHERE id = $1", [id])
        return 'Deleted'
    } catch (error) {
        console.log(error)
        return 'Somthing went wrong'
    }
}