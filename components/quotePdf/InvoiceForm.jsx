import React, { useEffect, useState } from "react";
import Search from "./Search";
import SearchClients from "./SearchClients";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

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
  const [clientName, setClientName] = useState({});
  const [notes, setNotes] = useState("");
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "",
      quantity: 1,
      price: "1.00",
    },
  ]);
  const router = useRouter();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipe`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserRecipes(data.recipe);
      });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const recipeData = {
      clientId: clientName._id,
      profit: profit,
      riskFactor: riskFactor,
      financing: financing,
      note: notes,
      recipes: recipes.map((recipe) => {
        return {
          id: recipe._id,
          quantity: recipe.quantity,
        };
      }),
    };

    const token = localStorage.getItem("token");
    let result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/quote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(recipeData),
    });

    toast("Se ha generado tu cotización ");

    router.push("/user/dashboard");
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
    const newRecipes = recipes.filter((recipe) => recipe._id !== idToDelete);
    setRecipes(newRecipes);
  };

  const editQuantityHandler = (quantity, index) => {
    recipes[index].quantity = quantity;
    setRecipes([...recipes]);
  };

  const onSearchChange = (data, index) => {
    recipes[index] = data;
    setRecipes([...recipes]);
  };

  const subtotal = recipes.reduce((prev, curr) => {
    if (curr.name.trim().length > 0)
      return prev + Number(curr.cost * Math.floor(curr.quantity));
    else return prev;
  }, 0);
  const profitRate = (profit * subtotal) / 100;
  const riskFactorRate = (riskFactor * subtotal) / 100;
  const financingRate = (financing * subtotal) / 100;
  const total = subtotal + profitRate + riskFactorRate + financingRate;

  return (
    <>
      <main className="pt-8 pb-8 bg-zinc-800 lg:px-48 sm:px-6 min-h-screen flex justify-center items-center">
        <form
          onSubmit={onSubmit}
          className="my-6 flex-1 space-y-2 rounded-md bg-zinc-900 text-white p-4 shadow-sm sm:space-y-4 md:p-6"
        >
          <h1 className="text-center text-lg font-bold">Cotización</h1>
          <article>
            <label
              htmlFor="customerName"
              className=" text-sm font-bold md:text-base"
            >
              Cliente:
            </label>
            <SearchClients
              className="text-black"
              ChangeClientName={(clientName) => setClientName(clientName)}
              value={clientName.firstName}
              options={clientName}
            />
          </article>
          <article>
            {recipes.map((recipe, index) => {
              return (
                <div
                  className="w-full grid grid-cols-4 sm:grid-cols-[1fr_60px_90px_50px] gap-3 border-b border-b-slate-700 py-2"
                  data-component="row"
                  key="recipe._id"
                >
                  <div
                    data-component="col-search"
                    className="flex flex-col gap-2 col-start-1 col-end-4 sm:col-start-1 sm:col-end-2 text-black"
                  >
                    <label
                      htmlFor="Search"
                      className="text-sm font-bold md:text-base text-white"
                    >
                      Concepto
                    </label>
                    <Search
                      ChangeData={(recipeData) =>
                        onSearchChange(recipeData, index)
                      }
                      value={recipe.name}
                      options={userRecipes}
                    />
                  </div>

                  <div
                    data-component="col-cantidad"
                    className="flex flex-col gap-2 col-start-1 sm:col-start-2"
                  >
                    <label
                      htmlFor="Search"
                      className="text-sm font-bold md:text-base w-full text-center"
                    >
                      Cantidad
                    </label>
                    <input
                      placeholder="0.0"
                      name="quantity"
                      type="number"
                      value={recipe.quantity}
                      onChange={(event) =>
                        editQuantityHandler(event.target.value, index)
                      }
                      className="text-center text-black"
                    />
                  </div>
                  <div
                    data-component="col-unidad"
                    className="flex flex-col gap-2 col-start-2 sm:col-start-3"
                  >
                    <label
                      htmlFor="Search"
                      className="text-sm font-bold md:text-base w-full text-center"
                    >
                      Precio
                    </label>
                    <p className="h-full flex items-center justify-center">
                      {recipe.cost}
                    </p>
                  </div>

                  <div
                    className="flex flex-col justify-center items-center text-center col-start-4 row-start-2 row-end-3 sm:col-start-5"
                    data-component="col-price"
                    onClick={() => deleteRecipeHandler(recipe._id)}
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
            <button
              className="rounded-md bg-lime-400 px-4 py-2 text-sm text-black shadow-sm hover:bg-lime-500"
              type="button"
              onClick={addRecipeHandler}
            >
              Agregar receta
            </button>
          </article>

          <article>
            <div className="py-2">
              <label className="text-sm text-lime-400 font-bold md:text-base">
                Ganancia:
              </label>
              <div className="flex items-center">
                <input
                  className="w-full rounded-r-none bg-white text-black shadow-sm md:w-1/2"
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
            <div className="py-2">
              <label className="text-sm font-bold text-lime-400 md:text-base">
                Factor de riesgo:
              </label>
              <div className="flex items-center">
                <input
                  className="w-full rounded-r-none bg-white text-black shadow-sm md:w-1/2"
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
            <div className="py-2">
              <label className="text-sm font-bold text-lime-400 md:text-base">
                Financiamiento:
              </label>
              <div className="flex items-center">
                <input
                  className="w-full rounded-r-none bg-white text-black shadow-sm md:w-1/2"
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
            <div className="py-2">
              <label className="text-sm font-bold text-lime-400 md:text-base">
                Notas:
              </label>
              <div className="flex items-center">
                <input
                  className="w-full h-52 rounded-xl bg-white text-black shadow-sm"
                  type="text"
                  name="notes"
                  id="notes"
                  min="0.01"
                  step="0.01"
                  placeholder="Agrega notas a tu cotización"
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                />
              </div>
            </div>
          </article>

          <article>
            <div className="flex w-full justify-between md:w-1/2">
              <span className="font-bold">Subtotal:</span>
              <span>$ {subtotal ? subtotal.toFixed(2) : 0.0}</span>
            </div>
            <div className="flex w-full justify-between md:w-1/2">
              <span className="font-bold">Ganancia:</span>
              <span>$ {profitRate ? profitRate.toFixed(2) : 0.0}</span>
            </div>
            <div className="flex w-full justify-between md:w-1/2">
              <span className="font-bold">Factor de riesgo:</span>
              <span>$ {riskFactorRate ? riskFactorRate.toFixed(2) : 0.0}</span>
            </div>
            <div className="flex w-full justify-between md:w-1/2">
              <span className="font-bold">Financiamiento:</span>
              <span>$ {financingRate ? financingRate.toFixed(2) : 0.0}</span>
            </div>
            <div className="flex w-full justify-between border-t border-gray-900/10 pt-2 md:w-1/2">
              <span className="font-bold">Total:</span>
              <span className="font-bold">
                $ {total ? total.toFixed(2) : 0}
              </span>
            </div>
          </article>
          <button
            className="w-full rounded-md bg-lime-400 py-2 text-md font-semibold text-black shadow-sm hover:bg-lime-500"
            type="submit"
          >
            Guardar Cotización
          </button>
        </form>
      </main>
    </>
  );
};

export default InvoiceForm;
