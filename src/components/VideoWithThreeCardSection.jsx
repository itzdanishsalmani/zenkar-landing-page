import { RightImgCard, ThreeCard } from "./Others/ImgCard";

export function VideoWithThreeCardSection() {
    return (
        <div>
        <div className="flex flex-col text-blue-950 justify-center items-center">
            <div className="w-7/12 mt-12 text-4xl font-bold text-center mb-8">
                Watch how Zenskar automates your Financial Workflows
            </div> 
            <div className="mb-24">
                <video src="video.mp4" type="video/mp4" width={1000} controls ></video>    
            </div> 
            </div>   

            <RightImgCard 
            bgAndTextColor={"bg-slate-200 text-green-500"}
            text1={"Billing Flexibility"}
            text2={"Configure any pricing model you can imagine"}
            text3={"Create any pricing model using a no-code drag-and-drop contract builder - Prepaid subscription with postpaid overages, free units, volume/tier pricing, custom currencies, discounts - and everything else"}
            text4={"Learn how we simplify complex billing"}
            image={"/img1.svg"}
            />   

            {/* Three card */}

            <div className="flex mt-8 ">
                
            <ThreeCard 
            text1={"Increase recurring revenue with subscriptions"}
            text2={"Configure flexible subscriptions with any pricing model. Automate every step of the way to see your revenue grow effortlessly."}
            image={"three-card-1.svg"}
            />

            <ThreeCard 
            text1={"Measure and bill any usage metric accurately"}
            text2={"Send usage metrics reliably with Zenskar's metering. Weave usage into contracts effortlessly for accurate and efficient usage billing."}
            image={"three-card-2.svg"}
            />

            <ThreeCard 
            text1={"Create any pricing model with unlimited flexibility"}
            text2={"Want a ramp deal with tier-based discounts and entitlements? Create it within minutes using our no-code contract builder."}
            image={"three-card-3.svg"}
            />
            
        </div>
    </div>
    );
}
