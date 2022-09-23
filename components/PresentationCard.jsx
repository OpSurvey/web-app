import Button from "./Button";
import Link from "next/link";

export default function PresentationCard(props) {
  return (
    <div className="xs:p-1 xs:m-1 xs:mb-20 md:pt-20 px-8 md:h-[870px] bg-zinc-900 border-gray-200 shadow-md rounded-lg ">
      <div className="xs:p-5 md:p-10 md:pl-16 lg:p-5">
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
          <Link href="./quoter">
            <a>
              <Button style="bg-lime-400 text-black" text="Empieza ahora"/>
            </a>
          </Link>
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
