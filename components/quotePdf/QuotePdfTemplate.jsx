import React,{useEffect, useState} from "react";


 export default function QuotePdfTemplate() {
  const [quoteData, setQuoteData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/quote')
      .then((res) => res.json())
      .then((data) => {
        setQuoteData(data)
      })
    }, [])

    console.log(quoteData)
 
  return (
    <div appear>
      <div
        className="overflow-y-auto"
      >
        <div className="min-h-screen px-4 text-center">
          <div
          >
            <div className="my-8 inline-block w-full min-w-4xl transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all">
              <div className="p-24 " id="print">
                <div className="flex flex-row justify-between align-middle mb-8">
                  <h1 className="text-4xl text-lime-400 font-extrabold">
                    OpSurvey
                  </h1>
                  <h1 className="text-lg font-bold text-zinc-900">
                    Cotizacion
                  </h1>
                </div>
                <div className="mt-6">
                  <div className="mb-12 grid grid-cols-[150px,2000px]">
                    <span className="font-bold">Cotización #:</span>
                    <span>1</span>
                    <span className="font-bold">Atención a:</span>
                    <span>Acme inc</span>
                  </div>

                  <table className="w-full text-left table-fixed md:table-auto">
                    <thead>
                      <tr className="border-y border-black text-sm md:text-base">
                        <th className="w-80 md:w-1/2">Concepto</th>
                        <th className="text-center max-w-[30px]">Cantidad</th>
                        <th className="text-right max-w-[30px]">Precio</th>
                        <th className="text-right max-w-[30px]">Total</th>
                      </tr>
                    </thead>
                    <tbody>

                        <tr className="border border-slate-700" key='1'>
                          <td className="max-w-md">
                            <span className=" text-ellipsis whitespace-normal block p-4 " >
                              A´lanado de pared
                            </span>
                            </td>
                          <td className="max-w-[30px] text-center">
                            1
                          </td>
                          <td className="max-w-[40px] text-right">
                            $2,000.00
                          </td>
                          <td className="max-w-[50px] text-right">
                            $2,000.00
                          </td>
                        </tr>
              
                    </tbody>
                  </table>

                  <div className="mt-4 flex flex-col place-content-end space-y-2">
                    <div className="flex justify-end w-full border-t border-black/10 pt-2">
                      <span className="font-bold mx-2">Subtotal:</span>
                      <span>$2,000.00</span>
                    </div>
                    <div className="flex justify-end w-full">
                      <span className="font-bold mx-2">Impuestos:</span>
                      <span>$545.54</span>
                    </div>
                    <div className="flex justify-end w-full border-t border-black/10 py-2">
                      <span className="font-bold mx-2">Total:</span>
                      <span className="font-bold">
                        $2545.54
                      </span>
                    </div>
                  </div>
                  <div className="my-8">
                    <h2 className="font-bold">Terminos y condiciones</h2>
                    <ul className="px-16 mt-4 list-disc" >
                      <li>{`Oferta de Servicios: oferta de servicios emitida por Francisco Martinez, dirigida hacia Acme inc e identificada con un número consecutivo único, en donde se detalla el alcance específico de los servicios para cada caso en particular.`}</li>
                      <li>{`Horas hábiles: horario de operación de las oficinas de Francisco Martinez, sea de lunes a viernes desde las 8:00 a.m. hasta las 5:00 p.m., excluyendo feriados.`}</li>
                      <li>Instalaciones: los lugares donde se encuentren instalados los Equipos.</li>
                      <li>Servicio o Servicios: el servicio de mantenimiento que se debe realizar a los Equipos, de acuerdo con el alcance indicado en cada Oferta de Servicios.</li>
                      <li>{`Acme inc: Persona física o jurídica que contrata los servicios de Francisco Martinez mediante una Orden de Compra, con base en la Oferta de Servicios emitida por GRUPO ELECTROTÉCNICA.`}</li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center items-center" >
                    <span>Francisco Martínez</span>
                    <span>__________________________</span>
                    <span className="font-bold">Atte:</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex space-x-2 px-4 pb-6">
                <button
                  className="flex w-full items-center justify-center space-x-1 rounded-md border text-white bg-zinc-900 border-lime-500 py-2 text-sm shadow-sm hover:bg-lime-500 hover:text-white"
                  // onClick={createPdf}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <span>Descargar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


