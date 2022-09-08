import { checkout } from "../../checkout";
import OpinionCard from "../../components/OpinionCard";

export default function Payment() {
    return (

     <button
            type="button"
            className= {"bg-lime-400 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"}
            onClick={(()=>{
                checkout({
                    lineItems:[
                        {
                            price:price_1Lfa56EAka5mfhGRoCSaIdW4,
                            quantity: 1
                        }
                    ]
                })
            })}
            >
            Descargar cotización
    </button>

    )
  }
  