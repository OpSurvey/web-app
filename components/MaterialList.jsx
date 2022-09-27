import Button from "./Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function MaterialList() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token", token);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/material`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setMaterials(json.material);
        console.log(materials);
      });
  }, [setMaterials]);

  const router = useRouter();

  const onClick = () => {
    console.log("click");
    router.push("/material");
  };

  return (
    <>
      <div className="flex justify-end xs:justify-center md:justify-end md:pr-20 lg:pr-40">
        <Button
          onClick={onClick}
          style="bg-lime-400 text-black"
          text="Agregar material"
        />
      </div>
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
          {materials.map((material) => {
            return (
              <tbody>
                <tr className="bg-black border-b">
                  <th
                    scope="row"
                    className="py-4 px-6 font-normal text-white whitespace-nowrap"
                  >
                    {material.name}
                  </th>
                  <td className="py-4 px-2">{material.brand}</td>
                  <td className="py-4 px-2">{material.supplier}</td>
                  <td className="py-4 px-2">{material.price}</td>
                  <td className="py-4 px-2">{material.unit}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}
