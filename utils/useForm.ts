import { useState } from "react";
import { Office } from '../recoil';

export type FormConfig<TValues> = {
  initialValues: TValues;
  onSubmit: (values: TValues) => Promise<void>;
};

export type Values = {
  office: Office | undefined;
  displayedTaxis: number | undefined;
}

type HandleChangeParams = {
  name: string;
  value: any;
}

export type FormContext = {
  values: Values;
  handleChange: (value: HandleChangeParams) => void;
  handleSubmit: () => void;
} 

export function useForm<TValues>({ initialValues, onSubmit }: FormConfig<TValues>) {
  const [values, setValues] = useState<TValues>(initialValues);
  const handleChange = (
    { name, value }: HandleChangeParams
  ) => {
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = () => {
    onSubmit(values);
  };

  return {
    values,
    handleChange,
    handleSubmit
  };
};
