import { Input } from "antd";
import styled from "styled-components";

const StyledInput = styled(Input)`
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  outline: none;
  font-weight: 500;
  color: #1f1839;
  box-shadow: none;
  background-color: white;
  width: 100%;

  &:hover {
    border: 2px solid #dec918;
    box-shadow: none;
  }

  &:focus {
    border: 2px solid #dec918;
    box-shadow: none;

    &:active {
      border: 2px solid #dec918;
      box-shadow: none;
    }
  }
`;

const CustomInput = ({ type, placeholder, min, max }) => {
  return (
    <>
      <StyledInput
        type={type}
        placeholder={placeholder}
        minLength={min}
        maxLength={max}
      />
    </>
  );
};

export { CustomInput };
