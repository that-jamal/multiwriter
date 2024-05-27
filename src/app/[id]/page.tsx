import React from 'react'
import Socket from '../components/Documents'
import Link from 'next/link'

export default function page({ params }) {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link href={`/`}><button className="tilt4 glitch text-2xl h-26 p-4 bg-black hover:bg-[#fcee0a] font-custom text-[#fcee0a] hover:text-black">go back</button></Link>
            </div>
            <Socket id={params.id} />
        </div>
    )
}
