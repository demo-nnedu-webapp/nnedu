import { Icon } from "@iconify/react";
import { notification } from "antd";
import { useState } from "react";
import { classArm, classOptions } from "../../data/data";
import { CustomInput, CustomItem, CustomSelect } from "../../styles/styled";
import { CustomAvatar } from "../customAvatar/customAvatar";

export const StudentDetails = () => {
  const { Option } = CustomSelect;

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-semibold text-center font-inter tracking-[0.065em]">
        Student Details
      </h2>

      <div className="grid grid-cols-1 place-items-center p-4 w-full gap-4">
        <CustomItem name="avatar" valuePropName="fileList">
          <CustomAvatar />
        </CustomItem>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <CustomItem name="fname">
          <CustomInput type="text" placeholder="firstname" />
        </CustomItem>

        <CustomItem name="mname">
          <CustomInput type="text" placeholder="middlename" />
        </CustomItem>

        <CustomItem name="lname">
          <CustomInput type="text" placeholder="lastname" />
        </CustomItem>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        <CustomItem name="classes">
          <CustomSelect placeholder="class">
            {classOptions.map((c, index) => {
              return (
                <Option key={index} value={c.value}>
                  {c.value}
                </Option>
              );
            })}
          </CustomSelect>
        </CustomItem>

        <CustomItem name="arm">
          <CustomSelect placeholder="arm">
            {classArm.map((c, index) => {
              return (
                <Option key={index} value={c.value}>
                  {c.value}
                </Option>
              );
            })}
          </CustomSelect>
        </CustomItem>
      </div>
    </div>
  );
};

export const ComplexDetails = ({ country }) => {
  const [showPassword, setShowPasssword] = useState(false);

  const { Option } = CustomSelect;

  const toggleShowPassword = () => {
    setShowPasssword(!showPassword);
    console.log(showPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h2 className="text-xl font-semibold text-center font-inter tracking-[0.065em]">
        Student Details
      </h2>

      <div className="grid grid-cols-1 gap-4 w-full">
        <CustomItem
          name="email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <CustomInput type="email" placeholder="school email" />
        </CustomItem>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        <CustomItem name="dob">
          <CustomInput type="date" />
        </CustomItem>

        <CustomItem>
          <CustomSelect placeholder="nationality">
            {country.map((cc, index) => {
              return <Option key={index}>{cc.data}</Option>;
            })}
          </CustomSelect>
        </CustomItem>
      </div>

      <div className="grid grid-cols-3 gap-4 w-full">
        <CustomItem>
          <CustomSelect placeholder="place of birth"></CustomSelect>
        </CustomItem>

        <CustomItem>
          <CustomSelect placeholder="religion"></CustomSelect>
        </CustomItem>

        <CustomItem>
          <CustomSelect placeholder="gender"></CustomSelect>
        </CustomItem>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        <CustomItem
          name="password"
          rules={[
            {
              required: true,
              message: "please enter password",
            },
          ]}
        >
          <div className="flex w-full">
            <CustomInput
              type={showPassword ? "text" : "password"}
              placeholder="password"
              min={6}
              max={8}
            />
            <i
              onClick={() => toggleShowPassword()}
              className="absolute cursor-pointer right-0 top-[0.675rem] mr-3"
            >
              {showPassword ? (
                <Icon icon="mdi:eye-lock" className="text-2xl text-secondary" />
              ) : (
                <Icon
                  icon="mdi:eye-settings"
                  className="text-2xl text-primary"
                />
              )}
            </i>
          </div>
        </CustomItem>

        <CustomItem
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "please confirm password",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    notification.error({
                      message:
                        "The two passwords that you entered do not match!",
                    })
                  )
                );
              },
            }),
          ]}
        >
          <CustomInput type="password" placeholder="confirmpassword" />
        </CustomItem>
      </div>
    </div>
  );
};
