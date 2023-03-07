import { FormEvent } from "react";
import { FormDataType } from "../../App";

type InputProps = {
  formData: FormDataType;
  labelText: string;
  placeholder?: string;
  handleChange: (event: FormEvent<HTMLInputElement>) => void;
  handleBlur: (event: FormEvent<HTMLInputElement>) => void;
  errors: Record<keyof FormDataType, string>;
  touched: Record<keyof FormDataType, boolean>;
};

const InputName = ({
  labelText,
  placeholder,
  formData,
  handleChange,
  handleBlur,
  errors,
  touched,
}: InputProps) => {
  const keys = Object.keys(formData);

  const errorOutlineName = errors.name &&
    touched.name && {
      borderColor: "red",
    };

  return (
    <div className="input-field">
      <label className="input-label" htmlFor={keys[0]}>
        {labelText}
      </label>
      <input
        style={errorOutlineName as React.CSSProperties}
        className="input"
        type="text"
        name={keys[0]}
        id={keys[0]}
        value={formData.name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
      {touched.name && errors.name && (
        <div className="input-error">{errors.name}</div>
      )}
    </div>
  );
};

export const InputEmail = ({
  labelText,
  placeholder,
  formData,
  handleChange,
  handleBlur,
  errors,
  touched,
}: InputProps) => {
  const keys = Object.keys(formData);

  const errorOutlineAddress = errors.emailAddress &&
    touched.emailAddress && {
      borderColor: "red",
    };

  return (
    <div className="input-field">
      <label className="input-label" htmlFor={keys[1]}>
        {labelText}
      </label>
      <input
        style={errorOutlineAddress as React.CSSProperties}
        className="input"
        type="text"
        name={keys[1]}
        id={keys[1]}
        value={formData.emailAddress}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
      {touched.emailAddress && errors.emailAddress && (
        <div className="input-error">{errors.emailAddress}</div>
      )}
    </div>
  );
};

export const InputPhone = ({
  labelText,
  placeholder,
  formData,
  handleChange,
  handleBlur,
  errors,
  touched,
}: InputProps) => {
  const keys = Object.keys(formData);

  const errorOutlineNumber = errors.phoneNumber &&
    touched.phoneNumber && {
      borderColor: "red",
    };

  return (
    <div className="input-field">
      <label className="input-label" htmlFor={keys[2]}>
        {labelText}
      </label>
      <input
        style={errorOutlineNumber as React.CSSProperties}
        className="input"
        type="text"
        name={keys[2]}
        id={keys[2]}
        value={formData.phoneNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
      {touched.phoneNumber && errors.phoneNumber && (
        <div className="input-error">{errors.phoneNumber}</div>
      )}
    </div>
  );
};

export default InputName;
