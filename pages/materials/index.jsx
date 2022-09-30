import MaterialList from "../../components/MaterialList";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Materials() {
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
      <MaterialList />
    </>
  );
}
