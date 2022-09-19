import React, { useState } from "react";
import {uid} from "uid"


export default function InvoiceForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [discount, setDiscount] = useState("");
  const [tax, setTax] = useState("");
  const [quoteNumber, setQuoteNumber] = useState(1); // estos datos se traerán de la base de datos
  const [quoterName, setQuoterName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [recipes, setRecipes] = useState([
    {
      id: uid(6),
      name: "",
      qty: 1,
      price: "1.00",
    },
  ]);

  const reviewQuoteHandler = (event) => {
    event.preventDefault();
    setIsOpen(true);
  };

  const addNextQuoteHandler = () => {
    setQuoteNumber((prevNumber) => incrementString(prevNumber));
    setRecipes([
      {
        id: uid(6),
        name: "",
        qty: 1,
        price: "1.00",
      },
    ]);
  };

  const addItemHandler = () => {
    const id = uid(6);
    setRecipes((prevRecipe) => [
      ...prevRecipe,
      {
        id: id,
        name: "",
        qty: "1",
        price: "1.00",
      },
    ]);
  };

  const deleteRecipeHandler = (id) => {
    setRecipes((prevRecipe) => prevRecipe.filter((item) => item.id !== id));
  };

  const editRecipeHandler = (event) => {
    const editedRecipe = {
      id: event.target.id,
      name: event.target.name,
      value: event.target.value,
    };

    const newItems = items.map((items) => {
      for (const key in items) {
        if (key === editedRecipe.name && items.id === editedRecipe.id) {
          items[key] = editedRecipe.value;
        }
      }
      return items;
    });

    setItems(newItems);
  };

  const subtotal = items.reduce((prev, curr) => {
    if (curr.name.trim().length > 0)
      return prev + Number(curr.price * Math.floor(curr.qty))
    else return prev
  }, 0);
  const taxRate = (tax * subtotal) / 100
  const total = subtotal + taxRate

  return (
    <form
      className="relative flex flex-col px-2 md:flex-row"
      onSubmit={reviewQuoteHandler}
    >
      <div className="my-6 flex-1 space-y-2  rounded-md bg-zinc-900 text-white p-4 shadow-sm sm:space-y-4 md:p-6">
        <div className="flex flex-col justify-between space-y-2 border-b border-gray-900/10 pb-4 md:flex-row md:items-center md:space-y-0">
          <div className="flex space-x-2">
            <span className="font-bold">Fecha actual: </span>
            <span>{today}</span>
          </div>
          <div className="flex items-center space-x-2">
            <label className="font-bold" htmlFor="invoiceNumber">
              Cotización numero:
            </label>
            <input
              required
              className="max-w-[130px]"
              type="number"
              name="invoiceNumber"
              id="invoiceNumber"
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
            htmlFor="QuoterName"
            className="text-sm font-bold sm:text-base"
          >
            Cotizador:
          </label>
          <input
            required
            className="flex-1"
            placeholder="Quoter name"
            type="text"
            name="QuoterName"
            id="quoterName"
            value={quoterName}
            onChange={(event) => setQuoterName(event.target.value)}
          />
          <label
            htmlFor="customerName"
            className="col-start-2 row-start-1 text-sm font-bold md:text-base"
          >
            Cliente:
          </label>
          <input
            required
            className="flex-1"
            placeholder="Customer name"
            type="text"
            name="customerName"
            id="customerName"
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
          />
        </div>
        <table className="w-full p-4 text-left">
          <thead>
            <tr className="border-b border-gray-900/10 text-sm md:text-base">
              <th>CONCEPTO</th>
              <th>CANTIDAD</th>
              <th className="text-center">PRECIO</th>
              <th className="text-center">ELIMINAR</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <QuoteItem
                key={item.id}
                id={item.id}
                name={item.name}
                qty={item.qty}
                price={item.price}
                onDeleteRecipe={deleteRecipeHandler}
                onEdtiRecipe={editRecipeHandler}
              />
            ))}
          </tbody>
        </table>
        <button
          className="rounded-md bg-lime-400 px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-lime-500"
          type="button"
          onClick={addItemHandler}
        >
          Agregar Receta
        </button>
        <div className="flex flex-col items-end space-y-2 pt-6">
          <div className="flex w-full justify-between md:w-1/2">
            <span className="font-bold">Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex w-full justify-between md:w-1/2">
            <span className="font-bold">Impuestos:</span>
            <span>
              ({tax || "0"}%)${taxRate.toFixed(2)}
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
            className="w-full rounded-md bg-lime-400 py-2 text-sm text-black font-semibold shadow-sm hover:bg-lime-500"
            type="submit"
          >
            Revisar Cotización
          </button>
          <QuoteModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            quoteInfo={{
              quoteNumber,
              quoterName,
              customerName,
              subtotal,
              taxRate,
              total,
            }}
            items={items}
            onAddNextQuote={addNextQuoteHandler}
          />
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <label className="text-sm font-bold md:text-base" htmlFor="tax">
                Impuestos:
              </label>
              <div className="flex items-center">
                <input
                  className="w-full rounded-r-none bg-white shadow-sm"
                  type="number"
                  name="tax"
                  id="tax"
                  min="0.01"
                  step="0.01"
                  placeholder="0.0"
                  value={tax}
                  onChange={(event) => setTax(event.target.value)}
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
}
