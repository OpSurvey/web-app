import useWindowDimensions from "../../hooks/useWindowDimensions";
import NavDashboard from "../../components/NavDashboard";
import Button from "../../components/Button";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Payment from "../../components/payment";
import PdfDownload from "../../components/pdfDownload";
import SendEmailButton from "../../components/SendEmailButton";
import { format } from "date-fns";

export default function Dashboard() {
  const router = useRouter();

  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/quote`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.data.quotes);
      });
  }, []);

  const onClick = () => {
    router.push("/user/cotizacion");
  };

  return (
    <>
      <NavDashboard />
      <main className="container mx-auto w-auto bg-zinc-800 ">
        <section className="w-full px-2 lg:px-2 pt-12 pb-8 text-white">
          <h3>Bienvenido Cotizador</h3>
        </section>
        <div className="flex justify-end xs:justify-center md:justify-end mx-5 md:mx-0 md:pr-6 pb-4">
          <Button
            onClick={onClick}
            style="bg-lime-400 text-black"
            text="Generar cotizacion"
          />
        </div>
        <div className="overflow-x-auto pt-4 ">
          <div className="bg-black w-full flex flex-row justify-center p-2 xl:p-6 text-lg font-medium text-center text-lime-400">
            <p>Tus cotizaciones</p>
          </div>
          <table className="w-full text-basic text-left text-white bg-black">
            <thead className="text-basic font-normal text-white uppercase border-b border-lime-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  ID cotización
                </th>
                <th scope="col" className="py-3 px-2">
                  Cliente
                </th>
                <th scope="col" className="py-3 px-2">
                  Notas
                </th>
                <th scope="col" className="py-3 px-2">
                  Vencimiento
                </th>
                <th scope="col" className="py-3 px-2">
                  Pagar
                </th>
                <th scope="col" className="py-3 px-2">
                  Descargar
                </th>
                <th scope="col" className="py-3 px-2">
                  Enviar por email
                </th>
              </tr>
            </thead>

            {quotes.map((quote) => {
              return (
                <tbody key={quote._id}>
                  <tr className="bg-black border-b">
                    <th
                      scope="row"
                      className="py-4 px-6 font-normal text-white whitespace-nowrap"
                    >
                      {quote._id}
                    </th>
                    <td className="py-4 px-2">{quote.clientId.businessName}</td>
                    <td className="py-4 px-2">{quote.note}</td>
                    <td className="py-4 px-2">
                      {format(new Date(quote.expirationDate), "dd-MM-yyyy")}
                    </td>
                    {quote.paidOut ? (
                      <>
                        <td className="py-4 px-2">
                          <Payment quoteId={quote._id}>
                            Pagar cotización
                          </Payment>
                        </td>
                        <td className="py-4 px-2">
                          <PdfDownload quoteId={quote._id} />
                        </td>
                        <td className="py-4 px-2">
                          <SendEmailButton quoteId={quote._id} />
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="py-4 px-2">
                          <Payment
                            quoteId={quote._id}
                            disablePayment="disabled"
                          >
                            Pagar cotización
                          </Payment>
                        </td>
                        <td className="py-4 px-2 ">
                          <button
                            className="bg-red-600 cursor-not-allowed text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
                            disabled
                            type="button"
                          >
                            Descargar
                          </button>
                        </td>
                        <td className="py-4 px-2">
                          <button
                            className="bg-red-600 cursor-not-allowed text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
                            disabled
                            type="button"
                          >
                            Enviar
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </main>
    </>
  );
}
