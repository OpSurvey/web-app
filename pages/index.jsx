import PresentationCard from "../components/PresentationCard";
import HowToUseCard from "../components/HowToUseCard";
import OpinionCard from "../components/OpinionCard";
import NavbarLanding from "../components/NavbarLanding";
import ButtonLanding from "../components/ButtonLanding";
import FooterLanding from "../components/FooterLanding";


export default function Home() {
  return (
    <>
    <header>
      <NavbarLanding/>
    </header>
    <main className="mt-[65px] px-44">
      <section className="md:grid lg:grid-cols-[500px_1fr] lg:my-2 md:mb-2">
        <section name='firsthView'>
          <article name='presentationCard' className="lg:mx-2">
            <PresentationCard />
          </article>
        </section>
        <section name='howToUse' className="lg:ml-12">
          {/* How to use the app */}
            <HowToUseCard backgroundColor="bg-lime-400" direction="flex-row" textColor="text-zinc-900" content="Registra tus datos y el de tu empresa para poder emprear a realizar cotizaciones"/>
            <HowToUseCard backgroundColor="bg-zinc-900" direction="flex-row" textColor="text-white" content="Comienza el registro de tus materiales y proveedores para que puedas comenzar con tu base de datos personalizada"/>
            <HowToUseCard backgroundColor="bg-lime-400" direction="flex-row" textColor="text-zinc-900" content="Crea tus recetas personalizadas, segun el tipo y lugar de trabajo que tengas que realizar"/>
            <HowToUseCard backgroundColor="bg-zinc-900" direction="flex-row" textColor="text-white" content="Registra a tus clientes"/>
            <HowToUseCard backgroundColor="bg-lime-400" direction="flex-row" textColor="text-zinc-900" content="Realiza la cotización y enviala a tus clientes"/>
        </section>
      </section>
      <section name='clientsOpinion' className="md:mx-2 lg:mx-8">
        <p className="text-2xl text-center font-black md:text-4xl mb-6">Lo que dicen nuestros Clientes</p>
          <article name='opinionCard' className="md:flex md:flex-row md:justify-between" >
            <OpinionCard clientName="Berenice Cervantes" opinionImg="" opinionContent="Mejora tu rendimiento y tu tiempo de entrega de cotizaciones.
              Con Obsurvey podrás mejorar tu entrega de cotizaciones debido a que esta .herramienta te ayuda a que puedas realizar tus cotizaciones desde el momento que realizas la visita al cliente."/>
            <OpinionCard clientName="Ernesto García" opinionImg="" opinionContent="Mejora tu rendimiento y tu tiempo de entrega de cotizaciones.
              Con Obsurvey podrás mejorar tu entrega de cotizaciones debido a que esta .herramienta te ayuda a que puedas realizar tus cotizaciones desde el momento que realizas la visita al cliente."/>
            <OpinionCard clientName="Francisco Martínez" opinionImg="" opinionContent="Mejora tu rendimiento y tu tiempo de entrega de cotizaciones.
              Con Obsurvey podrás mejorar tu entrega de cotizaciones debido a que esta .herramienta te ayuda a que puedas realizar tus cotizaciones desde el momento que realizas la visita al cliente."/>
          </article>
          <article name='greenCard' className="bg-lime-400 rounded-lg my-16 flex justify-between p-16">
            <div>
              <p className="text-4xl font-bold ">Todo por tan solo</p>
              <h1 className="text-8xl font-black ">$1 USD</h1>
              <p className="text-2xl font-medium">por cotización enviada</p>
            </div>
            <ButtonLanding fontColor='bg-zinc-900' textColor="text-white" />
          </article>
      </section>
    </main>
    <FooterLanding/>
    </>
  )
}
