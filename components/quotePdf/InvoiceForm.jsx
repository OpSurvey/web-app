import React, { useEffect, useState } from "react";
import Search from "./Search";

const date = new Date();
const today = date.toLocaleDateString("en-GB", {
  month: "numeric",
  day: "numeric",
  year: "numeric",
});

const InvoiceForm = () => {
  const [userRecipes, setUserRecipes] = useState([]);
  const [profit, setProfit] = useState("");
  const [riskFactor, setRiskFactor] = useState("");
  const [financing, setFinancing] = useState("");
  const [quoteNumber, setQuoteNumber] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "",
      quantity: 1,
      price: "1.00",
    },
  ]);

  console.log("recetas para POST", recipes);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipe`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("recipes data: ", data);
        setUserRecipes(data.recipe);
      });
  }, []);

  const ejemplo = {
    clientId: "632d4531e5204c58f043a1db",
    profit: 45,
    riskFactor: 15,
    financing: 4,
    note: "Quote Alejandro",
    recipes: [{ id: "63310b32f0968000cd95e668", quantity: 5 }],
  };

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
  const addRecipeHandler = () => {
    setRecipes((prevRecipe) => [
      ...prevRecipe,
      {
        _id: "",
        name: "",
        quantity: 1,
        price: "0",
      },
    ]);
  };

  const deleteRecipeHandler = (idToDelete) => {
    console.log("deleteRecipeHandler", idToDelete);
    const newRecipes = recipes.filter((recipe) => recipe._id !== idToDelete);
    setRecipes(newRecipes);
  };

  const editQuantityHandler = (quantity, index) => {
    recipes[index].quantity = quantity;
    setRecipes([...recipes]);
  };

  const onSearchChange = (data, index) => {
    console.log("data on search change: ", data);
    recipes[index] = data;
    console.log("newRecipes: ", recipes);
    setRecipes([...recipes]);
  };

  const subtotal = recipes.reduce((prev, curr) => {
    if (curr.name.trim().length > 0)
      return prev + Number(curr.price * Math.floor(curr.quantity));
    else return prev;
  }, 0);
  const profitRate = (profit * subtotal) / 100;
  const total = subtotal + profitRate;

  return (
    <form
      className="relative flex flex-col px-2 md:flex-row sm:w-100"
      onSubmit={onSubmit}
    >
      <div className="my-6 flex-1 space-y-2 rounded-md bg-zinc-900 text-white p-4 shadow-sm sm:space-y-4 md:p-6">
        <div className="flex flex-col justify-between space-y-2 border-b border-gray-900/10 pb-4 md:flex-row md:items-center md:space-y-0">
          <div className="flex space-x-2">
            <span className="font-bold">Fecha: </span>
            <span>{today}</span>
          </div>
          <div className="flex items-center space-x-2">
            {/* TODO: Traer de la base de datos */}
            <label className="font-bold" htmlFor="quoteNumber">
              Cotización #:
            </label>
            <input
              required
              className="max-w-[130px] text-black"
              type="number"
              name="quoteNumber"
              id="quoteNumber"
              min="1"
              step="1"
              value={quoteNumber}
              onChange={(event) => setQuoteNumber(event.target.value)}
            />
          </div>
        </div>
        <h1 className="text-center text-lg font-bold">Cotización</h1>
        <div className="grid grid-cols-2 gap-2 pt-4 pb-8">
          <label
            htmlFor="customerName"
            className="col-start-1 row-start-1 text-sm font-bold md:text-base"
          >
            Cliente:
          </label>
          <input
            required
            className="flex-1 text-black col-start-1 row-start-2"
            placeholder="Nombre del cliente"
            type="text"
            name="customerName"
            id="customerName"
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
          />
        </div>
        <table className="w-full p-4 text-left">
          <thead>
            <tr className="border-b border-gray-900/10 text-white text-sm md:text-base">
              <th className="text-white">Concepto</th>
              <th className="text-white">Cantidad</th>
              <th className=" text-white text-center">Precio</th>
              <th className="text-center">Eliminar</th>
            </tr>
          </thead>
          <tbody className="">
            {recipes.map((recipe, index) => (
              <tr key={recipe._id}>
                <td className="w-full text-black">
                  <Search
                    ChangeData={(recipeData) =>
                      onSearchChange(recipeData, index)
                    }
                    value={recipe.name}
                    options={userRecipes}
                  />
                </td>
                <td className="min-w-[65px] h-10 text-black">
                  <input
                    name="quantity"
                    onChange={(event) =>
                      editQuantityHandler(event.target.value, index)
                    }
                  />
                </td>
                <td className="min-w-[65px] h-10 text-black">
                  <input name="price" value={recipe.cost} disabled="disabled" />
                </td>
                <td className="flex items-center justify-center">
                  <div
                    className="rounded-md bg-red-500 p-2 text-white shadow-sm transition-colors duration-200 hover:bg-red-600"
                    onClick={() => deleteRecipeHandler(recipe._id)}
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
          onClick={addRecipeHandler}
        >
          Agregar receta
        </button>
        <div className="flex flex-col items-end space-y-2 pt-6">
          <div className="flex w-full justify-between md:w-1/2">
            <span className="font-bold">Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex w-full justify-between md:w-1/2">
            <span className="font-bold">Ganancia:</span>
            <span>
              ({profit || "0"}%)${profitRate.toFixed(2)}
            </span>
          </div>
          <div className="flex w-full justify-between border-t border-gray-900/10 pt-2 md:w-1/2">
            <span className="font-bold">Total:</span>
            <span className="font-bold">
              ${total % 1 === 0 ? total : total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <div className="basis-1/4 bg-transparent">
        <div className="sticky top-0 z-10 space-y-4 divide-y divide-gray-900/10 pb-8 md:pt-6 md:pl-4">
          <button
            className="w-full rounded-md bg-lime-400 py-2 text-md font-semibold text-black shadow-sm hover:bg-lime-500"
            type="submit"
          >
            Revisar Cotización
          </button>

          <div className="space-y-4 py-2 ">
            <div className="space-y-2">
              <label className="text-sm text-lime-400 font-bold md:text-base">
                Ganancia:
              </label>
              <div className="flex items-center">
                <input
                  className="w-full rounded-r-none bg-white text-black shadow-sm"
                  type="number"
                  name="profit"
                  id="profit"
                  min="0.01"
                  step="0.01"
                  placeholder="0.0"
                  value={profit}
                  onChange={(event) => setProfit(event.target.value)}
                />
                <span className="rounded-r-md bg-gray-200 py-2 px-4 text-gray-500 shadow-sm">
                  %
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-lime-400 md:text-base">
                Factor de riesgo:
              </label>
              <div className="flex items-center">
                <input
                  className="w-full rounded-r-none bg-white text-black shadow-sm"
                  type="number"
                  name="riskFactor"
                  id="riskFactor"
                  min="0.01"
                  step="0.01"
                  placeholder="0.0"
                  value={riskFactor}
                  onChange={(event) => setRiskFactor(event.target.value)}
                />
                <span className="rounded-r-md bg-gray-200 py-2 px-4 text-gray-500 shadow-sm">
                  %
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-lime-400 md:text-base">
                Financiamiento:
              </label>
              <div className="flex items-center">
                <input
                  className="w-full rounded-r-none bg-white text-black shadow-sm"
                  type="number"
                  name="financing"
                  id="financing"
                  min="0.01"
                  step="0.01"
                  placeholder="0.0"
                  value={financing}
                  onChange={(event) => setFinancing(event.target.value)}
                />
                <span className="rounded-r-md bg-gray-200 py-2 px-4 text-gray-500 shadow-sm">
                  %
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InvoiceForm;
