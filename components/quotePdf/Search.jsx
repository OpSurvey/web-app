import { useState, useEffect, useMemo, useRef } from "react";
import { createAutocomplete } from "@algolia/autocomplete-core";

const AutoCompleteItem =({id, title, price, description}) =>{
    return (
        <li>{title}</li>
    )
}


export default function Search(props) {
  const [recipesData, setRecipesData] = useState([]);
  const[autocompleteState, setAutoCompleteState] = useState({
    collections:[],
    isOpen:false,
  });

  const autocomplete = useMemo(() => createAutocomplete({ 
    placeholder:'Recetas',
    onStateChange: ({state}) => setAutoCompleteState(state),
    getSources: () => [{
        sourceId: 'recipesData',
        getItems: ({query}) => {
            if (!!query){
                return fetch(`https://fakestoreapi.com/products`)
                .then((res) => res.json())
            }
        }
    }],
    ...props
  }),[props])

  console.log('autocomplete',props);

  const formRef = useRef(null)
  const inputRef = useRef(null)
  const panelRef = useRef(null)

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current
  })

  const inputProps = autocomplete.getInputProps({
    inputElement:inputRef.current
  })

  return (
    <form {...formProps} >
      <div className="relative">
        <input
          type="search"
          id="search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

          {...inputProps}
          
        />
      </div>
      
      {autocompleteState.isOpen && (
        
        <div className="absolute bg-white rounded-lg shadow-lg" ref={panelRef} {...autocomplete.getPanelProps()}>
            {autocomplete.collections.map(collection, index => {
                const {items} = collection

                return(
                   <section key={`section-${index}`} > 
                    {items.length> 0 && (
                        <ul {...autocomplete.getListProps()}>
                            {
                                items.map(item = <AutoCompleteItem key={item.id} {...item} />)
                            }
                        </ul>
                    )}
                    
                   </section> 
                )
            })}
        </div>

      )}
    </form>
  );
}
