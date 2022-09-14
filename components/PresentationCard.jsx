import ButtonLanding from "./ButtonLanding";

export default function PresentationCard(props) {
  return (
    <div className=" lg:h-[854px] pt-20 px-8 bg-zinc-900 border-gray-200 shadow-md rounded-lg">
      <div className="p-5">
        <h4 className="mb-2 text-4xl font-bold tracking-tight text-white">
          Agiliza tus cotizaciones
        </h4>

        <p className="mb-3 text-gray-200 pt-6">
          Libera tu potencial de crecimiento agrega la movilidad que necesitas.
        </p>

        <p className="mb-3 text-gray-200 pb-10">
          Envía tus cotizaciones en minutos
        </p>

        <div className="w-full flex items-center flex-col">
          <ButtonLanding fontColor="bg-lime-400" />
        </div>

        <img
          className="pt-20"
          src="https://cdn.opsurveyapp.com/F_5.png"
          alt=""
        />
      </div>
    </div>
  );
}
