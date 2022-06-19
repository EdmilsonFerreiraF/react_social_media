import {
  useCallback,
  useState
} from "react";
import memoize from "fast-memoize";

export const useForm = (initialValues: any) => {
  const [form, setForm] = useState(initialValues);

  const onChange =
    useCallback(
      (value: any, name: string) => {
        console.log('name: ', name, '\n value:', value)
        memoize(() => {
          setForm((form: any) => { return { ...form, [name]: value } })
        }
        )
      }
      , [])
  console.log('form: ', form)

  const resetForm = () => {
    setForm(initialValues)
  }

  return { form, onChange, resetForm };
}