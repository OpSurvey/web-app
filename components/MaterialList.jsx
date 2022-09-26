import { useEffect, useState } from "react";

export default function MaterialList() {
  const [materials, setMaterials] = useState([])
  
  useEffect(()=>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/material`)
    .then((response) => response.json())
  },[])
  
  return (
    <>
      <div className="overflow-x-auto relative lg:px-36">
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
                Cotizador
              </th>
              <th scope="col" className="py-3 px-2">
                Precio
              </th>
              <th scope="col" className="py-3 px-2">
                Unidad
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-black border-b">
              <th
                scope="row"
                className="py-4 px-6 font-normal text-white whitespace-nowrap"
              >
                Cemento
              </th>
              <td className="py-4 px-2">Cemex</td>
              <td className="py-4 px-2">Bere Cervantes</td>
              <td className="py-4 px-2">214.00</td>
              <td className="py-4 px-2">Costal</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
