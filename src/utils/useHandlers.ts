import { Dispatch, FormEvent, SetStateAction } from "react";
import { FormDataType } from "../App";
import formValidation from "./formValidation";

export type FormProps = {
  formData: FormDataType;
  setFormData: Dispatch<SetStateAction<FormDataType>>;
  setStepData: Dispatch<SetStateAction<FormDataType>>;
  errors: Record<keyof FormDataType, string>;
  setErrors: Dispatch<SetStateAction<Record<keyof FormDataType, string>>>;
  touched: Record<keyof FormDataType, boolean>;
  setTouched: Dispatch<SetStateAction<Record<keyof FormDataType, boolean>>>;
  incrementStep: () => void;
};

export const useHandlers = ({
  formData,
  setFormData,
  setStepData,
  incrementStep,
  errors,
  setErrors,
  touched,
  setTouched,
}: FormProps) => {
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormData({ ...formData, [name]: value });
    setTouched({ ...touched, [name]: true });
    handleBlur(event);
  };

  const handleBlur = async (event: FormEvent<HTMLInputElement>) => {
    const { name } = event.currentTarget;
    setTouched({ ...touched, [name]: true });
    try {
      await formValidation.validate(formData, { abortEarly: false });
      setErrors({} as Record<keyof FormDataType, string>);
    } catch (err: any) {
      const validationErrors = err.inner.reduce((acc: any, curr: any) => {
        acc[curr.path as keyof FormDataType] = curr.message;
        return acc;
      }, {} as Record<keyof FormDataType, string>);
      setErrors(validationErrors);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    incrementStep();
    try {
      await formValidation.validate(formData, { abortEarly: false });
      setErrors({} as Record<keyof FormDataType, string>);

      // submit form data to server or do something else with it
      setStepData(formData);
      // console.log("big boy", formData);
    } catch (err: any) {
      const validationErrors = err.inner.reduce((acc: any, curr: any) => {
        acc[curr.path as keyof FormDataType] = curr.message;
        return acc;
      }, {} as Record<keyof FormDataType, string>);
      setErrors(validationErrors);
    }
  };
  return { handleChange, handleBlur, handleSubmit };
};
