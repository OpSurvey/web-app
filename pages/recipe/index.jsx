import RecipeForm from "../../components/RecipeForm";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Recipe() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
      return;
    }
  });

  return <RecipeForm />;
}
