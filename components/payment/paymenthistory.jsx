import React from "react";
import {
  paymentcolumns,
  paymentdata,
  paymentHistoryData,
} from "../../data/data";
import { CustomTable } from "../customTable/customTable";
import { DefaultButton } from "../customButton/defaultButton";
import { Icon } from "@iconify/react";

function PaymentHistory() {
  return (
    <>
      <div className="p-4 w-full">
        <div className="w-full grid-cols-2 grid md:grid-cols-4 mt-3 gap-4">
          {paymentHistoryData.map((i) => {
            return (
              <div
                key={i.color}
                className={`${i.color} w-full lg:hover:scale-110 ease-in-out duration-500 p-4`}
              >
                <div className="flex flex-col gap-y-3">
                  <div className="text-white">{i.icon}</div>
                  <h3 className="font-inter text-white text-lg tracking-[0.06em] font-medium">
                    {i.heading}
                  </h3>
                  <div>
                    <p className="font-montserrat text-white text-3xl font-semibold flex items-center gap-4">
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
          <CustomTable columns={paymentcolumns} data={paymentdata} />
        </div>
        <div className="flex mt-6 items-end gap-4 w-full justify-end">
          <DefaultButton className="flex items-center gap-x-3 bg-primary text-white py-2.5 rounded-md px-4">
            <Icon
              icon="fluent:print-28-filled"
              width="24"
              height="24"
            />
            Print All
          </DefaultButton>
          <DefaultButton className="flex items-center gap-x-3 bg-[#DE1E12] text-white py-2.5 rounded-md px-4">
            <Icon
              icon="ant-design:delete-filled"
              width="24"
              height="24"
            />
            Delete All
          </DefaultButton>
          <DefaultButton className="flex items-center gap-x-3 bg-[#00D23B] text-white py-2.5 rounded-md px-4">
            <Icon
              icon="clarity:export-solid"
              width="24"
              height="24"
            />
            Export All
          </DefaultButton>
        </div>
      </div>
    </>
  );
}

export default PaymentHistory;
