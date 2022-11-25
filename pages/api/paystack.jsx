import React from "react";
import { usePaystackPayment } from "react-paystack";

const randomnumber = Math.floor(Math.random() * 9000 + 1000) + 1;

console.log(randomnumber);

const config = {
  reference: `NNSS${randomnumber}`,
  email: "seyi.oyebamiji@gmail.com",
  amount: "",
  publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLICKEYS,
};
