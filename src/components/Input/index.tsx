import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

const Input: React.FC<InputProps> = (props) => {
  const [field, meta] = useField(props);
  const error = meta.error && meta.touched ? meta.error : "";

  return (
    <div className="form-control">
      <label>{props.label}</label>
      <input {...props} {...field} />
      {error ? <small>{error}</small> : null}
    </div>
  );
};

export default Input;
