'use client'
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
type SocketProps = {
    on: (d: string, callback: (e: any) => void) => void;
    emit: (d: string, b: any) => void;
}
let socket: SocketProps
export default function Socket({ id }: { id: string }) {
    const [messages, setMessage] = useState('')
    useEffect(() => {
        socket = io();
        socket.emit('join-room', { id: id, messages: messages });
        socket.on('connect', () => {
            console.log('connected');
            socket.emit("init", id)
        });
        socket.on('chat', (msg) => {
            setMessage(msg);
            console.log(msg, "y")
        });
        return () => {
            socket.disconnect();
        };
    }, []);
    return (
        <div className='flex flex-col p-10 gap-4 min-w-80 max-w-screen  bg-slate-200 rounded-md shadow-xl'>
            <textarea
                value={messages}
                onChange={({ target }) => socket.emit('chat', { id: id, messages: target.value })}
                className="w-full h-96 p-4 border border-gray-300 rounded"
                placeholder="Start typing here..."
            />
        </div>
    );
}