import { Dispatch, SetStateAction, useState } from "react";
import { FormDataType } from "../App";
import { useHandlers } from "../utils/useHandlers";
import Button from "./Button";
import InputName, { InputEmail, InputPhone } from "./inputs/Input";

type Props = {
  incrementStep: () => void;
  stepData: FormDataType;
  setStepData: Dispatch<SetStateAction<FormDataType>>;
};

const Step1: React.FC<Props> = ({ incrementStep, stepData, setStepData }) => {
  const [formData, setFormData] = useState(stepData);

  const [errors, setErrors] = useState<Record<keyof FormDataType, string>>(
    {} as Record<keyof FormDataType, string>
  );
  const [touched, setTouched] = useState<Record<keyof FormDataType, boolean>>(
    {} as Record<keyof FormDataType, boolean>
  );

  const { handleSubmit, handleChange, handleBlur } = useHandlers({
    formData,
    setFormData,
    errors,
    setErrors,
    touched,
    setTouched,
    setStepData,
    incrementStep,
  });

  const errorInput =
    Object.keys(errors).length === 0 &&
    Object.values(formData).filter((a) => a !== "").length ===
      Object.values(formData).length;

  return (
    <div className="step-container">
      <p className="step-title">Personal info</p>
      <p className="step-subtitle">
        Please provide your name, email address and phone number.
      </p>
      <form className="input-form" onSubmit={handleSubmit}>
        <InputName
          labelText="Name"
          formData={formData}
          placeholder="e.g. Stephen King"
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
          errors={errors}
        />
        <InputEmail
          labelText="Email Address"
          formData={formData}
          placeholder="e.g. stephenking@lorem.com"
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
          errors={errors}
        />
        <InputPhone
          labelText="Phone Number"
          formData={formData}
          placeholder="e.g. +1 234 567 890"
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
          errors={errors}
        />
        <div className="button-container">
          <Button
            disabled={!errorInput}
            type="submit"
            title="Next Step"
            className="button-next"
          />
        </div>
      </form>
    </div>
  );
};

export default Step1;
