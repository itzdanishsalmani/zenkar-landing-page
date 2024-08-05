export function RightImgCard({bgAndTextColor, text1, text2, text3, text4, image}) {
    return (
        <div className="w-11/12 mt-8 ">
        <div className="px-16 grid grid-cols-2 ">
            <div >
                <span className={bgAndTextColor}>{text1}</span>
                <div className="mt-4 text-blue-950 text-4xl font-bold">{text2}</div>
                <div className="mt-4 text-slate-500 text-lg">{text3}
                </div>
                <div className="flex mt-8 underline font-bold">{text4} <img src="arrow_north_east.svg" alt="" /></div>
            </div>

            <div className=" flex items-center justify-center">
                <img src={image}  alt="" />
            </div>
        </div>
    </div>
    )
}

export function LeftImgCard({image, bgAndTextColor, text1, text2, text3, text4}) {
    return (
        <div className="w-11/12 mt-8 ">
        <div className="px-16 grid grid-cols-2">

        <div className=" flex items-center justify-center">
                <img src={image}  alt="" />
            </div>

            <div >
                <span className={bgAndTextColor}>{text1}</span>
                <div className="mt-4 text-blue-950 text-4xl font-bold">{text2}</div>
                <div className="mt-4 text-lg text-slate-500">{text3}
                </div>
                <div className="flex mt-8 underline font-bold">{text4} <img src="arrow_north_east.svg" alt="" /> </div>
            </div>

        </div>
    </div>
    )
}
