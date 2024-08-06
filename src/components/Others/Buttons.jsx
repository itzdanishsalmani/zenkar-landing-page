export function Buttons({ text, image, style }) {
    return (
        <div className={style}>
            <div className="flex items-center cursor-pointer text-lg ">
                {text}
                <img src={image} alt="" />
            </div>
        </div>
    )
}