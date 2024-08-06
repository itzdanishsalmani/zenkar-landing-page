export function FinanceSection() {
    return (
        <div className="mt-8 px-4 text-center md:px-16">
            <div className="md:flex justify-center items-center text-blue-950 font-bold text-3xl md:text-4xl ">Why finance teams love Zenskar
            </div>
            <div className="mt-8 flex flex-col md:flex-row md:space-x-12 space-y-8">

            <Cards 
            image={"finance1.webp"}
            text1={"Reliable support"}
            text2={"Get dedicated support when you need it. Zenskar works as an extension of your in-house team. We're with you every step of the way."}
            />

            <Cards 
            image={"finance2.webp"}
            text1={"No learning curve"}
            text2={"Billing is complex enough without adding a complicated tool into the mix. Zenskar is intuitive, low code and built for ease of non-tech users."}
            />

            <Cards 
            image={"finance1.webp"}
            text1={"Custom features on request"}
            text2={"We've built Zenskar to solve your billing pains. Your needs drive us. Need something specific for your business model? We're all ears."}
            />
            </div>
        </div>
    )
}

function Cards({image,text1,text2}) {
   return (
    <div className="md:w-4/12">
        <div className="bg-slate-100 p-6 rounded-lg">
            <img src={image} alt="" width={40}/>
            <div className="mt-4 font-bold">{text1} </div>
            <div className="mt-4">{text2}
            </div>

        </div>
    </div>
   )
}