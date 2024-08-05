import { LeftImgCard, RightImgCard } from "./Others/ImgCard"

export function FourCardSection() {
    return (
        <div >
            <LeftImgCard 
            image={"four-card-1.png"}
            bgAndTextColor={"bg-slate-200 text-blue-400"}
            text1={"USAGE-BASED PRICING"}
            text2={"Easily launch & iterate between any usage-based pricing model"}
            text3={"Zenskar can pull data directly from your database or data lake. You can also send data via APIs or upload CSVs. With seamless integration of usage data, you can experiment with different pricing models and usage meters."}
            text4={"See how Zenskar manages usage data natively Accounts Receivable Automation"}
            />

            <RightImgCard
            bgAndTextColor={"bg-blue-100 text-blue-500"}
            text1={"Accounts Receivable Automation"}
            text2={"Improve cash flows by automating follow-ups and collections"}
            text3={"Fully customize invoice templates, draft invoices, and emails that go along with your invoices. Segment customers for targeted follow-ups and reminders."}
            text4={"Learn how we automate accounts receivables"}
            image={"four-card-2.png"} 
            />

            <LeftImgCard 
            image={"four-card-3.png"}
            bgAndTextColor={"bg-red-300 text-red-500"}
            text1={"ANALYTICS"}
            text2={"Empower all stakeholders with actionable insights and near real-time analytics"}
            text3={"Zenskar provides real-time actionable reporting on key revenue metrics for monthly flash reports, quarterly board packages, and senior management."}
            text4={"See Zenskar's analytics dashboard Revenue Recognition"}
            />

            <RightImgCard 
            bgAndTextColor={"bg-slate-100 text-green-500"}
            text1={"REVENUE RECOGNITION"}
            text2={"Simplify compliance and streamline accounting processes"}
            text3={"Zenskar has an extremely flexible accounting rule engine that’s fully customizable. Ensure compliance with regulations like ASC 606/IFRS 15, breeze through audits, and optimize your accounting processes effortlessly."}
            text4={"Learn how we handle revenue recognition"}
            image={"four-card-4.jpg"}
            />
        </div>
    )
}