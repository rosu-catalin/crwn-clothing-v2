const Card = ({ image, name, route}) => {
    return (
        <a href={route} className="relative isolate flex items-center justify-center border border-black bg-red-400 min-h-[300px] group overflow-hidden">
            <img
                src={image}
                className="absolute inset-0 -z-10 h-full w-full object-cover transition-all group-hover:scale-110"
                alt="hats"/>
            <div className="border border-black bg-gray-200/80 px-8 py-4 text-center backdrop-blur-[2px]">
                <h3 className="text-2xl font-bold uppercase">{name}</h3>
                <p className="uppercase">Shop Now</p>
            </div>
        </a>
    )
}

export default Card