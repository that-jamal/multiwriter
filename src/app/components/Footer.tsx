
import Image from 'next/image'

export default async function Footer() {
    return (
        <div className="foot bg-[#fcee0a]  absolute w-full bottom text-[#fcee0a]  pb-4 text-xl font-custom">
            <div className=" bg-black w-full justify-evenly mx-auto min-h-0 text-center">
                <a href="https://github.com/that-jamal/multiwriter" target="_blank" rel="noopener noreferrer" className="inline-flex items-center  text-[#fcee0a]hover:text-white transition duration-150">
                    <Image src="/github-mark-yellow.png" alt="me" width="20" height="20" />
                    <p className="p-1  ">Multiwriter</p></a>
                <p>&copy; {new Date().getFullYear()/*mest komplicerade sättet att skriv 2024 */} Multiwriter. All rights reserved.</p>
            </div>
        </div>
    );
}
