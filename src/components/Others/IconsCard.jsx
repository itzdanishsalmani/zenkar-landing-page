export function IconsCard({image}) {
    return (
        <div className="bg-white rounded-lg flex justify items-center">
            <img src={image} width={80} height={80} alt="" className="p-3 " />
        </div>
    )
}
