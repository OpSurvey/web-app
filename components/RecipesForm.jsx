import React, { useEffect, useState } from "react";
import Search from "../components/quotePdf/Search";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

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

    toast("Tu receta se ha realizado satisfactoriamente");

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
<<<<<<< HEAD
        <form
          className="my-6 flex-1 space-y-2 rounded-md bg-zinc-900 text-white p-4 shadow-sm sm:space-y-4 md:p-6"
          onSubmit={onSubmit}
        >
=======
        <form className="my-6 flex-1 space-y-2 rounded-md bg-zinc-900 text-white p-4 shadow-sm sm:space-y-4 md:p-6">
>>>>>>> bf16463ddfa6fc2ed063914d8a65ef401f0b01ad
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
<<<<<<< HEAD
                className="flex-1 text-black col-start-1 row-start-2"
=======
                className="flex-1 text-black "
>>>>>>> bf16463ddfa6fc2ed063914d8a65ef401f0b01ad
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
            {materials.map((material, index) => {
              return (
                <div
                  className="w-full grid grid-cols-4 sm:grid-cols-[1fr_60px_90px_60px_60px] gap-3 border-b border-b-slate-700 py-2"
                  data-component="row"
                  key="material.name"
                >
                  <div
                    data-component="col-search"
                    className="text-black flex flex-col gap-2 col-start-1 col-end-4 sm:col-start-1 sm:col-end-2"
                  >
                    <label
                      htmlFor="Search"
                      className="text-white text-sm font-bold md:text-base "
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
    </>
  );
};

export default RecipesForm;
