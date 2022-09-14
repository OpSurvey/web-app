import Payment from "./payment";
import NotificationDropdown from "./TableDropdown";

export default function ProjectCard(props) {
  return (

      <div class="bg-white p-6 rounded-lg shadow-md m-4 border border-neutral-900 relative">
        <span className="absolute top-2 right-6"> <NotificationDropdown/> </span>
        <h1 class="text-xl font-bold">{props.quoteName}</h1> 
        <div class="mt-4 mb-4">
            <p class="text-gray-600">Total: {props.quoteTotal}</p>
            <p class="text-gray-600">Cotización: {props.quoteId}</p>
        </div>
        <h3 class="text-xs uppercase">Cliente:</h3>
        <h2 class="tracking-wide">
          {props.quoteClient}
        </h2>
        <Payment/>
      </div>

  );
}
