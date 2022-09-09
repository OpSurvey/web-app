import { useForm } from "react-hook-form";
import ButtonLanding from "./ButtonLanding";

export default function QuoteForm () {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =  (data) => {
    console.log(data);
    // let result = await fetch("url", {
    //   method:"POST",
    //   body:JSON.stringify(data)
    // })
    // console.log(await result.json())
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-zinc-900 px-6 py-3">
      <div className="relative z-0 mb-6 w-full group">
        
        <label
          htmlFor="profit"
          className="block mb-2 text-sm font-medium text-lime-400 "
        >Ganancia</label>
        <input
          type="number"
          name="profit"
          id="profit"
          className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2 "
          placeholder=" "
          required=""
          {...register("profit", { required: true})}
        />
        {errors.profit?.type === "required" && <span className="text-red-400 ">La ganancia es requerida</span>}
      </div>
      <div className="relative z-0 mb-6 w-full group">
        
        <label
          htmlFor="riskFactor"
          className="block mb-2 text-sm font-medium text-lime-400 "
        >Factor de Riesgo</label>
        <input
          type="number"
          name="riskFactor"
          id="riskFactor"
          className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2 "
          placeholder=" "
          required=""
          {...register("riskFactor", { required: true})}
        />
        {errors.riskFactor?.type === "required" && <span className="text-red-400 ">El factor de riesgo es requerido</span>}
      </div>
      <div className="relative z-0 mb-6 w-full group">
        
        <label
          htmlFor="financin"
          className="block mb-2 text-sm font-medium text-lime-400 "
        >Financiación</label>
        <input
          type="number"
          name="financing"
          id="financing"
          className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2 "
          placeholder=" "
          required=""
          {...register("financing", {
            required: true
            }
          )}
        />
        {errors.financing?.type === "required" && <span className="text-red-400 ">La financiación es requerida</span>}
      </div>
      <div className="relative z-0 mb-6 w-full group">
        
        <label
          htmlFor="note"
          className="block mb-2 text-sm font-medium text-lime-400 "
        >Nota</label>
        <input
          type="note"
          name="note"
          id="note"
          className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2 "
          placeholder=" "
          required=""
          {...register("note")}
        />
      </div>
      
      <div className="relative z-0 mb-6 w-full group">
          
          <label
          htmlFor="quantity"
          className="block mb-2 text-sm font-medium text-lime-400 "
        >Cantidad</label>
        <input
            type="number"
            name="quantity"
            id="quantity"
            className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2 "
            placeholder=" "
            required=""
            {...register("quantity", {required:true})}
          />
          {errors.quantity?.type === "required" && <span className="text-red-400 ">La cantidad es requerida</span>}
        </div>
      
      <div className="flex justify-center align-center">
        <ButtonLanding text="Enviar"/>
      </div>
    </form>
  );
};


