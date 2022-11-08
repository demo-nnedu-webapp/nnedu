import { Table } from "antd";
import React from "react";
import styled from "styled-components";

const StyledTable = styled(Table)``;

const CustomTable = ({ data, columns }) => {

  const onChange = (selectedRowKeys) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
    );
  };

  return (
    <>
      <StyledTable
        rowSelection={{
          onChange: onChange,
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
      ></StyledTable>
    </>
  );
};

export { CustomTable };
