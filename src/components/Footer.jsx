import { Buttons } from "./Others/Buttons";

export function Footer() {
    return (
        <div className="px-16 bg-slate-200 h-fit mt-12">
            <div className="flex justify-center items-center space-x-4 pt-12 text-slate-500 hidden md:block">
                <div>Not ready to talk to sales yet? Join our community.</div>
                <div><input type="text" placeholder="Work email" className="p-2 rounded-lg w-72" /></div>
                    <Buttons 
                    text={"Submit"}
                    style={"bg-blue-950 text-white p-2 rounded-lg"}/>
            </div>

            <div className="text-slate-500 hidden md:block"> 
                ___________________________________________________________________________________________________________________________________________________________
            </div>

            <div className="grid grid-cols-12 mt-12 ">
                <div className="col-span-3">
                    <div><img src="zenskarImg.svg" alt="" /></div>
                    <div className="flex space-x-4 mt-12">
                        <img src="GDPR.png" alt="" className="w-16" />
                        <img src="SOC2.png" alt="" className="w-16" />
                    </div>
                    <div className="flex space-x-4 mt-8">
                        <img src="High_Perform.avif" alt="" className="w-16" />
                        <img src="Users_Love_Us.avif" alt="" className="w-16" />
                        <img src="High_Perform.avif" alt="" className="w-16" />
                    </div>
                </div>
                <div className="col-span-9 cursor-pointer text-slate-500">
                    <div className="grid grid-cols-5">

                        {/* Column1 */}
                        <div className="space-y-4">
                            <div className="font-bold text-blue-950">Company</div>
                            <div>Why Zenskar</div>
                            <div>About us</div>
                            <div>Careers</div>
                            <div>Pricing</div>
                        </div>

                        {/* Column2 */}
                        <div className="space-y-4">
                            <div className="font-bold text-blue-950">Offerings</div>
                            <div>Billing</div>
                            <div>Accounts Receivable</div>
                            <div>Analytics</div>
                            <div>Revenue Recognition</div>
                            <div>Usage Tracking</div>
                            <div>Integrations</div>
                        </div>

                        {/* Column3 */}
                        <div className="space-y-4">
                            <div className="font-bold text-blue-950">Solutions </div>
                            <div>Subscriptions </div>
                            <div>Usage based pricing</div>
                            <div>CEOs and Founders </div>
                            <div>CFO and Finance </div>
                            <div>Engineering </div>
                            <div>Product </div>
                        </div>


                            {/* Column4 */}
                            <div className="space-y-4">
                        <div className="font-bold text-blue-950">Resources</div>
                            <div>Blog</div>
                            <div>Webinars</div>
                            <div>Case studies</div>
                            <div>E-books</div>
                            <div>Documentation</div>
                        </div>

                            {/* Column5 */}
                            <div className="space-y-4">
                                <div className="font-bold text-blue-950">Compare </div>
                                <div>Stripe vs Zenskar</div>
                                <div>Chargebee vs Zenskar</div>
                                <div>Maxio vs Zenskar </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pb-4 text-slate-500 hidden md:block">
                ___________________________________________________________________________________________________________________________________________________________

                </div>
                <div className="flex justify-between items-center text-slate-500">
                    <div>
                    Zenskar © 2024 - 169, Madison Avenue #2201, Ney York, 10016 
                    </div>

                    <div className="flex items-center ">
                        <div>
                        Terms of Service 
                        </div>
                        <div className="ml-2">
                            Privacy Policy
                        </div>

                        <a href="https://x.com/itzzdanish">
                        <img src="vector3.svg" alt="" className="w-8 bg-blue-950 rounded-full mx-2"/>
                        </a>

                        <a href="https://www.linkedin.com/in/mohammed-danish-salmani-ab2586258/" >
                        <img src="vector5.svg" alt="" className="w-8 bg-blue-950 rounded-full mx-2"/>
                        </a>

                        <a href="mailto:salmanidanish488@gmail.com">
                        <img src="vector4.svg" alt="" className="w-8 bg-blue-950 rounded-full mx-2"/>
                        </a>

                        </div>

                    </div>

                    <div>

                </div>
            </div>
    )
}
