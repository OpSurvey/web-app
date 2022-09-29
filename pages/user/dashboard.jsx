import useWindowDimensions from "../../hooks/useWindowDimensions";
import NavDashboard from "../../components/NavDashboard";
import Button from "../../components/Button";
import { useRouter } from "next/router";

export default function Dashboard() {
  const width = useWindowDimensions();

  const router = useRouter();

  const onClick = () => {
    router.push("/user/cotizacion");
  };

  return (
    <>
      <NavDashboard />
      <main className="container mx-auto w-auto bg-zinc-800 ">
        <section className="w-full px-2 lg:px-2 pt-12 pb-8 text-white">
          <h3>Bienvenido Cotizador</h3>
        </section>
        <div className="flex justify-end xs:justify-center md:justify-end mx-5 md:mx-0 md:pr-6 pb-4">
          <Button
            onClick={onClick}
            style="bg-lime-400 text-black"
            text="Generar cotizacion"
          />
        </div>
        <div className="overflow-x-auto pt-4 ">
          <div className="bg-black w-full flex flex-row justify-center p-2 xl:p-6 text-lg font-medium text-center text-lime-400">
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
