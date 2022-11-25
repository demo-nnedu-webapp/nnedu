import { Icon } from "@iconify/react";
import { Select } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectpaymentoptiondata } from "../../data/data";

import { useState } from "react";


const CustomSelect = () => {
  

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
