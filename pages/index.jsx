import PresentationCard from "../components/PresentationCard";
import HowToUseCard from "../components/HowToUseCard";
import OpinionCard from "../components/OpinionCard";

export default function Home() {
  return (
    <>
    <header>
      <navbar>
        <div>
          <img/>
        </div>
        <button>Empieza ahora</button>
      </navbar>
    </header>
    <main>
      <section className="md:grid lg:grid-cols-[500px_1fr] lg:m-2 md:mb-2">
        <section name='firsthView'>
          <article name='presentationCard'>
            <PresentationCard/>
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

      <section name='clientsOpinion'>
        <p>Lo que dicen nuestros Clientes</p>
          <article name='opinionCard' className="flex flex-row">
            <OpinionCard/>
            <OpinionCard/>
            <OpinionCard/>
          </article>
          <article name='greenCard'>
            <h2></h2>
            <button></button>
          </article>
      </section>

      <footer>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </footer>
    </main>
    </>
  )
}
