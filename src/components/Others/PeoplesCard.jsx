export function Card() {
    return (
        <div className="mt-8">
            <div className="border w-6/12">
                <div className="grid grid-cols-12">
                    <div className="col-span-2">
                        <img src="/100ms.svg" alt="" />
                    </div>
                    <div className="col-span-10">
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptate officiis assumenda error ipsum, reprehenderit expedita nemo! Beatae consequuntur perferendis eligendi doloremque assumenda, optio quam facilis similique, cumque explicabo modi veritatis inventore minus iure? Quaerat quia consequuntur veniam molestias voluptate!
                        </div>
                        <div className="mt-4 font-bold">
                            lorem
                        </div>
                        <div className="mt-2">
                            lorem
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const data = [
    {
        about: "Before Zenskar, our usage tracking and invoicing were manual. Zenskar automated the process, giving real-time visibility into consumption, and enabled us to invoice automatically based on usage.",
        name: "Ming Lui",
        position: "VP Finance,Yembo"
    }, 
    {
        about: "We needed indefinite contracts for our long term offering. You only realize how restrictive billing tools can be when your requirements get specific. Fortunately, we found Zenskar to tailor fit to our billing needs and more.",
        name: "Cory Linton",
        position: "CEO, Edify"
    },
    {
        about: "We never imagined that our AR process could go from fully manual to completely automated with a single platform. We're saving 200+ hours every quarter by removing the grunt work with Zenskar.",
        name: "Noy Kalansky",
        position: "Finance Controller, Pontera"
    },
    {
        about: "Usage based billing was turning into a nightmare for us.We had to devote engineering resources to billing for months, lacking better options.But with Zenskar, we can focus on serving our customers and expanding our product capabilities.",
        name: "Shalini Aggarwal",
        position: "VP Engineering ,Squadstack"
    }, 
    {
        about: "If not for Zenskar, we would have build an in -house system for our usage - based model, delayed the launch by at least 4 months and we would still be force - fitting our use case on clunky old tools.",
        name: "Kshitij Gupta",
        position: "CEO ,100ms"
    }
]