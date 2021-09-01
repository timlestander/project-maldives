import classNames from "classnames";
import { useEffect } from "react";
import { useState } from "react";
import { InputField, Label, Wrapper } from "./TextInput.styles"

type Props = {
  type: string;
  label: string;
  name: string;
  required: boolean;
  value: string | number;
  handleChange: (e: any) => void;
}

const TextInput: React.FC<Props> = ({ type, required, label, value, name, handleChange}) => {
  const [valid, setValid] = useState(false);

  useEffect(() => {
    validate(value);
  }, [value]);

  const onChange = (e: any) => {
    validate(e.target.value);
    handleChange(e);
  }

  const validate = (value: string | number) => {
    const valid: boolean = (required && value.toString().length > 0) || !required;
    setValid(valid);
  }

  return (
    <Wrapper>
      <Label>{label}</Label>
      <InputField
        className={ classNames({ valid, invalid: !valid }) }
        name={name}
        type={type}
        value={value}  
        onChange={(e) => onChange(e)}
      ></InputField>
    </Wrapper>
  )
}

export default TextInput;