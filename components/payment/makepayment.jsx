import { Form, Input, Select } from "antd";
import React from "react";
import { CustomItem, CustomInput, CustomSelect } from "../../styles/styled";
import { DefaultButton } from "../customButton/defaultButton";
import { usePaystackPayment } from "react-paystack";
import { useSelector, useDispatch } from "react-redux";
import { selectpaymentoptiondata } from "../../data/data";
import { Icon } from "@iconify/react";
import { feespaying } from "../../app/slices/paymentSlice";

function MakePayment() {
  const { Option } = Select;

  const selectFeeType = useSelector((state) => state.payment.payingfees);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(feespaying(value));
  };

  const [form] = Form.useForm();

  const randomnumber = Math.floor(Math.random() * 9000 + 1000) + 1;

  const amount = useSelector((state) => state.payment.payingfees);

  const config = {
    reference: `NNSS${randomnumber}`,
    email: "seyi.oyebamiji@gmail.com",
    amount: amount,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLICKEYS,
  };

  const onSuccess = (reference) => {
    console.log(reference);
  };

  const onClose = () => {
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  const onFinish = (values) => {
    initializePayment(onSuccess, onClose);
    console.log(values);
  };

  return (
    <>
      <div className="p-4 w-full">
        <div className="w-full max-w-md">
          <Form layout="vertical" form={form} onFinish={onFinish}>
            <div className="flex flex-col gap-4">
              <CustomItem label="Fees Type" name="feestype">
                <CustomSelect
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
                </CustomSelect>
              </CustomItem>

              <CustomItem
                shouldUpdate
                label="Amount"
                name="amount"
                rules={[
                  {
                    required: false,
                    message: "please",
                  },
                ]}
              >
                <CustomInput
                  disabled
                  auth="true"
                  value={form.setFieldValue("amount", amount / 100)}
                />
              </CustomItem>

              <CustomItem
                label="Fine"
                name="fine"
                rules={[
                  {
                    required: false,
                    message: "please",
                  },
                ]}
              >
                <CustomInput auth="true" disabled={true} />
              </CustomItem>
            </div>
            <div className="mt-6">
              <DefaultButton
                type="submit"
                className="bg-secondary w-72 py-3 
              px-4 rounded-md font-montserrat tracking-[0.06em] text-white font-medium
              disabled:bg-gray-300 disabled:cursor-not-allowed"
                // disabled={true}
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
