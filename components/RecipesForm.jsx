import React, { useEffect, useState } from "react";
import Search from "../components/quotePdf/Search";
import { useRouter } from "next/router";

const date = new Date();
const today = date.toLocaleDateString("en-GB", {
  month: "numeric",
  day: "numeric",
  year: "numeric",
});

const RecipesForm = () => {
  const [userMaterials, setUserMaterials] = useState([]);
  const [sku, setSku] = useState("");
  const [recipeUnits, setRecipeUnits] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [recipeTags, setRecipeTags] = useState([]);
  const [recipeType, setRecipeType] = useState("");
  const [recipeQuantity, setRecipeQuantity] = useState(1);
  const [materials, setMaterials] = useState([
    {
      id: 1,
      name: "",
      quantity: 1,
      price: "1.00",
    },
  ]);

  console.log("materials", materials);

  const router = useRouter();

  console.log("array de materiales", materials);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/material`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserMaterials(data.material);
      });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const recipeData = {
      SKU: sku,
      name: recipeName,
      unit: recipeUnits,
      tags: [recipeTags],
      type: recipeType,
      materials: materials.map((material) => {
        return {
          id: material._id,
          quantity: material.quantity,
        };
      }),
    };
    const token = localStorage.getItem("token");
    let result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(recipeData),
    });

    window.alert("La receta ha sido agregada");

    router.push("/recipeList");
  };

  const addMaterialHandler = () => {
    setMaterials((prevMaterial) => [
      ...prevMaterial,
      {
        _id: "",
        name: "",
        quantity: 1,
        price: "0",
      },
    ]);
  };

  const deleteMaterialHandler = (idToDelete) => {
    const newMaterials = materials.filter(
      (material) => material._id !== idToDelete
    );
    setMaterials(newMaterials);
  };

  const skuHandler = (event) => {
    setSku(event.target.value);
  };

  const editQuantityHandler = (quantity, index) => {
    materials[index].quantity = quantity;
    setMaterials([...materials]);
  };

  console.log("todos los materials", materials);

  const onSearchChange = (data, index) => {
    materials[index] = data;
    setMaterials([...materials]);
  };

  // const total = materials.reduce((prev, curr) => {
  //   if (curr.name.trim().length > 0)
  //     return prev + Number(curr.price * Math.floor(recipeQuantity));
  //   else return prev;
  // }, 0);

  return (
    <form
      className="relative w-screen flex flex-col px-2 md:flex-row"
      onSubmit={onSubmit}
    >
      <div className="my-6 flex-1 space-y-2 rounded-md bg-zinc-900 text-white p-4 shadow-sm sm:space-y-4 md:p-6">
        <div className="flex flex-col justify-between space-y-2 border-b border-gray-900/10 pb-4 md:flex-row md:items-center md:space-y-0">
          <div className="flex space-x-2">
            <span className="font-bold">Fecha: </span>
            <span>{today}</span>
          </div>
          <div className="flex items-center space-x-2">
            <label className="font-bold">SKU:</label>
            <input
              required
              className="max-w-[130px] text-black"
              type="text"
              name="SKU"
              id="SKU"
              min="1"
              step="1"
              value={sku.value}
              onChange={skuHandler}
            />
          </div>
        </div>
        <h1 className="text-center text-lg font-bold">Nueva Receta</h1>
        <div className="grid grid-cols-2 gap-2 pt-4 pb-8">
          <label
            htmlFor="Receta"
            className="col-start-1 row-start-1 text-sm font-bold md:text-base"
          >
            Receta:
          </label>
          <input
            required
            className="flex-1 text-black col-start-1 row-start-2"
            placeholder="Nombre de la receta"
            type="text"
            name="name"
            id="recipeName"
            value={recipeName}
            onChange={(event) => setRecipeName(event.target.value)}
          />
          <label
            htmlFor="unidades de receta"
            className="col-start-2 row-start-1 text-sm font-bold md:text-base"
          >
            Unidad de receta:
          </label>
          <input
            required
            className="flex-1 text-black col-start-2 row-start-2"
            placeholder="Unidad de receta"
            type="text"
            name="unit"
            id="recipeUnits"
            value={recipeUnits}
            onChange={(event) => setRecipeUnits(event.target.value)}
          />
          <label
            htmlFor="unidades de receta"
            className="col-start-1 row-start-3 text-sm font-bold md:text-base"
          >
            Tags:
          </label>
          <input
            required
            className="flex-1 text-black col-start-1 row-start-4"
            placeholder="Tags de receta(pintura, construcción, mantenimiento, etc...)"
            type="text"
            name="tags"
            id="recipeTags"
            value={recipeTags}
            onChange={(event) => setRecipeTags(event.target.value)}
          />

          <label
            htmlFor="tipo de receta"
            className="col-start-2 row-start-3 text-sm font-bold md:text-base"
          >
            Tipo:
          </label>
          <input
            required
            className="flex-1 text-black col-start-2 row-start-4"
            placeholder="Tipo de receta(servicio, outsourcing, equipo, etc...)"
            type="text"
            name="type"
            id="recipeType"
            value={recipeType}
            onChange={(event) => setRecipeType(event.target.value)}
          />
        </div>

        <table className="w-full p-4 text-left">
          <thead>
            <tr className="border-b border-gray-900/10 text-white text-sm md:text-base">
              <th className="text-white">Materiales</th>
              <th className="text-white">Unidad</th>
              <th className="text-white">Cantidad</th>
              <th className=" text-white text-center">Precio</th>
              <th className="text-center">Eliminar</th>
            </tr>
          </thead>
          <tbody className="">
            {materials.map((material, index) => (
              <tr key={material._id}>
                <td className="w-full text-black">
                  <Search
                    ChangeData={(materialData) =>
                      onSearchChange(materialData, index)
                    }
                    value={material.name}
                    options={userMaterials}
                  />
                </td>
                <td className="text-black text-right">
                  <input
                    className="text-center h-10"
                    name="price"
                    value={material.unit}
                    disabled="disabled"
                  />
                </td>
                <td className="text-black">
                  <input
                    name="quantity"
                    type="number"
                    value={material.quantity}
                    onChange={(event) =>
                      editQuantityHandler(event.target.value, index)
                    }
                    className="text-center h-10"
                  />
                </td>
                <td className="text-black ">
                  <input
                    className="text-center h-10"
                    name="price"
                    value={material.price}
                    disabled="disabled"
                  />
                </td>
                <td className="flex items-center justify-center">
                  <div
                    className="rounded-md bg-red-500 p-2 text-white shadow-sm transition-colors duration-200 hover:bg-red-600"
                    onClick={() => deleteMaterialHandler(material._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="rounded-md bg-lime-400 px-4 py-2 text-sm text-black shadow-sm hover:bg-lime-500"
          type="button"
          onClick={addMaterialHandler}
        >
          Agregar material
        </button>
        <div className="flex flex-col items-end space-y-2 pt-6">
          <div className="flex w-full justify-between border-t border-gray-900/10 pt-2 md:w-1/2">
            <span className="font-bold">Total:</span>
            {/* <span className="font-bold"> {`$ ${total}`}</span> */}
          </div>
        </div>
      </div>
      <div className="basis-1/4 bg-transparent">
        <div className="sticky top-0 z-10 space-y-4 divide-y divide-gray-900/10 pb-8 md:pt-6 md:pl-4">
          <button
            className="w-full rounded-md bg-lime-400 py-2 text-md font-semibold text-black shadow-sm hover:bg-lime-500"
            type="submit"
          >
            Guardar Receta
          </button>
        </div>
      </div>
    </form>
  );
};

export default RecipesForm;
