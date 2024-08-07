import { useState } from "react";
import { Buttons } from "./Buttons";

export function NavBar() {

    const [isPhoneView, setPhoneView] = useState(false);

    const [isProductHovered, setIsProductHovered] = useState(false);
    const [isSolutionHovered, setIsSolutionHovered] = useState(false);
    const [ isResourcesHovered, setIsResourcesHovered ] = useState(false);
    const [ isCompanyHovered, setIsCompanyHovered ] = useState(false);

    const [productOpen, setProductOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const [resourcesOpen, setresourcesOpen] = useState(false);

    return (
        <div >
        <div className="web h-fit relative cursor-pointer">
        <div className="fixed w-full h-16 bg-white border-b px-6 flex items-center justify-between">
            <img src="zenskarImg.svg" alt="" />

            <div className="hidden md:flex text-sm flex text-blue-950 space-x-16">
                <div>Why Zenskar</div>
                <div
                    className=" relative"
                    onMouseEnter={() => setIsProductHovered(true)}
                    onMouseLeave={() => setIsProductHovered(false)}
                >Product
                    {isProductHovered && <Product />}
                </div>

                <div
                    className=" relative"
                    onMouseEnter={()=> setIsSolutionHovered(true)}
                    onMouseLeave={()=> setIsSolutionHovered(false)}
                >Solutions
                    {isSolutionHovered && <Solutions />}
                </div>

                <div
                className=" relative"
                onMouseEnter={()=>setIsResourcesHovered(true)}
                onMouseLeave={()=>setIsResourcesHovered(false)}
                >Resources
                {isResourcesHovered && <Resources /> }
                </div>

                <div
                className=" relative"
                onMouseEnter={()=>setIsCompanyHovered(true)}
                onMouseLeave={()=>setIsCompanyHovered(false)}
                >Company
                { isCompanyHovered && <Company />} </div>
                <div>Prices</div>
            </div>

            <div className="invisible md:visible flex space-x-4">
                <Buttons
                    style={"text-blue-950 border border-blue-950 rounded-lg p-2"}
                    text={"Login"}
                    image={"arrow_forward_black.svg"}
                />
                <Buttons
                    style={"text-white bg-blue-950 rounded-lg p-2"}
                    text={"Book a Demo"}
                    image={"arrow_forward.svg"}
                />
                
            </div>
            <div className="md:hidden p-2 ml-2 md:mx-2 md:py-2 md:px-4 "
                        onClick={() => setPhoneView(!isPhoneView)}>
                        <img src="menu.svg" alt="Menu" />
                        </div>
            </div>
        </div>
         
        {isPhoneView && (
            <div>

{/* Phone */}
        <div className="phone z-10 bg-white w-screen">
                <div className=" h-auto text-slate-500 cursor-pointer ">
                    <div className="pt-4 px-4 ">
                        <img src="zenskarImg.svg" alt="" />
                        <img src="close.svg" alt="Closcursor-pointer"
                            onClick={() => setPhoneView(false)} />

                        <div className="menu mt-8 space-y-8 cursor-pointer">
                            <div className="border-b border-slate-400">
                                Why Zenkar
                            </div>

                            <div className="border-b border-slate-400"
                                onClick={() => setProductOpen(!productOpen)} >
                                <div className="flex justify-between">
                                Product <img src="arrow_drop_down.svg" alt="" />
                                </div>
                                {productOpen && (
                                    <div className="mt-4 space-y-4">
                                        <div className="bg-slate-200">OFFERINGS</div>
                                        <div>Billing</div>
                                        <div>Usage Tracking</div> 
                                        <div>Accounts Receivables</div> 
                                        <div>Revenue Recognition</div> 
                                        <div>Analytics</div>
                                        <div>Integrations</div>

                                        <div className="bg-slate-200">FEATURES</div>
                                        <div>Contract Builder</div> 
                                        <div>Customer Portal</div> 
                                        <div>Entitlements</div>    
                                    </div>
                                )}
                            </div>

                            <div className="border-b border-slate-400"
                                onClick={() => setSolutionsOpen(!solutionsOpen)}>
                                    <div className="flex justify-between">Solutions
                                        <img src="arrow_drop_down.svg" alt="" />
                                    </div>
                                {solutionsOpen && (
                                    <div className="mt-4 space-y-4">
                                        <div className="bg-slate-200">PRICING</div>
                                        <div>Subscriptions</div>
                                        <div>Usage based pricing </div>

                                        <div className="bg-slate-200">ROLE</div>
                                        <div>Finance</div>
                                        <div>Product</div>
                                        <div>Engineering</div>
                                        <div>CEO & Founders</div>

                                        <div className="bg-slate-200">INDUSTRIES</div>
                                        <div>AI</div>
                                        <div>Retail-tech</div>
                                        <div>Fintech</div>
                                        <div>Cloud Infrastructure</div>
                                        <div>SaaS</div>
                                        <div>E-learning</div>
                                        <div>API</div>
                                        <div>CPaaS</div>
                                        <div>Dev tool</div> 
                                    </div>
                                )}
                            </div>

                            <div className="border-b border-slate-400"
                                onClick={() => setresourcesOpen(!resourcesOpen)}>
                                
                                <div className="flex justify-between">Resources
                                <img src="arrow_drop_down.svg" alt="" />
                                </div>
                                {resourcesOpen && (
                                    <div className="mt-4 space-y-4">
                                        <div className="bg-slate-200">RESOURCES</div>
                                        <div>Blog</div>
                                        <div>Webinar</div>
                                        <div>Case Studies</div>
                                        <div>Documentation</div>
                                        <div>E-book</div>

                                        <div className="bg-slate-200">COMPARE</div>
                                        <div>Stripe</div>
                                        <div>Chargebee</div>
                                        <div>Maxio</div>

                                        <div>The CFO's Guide to Future-Proofing Billing Workflow and Unlocking Business Growth</div>
                                        <img src="resource.webp" alt="" />

                                    </div>
                                )}
                            </div>

                            <div className="border-b border-slate-400"
                                onClick={() => setCompanyOpen(!companyOpen)}>
                                <div className="flex justify-between">Company
                                <img src="arrow_drop_down.svg" alt="" />
                                </div>
                                {companyOpen && (
                                    <div className="mt-4 space-y-4">
                                        <div>COMPANY</div>
                                        <div>About us</div>
                                        <div>Careers</div>
                                    </div>
                                )}
                            </div>
                            <div className="border-b border-slate-400">
                                Pricing
                            </div>

                            <div className="flex flex-col space-y-4 justify-center items-center">
                            <Buttons
                            style={"text-blue-950 border border-blue-950 rounded-lg p-2"}
                            text={"Login"}
                            image={"arrow_forward_black.svg"}
                            />
                            
                            <Buttons
                            style={"text-white bg-blue-950 rounded-lg p-2"}
                            text={"Book a Demo"}
                            image={"arrow_forward.svg"}
                            />                            
                </div>
                        </div>
                        
                       
                        </div>
                    </div>

                </div>
                </div>                
)}
            </div>
    )
}

function Product() {
    return (
        <div className="absolute top-4 py-6 w-96 bg-white rounded-lg">
            <div className=" mx-4 grid grid-cols-2 space-x-6">
                <div className="space-y-8 ">
                    <div>OFFERING</div>
                    <div>Billing</div>
                    <div>Usage Tracking</div>
                    <div>Accounts Receivables</div>
                    <div>Revenue Recognition</div>
                    <div>Analytics</div>
                    <div>Integations</div>
                </div>

                <div className="space-y-8">
                    <div>FEATURES</div>
                    <div>Contract Builder</div>
                    <div>Customer Portal</div>
                    <div>Entitlements</div>

                </div>

            </div>
        </div>
    )
}

function Solutions() {
    return (
        <div className="absolute top-4 py-6 w-96 bg-white rounded-lg">
            <div className=" mx-2 grid grid-cols-3 space-x-6">
            <div className="space-y-8">

                    <div>PRICING</div>
                    <div>Subscriptions</div>
                    <div>Usage based pricing</div>
                </div>

                <div className="space-y-8">
                    <div>ROLE</div>
                    <div>Finance</div>
                    <div>Product</div>
                    <div>Engineering</div>
                    <div>CEO and Founders</div>
                </div>

                <div className="space-y-8 bg-white w-72">
                    <div>INDUSTRIES</div>

                    <div className="grid grid-cols-2">
                        <div className="space-y-8">
                            <div>AI</div>
                            <div>Fintech</div>
                            <div>SaaS</div>
                            <div>API</div>
                            <div>Dev tools</div>
                        </div>

                        <div className="space-y-8">
                            <div>Retail-tech</div>
                            <div>Cloud Infrastructure</div>
                            <div>E-Learning</div>
                            <div>CPaaS</div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
function Company() {
    return (
        <div className="absolute top-4 py-6 px-8 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col space-y-8 ">
                <div>COMPANY</div>
                <div>About us</div>
                <div>Careers</div>
            </div>
        </div>
    );
}

function Resources() {
    return (
        <div className="absolute top-4 py-6 h-auto w-96  bg-white shadow-lg rounded-lg">
            <div className="grid grid-cols-3">
                <div className="space-y-8">
                    <div>RESOURCES</div>
                    <div>Blog</div>
                    <div>Webinar</div>
                    <div>Case Studies</div>
                    <div>Documentation</div>
                    <div>E-book</div>
                </div>

                <div className="space-y-8">
                    <div>COMPARE</div>
                    <div>Stripe</div>
                    <div>Chargebee</div>
                    <div>Maxio</div>
                </div>

                <div className="space-y-8 w-72 px-12 bg-white">
                    <div className="mt-8">The CFO's Guide to Future-Proofing Billing Workflow and Unlocking Business Growth</div>
                    <img src="resource.webp" alt="" />
                    <div>Discover how to optimize your billing process, boost cash flow, and drive sustainable business growth.
            </div>
            <div className="flex flex-col">
            <div className="underline">Download e-book <div><img src="arrow_north_east.svg" alt="" /></div>
            </div>
                </div>
                </div>
            </div>
        </div>
    )
}