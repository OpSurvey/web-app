import { useForm } from "react-hook-form";

export default function QuoteForm () {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =  (data) => {
    console.log(data);
    // let result = await fetch("http://Ernesto:kodemia123@opsurvey.ymmmfih.mongodb.net/opsurvey/quoters", {
    //   method:"POST",
    //   body:JSON.stringify(data)
    // })
    // console.log(await result.json())
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="number"
          name="profit"
          id="profit"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
          {...register("profit", { required: true, minLength: 1 })}
        />
        {errors.profit?.type === "required" && "Profit is required"}
        {errors.profit?.type === "minLength" && "Profit min length is 1"}
        <label
          htmlFor="profit"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Profit</label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="number"
          name="riskFactor"
          id="riskFactor"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
          {...register("riskFactor", { required: true, minLength: 1 })}
        />
        {errors.riskFactor?.type === "required" && "Risk Factor is required"}
        {errors.riskFactor?.type === "minLength" && "Risk Factor min length is 3"}
        <label
          htmlFor="riskFactor"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Risk Factor</label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="number"
          name="financing"
          id="financing"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
          {...register("financing", {
            required: true
            }
          )}
        />
        {errors.financing?.type === "required" && "Financing is required"}
        <label
          htmlFor="financin"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Financing</label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="note"
          name="note"
          id="note"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
          {...register("note")}
        />
        <label
          htmlFor="note"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Note</label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
      <div className="relative z-0 mb-6 w-full group">
          <input
            type="number"
            name="quantity"
            id="quantity"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            {...register("quantity", {required:true})}
          />
          {errors.quantity?.type === "required" && "Quantity is required"}
          <label
          htmlFor="quantity"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Quantity</label>
        </div>
        
      </div>
      
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};


