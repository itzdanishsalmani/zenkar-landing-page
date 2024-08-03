import { RightImgCard } from "./Others/ImgCard";

export function Video() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-7/12 mt-12 text-4xl font-bold text-center mb-8">
                Watch how Zenskar automates your Financial Workflows
            </div> 
            <div>
                <video src="video.mp4" type="video/mp4" width={900} controls ></video>    
            </div>    

            <RightImgCard bgAndTextColor={"bg-slate-200 text-green-500"}
            text1={"Billing Flexibility"}
            text2={"Configure any pricing model you can imagine"}
            text3={"Create any pricing model using a no-code drag-and-drop contract builder - Prepaid subscription with postpaid overages, free units, volume/tier pricing, custom currencies, discounts - and everything else"}
            text4={"Learn how we simplify complex billing"}
            image={"/img1.svg"}
            />   
        </div>
    );
}
