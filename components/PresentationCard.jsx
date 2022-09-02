

export default function PresentationCard () {
    return(
    <div className=" lg:h-[855px] pt-20 bg-zinc-900 rounded-lg border border-gray-200 shadow-md">
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Agiliza tus cotizaciones</h5>
            </a>
            <p className="mb-3 font-normal text-gray-200">Libera tu potencial de crecimiento agrega la movilidad que necesitas.</p>
            <p>Envía tus cotizaciones en minutos</p>
            
            <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-zinc-900 bg-lime-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
            </a>
            <img className="rounded-t-lg" src="https://portolapilot.com/wp-content/uploads/2018/12/300x300.png" alt="" />
        </div>
    </div>
    )
}