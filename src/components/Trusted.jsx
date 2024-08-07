import { Card } from "./Others/PeoplesCard";

export function Trusted() {
    return (
        <div className="flex flex-col mt-12 px-4 items-center justify-center">
            <div className="text-3xl md:text-4xl text-center text-blue-950 font-bold">
            Trusted by industry experts
            </div>
            <div className="md:text-xl text-slate-600 mt-4 text-center">
            Fast-growing companies choose Zenskar for smooth, flexible and reliable billing to power their growth.
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center md:w-10/12 mt-12">

                <div className="flex flex-row space-x-8"><img className="w-32" src="/100ms.svg" alt="" />
                <div><img className="w-32" src="/edify.png" alt="" /></div></div>

                <div className="flex flex-row space-x-8"><img className="w-32" src="/pontera.svg" alt="" />
                <div><img className="w-32" src="/vertice.svg" alt="" /></div></div>

                <div className="flex flex-row space-x-8"><img className="w-32" src="/yembo.svg" alt="" />
                <div><img className="w-32" src="/squadstack-p-500.webp" alt="" /></div></div>
            </div>

            <Card/>
            
        </div>
    )
}