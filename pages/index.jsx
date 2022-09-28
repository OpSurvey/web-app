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
      <main className="bg-zinc-800 xs:p-2 m-2 md:pt-4 md:pr-20 md:pl-16 md:pb-8 lg:pt-4 lg:pr-0 lg:pl-0 lg:pb-8 xl:pr-10 xl:pl-2 2xl:pl-40 2xl:pr-44">
        <section className="pt-10 xs:w-full p-0 m-0 md:grid md:mb-2 lg:grid-cols-[500px_1fr] lg:my-2 ">
          <section className="firsthView">
            <article
              name="presentationCard"
              className="xs:p-1 lg:mx-2 xl:pl-10"
            >
              <PresentationCard />
            </article>
          </section>
          <section name="howToUse" className="xs:pt-6 lg:ml-12">
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
              direction="flex-row"
              textColor="text-white"
              content="Registra a tus clientes"
              img="https://cdn.opsurveyapp.com/F_3.png"
            />
            <HowToUseCard
              backgroundColor="bg-lime-400"
              direction="flex-row"
              textColor="text-zinc-900"
              content="Realiza la cotización y enviala a tus clientes"
              img="https://cdn.opsurveyapp.com/F_7.png"
            />
          </section>
        </section>

        {width > 900 ? (
          <>
            <section name="clientsOpinion" className="pt-6 lg:ml-10">
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
                  opinionContent='"El proceso de cotización mejoro muchisimo con la ayuda de OpSurvey, nuestros tiempos eran altos, y teníamos la información muy vulnerable a perderse o no poder rastrear una modificación, agilizamos el proceso y evitamos riesgos."'
                />
                <OpinionCard
                  clientName="Ernesto García"
                  opinionImg="https://cdn.opsurveyapp.com/Ernesto_Garcia.jpeg"
                  opinionContent='"Nunca me había dado cuenta de cuánto tiempo perdía al ir a un punto para realizar una cotización y volver a mi oficina para obtener la información y poderla mandar al cliente. Hasta que conocí OPSurvey!
                  Ahora trabajamos, más eficiente que nunca."'
                />
                <OpinionCard
                  clientName="Francisco Martínez"
                  opinionImg="https://cdn.opsurveyapp.com/Francisco_Martinez1.jpeg"
                  opinionContent='"Antes sentia que tenia un flujo muy bueno al momento de realizar cotizaciones y no tenía en cuenta el tiempo que se perdía para poder generar una cotización, mi flujo de cotizaciones aumentó en un caso un 100% ya que no tenía que llegar a mi oficina para realizarlas."'
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
            className="hidden pt-16 md:mx-2 lg:mx-8 "
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
              Con Obsurvey podrás mejorar tu entrega de cotizaciones debido a que esta .herramienta te ayuda a que puedas realizar tus cotizaciones desde el momento que realizas la visita al cliente."
              />
              <OpinionCard
                clientName="Ernesto García"
                opinionImg=""
                opinionContent="Mejora tu rendimiento y tu tiempo de entrega de cotizaciones.
              Con Obsurvey podrás mejorar tu entrega de cotizaciones debido a que esta .herramienta te ayuda a que puedas realizar tus cotizaciones desde el momento que realizas la visita al cliente."
              />
              <OpinionCard
                clientName="Francisco Martínez"
                opinionImg=""
                opinionContent="Mejora tu rendimiento y tu tiempo de entrega de cotizaciones.
              Con Obsurvey podrás mejorar tu entrega de cotizaciones debido a que esta .herramienta te ayuda a que puedas realizar tus cotizaciones desde el momento que realizas la visita al cliente."
              />
            </article>
          </section>
        )}

        <article
          name="greenCard"
          className="p-5 mt-20 mb-10 bg-lime-400 rounded-lg md:flex md:justify-between md:p-16 xl:ml-12"
        >
          <div className="">
            <p className="align-middle text-2xl font-bold md:text-4xl pb-2">
              Todo por tan solo
            </p>
            <h1 className="text-2xl font-black md:text-4xl lg:text-5xl">
              $1 USD
            </h1>
            <p className="text-2xl font-medium md:pt-2">
              por cotización enviada
            </p>
          </div>
          <div className="sx:w-full flex justify-center items-center flex-col p-5">
            <Link href="./quoter">
              <a>
                <Button style="bg-zinc-900 text-white" text="Empieza ahora" />
              </a>
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
