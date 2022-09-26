import { useForm } from "react-hook-form";
import Button from "./Button";
import NavbarLanding from "./NavbarLanding";
import FooterLanding from "./FooterLanding";

export default function MaterialForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    let result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/materials`, {
      method:"POST",
      body:JSON.stringify(data)
    })
    console.log(result)
  };

  return (
    <>
      <NavbarLanding />
      <main className="mt-[61px] lg:px-44 sm:px-6 min-h-screen flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-zinc-900 px-6 py-3 w-full md:h-full lg:w-full sm:rounded-lg"
        >
          <h1 className="text-white text-center text-xl">
            Crear nuevo material
          </h1>
          <div className="mb-4 w-full mt-3">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-lime-400"
            >
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2"
              placeholder=" "
              required=""
              {...register("name", { required: true, minLength: 3 })}
            />
            {errors.name?.type === "required" && (
              <span className="text-red-400 ">
                El nombre del material es requerido
              </span>
            )}
            {errors.name?.type === "minLength" && (
              <span className="text-red-400 ">
                Largo mínimo del nombre son 3 caracteres
              </span>
            )}
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="unit"
              className="block mb-2 text-sm font-medium text-lime-400"
            >
              Unidad
            </label>
            <input
              type="text"
              name="unit"
              id="unit"
              className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2"
              placeholder=" "
              required=""
              {...register("unit", { required: true, maxLength: 10 })}
            />
            {errors.unit?.type === "required" && (
              <span className="text-red-400 ">La unidad es requerida</span>
            )}
            {errors.unit?.type === "maxLength" && (
              <span className="text-red-400 ">
                Largo máximo de la unidad son 10 caracteres
              </span>
            )}
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="supplier"
              className="block mb-2 text-sm font-medium text-lime-400"
            >
              Proveedor
            </label>
            <input
              type="text"
              name="supplier"
              id="supplier"
              className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2"
              placeholder=" "
              required=""
              {...register("supplier", {
                required: true,
                minLength: 3,
              })}
            />
            {errors.supplier?.type === "required" && (
              <span className="text-red-400 ">El proveedor es requerido</span>
            )}
            {errors.supplier?.type === "minLength" && (
              <span className="text-red-400 ">
                El largo minimo para el proveedor son 3 caracteres
              </span>
            )}
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="brand"
              className="block mb-2 text-sm font-medium text-lime-400"
            >
              Marca
            </label>
            <input
              type="text"
              name="brand"
              id="brand"
              className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2"
              placeholder=" "
              required=""
              {...register("brand", {
                required: true,
                minLength: 3,
              })}
            />
            {errors.brand?.type === "required" && (
              <span className="text-red-400 ">La marca es requerida</span>
            )}
            {errors.brand?.type === "minLength" && (
              <span className="text-red-400 ">
                Largo mínimo del proveedor son 3 caracteres
              </span>
            )}
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-lime-400"
            >
              Precio
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2"
              placeholder=" "
              required=""
              {...register("price", {
                required: true,
              })}
            />
            {errors.price?.type === "required" && (
              <span className="text-red-400 ">El precio es requerido</span>
            )}
          </div>

          <div className="mb-4 w-full">
            <label
              htmlFor="tags"
              className="block mb-2 text-sm font-medium text-lime-400"
            >
              Tags
            </label>
            <input
              type="text"
              name="tags"
              id="tags"
              className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2"
              placeholder=" "
              required=""
              {...register("tags", { required: true })}
            />
            {errors.tags?.type === "required" && (
              <span className="text-red-400 ">El tag es requerido</span>
            )}
          </div>

          <div className="flex justify-center align-center mb-3 mt-2">
            <Button style="bg-lime-400 text-black" text="Enviar" />
          </div>
        </form>
      </main>
    </>
  );
}
