import { useState } from "react";

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (value, name) => {
    console.log('name - useForm', name)
    console.log('value - useForm', value)
    console.log('form[name] - useForm', form[name])
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm(initialValues)
  }

  return { form, onChange, resetForm };
}