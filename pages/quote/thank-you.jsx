import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const queryId = router.query.id;

    if (queryId) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/quote/${queryId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(() => {
          console.log("todo ok");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [router.query]);

  return (
    <section className="h-screen flex justify-center place-items-center ">
      <div className="flex-col border pt-4 bg-zinc-900 border-lime-400 justify-between w-screen md:w-3/4 h-fit text-white">
        <div className="flex-col justify-center">
          <p className="text-center text-4xl text-bold md:text-[40px] ">
            Gracias!
          </p>
          <p className=" mb-4 text-center text-2xl">Por su compra</p>
          <div className="flex justify-center">
            <button className="bg-lime-400 rounded-md text-black">
              <Link href="/user/dashboard">
                <a className="m-6">Continuar</a>
              </Link>
            </button>
          </div>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#a3e635"
              fillOpacity="1"
              d="M0,160L34.3,160C68.6,160,137,160,206,160C274.3,160,343,160,411,154.7C480,149,549,139,617,117.3C685.7,96,754,64,823,64C891.4,64,960,96,1029,90.7C1097.1,85,1166,43,1234,48C1302.9,53,1371,107,1406,133.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
