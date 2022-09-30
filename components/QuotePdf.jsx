import { useEffect, useState } from "react";

export default function QuotePage(props) {
  const subtotal = props.quote.recipe.reduce((prev, curr) => {
    return prev + Number(curr.total * Math.floor(curr.quantity));
  }, 0);

  const profit = subtotal * (Number(props.quote.profit) / 100);
  const riskFactor = subtotal * (Number(props.quote.riskFactor) / 100);
  const financing = subtotal * (Number(props.quote.financing) / 100);

  const totalSinIva = subtotal + profit + riskFactor + financing;
  const Iva = totalSinIva * 0.16;
  const totalCotizacion = Iva + totalSinIva;

  return (
    <>
      <main className="text-xs">
        <section name="quoterInfo" className="bg-white flex flex-row gap-4">
          <div
            name="quoter"
            className="bg-white border-2 border-black rounded w-2/3 p-2"
          >
            <p>{props.quote.clientId.businessName}</p>
            <p>{`${props.quote.clientId.street} ${props.quote.clientId.extNumber} ${props.quote.clientId.intNumber}`}</p>
            <p>{props.quote.clientId.neighborhood}</p>
            <p>{props.quote.clientId.state}</p>
            <p>{props.quote.clientId.phone}</p>
            <p>{`${props.quote.clientId.firstName} ${props.quote.clientId.lastName}`}</p>
          </div>
          <div
            name="date"
            className="bg-white border-2 border-black rounded p-2 w-1/3 text-center"
          >
            <p className="font-bold">Cotizacion</p>
            <p className="font-bold">{props.quote._id}</p>
            <p>{props.quote.createdAt}</p>
          </div>
        </section>

        <section name="clientInfo" className="bg-white pt-2">
          <div className="bg-white p-2 border-2 border-black rounded">
            <p>{props.quote.quoterId.businessName}</p>
            <p>
              {`${props.quote.quoterId.street} ${props.quote.quoterId.extNumber} ${props.quote.quoterId.intNumber} `}
            </p>
            <p>{props.quote.quoterId.neiehborhood}</p>
            <p>{props.quote.quoterId.state}</p>
            <p>{`${props.quote.quoterId.firstName} ${props.quote.quoterId.lastName}`}</p>
            <p>{props.quote.quoterId.phone}</p>
          </div>
        </section>

        <section name="recpiesInfo" className="bg-white pt-2">
          <div className="bg-white p-2 border-2 border-black rounded">
            <table className="table-auto w-full">
              <thead className="border-b-2 border-black text-left">
                <tr>
                  <th className="py-3 px-2 w-5/12">Nombre</th>
                  <th className="py-3 px-2 w-2/12">Unidad</th>
                  <th className="py-3 px-2 w-1/12">Cantidad</th>
                  <th className="py-3 px-2 w-2/12">Precio unitario</th>
                  <th className="py-3 px-2 w-2/12">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {props.quote.recipe.map((recipe) => {
                  return (
                    <tr className="">
                      <td className="py-2 px-2 w-5/12">
                        {recipe.recipeId.name}
                      </td>
                      <td className="py-2 px-2 w-2/12">
                        {recipe.recipeId.unit}
                      </td>
                      <td className="py-2 px-2 w-1/12">{recipe.quantity}</td>
                      <td className="py-2 px-2 w-2/12">{recipe.total}</td>
                      <td className="py-2 px-2 w-2/12">
                        {Number(recipe.total * Math.floor(recipe.quantity))}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section name="totalInfo" className="bg-white flex flex-row pt-2 gap-4">
          <div className="bg-white p-2 border-2 border-black rounded w-2/3">
            Observaciones
          </div>
          <div className="bg-white p-2 border-2 border-black rounded w-1/3">
            <div className="overflow-x-auto relative">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Subtotal
                    </th>
                    <td className="py-2 px-6">${totalSinIva}</td>
                  </tr>

                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      I.V.A
                    </th>
                    <td className="py-2 px-6">${Iva}</td>
                  </tr>
                </tbody>

                <tfoot>
                  <tr className="font-semibold text-gray-900 dark:text-white">
                    <th scope="row" className="py-3 px-6 text-base">
                      Total
                    </th>
                    <td className="py-3 px-6">${totalCotizacion}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
