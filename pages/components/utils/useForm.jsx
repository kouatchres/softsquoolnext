import { useState } from "react";

const useForm = (initialValues) => {
  const [state, setState] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    console.log({ name, value });
    const val = type === "number" ? parseInt(value) : value;
    setState((state) => ({ ...state, [name]: val }));
  };

  const handleChange = (e) => {
    const { value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    return val;
  };

  const handleSelectChange = (event, name) => {
    setState((prev) => ({ ...prev, [name]: handleChange(event) }));
  };

  return [state, setState, handleSelectChange, handleInputChange];
};
export default useForm;
