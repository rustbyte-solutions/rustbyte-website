function Solution ({name, link, description}) {
    let image = `/Solutions/${name}.webp`;

    return (
        <a className="flex hover:-translate-y-4 duration-500" href={link} target="_blank">
            <div className="bg-[#F9F9F9] dark:bg-[#0A0A0A] border-2 border-[#C6C6C6] dark:border-[#353535] shadow-xl px-5 py-2 rounded-lg duration-500 w-56 md:w-64">
                <img className="mt-2 rounded-xl" height="512px" width="512px" src={image} alt={name}/>
                
                <h1 className="mt-2 text-xl font-bold">
                    {name}
                </h1>
                
                <p className="mt-2 mb-2 text-md">
                    {description}
                </p>
            </div>
        </a>
    );
};

export default Solution;