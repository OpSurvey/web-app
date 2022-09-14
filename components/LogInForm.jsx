import { useForm } from "react-hook-form";
import ButtonLanding from "./ButtonLanding";
import NavbarLanding from "./NavbarLanding";
import FooterLanding from "./FooterLanding";

export default function LogInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // let result = await fetch("url", {
    //   method:"POST",
    //   body:JSON.stringify(data)
    // })
    // console.log(await result.json())
  };

  return (
    <>
      <NavbarLanding />
      <main className="mt-[61px] lg:px-44 sm:px-3 md:px-6 min-h-screen flex justify-center items-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-zinc-900 px-6 mx-3 py-3 rounded-lg w-full lg:w-2/3 h-full  "
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

          <div className="flex justify-center align-center">
            <ButtonLanding id="iniciarSesion" text="Iniciar Sesión" />
          </div>
        </form>
      </main>
      <FooterLanding />
      {/* <script src="../pages/login/index.js"></script> */}
    </>
  );
}
