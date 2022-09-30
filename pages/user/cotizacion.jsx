import InvoiceForm from "../../components/quotePdf/InvoiceForm";
import NavDashboard from "../../components/NavDashboard";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Cotizacion() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
      return;
    }
  });

  return (
    <>
      <NavDashboard />
      <InvoiceForm />
    </>
  );
}
