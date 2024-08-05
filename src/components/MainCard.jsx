import { Buttons } from "./Others/Buttons";

export function MainCard() {
    return ( 
    <div className="bg-main-bg flex flex-col h-fit border items-center justify-center">
        <div className="text-5xl text-blue-950 pt-24 font-black w-7/12 text-center leading-tight">
        Automate billing and revenue recognition for subscriptions and usage
        </div>
        <div className="text-xl text-slate-600 w-8/12 text-center mt-8">
        Ditch clunky solutions and upgrade to flexible and automated revenue workflows without engineers. Reduce manual work and empower finance teams with no-code usability.
        </div>

        <div className="my-8">
            <Buttons 
            style={"bg-blue-950 text-white rounded-lg"}
            text={"Book a Demo"}
            image={"arrow_forward.svg"}
            />
        </div>
    </div>
    )
} 