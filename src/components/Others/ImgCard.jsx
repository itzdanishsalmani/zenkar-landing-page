export function RightImgCard({bgAndTextColor, text1, text2, text3, text4, image}) {
    return (
        <div className="w-11/12 mt-24">
        <div className="grid grid-cols-2">
            <div>
                <span className={bgAndTextColor}>{text1}</span>
                <div className="mt-4 text-4xl font-bold">{text2}</div>
                <div className="mt-4 text-lg">{text3}
                </div>
                <div className="mt-8 underline font-bold">{text4} </div>
            </div>

            <div >
                <img src={image} width={500} alt="" />
            </div>
        </div>
    </div>
    )
}