'use client'
import React, { useEffect, useState } from 'react';
import io, { Socket as SocketIO } from 'socket.io-client';

let socket: SocketIO
export default function Socket({ id }: { id: string }) {
    const [messages, setMessage] = useState('')
    useEffect(() => {
        socket = io();
        socket.emit('join-room', { id: id });
        socket.on('chat', (msg) => {
            setMessage(msg);
            console.log(msg, "y")
        });
        socket.on('connect', () => {
            socket.emit("init", id)
            console.log('connected');
        });
        return () => {
            socket.disconnect();
        };

    }, []);
    return (
        <div>
            <div className='font-custom flex flex-col p-10 gap-4 min-w-80 max-w-screen shadow-xl'>
                <textarea
                    value={messages}
                    onChange={({ target }) => socket.emit('chat', { id: id, messages: target.value })}
                    className="w-full text-xl h-96 p-4 border border-gray-300 rounded"
                    placeholder="Start typing here..."
                />
            </div>
        </div>
    );
}