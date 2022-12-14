import PresentationCard from "../components/PresentationCard";
import HowToUseCard from "../components/HowToUseCard";
import OpinionCard from "../components/OpinionCard";
import NavbarLanding from "../components/NavbarLanding";
import Button from "../components/Button";
import FooterLanding from "../components/FooterLanding";
import HowToUseCardIMG from "../components/HowToUseCardIMG";
import Link from "next/link";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Home() {
  const width = useWindowDimensions();

  return (
    <>
      <header>
        <NavbarLanding />
      </header>
      <main className="container mx-auto bg-zinc-800 xs:p-2 m-2 md:pt-4 md:pr-20 md:pl-16 md:pb-8 lg:pt-4 lg:pr-0 lg:pl-0 lg:pb-8 xl:pr-10 xl:pl-2 2xl:pl-40 2xl:pr-44">
        <section className="pt-10 w-full p-0 m-0 md:grid md:mb-0 lg:grid-cols-[500px_1fr] xl:gap-20">
          <section className="firsthView">
            <article
              name="presentationCard"
              className="xs:p-1 lg:mx-2 xl:pl-10"
            >
              <PresentationCard />
            </article>
          </section>

          <section
            name="howToUse"
            className="w-full px-2 lg:h-full flex flex-col lg:px-2"
          >
            {/* How to use the app */}
            <HowToUseCard
              backgroundColor="bg-lime-400"
              direction="flex-row"
              textColor="text-zinc-900"
              content="Registra tus datos y el de tu empresa para poder emprear a realizar cotizaciones"
              img="https://cdn.opsurveyapp.com/F_2.png"
            />
            <HowToUseCardIMG
              backgroundColor="bg-zinc-900"
              direction="flex-row"
              textColor="text-white"
              content="Comienza el registro de tus materiales y proveedores para que puedas comenzar con tu base de datos personalizada"
              img="https://cdn.opsurveyapp.com/F_6.png"
            />
            <HowToUseCard
              backgroundColor="bg-lime-400"
              direction="flex-row"
              textColor="text-zinc-900"
              content="Crea tus recetas personalizadas, segun el tipo y lugar de trabajo que tengas que realizar"
              img="https://cdn.opsurveyapp.com/F_1.png"
            />
            <HowToUseCardIMG
              backgroundColor="bg-zinc-900"
              padding="10"
              direction="flex-row"
              textColor="text-white"
              content="Registra a tus clientes"
              img="https://cdn.opsurveyapp.com/F_3.png"
            />
            <HowToUseCard
              backgroundColor="bg-lime-400"
              direction="flex-row"
              textColor="text-zinc-900"
              content="Realiza la cotizaci??n y enviala a tus clientes"
              img="https://cdn.opsurveyapp.com/F_7.png"
            />
          </section>
        </section>

        {width > 900 ? (
          <>
            <section name="clientsOpinion" className="pt-2 lg:ml-2 xl:ml-10">
              <p className="text-2xl text-center text-white md:text-4xl mb-6">
                Lo que dicen nuestros Clientes
              </p>
              <article
                name="opinionCard"
                className="pt-8 md:flex md:flex-row md:justify-between"
              >
                <OpinionCard
                  clientName="Berenice Cervantes"
                  opinionImg="https://cdn.opsurveyapp.com/Berenice_Cervantes.jpg"
                  opinionContent='"El proceso de cotizaci??n mejoro muchisimo con la ayuda de OpSurvey, nuestros tiempos eran altos, y ten??amos la informaci??n muy vulnerable a perderse o no poder rastrear una modificaci??n, agilizamos el proceso y evitamos riesgos."'
                />
                <OpinionCard
                  clientName="Ernesto Garc??a"
                  opinionImg="https://cdn.opsurveyapp.com/Ernesto_Garcia.jpeg"
                  opinionContent='"Nunca me hab??a dado cuenta de cu??nto tiempo perd??a al ir a un punto para realizar una cotizaci??n y volver a mi oficina para obtener la informaci??n y poderla mandar al cliente. Hasta que conoc?? OPSurvey!
                  Ahora trabajamos, m??s eficiente que nunca."'
                />
                <OpinionCard
                  clientName="Francisco Mart??nez"
                  opinionImg="https://cdn.opsurveyapp.com/Francisco_Martinez1.jpeg"
                  opinionContent='"Antes sentia que tenia un flujo muy bueno al momento de realizar cotizaciones y no ten??a en cuenta el tiempo que se perd??a para poder generar una cotizaci??n, mi flujo de cotizaciones aument?? en un caso un 100% ya que no ten??a que llegar a mi oficina para realizarlas."'
                />
                <OpinionCard
                  clientName="Carlos Silva"
                  opinionImg="https://cdn.opsurveyapp.com/Carlos_Silva.jpg"
                  opinionContent='"El rendimiento del proceso de cotizar aumento desde que utilizamos OpSurvey, nuestros clientes estan felices y hemos ahorrado tiempo en el proceso."'
                />
              </article>
            </section>
          </>
        ) : (
          <section
            name="clientsOpinion"
            className="hidden pt-16 md:mx-2 lg:mx-8"
          >
            <p className="text-2xl text-center text-white md:text-4xl mb-6">
              Lo que dicen nuestros Clientes
            </p>
            <article
              name="opinionCard"
              className="pt-8 md:flex md:flex-row md:justify-between"
            >
              <OpinionCard
                clientName="Berenice Cervantes"
                opinionImg=""
                opinionContent="Mejora tu rendimiento y tu tiempo de entrega de cotizaciones.
              Con Obsurvey podr??s mejorar tu entrega de cotizaciones debido a que esta .herramienta te ayuda a que puedas realizar tus cotizaciones desde el momento que realizas la visita al cliente."
              />
              <OpinionCard
                clientName="Ernesto Garc??a"
                opinionImg=""
                opinionContent="Mejora tu rendimiento y tu tiempo de entrega de cotizaciones.
              Con Obsurvey podr??s mejorar tu entrega de cotizaciones debido a que esta .herramienta te ayuda a que puedas realizar tus cotizaciones desde el momento que realizas la visita al cliente."
              />
              <OpinionCard
                clientName="Francisco Mart??nez"
                opinionImg=""
                opinionContent="Mejora tu rendimiento y tu tiempo de entrega de cotizaciones.
              Con Obsurvey podr??s mejorar tu entrega de cotizaciones debido a que esta .herramienta te ayuda a que puedas realizar tus cotizaciones desde el momento que realizas la visita al cliente."
              />
            </article>
          </section>
        )}

        <article
          name="greenCard"
          className="p-6 mx-2 mt-20 mb-10 bg-lime-400 rounded-lg md:flex md:justify-between md:p-16 xl:ml-10"
        >
          <div className="">
            <p className="align-middle text-xl font-medium md:text-3xl pb-2">
              Todo por tan solo
            </p>
            <h1 className="text-2xl font-black md:text-4xl lg:text-5xl">
              $1 USD
            </h1>
            <p className="text-xl font-medium md:pt-2 md:text-3xl">
              por cotizaci??n enviada
            </p>
          </div>
          <div className="sx:w-full flex justify-center items-center flex-col p-5">
            <Link href="./quoter">
              <a>
                <Button
                  style="xs:w-[200px] bg-zinc-900 text-white"
                  text="Empieza ahora"
                />
              </a>
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
