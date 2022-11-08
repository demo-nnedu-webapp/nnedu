import { Form } from "antd";
import React from "react";
import { CustomItem } from "../../styles/styled";
import { CustomSelect } from "../customSelect/customSelect";
import { CustomInput } from "../customInput/customInput";
import { DefaultButton } from "../customButton/defaultButton";

function MakePayment() {
  return (
    <>
      <div className="p-4 w-full">
        <div className="w-full max-w-md">
          <Form layout="vertical">
            <div className="flex flex-col gap-4">
              <CustomItem label="Fees Type" name="feestype">
                <CustomSelect />
              </CustomItem>

              <CustomItem label="Amount" name="amount">
                <CustomInput auth="true" />
              </CustomItem>

              <CustomItem label="Fine" name="fine">
                <CustomInput auth="true" disabled={true} />
              </CustomItem>
            </div>
            <div className="mt-6">
              <DefaultButton
                className="bg-secondary w-72 py-3 
              px-4 rounded-md font-montserrat tracking-[0.06em] text-white font-medium
              disabled:bg-gray-300 disabled:cursor-not-allowed"
                disabled={true}
              >
                Make payment
              </DefaultButton>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default MakePayment;
