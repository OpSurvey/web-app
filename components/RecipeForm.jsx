import { useForm } from "react-hook-form";
import Button from "./Button";
import NavbarLanding from "./NavbarLanding";
import FooterLanding from "./FooterLanding";

export default function RecepiForm() {
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
            className="bg-zinc-900 px-6 py-3 w-full md:h-full lg:w-full rounded-lg lg:rounded-none xl:rounded-lg"
          >
            <h1 className="text-white text-center text-xl">
              Crear nueva Receta
            </h1>
            <div className="mb-4 w-full">
              <label
                htmlFor="SKU"
                className="block mb-2 text-sm font-medium text-lime-400 "
              >
                SKU
              </label>
              <input
                type="text"
                name="SKU"
                id="SKU"
                className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2 "
                placeholder=" "
                required=""
                {...register("SKU", { required: true, maxLength: 6 })}
              />
              {errors.SKU?.type === "required" && (
                <span className="text-red-400 ">El SKU es requerido</span>
              )}
              {errors.SKU?.type === "maxLength" && (
                <span className="text-red-400 ">
                  Largo máximo del SKU son 6 caracteres
                </span>
              )}
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-lime-400 "
              >
                Nombre
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2 "
                placeholder=" "
                required=""
                {...register("name", { required: true, minLength: 3 })}
              />
              {errors.name?.type === "required" && (
                <span className="text-red-400 ">El nombre es requerido</span>
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
                className="block mb-2 text-sm font-medium text-lime-400 "
              >
                Unidad
              </label>
              <input
                type="unit"
                name="unit"
                id="unit"
                className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2 "
                placeholder=" "
                required=""
                {...register("unit", {
                  required: true,
                })}
              />
              {errors.unit?.type === "required" && (
                <span className="text-red-400 ">La unidad es requerida</span>
              )}
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="tags"
                className="block mb-2 text-sm font-medium text-lime-400 "
              >
                Tags
              </label>
              <input
                type="tags"
                name="tags"
                id="tags"
                className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2 "
                placeholder=" "
                required=""
                {...register("tags", {
                  required: true,
                })}
              />
              {errors.tags?.type === "required" && (
                <span className="text-red-400 ">Tags son requeridos</span>
              )}
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="type"
                className="block mb-2 text-sm font-medium text-lime-400 "
              >
                Tipo
              </label>
              <input
                type="text"
                name="type"
                id="type"
                className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2 "
                placeholder=" "
                required=""
                {...register("type", { required: true })}
              />
              {errors.type?.type === "required" && (
                <span className="text-red-400 ">El tipo es requerido</span>
              )}
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="materials"
                className="block mb-2 text-sm font-medium text-lime-400 "
              >
                Materiales
              </label>
              <input
                type="Array"
                name="materials"
                id="materials"
                className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2 "
                placeholder=" "
                required=""
                {...({ required: true })}
              />
              {errors.materials?.type === "required" && (
                <span className="text-red-400 ">
                  Los materiales son requeridos
                </span>
              )}
            </div>
            {/* <div className="mb-4 w-full">
              <label
                htmlFor="quantity"
                className="block mb-2 text-sm font-medium text-lime-400 "
              >
                Cantidad
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2 "
                placeholder=" "
                required=""
                {...register("quantity", { required: true })}
              />
              {errors.type?.type === "required" && (
                <span className="text-red-400 ">La cantidad es requerida</span>
              )}
            </div> */}

            <div className="flex justify-center align-center mb-3">
              <Button style="bg-lime-400 text-black" text="Enviar" />
            </div>
          </form>
        </main>
        <FooterLanding />
    </>
  );
}
