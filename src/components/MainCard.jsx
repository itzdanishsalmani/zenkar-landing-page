import { Buttons } from "./Others/Buttons";

export function MainCard() {
    return ( 
    <div className="bg-main-bg w-screen bg-cover flex flex-col h-auto items-center justify-center">
        <div className="text-3xl md:text-5xl text-blue-950 pt-24 font-black px-2 md:w-7/12 text-center leading-tight">
        Automate billing and revenue recognition for subscriptions and usage
        </div>
        <div className="md:text-xl px-2 text-slate-600 md:w-8/12 text-center mt-8">
        Ditch clunky solutions and upgrade to flexible and automated revenue workflows without engineers. Reduce manual work and empower finance teams with no-code usability.
        </div>

        <div className="my-8">
            <Buttons 
            style={"bg-blue-950 text-white rounded-lg p-4"}
            text={"Book a Demo"}
            image={"arrow_forward.svg"}
            />
        </div>
    </div>
    )
} 