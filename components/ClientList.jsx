import Button from "./Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavDashboard from "./NavDashboard";

export default function ClientList() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/client`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setClients(json.data.clients);
      });
  }, [setClients]);

  const router = useRouter();

  const onClick = () => {
    router.push("/client");
  };

  return (
    <>
      <NavDashboard />
      <div className="container mx-auto flex flex-col w-full h-full pt-6">
        <div className="flex justify-end xs:justify-center md:justify-end md:pr-20 lg:pr-40 pb-4">
          <Button
            onClick={onClick}
            style="bg-lime-400 text-black"
            text="Agregar cliente"
          />
        </div>

        <div className="overflow-x-auto relative lg:px-36">
          <div className="bg-black p-2 xl:p-6 text-lg font-medium text-center text-lime-400">
            <p>Clientes</p>
          </div>
          <table className="w-full text-basic text-left text-white bg-black">
            <thead className="text-basic font-normal text-white uppercase border-b border-lime-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Nombre
                </th>
                <th scope="col" className="py-3 px-2">
                  Apellido
                </th>
                <th scope="col" className="py-3 px-2">
                  Email
                </th>
                <th scope="col" className="py-3 px-2">
                  Telefono
                </th>
                <th scope="col" className="py-3 px-2">
                  Empresa
                </th>
              </tr>
            </thead>
            {clients.map((client) => {
              return (
                <tbody key={client.name}>
                  <tr className="bg-black border-b">
                    <th
                      scope="row"
                      className="py-4 px-6 font-normal text-white whitespace-nowrap"
                    >
                      {client.firstName}
                    </th>
                    <td className="py-4 px-2">{client.lastName}</td>
                    <td className="py-4 px-2">{client.email}</td>
                    <td className="py-4 px-2">{client.phone}</td>
                    <td className="py-4 px-2">{client.businessName}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}
