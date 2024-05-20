import React from 'react'
import Socket from '../components/Documents'
import Link from 'next/link'

export default function page({ params }) {
    return (
        <div>
            <Link href={`/`}><button className="w-full h-26 p-4 border hover:bg-blue-300 border-gray-300 rounded">Change Document</button></Link>
            <Socket id={params.id} />
        </div>
    )
}
