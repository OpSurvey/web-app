export default function QuotePage() {
  return (
    <>
      <main className="text-xs">
        <section name="quoterInfo" className="bg-white flex flex-row gap-4">
          <div
            name="quoter"
            className="bg-white border-2 border-black rounded w-2/3 p-2"
          >
            <p>businessName</p>
            <p>street extNumber intNumber</p>
            <p>neiehborhood</p>
            <p>state</p>
            <p>phone</p>
            <p>firstName lastName</p>
          </div>
          <div
            name="date"
            className="bg-white border-2 border-black rounded p-2 w-1/3 text-center"
          >
            <p>Cotizacion 001</p>
            <p>createdAt</p>
          </div>
        </section>

        <section name="clientInfo" className="bg-white pt-2">
          <div className="bg-white p-2 border-2 border-black rounded">
            <p>businessName</p>
            <p>firstName lastName</p>
            <p>street - extNumber - intNumber</p>
            <p>neiehborhood</p>
            <p>state</p>
            <p>phone</p>
          </div>
        </section>

        <section name="recpiesInfo" className="bg-white pt-2">
          <div className="bg-white p-2 border-2 border-black rounded">
            <table className="table-auto w-full">
              <thead className="border-b-2 border-black text-left">
                <tr>
                  <th className="py-3 px-2 w-5/12">Descripcion</th>
                  <th className="py-3 px-2 w-2/12">Unidad</th>
                  <th className="py-3 px-2 w-1/12">Cantidad</th>
                  <th className="py-3 px-2 w-2/12">Precio unitario</th>
                  <th className="py-3 px-2 w-2/12">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="py-2 px-2 w-5/12">cemento</td>
                  <td className="py-2 px-2 w-2/12">costal</td>
                  <td className="py-2 px-2 w-1/12">1</td>
                  <td className="py-2 px-2 w-2/12">214</td>
                  <td className="py-2 px-2 w-2/12">214</td>
                </tr>
                <tr className="">
                  <td className="py-2 px-2 w-5/12">pintura</td>
                  <td className="py-2 px-2 w-2/12">litro</td>
                  <td className="py-2 px-2 w-1/12">1</td>
                  <td className="py-2 px-2 w-2/12">199</td>
                  <td className="py-2 px-2 w-2/12">199</td>
                </tr>
                <tr className="">
                  <td className="py-2 px-2 w-5/12">pintura</td>
                  <td className="py-2 px-2 w-2/12">litro</td>
                  <td className="py-2 px-2 w-1/12">1</td>
                  <td className="py-2 px-2 w-2/12">199</td>
                  <td className="py-2 px-2 w-2/12">199</td>
                </tr>
                <tr className="">
                  <td className="py-2 px-2 w-5/12">pintura</td>
                  <td className="py-2 px-2 w-2/12">litro</td>
                  <td className="py-2 px-2 w-1/12">1</td>
                  <td className="py-2 px-2 w-2/12">199</td>
                  <td className="py-2 px-2 w-2/12">199</td>
                </tr>
                <tr className="">
                  <td className="py-2 px-2 w-5/12">pintura</td>
                  <td className="py-2 px-2 w-2/12">litro</td>
                  <td className="py-2 px-2 w-1/12">1</td>
                  <td className="py-2 px-2 w-2/12">199</td>
                  <td className="py-2 px-2 w-2/12">199</td>
                </tr>
                <tr className="">
                  <td className="py-2 px-2 w-5/12">pintura</td>
                  <td className="py-2 px-2 w-2/12">litro</td>
                  <td className="py-2 px-2 w-1/12">1</td>
                  <td className="py-2 px-2 w-2/12">199</td>
                  <td className="py-2 px-2 w-2/12">199</td>
                </tr>
                <tr className="">
                  <td className="py-2 px-2 w-5/12">pintura</td>
                  <td className="py-2 px-2 w-2/12">litro</td>
                  <td className="py-2 px-2 w-1/12">1</td>
                  <td className="py-2 px-2 w-2/12">199</td>
                  <td className="py-2 px-2 w-2/12">199</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section name="totalInfo" className="bg-white flex flex-row pt-2 gap-4">
          <div className="bg-white p-2 border-2 border-black rounded w-2/3">
            Observaciones
          </div>
          <div className="bg-white p-2 border-2 border-black rounded w-1/3">
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
