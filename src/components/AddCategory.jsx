import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    // setCategories( categories => [ inputValue, ...categories ])
    onNewCategory(inputValue.trim());
    setInputValue(" ");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gift"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
