import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "./Button";
import NavDashboard from "./NavDashboard";

export default function RecipeList() {
  const [recipes, setRecipies] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipe`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log("json", json);
        setRecipies(json.recipe);
      });
  }, [recipes]);

  const router = useRouter();

  const onClick = () => {
    router.push("user/recipe");
  };

  return (
    <>
      <NavDashboard />
      <div className="container mx-auto flex flex-col w-full h-full pt-6">
        <div className="flex justify-end xs:justify-center md:justify-end mx-5 md:mx-0 md:pr-6 lg:pr-40 pb-4">
          <Button
            onClick={onClick}
            style="bg-lime-400 text-black"
            text="Agregar receta"
          />
        </div>
        <div className="overflow-x-auto relative lg:px-36">
          <div className="bg-black p-2 xl:p-6 text-lg font-medium text-center text-lime-400">
            <p>Recetas</p>
          </div>
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
                <th scope="col" className="py-3 px-2">
                  Precio
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
                    <td className="py-4 px-2">{recipe.cost}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}
