import { useField } from "formik";
import React from "react";
import { Form } from "react-bootstrap-v5";
import InputMask from "react-input-mask";

const PhoneInput = ({ name, label, ...props }) => {
  const [field, { touched, error }] = useField(name);
  return (
    <Form.Group>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <InputMask mask="9999-9999999" name={name} {...props}>
        {(props) => (
          <Form.Control
            {...props}
            {...field}
            type="tel"
            className={touched && error && "is-invalid"}
          />
        )}
      </InputMask>
      <Form.Control.Feedback type="invalid" className="field-error">
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default PhoneInput;
