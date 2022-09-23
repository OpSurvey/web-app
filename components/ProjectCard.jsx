import Payment from "./payment";
import NotificationDropdown from "./TableDropdown";

export default function ProjectCard(props) {
  return (

      <div className="bg-white p-6 rounded-lg shadow-md m-4 border border-neutral-900 relative">
        <span className="absolute top-2 right-6"> <NotificationDropdown/> </span>
        <h1 className="text-xl font-bold">{props.quoteName}</h1> 
        <div className="mt-4 mb-4">
            <p className="text-gray-600">Total: {props.quoteTotal}</p>
            <p className="text-gray-600">Cotización: {props.quoteId}</p>
        </div>
        <h3 className="text-xs uppercase">Cliente:</h3>
        <h2 className="tracking-wide">
          {props.quoteClient}
        </h2>
        <Payment/>
      </div>

  );
}
