import { Buttons } from "./Buttons";

export function NavBar() {
    return (
        <div className="fixed w-full h-16 bg-white border-b px-6 flex items-center justify-between">
                <img src="zenskarImg.svg" alt="" />

            <div className="text-sm flex text-blue-950 space-x-16">
                <div>Why Zenskar</div>
                <div className="hover:">Product</div>
                <div>Solutions</div>
                <div>Resources</div>
                <div>Company</div>
                <div>Prices</div>
            </div>

            <div className="flex space-x-4">
                <Buttons 
                style={"text-blue-950 border border-blue-950 rounded-lg"}
                text={"Login"} 
                image={"arrow_forward_black.svg"}
                 />
                <Buttons 
                style={"text-white bg-blue-950 rounded-lg"}
                text={"Book a Demo"} 
                image={"arrow_forward.svg"}
                />
            </div>
        </div>
    )
}

function Product() {
    return (
        <div>
            <div className="grid grid-col-2">
                <div className="py-4">
                    <div>OFFERING</div>
                    <div>Billing</div>
                    <div>Usage Tracking</div>
                    <div>Accounts Receivables</div>
                    <div>Revenue Recognition</div>
                    <div>Analytics</div>
                    <div>Integations</div>
                </div>

                <div className="py-4">
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
        <div>
            <div className="grid grid-col-3">
                <div className="py-4">

                    <div>PRICING</div>
                    <div>Subscriptions</div>
                    <div>Usage based pricing</div>
                </div>

                <div className="py-4">
                    <div>ROLE</div>
                    <div>Finance</div>
                    <div>Product</div>
                    <div>Engineering</div>
                    <div>CEO and Founders</div>
                </div>

                <div className="py-4">
                    <div>INDUSTRIES</div>

                    <div className="grid grid-col-2">

                    <div>AI</div>
                    <div>Fintech</div>
                    <div>SaaS</div>
                    <div>API</div>
                    <div>Dev tools</div>
                    
                    <div>
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
        <div>
            
        </div>
    )
}