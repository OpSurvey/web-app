import { useState, useEffect } from "react";

export default function SearchClients(props) {
  const [value, setValue] = useState("");
  const [clients, setClients] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/client`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setClients(data.data.clients);
      });
  }, []);

  const onSelectSuggestion = (suggestionSelected) => {
    setValue(suggestionSelected.firstName);
    setSuggestions([]);
  };

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = clients.filter((option) => {
        const regex = new RegExp(`${text}`, "gi");
        return option.firstName.match(regex);
      });
    }
    setSuggestions(matches);
    setValue(text);
  };

  return (
    <>
      <input
        className="text-black"
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
              props.ChangeClientName(suggestion);
            }}
          >
            {suggestion.firstName}
          </div>
        ))}
    </>
  );
}
