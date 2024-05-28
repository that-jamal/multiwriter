
import { getData, saveData, updateData, deleteData } from "@/utils/handleDatabase";
import { revalidateTag } from "next/cache"
import Link from "next/link";
export default async function docs() {
    const data = await getData()
    const create = async (formData: FormData) => {
        'use server'
        const quote = formData.get("quote") as string
        const author = formData.get("author") as string
        const data = await saveData(quote, author)
        console.log(data, 'created')
        revalidateTag("quote")

    }
    const update = async (formData: FormData) => {
        'use server'
        //const quote = formData.get("quote") as string
        const author = formData.get("author") as string
        const id = Number(formData.get("id") as string)
        const data = await updateData(author, id)
        console.log(data, 'updated')
        revalidateTag("quote")
    }
    const deleteForm = async (formData: FormData) => {
        'use server'
        const id = Number(formData.get("id") as string)
        const data = await deleteData(id)
        console.log(data, ' deleted')
        revalidateTag("quote")
    }
    return (
        <section className="font-custom text-xl flex min-h-screen flex-col items-center justify-between">
            <form className="tilt glitch flex flex-col items-center justify-center gap-4 min-h-4 max-w-96 bg-[#fcee0a] p-5 " action={create}>
                <h1 className="w-44 text-center text-white bg-tech ">Create Document</h1>
                <input className=" placeholder-slate-500 bg-[#00ffd2] hover:bg-cyan-500 active:bg-indigo-600 text-xl text-indigo-950 px-4 py-2 ease-in-out" type="text" name="author" placeholder="Name" />
                <button className=" bg-[#00ffd2] hover:bg-cyan-500 active:bg-indigo-600 text-xl text-indigo-950 px-4 py-2   ">Create Document</button>
            </form>
            <div className="  flex flex-wrap p-7 gap-4 justify-center pb-20 ">
                {data.map(q => (
                    <div key={q.id} className="tilt2  glitch flex flex-col items-center justify-center gap-4 min-h-64 bg-[#fcee0a]  p-5 mb-8 ">
                        <div className="flex items-center">
                            <form className=" flex flex-col items-center" action={update}>
                                <input className="placeholder-slate-500 bg-[#00ffd2] hover:bg-cyan-500 active:bg-indigo-600 text-xl text-indigo-950 px-4 py-2 ease-in-out text-center " type="author" name="author" defaultValue={q.author} placeholder={"document " + q.id} />
                                <button className="mt-4 bg-[#00ffd2] hover:bg-cyan-500 active:bg-indigo-600 text-xl text-indigo-950  px-4 py-2 transition-colors duration-300 ease-in-out">
                                    <h1>update</h1>
                                </button>
                                <Link href={`/${q.id}`}><h1 className="tilt3 glitch ease-in-out  hover:bg-gray-900 mt-4 bg-tech text-white h-24 w-40 truncate">{q.quote}</h1></Link>
                                <input type="hidden" name="id" value={q.id.toString()} />
                            </form>
                        </div>
                        <form action={deleteForm}>
                            <button className=" flex ease-in-out hover:bg-[#00ffd2]">
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0" y1="0" x2="16" y2="16" stroke="red" strokewidth="1.5" />
                                    <line x1="0" y1="16" x2="16" y2="0" stroke="red" strokewidth="1.5" />
                                </svg>
                            </button>
                            <input type="hidden" name="id" value={q.id} />
                        </form>
                    </div>
                ))}
            </div>

        </section>

    );
}
