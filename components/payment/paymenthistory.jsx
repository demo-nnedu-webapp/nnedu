import React from "react";
import { paymentHistoryData } from "../../data/data";
import { CustomTable } from "../customTable/customTable";
import { DefaultButton } from "../customButton/defaultButton";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal, showModal } from "../../app/slices/dashboardSlice";
import { CustomModal } from "../modal/customModal";
import ReceiptPDF from "../customPdf/customPdf";
import { notification } from "antd";

function PaymentHistory() {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.dashboard.modal);

  return (
    <>
      <div className="p-4 w-full">
        <div className="my-6">
          <DefaultButton
          className="flex gap-x-2 items-center text-white bg-primary px-4 py-3 rounded-sm font-montserrat font-medium"
            onClick={() => {
              notification.open({
                message: "refesh data",
              });
            }}
          >
            <Icon icon="ic:round-refresh" width="20" height="20" />
            Refresh payments
          </DefaultButton>
        </div>
        <div className="w-full grid-cols-2 grid md:grid-cols-4 mt-3 gap-4">
          {paymentHistoryData.map((i, index) => {
            return (
              <div
                key={index}
                className={`${i.color} w-full bg-secondary shadow-md lg:hover:scale-90 ease-in-out duration-500 p-4`}
              >
                <div className="flex flex-col justify-center gap-y-3">
                  <div className="text-primary">{i.icon}</div>
                  <h3 className="font-inter text-primary text-lg tracking-[0.06em] font-medium">
                    {i.heading}
                  </h3>
                  <div>
                    <p className="font-montserrat text-primary text-3xl font-semibold flex items-center gap-4">
                      <span className="font-normal text-base">₦</span>
                      {i.amount}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12">
          <CustomTable />
        </div>
        <div className="flex gap-4 mt-4">
          <DefaultButton
            className="flex items-center gap-x-3 bg-primary
           text-white py-2.5 rounded-md px-4 font-montserrat font-medium tracking-[0.06em]"
            onClick={() => dispatch(showModal(modalState))}
          >
            <Icon icon="fluent:print-28-filled" width="24" height="24" />
            Print All
          </DefaultButton>
          {/* <DefaultButton
            className="flex items-center gap-x-3 bg-[#DE1E12]
           text-white py-2.5 rounded-md px-4 font-montserrat font-normal tracking-[0.06em]"
          >
            <Icon icon="ant-design:delete-filled" width="24" height="24" />
            Delete All
          </DefaultButton> */}
          <DefaultButton
            className="flex items-center gap-x-3 bg-[#00D23B]
           text-white py-2.5 rounded-md px-4 font-montserrat font-medium tracking-[0.06em]"
          >
            <Icon icon="clarity:export-solid" width="24" height="24" />
            Export All
          </DefaultButton>
        </div>
      </div>
      {modalState && (
        <CustomModal
          title="Print Receipt"
          cancel={() => dispatch(hideModal(modalState))}
        >
          <ReceiptPDF />
        </CustomModal>
      )}
    </>
  );
}

export default PaymentHistory;
