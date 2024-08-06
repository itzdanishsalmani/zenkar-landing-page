import { useState } from "react";
import { Buttons } from "./Buttons";

export function NavBar() {
    const [isProductHovered, setIsProductHovered] = useState(false);
    const [isSolutionHovered, setIsSolutionHovered] = useState(false);
    const [ isResourcesHovered, setIsResourcesHovered ] = useState(false);
    const [ isCompanyHovered, setIsCompanyHovered ] = useState(false);

    return (
        <div className="relative cursor-pointer">
        <div className="fixed w-full h-16 bg-white border-b px-6 flex items-center justify-between">
            <img src="zenskarImg.svg" alt="" />

            <div className="text-sm flex text-blue-950 space-x-16">
                <div>Why Zenskar</div>
                <div
                    className="relative"
                    onMouseEnter={() => setIsProductHovered(true)}
                    onMouseLeave={() => setIsProductHovered(false)}
                >Product
                    {isProductHovered && <Product />}
                </div>

                <div
                    className="relative"
                    onMouseEnter={()=> setIsSolutionHovered(true)}
                    onMouseLeave={()=> setIsSolutionHovered(false)}
                >Solutions
                    {isSolutionHovered && <Solutions />}
                </div>

                <div
                className="relative"
                onMouseEnter={()=>setIsResourcesHovered(true)}
                onMouseLeave={()=>setIsResourcesHovered(false)}
                >Resources
                {isResourcesHovered && <Resources /> }
                </div>

                <div
                className="relative"
                onMouseEnter={()=>setIsCompanyHovered(true)}
                onMouseLeave={()=>setIsCompanyHovered(false)}
                >Company
                { isCompanyHovered && <Company />} </div>
                <div>Prices</div>
            </div>

            <div className="flex space-x-4">
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