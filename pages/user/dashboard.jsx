import CardTable from "../../components/CardTable";
import StatusCard from "../../components/InformativeCard";
import InformativeCarousel from "../../components/informativeCarousel";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import ProjectCard from "../../components/ProjectCard";
import NavDashboard from "../../components/NavDashboard";

export default function Dashboard() {
  const width = useWindowDimensions();
  console.log(width);

  return (
    <>
      <NavDashboard />
      <main className="container mx-auto bg-zinc-800 w-auto">
        <section className="px-10 lg:px-48 pt-12 text-white">
          <h3>Bienvenido Cotizador</h3>
        </section>
        <div className="overflow-x-auto pt-4 relative lg:px-36">
          <div className="bg-black w-full p-2 xl:p-6 text-lg font-medium text-center text-lime-400">
            <p>Tus cotizaciones</p>
          </div>
          <table className="w-full text-basic text-left text-white bg-black">
            <thead className="text-basic font-normal text-white uppercase border-b border-lime-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Material
                </th>
                <th scope="col" className="py-3 px-2">
                  Marca
                </th>
                <th scope="col" className="py-3 px-2">
                  Proveedor
                </th>
                <th scope="col" className="py-3 px-2">
                  Precio
                </th>
                <th scope="col" className="py-3 px-2">
                  Unidad
                </th>
              </tr>
            </thead>
            {/* {materials.map((material) => {
              return ( */}
            <tbody key="">
              <tr className="bg-black border-b">
                <th
                  scope="row"
                  className="py-4 px-6 font-normal text-white whitespace-nowrap"
                ></th>
                <td className="py-4 px-2"></td>
                <td className="py-4 px-2"></td>
                <td className="py-4 px-2"></td>
                <td className="py-4 px-2"></td>
              </tr>
            </tbody>
            {/* //   );
            // })} */}
          </table>
        </div>
      </main>
    </>
  );
}
