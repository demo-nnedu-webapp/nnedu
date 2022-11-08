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
  font-family: Montserrat, sans-serif;
  letter-spacing: 0.06em;
  border: ${(props) => (props.auth ? "2px solid #1f1839" : "none")};

  &:hover {
    border: ${(props) =>
      props.auth ? "2px solid #1f1839" : "2px solid #dec918"};
    box-shadow: none;
  }

  &:focus {
    border: ${(props) =>
      props.auth ? "2px solid #1f1839" : "2px solid #dec918"};
    box-shadow: none;

    &:active {
      border: ${(props) =>
        props.auth ? "2px solid #1f1839" : "2px solid #dec918"};
      box-shadow: none;
    }

    &:disabled {
      background-color: #E8E8E8;
    }
  }
`;

const CustomInput = ({ type, placeholder, auth, disabled }) => {
  return (
    <>
      <StyledInput
        type={type}
        auth={auth}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="true"
      />
    </>
  );
};

export { CustomInput };
