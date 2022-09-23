import React from 'react';

const QuoteField = ({ onEditRecipe, cellData }) => {
  return (
    <input
      className={cellData.className}
      type={cellData.type}
      placeholder={cellData.placeholder}
      min={cellData.min}
      step={cellData.step}
      name={cellData.name}
      id={cellData.id}
      value={cellData.value}
      onChange={onEditRecipe}
      required
    />
  );
};

export default QuoteField;