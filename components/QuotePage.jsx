export default function QuotePage() {
  return (
    <>
      <main className="p-10">
        <section name="quoterInfo" className="bg-red-500 flex flex-row p-4">
          <div
            name="quoter"
            className="bg-white border-4 border-black rounded-lg p-4"
          >
            <p>businessName</p>
            <p>street</p> <p>extNumber</p> <p>intNumber</p>
            <p>neiehborhood</p>
            <p>state</p>
            <p>phone</p>
            <p>firstName</p> <p>lastName</p>
          </div>
          <div name="date" className="bg-zin-200">
            <p>Cotizacion 001</p>
            <p>createdAt</p>
          </div>
        </section>

        <section name="clientInfo" className="bg-orange-500">
          <p>businessName</p>
          <p>firstName</p> <p>lastName</p>
          <p>street</p> <p>extNumber</p> <p>intNumber</p>
          <p>neiehborhood</p>
          <p>state</p>
          <p>phone</p>
        </section>

        <section name="recpiesInfo" className="bg-lime-200">
          <div>
            <table className="w-full text-basic text-left text-white bg-black">
              <thead className="text-basic font-normal text-white uppercase border-b border-lime-400">
                <tr>
                  <th scope="col" className="py-3 px-2">
                    Descripcion
                  </th>
                  <th scope="col" className="py-3 px-2">
                    Unidad
                  </th>
                  <th scope="col" className="py-3 px-2">
                    Cantidad
                  </th>
                  <th scope="col" className="py-3 px-2">
                    Precio unitario
                  </th>
                  <th scope="col" className="py-3 px-2">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-black border-b">
                  <th
                    scope="row"
                    className="py-4 px-6 font-normal text-white whitespace-nowrap"
                  >
                    cemento
                  </th>
                  <td className="py-4 px-2">costal</td>
                  <td className="py-4 px-2">1</td>
                  <td className="py-4 px-2">214</td>
                  <td className="py-4 px-2">214</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section name="totalInfo" className="bg-yellow-500">
          <div>Observaciones</div>
          <div>
            <p>Subtotal</p>
            <p>Descuentos</p>
            <p>Recargos</p>
            <p>I.V.A</p>
            <p>TOTAL</p>
          </div>
        </section>
      </main>
    </>
  );
}
