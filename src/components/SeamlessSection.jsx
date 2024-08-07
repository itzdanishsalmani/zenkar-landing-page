import { Buttons } from "./Others/Buttons"

export function SeamlessSection() {
    return (
        <div className="mt-12 flex justify-center bg-slate-100 h-fit ">
            <div className="md:w-7/12 text-center mt-24  ">
                <div className="text-3xl md:text-4xl px-4 text-blue-950 font-bold">Seamless integration with your tech stack </div>
                <div className="mt-2 text-lg"> Access 100+ integrations across CRM, ERP, payment gateways, and more to automate billing without disrupting your setup.
                </div>
                <div className="web hidden md:block">
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
                    </div>

                    <div className="phone md:hidden ">
                <div className="space-x-2 mt-8 space-y-8">
                    <div className="flex justify-center space-x-8 ">
                    <div><IconsCard image={"icon1.webp"} /></div>
                    <div><IconsCard image={"icon2.webp"} /></div>
                    <div><IconsCard image={"icon3.webp"} /></div>
                    </div>
                    
                    <div className="flex justify-center space-x-8">
                    <div><IconsCard image={"icon4.webp"} /></div>
                    <div><IconsCard image={"icon5.webp"} /></div>
                    <div><IconsCard image={"icon6.webp"} /></div>
                    </div>

                    <div className="flex justify-center space-x-8">
                    <div><IconsCard image={"icon7.png"} /></div>
                    <div><IconsCard image={"icon8.svg"} /></div>
                    <div><IconsCard image={"icon9.png"} /></div>
                    </div>
                    <div className="flex justify-center space-x-8">
                    <div><IconsCard image={"icon10.png"} /></div>
                    <div><IconsCard image={"icon11.png"} /></div>
                    </div>
                    </div>
                    </div>


                    <div className="my-8 flex justify-center ">
                        <Buttons 
                        style={"bg-blue-950 text-white rounded-lg p-4"}
                        text={"View Integration"}
                        image={"arrow_forward.svg"}/>
            </div>
        </div>
                
        </div>
    )
}

function IconsCard({image}) {
    return (
        <div className="bg-white rounded-lg flex justify items-center">
            <img src={image} width={80} height={80} alt="" className="p-3 " />
        </div>
    )
}
