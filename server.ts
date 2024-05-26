import { createServer } from 'http';
import { Server } from 'socket.io'
import next from 'next'
import db from './src/utils/db'

const dev = process.env.NODE_ENV !== 'production';
const port = 3000;
const NextApp = next({ dev })
const nextHandler = NextApp.getRequestHandler();

NextApp.prepare().then(() => {
    const server = createServer((req: any, res: any) => {
        nextHandler(req, res);
    })
    const roomMessages = {};
    const io = new Server(server)
    io.on('connection', (socket) => {
        console.log('a user connected ' + socket.id)
        socket.on('disconnect', () => {
            console.log('user disconnected', socket.id)
        })
        socket.on('join-room', async (data: any) => {
            console.log('room', data)
            const { id } = data;
            socket.join(id);
            const dbmsg = await db.query('SELECT * FROM quotes WHERE id=$1', [id])
            const msg = dbmsg.rows[0].quote
            socket.emit('chat', msg)
        })
        socket.on('chat', async (data: any) => {
            console.log('chat', data)
            const { id, messages } = data;
            roomMessages[id] = messages;
            io.to(id).emit('chat', messages);
            await db.query("UPDATE quotes SET quote = $1 WHERE id = $2", [messages, id])
        });
        socket.on('init', async (id: number) => {
            const data = await db.query('SELECT * FROM quotes WHERE id=$1', [id])
            const msg = data.rows[0].quote
            roomMessages[id] = msg
        })

    })


    server.listen(port, () => {

        console.log(`> Ready on http://localhost:${port}`)
    })
})