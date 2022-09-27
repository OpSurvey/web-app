import { Fragment, useState, useEffect } from "react";

export default function Search(props) {
  const [quoteData, setQuoteData] = useState([]);
  const [data, setData] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [filterInfo, setFilterInfo] = useState({});


  useEffect(() => {
    fetch("https://api.storerestapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setQuoteData(data.data);
      });
  }, []);

  const onSuggestHandler = (data) => {
    setData(data.title)
    props.ChangeData(data)
    console.log('dataSuggestHandler', data);
    setSuggestions([])
  }
  

  const onChangeHandler = (data) => {
    let matches = [];
    if (data.length > 0) {
      matches = quoteData.filter(quoteInfo => {
        const regex = new RegExp(`${data}`, "gi");
        
        return quoteInfo.title.match(regex);
      })
    }
    setSuggestions(matches);
    setData(data);
  };

  return (
    <>
      <input
        type="text"
        onChange={event => onChangeHandler(event.target.value)}
        value={data}
        onBlur={() =>{
          setTimeout(() =>{
            setSuggestions([])
          },200)
        }}
      />
      {suggestions && suggestions.map((suggestion) => 
       <div
            className="text-black static z-10 ring-2 ring-black cursor-pointer bg-lime-400 hover:bg-lime-600 "
            key={suggestion._id}
            onClick={() => { onSuggestHandler(suggestion)}}
       >
        {suggestion.title}
       </div>
      )}
    </>
  );
}
