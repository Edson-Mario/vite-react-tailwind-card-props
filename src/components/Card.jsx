
function Card({introdution, name, job, picture}) {
    return(
        <div className="max-md:max-h-24 w-full max-w-xl max-h-32 grid grid-cols-7 grid-flow-row grid-rows-2 rounded-md shadow-lg bg-slate-300 mt-2 box-border duration-100">
            <img className="h-full col-span-2 row-span-2  rounded-l-md"
                src={picture} alt=""
            />
            <div className="max-md:px-2 col-span-5 row-span-2 grid grid-cols-2 grid-flow-row px-2">
                <p className="max-md:p-1 max-md:text-xs col-span-2 text-fourteen pt-4 text-gray-700"
                >{introdution}</p>
                <div className="col-span-2">
                    <p className="max-md:text-xs max-md:py-1 py-3 text-sm text-gray-600 duration-100">{name}</p>
                    <p className="max-md:text-xs text-sm text-gray-800 duration-100">{job}</p>
                </div>
            </div>
        </div>
    )
}

export default Card