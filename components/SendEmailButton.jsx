import Link from "next/link";
import { toast } from "react-toastify";

export default function SendEmailButton(props) {
  const sendEmail = () => {
    const token = localStorage.getItem("token");

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/quote/${props.quoteId}/email`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then(() => {
        toast("Email enviado Exitosamente");
      });
  };

  return (
    <button
      className="bg-lime-400 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
      type="button"
      onClick={sendEmail}
    >
      Enviar
    </button>
  );
}
