import React from "react";

export default QuoteField = ({ onEditRecipe, cellData }) => {
  return (
    <input
      className={callData.className}
      type={callData.type}
      placeholder={callData.placeholder}
      min={callData.min}
      max={callData.max}
      step={callData.step}
      name={callData.name}
      id={callData.id}
      value={callData.value}
      onChange={onEditRecipe}
      required
    />
  );
};
