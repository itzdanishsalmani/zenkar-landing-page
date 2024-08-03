import { Card } from "./Others/PeoplesCard";

export function Trusted() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-3xl font-bold">
            Trusted by industry experts
            </div>
            <div className="text-xl mt-4">
            Fast-growing companies choose Zenskar for smooth, flexible and reliable billing to power their growth.
            </div>
            <div className="flex flex-row justify-between items-center w-10/12 mt-8">
                <div><img className="w-32" src="/100ms.svg" alt="" /></div>
                <div><img className="w-32" src="/edify.png" alt="" /></div>
                <div><img className="w-32" src="/pontera.svg" alt="" /></div>
                <div><img className="w-32" src="/vertice.svg" alt="" /></div>
                <div><img className="w-32" src="/yembo.svg" alt="" /></div>
                <div><img className="w-32" src="/squadstack-p-500.webp" alt="" /></div>
            </div>
            <Card/>
        </div>
    )
}