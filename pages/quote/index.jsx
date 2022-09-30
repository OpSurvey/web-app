import QuoteForm from "../../components/QuoteForm";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Quote() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
      return;
    }
  });
  return <QuoteForm />;
}
