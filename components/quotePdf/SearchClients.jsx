import { useState, useEffect } from "react";

export default function Search(props) {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [client, setClient] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/client`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("recipes data: ", data);
      });
  }, []);

  const onSelectSuggestion = (suggestionSelected) => {
    setValue(suggestionSelected.name);
    props.ChangeData(suggestionSelected);
    setSuggestions([]);
  };

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = props.options.filter((option) => {
        const regex = new RegExp(`${text}`, "gi");
        return option.name.match(regex);
      });
    }
    setSuggestions(matches);
    setValue(text);
  };

  return (
    <>
      <input
        type="text"
        onChange={(event) => onChangeHandler(event.target.value)}
        value={value}
        onBlur={() => {
          setTimeout(() => {
            setSuggestions([]);
          }, 200);
        }}
      />
      {suggestions &&
        suggestions.map((suggestion) => (
          <div
            className="text-black static z-10 ring-2 ring-black cursor-pointer bg-lime-400 hover:bg-lime-600 "
            key={suggestion._id}
            onClick={() => {
              onSelectSuggestion(suggestion);
            }}
          >
            {suggestion.name}
          </div>
        ))}
    </>
  );
}
