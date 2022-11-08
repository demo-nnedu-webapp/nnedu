import { Icon } from "@iconify/react";
import { Select } from "antd";
import React from "react";
import styled from "styled-components";
import { selectpaymentoptiondata } from "../../data/data";

const SelectStyled = styled(Select)`
  color: #1f1839;
  font-family: montserrat;
  letter-spacing: 0.06em;
  font-size: 14px;
  border: 1px solid #1f1839;
  border-radius: 0.375rem;
`;

const CustomSelect = () => {
  const { Option } = Select;

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <SelectStyled
        onChange={handleChange}
        placeholder="Select fees"
        suffixIcon={
          <Icon
            icon="dashicons:arrow-down"
            color="#1f1839"
            width="30"
            height="30"
          />
        }
      >
        {selectpaymentoptiondata.map((i, index) => {
          return (
            <Option key={index} value={i.value}>
              {i.label}
            </Option>
          );
        })}
      </SelectStyled>
    </>
  );
};

export { CustomSelect };
