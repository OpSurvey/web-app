import ButtonLanding from "./ButtonLanding"

export default function PresentationCard (props) {
    return(
    <div className=" lg:h-[855px] pt-20 bg-zinc-900 border-gray-200 shadow-md mb-2 rounded-lg">
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Agiliza tus cotizaciones</h5>
            </a>
            <p className="mb-3 font-normal text-gray-200">Libera tu potencial de crecimiento agrega la movilidad que necesitas.</p>
            <p className="mb-3 font-normal text-gray-200">Envía tus cotizaciones en minutos</p>
            <ButtonLanding fontColor='bg-lime-400'/>
            <img className="" src="https://portolapilot.com/wp-content/uploads/2018/12/300x300.png" alt="" />
        </div>
    </div>
    )
}