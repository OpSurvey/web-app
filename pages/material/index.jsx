import MaterialForm from "../../components/MaterialForm";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Material() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
      return;
    }
  });
  return <MaterialForm />;
}
