import ClientForm from "../../components/ClientForm";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Client() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
      return;
    }
  });

  return <ClientForm />;
}
