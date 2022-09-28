import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "./Button";
import NavDashboard from "./NavDashboard";

export default function RecipeList() {
  const [recipes, setRecipies] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token", token);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipe`, {
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
        setRecipies(json.recipe);
      });
  }, [setRecipies]);

  const router = useRouter();

  const onClick = () => {
    console.log("click");
    router.push("user/recipe");
  };

  return (
    <>
      <NavDashboard />
      <div className="flex justify-end xs:justify-center md:justify-end md:pr-20 lg:pr-40">
        <Button
          onClick={onClick}
          style="bg-lime-400 text-black"
          text="Agregar receta"
        />
      </div>
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
                Unidad
              </th>
            </tr>
          </thead>
          {recipes.map((recipe) => {
            return (
              <tbody key={recipe.name}>
                <tr className="bg-black border-b">
                  <th
                    scope="row"
                    className="py-4 px-6 font-normal text-white whitespace-nowrap"
                  >
                    {recipe.SKU}
                  </th>
                  <td className="py-4 px-2">{recipe.name}</td>
                  <td className="py-4 px-2">{recipe.unit}</td>
                  <td className="py-4 px-2">m2</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}
