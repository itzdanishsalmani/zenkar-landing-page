import { IconsCard } from "./Others/IconsCard";

export function SeamlessSection() {
    return (
        <div className="mt-12  flex justify-center bg-slate-100 h-screen ">
            <div className="w-7/12 text-center mt-24  ">
                <div className="text-4xl font-bold">Seamless integration with your tech stack </div>
                <div className="mt-2 text-lg"> Access 100+ integrations across CRM, ERP, payment gateways, and more to automate billing without disrupting your setup.
                </div>
                <div className="flex justify-center space-x-8 mt-8 w-full ">
                    <IconsCard image={"icon1.webp"} />
                    <IconsCard image={"icon2.webp"} />
                    <IconsCard image={"icon3.webp"} />
                    <IconsCard image={"icon4.webp"} />
                    </div>
                    
                    <div className="mt-4 flex justify-center space-x-8 mt-8 w-full" >
                    <IconsCard image={"icon5.webp"} />
                    <IconsCard image={"icon6.webp"} />
                    <IconsCard image={"icon7.png"} />
                    <IconsCard image={"icon8.svg"} />
                    <IconsCard image={"icon9.png"} />
                    <IconsCard image={"icon10.png"} />
                    <IconsCard image={"icon11.png"} />
                    </div>
                    <div className="border w-fit cursor-pointer mt-8 p-4 rounded-lg mb-4">
            View Integrations 
            </div>
        </div>
                
        </div>
    )
}