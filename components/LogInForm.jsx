import { useForm } from "react-hook-form";
import Button from "./Button";
import NavbarLanding from "./NavbarLanding";
import FooterLanding from "./FooterLanding";
import { useRouter } from "next/router";

export default function LogInForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await result.json();
    const token = response.data.token;
    //Ponerlo en localStorage
    localStorage.setItem("token", token);
    //Redirección
    router.push("/user/dashboard");
  };

  return (
    <>
      <NavbarLanding />
      <main className="container mx-auto pt-10 bg-zinc-800 lg:px-44 sm:px-3 md:px-6 h-full flex justify-center items-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-black px-6 mx-3 py-4 rounded-lg w-full lg:w-2/3 h-full  "
        >
          <h2 className="text-white text-center text-xl">Inicia Sesión</h2>
          <div className="mb-4 w-ful mt-3">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-lime-400 "
            >
              email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2 "
              placeholder=" "
              required=""
              {...register("email", {
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message:
                    "El valor ingresado no concuerda con el formato de email",
                },
              })}
            />
            {errors.email?.type === "required" && (
              <span className="text-red-400 ">El email es requerido</span>
            )}
            {errors.email && (
              <span className="text-red-400 ">{errors.email.message}</span>
            )}
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-lime-400 "
            >
              password
            </label>
            <input
              type="text"
              name="password"
              id="password"
              className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2 "
              placeholder=" "
              required=""
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors.password?.type === "required" && (
              <span className="text-red-400 ">El password es requerido</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-400 ">
                Largo mínimo del password son 8 caracteres
              </span>
            )}
          </div>

          <div className="flex justify-center align-center mb-3 mt-2">
            <Button
              style="bg-lime-400 text-black"
              id="iniciarSesion"
              text="Iniciar Sesión"
            />
          </div>
        </form>
      </main>
    </>
  );
}
