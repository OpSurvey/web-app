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
  const [materials, setMaterials] = useState([
    {
      id: 1,
      name: "",
      quantity: 1,
      price: "1.00",
    },
  ]);

  const router = useRouter();

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

  const onSearchChange = (data, index) => {
    materials[index] = data;
    setMaterials([...materials]);
  };

  const total = materials.reduce((prev, curr) => {
    if (curr.name.trim().length > 0)
      return (
        prev +
        Number(curr.price * Math.floor(curr.quantity ? curr.quantity : 0))
      );
    else return prev;
  }, 0);

  return (
    <>
      <main className="pt-8 pb-8 bg-zinc-800 lg:px-48 sm:px-6 min-h-screen flex justify-center items-center">
        <form className="my-6 flex-1 space-y-2 rounded-md bg-zinc-900 text-white p-4 shadow-sm sm:space-y-4 md:p-6">
          <h1 className="text-center text-lg font-bold">Nueva Receta</h1>
          <article className="flex flex-col sm:grid sm:grid-cols-2 gap-3 pt-4 pb-8">
            <div className="col-start-1 row-start-1 flex flex-col gap-2">
              <label
                htmlFor="Receta"
                className="text-sm font-bold md:text-base"
              >
                Receta:
              </label>
              <input
                required
                className="flex-1 text-black "
                placeholder="Nombre de la receta"
                type="text"
                name="name"
                id="recipeName"
                value={recipeName}
                onChange={(event) => setRecipeName(event.target.value)}
              />
            </div>

            <div className="col-start-2 row-start-1 flex flex-col gap-2">
              <label className="font-bold">SKU:</label>
              <input
                required
                className=" text-black"
                type="text"
                name="SKU"
                id="SKU"
                min="1"
                step="1"
                value={sku.value}
                onChange={skuHandler}
              />
            </div>

            <div className="col-start-1 row-start-2 flex flex-col gap-2">
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
            </div>
            <div className="col-start-2 row-start-2 flex flex-col gap-2">
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
            </div>
            <div className="col-start-1 row-start-3 flex flex-col gap-2">
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
          </article>
          <article className="overflow-x-auto">
            {/* <table className="w-full p-4 text-left overflow-x-auto">
              <thead>
                <tr className="border-b border-gray-900/10 text-white text-sm md:text-base">
                  <th className="text-white">Materiales</th>
                  <th className="text-white">Cantidad</th>
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
                      <p className="text-white">{material.unit}</p>
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
                      <p className="text-white">{material.price}</p>
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
            </table> */}
            {materials.map((material, index) => {
              return (
                <div
                  className="w-full grid grid-cols-4 sm:grid-cols-[1fr_60px_90px_60px_60px] gap-3 border-b border-b-slate-700 py-2"
                  data-component="row"
                >
                  <div
                    data-component="col-search"
                    className="flex flex-col gap-2 col-start-1 col-end-4 sm:col-start-1 sm:col-end-2"
                  >
                    <label
                      htmlFor="Search"
                      className="text-sm font-bold md:text-base"
                    >
                      Material
                    </label>
                    <Search
                      ChangeData={(materialData) =>
                        onSearchChange(materialData, index)
                      }
                      value={material.name}
                      options={userMaterials}
                    />
                  </div>

                  <div
                    data-component="col-unidad"
                    className="flex flex-col gap-2 col-start-2 sm:col-start-2"
                  >
                    <label
                      htmlFor="Search"
                      className="text-sm font-bold md:text-base w-full text-center"
                    >
                      Unidad
                    </label>
                    <p className="h-full flex items-center justify-center">
                      {material.unit}
                    </p>
                  </div>

                  <div
                    className="flex flex-col gap-2 col-start-1 row-start-2 sm:row-start-1 sm:col-start-3"
                    data-component="col-qty"
                  >
                    <label
                      htmlFor="quantity"
                      className="text-sm font-bold md:text-base w-full text-center"
                    >
                      Cantidad
                    </label>
                    <input
                      name="quantity"
                      type="number"
                      value={material.quantity}
                      onChange={(event) =>
                        editQuantityHandler(event.target.value, index)
                      }
                      className="text-center text-black"
                    />
                  </div>

                  <div
                    className="flex flex-col gap-2"
                    data-component="col-price"
                  >
                    <label
                      htmlFor="quantity"
                      className="text-sm font-bold md:text-base w-full text-center sm:col-start-4 sm:col-end-5"
                    >
                      Precio
                    </label>
                    <p className="h-full flex items-center justify-center">
                      ${material.price}
                    </p>
                  </div>

                  <div
                    className="flex flex-col justify-center items-center text-center col-start-4 row-start-1 row-end-3 sm:col-start-5"
                    data-component="col-price"
                    onClick={() => deleteMaterialHandler(material._id)}
                  >
                    <div className="rounded-md bg-red-500 p-2 text-white shadow-sm transition-colors duration-200 hover:bg-red-600">
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
                  </div>
                </div>
              );
            })}
          </article>
          <div className="pb-4">
            <button
              className="rounded-md bg-lime-400 px-4 py-2 text-sm text-black shadow-sm hover:bg-lime-500"
              type="button"
              onClick={addMaterialHandler}
            >
              Agregar material
            </button>
          </div>
          <div>
            <p className="text-right text-2xl">Total: ${total}</p>
          </div>
          <div className="">
            <button
              className="w-full rounded-md bg-lime-400 py-2 text-md font-semibold text-black shadow-sm hover:bg-lime-500"
              type="submit"
            >
              Guardar Receta
            </button>
          </div>
        </form>
      </main>

      {/* <form
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

          <table className="w-full p-4 text-left overflow-x-auto">
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
              <span className="font-bold"> {`$ ${total}`}</span>
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
      </form> */}
    </>
  );
};

export default RecipesForm;
