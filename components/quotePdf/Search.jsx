import { useState, useEffect } from "react";

export default function Search(props) {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setValue(value || props.value);
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
        className="text-black"
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
