import CardTable from "../../components/CardTable";
import StatusCard from "../../components/InformativeCard";
import InformativeCarousel from "../../components/informativeCarousel";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import ProjectCard from "../../components/ProjectCard";
import NavDashboard from "../../components/NavDashboard";

export default function Dashboard() {
  const width = useWindowDimensions();
  console.log(width);
  return (
    <>
      <NavDashboard />
      <main className="bg-zinc-800 w-auto">
      <section className="px-48 pt-12 text-white">
        <h3>Bienvenido Cotizador</h3>
      </section>
      <section className="lg:ml-40 lg:mr-40 ">
        {width > 768 ? (
          <>
            <section className="flex justify-around my-8">
              <StatusCard
                statusTitle="Cotizaciones realizadas"
                statusValue="25"
                statusPercent="12.2%"
              />
              <StatusCard
                statusTitle="Mayor Cliente"
                statusValue="Acme inc"
                statusPercent="47.1%"
              />
              <StatusCard
                statusTitle="Recetas Creadas"
                statusValue="110"
                statusPercent=""
              />
              <StatusCard
                statusTitle="Cotizaciones realizadas"
                statusValue="25"
                statusPercent="12.2%"
              />
            </section>
            <section className="m-8">
              <CardTable />
            </section>
          </>
        ) : (
          <>
            <InformativeCarousel />
            <ProjectCard
              quoteName="Aplanado de pared"
              quoteTotal="$3500.00"
              quoteId="COT001"
              quoteClient="Acme Inc"
              s
            />
            <ProjectCard
              quoteName="Aplanado de pared"
              quoteTotal="$3500.00"
              quoteId="COT001"
              quoteClient="Acme Inc"
              s
            />
            <ProjectCard
              quoteName="Aplanado de pared"
              quoteTotal="$3500.00"
              quoteId="COT001"
              quoteClient="Acme Inc"
              s
            />
            <ProjectCard
              quoteName="Aplanado de pared"
              quoteTotal="$3500.00"
              quoteId="COT001"
              quoteClient="Acme Inc"
              s
            />
          </>
        )}
      </section>
      // </main>
    </>
  );
}
