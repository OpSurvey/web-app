import { useForm } from "react-hook-form";
import ButtonLanding from "./ButtonLanding";
import NavbarLanding from "./NavbarLanding";
import FooterLanding from "./FooterLanding";

export default function QuoterForm() {
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
    <main className="mt-[61px] lg:px-44 sm:px-6 min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-zinc-900 px-6 py-3 w-full md:h-full lg:w-full sm:rounded-none md:rounded-lg lg:rounded-none xl:rounded-lg"
      >
        <h1 className="text-white text-center text-xl">
          Crear Nueva cuenta
        </h1>
        <h3 className="text-white text-center text-lg pt-2">Información Personal</h3>
        <div className="mb-4 w-full">
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium text-lime-400 "
          >
            Nombre
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2 "
            placeholder=" "
            required=""
            {...register("firstName", { required: true, minLength: 3 })}
          />
          {errors.firstName?.type === "required" && (
            <span className="text-red-400 ">El nombre es requerido</span>
          )}
          {errors.firstName?.type === "minLength" && (
            <span className="text-red-400 ">
              Largo minimo de nombre son 3 c
            </span>
          )}
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-medium text-lime-400"
          >
            Apellido
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2"
            placeholder=" "
            required=""
            {...register("lastName", { required: true, minLength: 3 })}
          />
          {errors.lastName?.type === "required" && (
            <span className="text-red-400 ">El apellido es requerido</span>
          )}
          {errors.lastName?.type === "minLength" && (
            <span className="text-red-400 ">
              Largo mínimo del apellido son 3 caracteres
            </span>
          )}
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="RFC"
            className="block mb-2 text-sm font-medium text-lime-400"
          >
            RFC
          </label>
          <input
            type="text"
            name="RFC"
            id="RFC"
            className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2"
            placeholder=" "
            required=""
            {...register("RFC", {
              required: true,
              minLength: 12,
              maxLength: 13,
            })}
          />
          {errors.RFC?.type === "minLength" && (
            <span className="text-red-400 ">
              Largo mínimo del RFC son 3 caracteres
            </span>
          )}
          {errors.RFC?.type === "maxLength" && (
            <span className="text-red-400 ">
              Largo máximo del RFC son 6 caracteres
            </span>
          )}
          {errors.RFC?.type === "required" && (
            <span className="text-red-400 ">El RFC es requerido</span>
          )}
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-lime-400"
          >
            email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2"
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
            <span className="text-red-400 ">email es requerido</span>
          )}
          {errors.email && (
            <span className="text-red-400 ">{errors.email.message}</span>
          )}
        </div>

        <div className="mb-4 w-full">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-lime-400"
          >
            password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2"
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
        <h2 className="text-white text-center text-lg pt-2">
          Información del negocio
        </h2>
        <div className="grid md:grid-cols-2 md:gap-6">
        <div className="mb-4 w-full">
            <label
              htmlFor="state"
              className="block mb-2 text-sm font-medium text-lime-400"
            >
              Estado
            </label>
            <input
              type="text"
              name="state"
              id="state"
              className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2"
              placeholder=" "
              required=""
              {...register("state", { required: true })}
            />
            {errors.state?.type === "required" && (
              <span className="text-red-400 ">El estado es requerido</span>
            )}
          </div>
          
          <div className="mb-4 w-full">
            <label
              htmlFor="postalCode"
              className="block mb-2 text-sm font-medium text-lime-400"
            >
              Código postal
            </label>
            <input
              type="number"
              name="postalCode"
              id="postalCode"
              className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2"
              placeholder=" "
              required=""
              {...register("postalCode", { required: true })}
            />
            {errors.postalCode?.type === "required" && (
              <span className="text-red-400 ">
                El código postal es requerido
              </span>
            )}
          </div>
          
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
        <div className="mb-4 w-full">
            <label
              htmlFor="neighborhood"
              className="block mb-2 text-sm font-medium text-lime-400"
            >
              Colonia
            </label>
            <input
              type="text"
              name="neighborhood"
              id="neighborhood"
              className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2"
              placeholder=" "
              required=""
              {...register("neighborhood", { required: true })}
            />
            {errors.neighborhood?.type === "required" && (
              <span className="text-red-400 ">La colonia es requerida</span>
            )}
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="street"
              className="block mb-2 text-sm font-medium text-lime-400"
            >
              Calle
            </label>
            <input
              type="text"
              name="street"
              id="street"
              className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2"
              placeholder=" "
              required=""
              {...register("street", { required: true })}
            />
            {errors.street?.type === "required" && (
              <span className="text-red-400 ">La calle es requerida</span>
            )}
          </div>
          
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
        <div className="mb-4 w-full">
            <label
              htmlFor="extNumber"
              className="block mb-2 text-sm font-medium text-lime-400"
            >
              Número exterior
            </label>
            <input
              type="number"
              name="extNumber"
              id="extNumber"
              className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2"
              placeholder=" "
              required=""
              {...register("extNumber", { required: true })}
            />
            {errors.extNumber?.type === "required" && (
              <span className="text-red-400 ">
                El número exterior es requerido
              </span>
            )}
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="intNumber"
              className="block mb-2 text-sm font-medium text-lime-400"
            >
              Número interior
            </label>
            <input
              type="number"
              name="intNumber"
              id="intNumber"
              className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2"
              placeholder=" "
              required=""
              {...register("intNumber")}
            />
          </div>
          
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
        <div className="mb-4 w-full">
            <label
              htmlFor="businessName"
              className="block mb-2 text-sm font-medium text-lime-400"
            >
              Nombre del negocio
            </label>
            <input
              type="text"
              name="businessName"
              id="businessName"
              className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2"
              placeholder=" "
              required=""
              {...register("businessName")}
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="logo"
              className="block mb-2 text-sm font-medium text-lime-400"
            >
              Logo
            </label>
            <input
              type="text"
              name="logo"
              id="logo"
              className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2"
              placeholder=" "
              required=""
              {...register("logo")}
            />
          </div>
        </div>

        <div className="flex justify-center align-center w-200">
          <ButtonLanding hoverColor="lime-600" text="Enviar" />
        </div>
      </form>
    </main>
    <FooterLanding />
    </>
  );
}