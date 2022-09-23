import { useEffect, useState } from 'react';

export default function RecipeList() {
const  [recipes, setRecipies] = useState([])

useEffect(()=>{
  fetch('')
  .then((response)=>response.json())
  .then((json)=>{
    setRecipies(json.results)
  })
},[])

  return (
    <>
      <div className="overflow-x-auto relative lg:px-36">
        <table className="w-full text-basic text-left text-white bg-black">
          <thead className="text-basic font-normal text-white uppercase border-b border-lime-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Sku
              </th>
              <th scope="col" className="py-3 px-2">
                Nombre
              </th>
              <th scope="col" className="py-3 px-2">
                Costo
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
                12345
              </th>
              <td className="py-4 px-2">Hacer un piso</td>
              <td className="py-4 px-2">699.99</td>
              <td className="py-4 px-2">m2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
