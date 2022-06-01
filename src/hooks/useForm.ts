import { useState } from "react";

export const useForm = (initialValues: any) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (value: any, name: string) => {
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm(initialValues)
  }

  return { form, onChange, resetForm };
}