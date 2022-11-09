import { Table } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../app/slices/dashboardSlice";
import { Icon } from "@iconify/react";

const StyledTable = styled(Table)`
  .ant-table-thead > tr > th {
    background-color: #1f1839;
    color: white;
    font-family: inter;
    letter-spacing: 0.06em;
  }
`;

const CustomTable = () => {
  const date = new Date().toJSON().slice(0, 10);
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.dashboard.modal);

  const paymentdata = [
    {
      key: "1",
      id: "NNSS1101",
      type: "Book Fees",
      amount: "30,000",
      collected: "DNED",
    },
    {
      key: "2",
      id: "NNSS1101",
      type: "School Fees",
      amount: "7,500",
      collected: "NNSS OJO",
    },
    {
      key: "3",
      id: "NNSS1101",
      type: "PTA Levy",
      amount: "8,000",
      collected: "PTA",
    },
    {
      key: "4",
      id: "NNSS1101",
      type: "Logistic Levy",
      amount: "30,000",
      collected: "NNSS OJO",
    },
  ];

  const [dataset, setData] = useState(paymentdata);

  const handleDelete = (key, e) => {
    // e.preventDefault();
    const data = dataset.filter((item) => item.key !== key);
    console.log(data);
    // setData(data);
  };

  const paymentcolumns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (text) => (
        <p className="font-inter font-medium tracking-[0.06em]">{text}</p>
      ),
    },
    {
      title: "Fees Type",
      dataIndex: "type",
      responsive: ["md"],
      render: (text) => (
        <p className="font-montserrat font-normal tracking-[0.06em]">{text}</p>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      // responsive: ["md"],
      render: (text) => (
        <p className="font-montserrat font-normal tracking-[0.06em]">₦{text}</p>
      ),
    },
    {
      title: "Collected By",
      dataIndex: "collected",
      responsive: ["md"],
      render: (text) => (
        <a className="font-montserrat font-normal tracking-[0.06em]">{text}</a>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      responsive: ["md"],
      render: () => date,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: () => (
        <>
          <div className="flex flex-wrap flex-1 md:flex-row gap-4 items-center">
            <button
              onClick={() => {
                dispatch(showModal(modalState));
              }}
            >
              <Icon
                icon="fluent:print-28-filled"
                color="#1F1839"
                width="24"
                height="24"
              />
            </button>
            <button
              onClick={(record, e) => {
                handleDelete(record.key === "id", e);
              }}
            >
              <Icon
                icon="ant-design:delete-filled"
                color="#DE1E12"
                width="24"
                height="24"
              />
            </button>
            <button>
              <Icon
                icon="clarity:export-solid"
                color="#00D23B"
                width="24"
                height="24"
              />
            </button>
          </div>
        </>
      ),
    },
  ];

  const onChange = (selectedRowKeys) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ");
  };

  return (
    <>
      <StyledTable
        onRow={(record, rowIndex) => {
          console.log(record);
        }}
        rowSelection={{
          onChange: onChange,
        }}
        columns={paymentcolumns}
        dataSource={paymentdata}
        pagination={false}
      />
    </>
  );
};

export { CustomTable };
