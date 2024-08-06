export function SocSection() {
    return (
        <div>
            <div className="mt-12 grid md:grid-cols-12 px-4 md:px-16 flex flex-row items-center">
                <div className="col-span-3">
                    <div className="text-3xl md:text-4xl text-blue-950 font-bold">
                        SOC 2 and GDPR compliant: Secure your billing
                    </div>
                    <div className="mt-4 texl-lg">
                        We ensure the highest standards of confidentiality and integrity for your sensitive information
                    </div>
                </div>
                <div className="col-span-9">
                    <div className="flex md:flex-row flex-col items-center justify-evenly">
                        <div className="flex flex-row items-center">
                       <div className="w-28"><img src="soc1.webp" alt="" /></div>
                       <div className="w-28"><img src="soc2.svg" alt="" /></div>
                       </div>
                       <div className="flex flex-row items-center mt-4">
                       <div className="w-28"><img src="soc3.webp" alt="" /></div>
                       <div className="w-28"><img src="soc4.svg" alt="" /></div>
                       </div>
                    </div>
                </div>

            </div>
        </div>
    )
}