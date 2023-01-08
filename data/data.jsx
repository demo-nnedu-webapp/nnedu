import { Icon } from "@iconify/react";
import Schools from "../assets/schools.svg";

const date = new Date().toJSON().slice(0, 10);

export const schoolData = [
  {
    location: "ojo",
    logo: Schools,
    name: "NNSS",
  },
  {
    location: "abeokuta",
    logo: Schools,
    name: "NNSS",
  },
  {
    location: "calabar",
    logo: Schools,
    name: "NNSS",
  },
  {
    location: "porthacort",
    logo: Schools,
    name: "NNSS",
  },
  {
    location: "ogbomosho",
    logo: Schools,
    name: "NNSS",
  },
  {
    location: "imeri",
    logo: Schools,
    name: "NNSS",
  },
  {
    location: "kuje",
    logo: Schools,
    name: "NNSS",
  },
  {
    location: "okura",
    logo: Schools,
    name: "NNSS",
  },
  {
    location: "ikot-Ntuen",
    logo: Schools,
    name: "NNMS",
  },
];

export const dashboardLinks = [
  {
    link: "#",
    label: "Information",
    icon: <Icon icon="carbon:information-filled" width="48" height="48" />,
  },
  {
    link: "#",
    label: "Academic calendar",
    icon: <Icon icon="ant-design:calendar-filled" width="48" height="48" />,
  },
  {
    link: "#",
    label: "Your mail box",
    icon: <Icon icon="fluent:mail-alert-28-filled" width="48" height="48" />,
  },
];

export const bottomdashboardLinks = [
  {
    link: "#",
    label: "Time table",
    icon: <Icon icon="fluent:search-visual-24-filled" width="48" height="48" />,
  },
  {
    link: "#",
    label: "Books issued",
    icon: (
      <Icon icon="fluent-emoji-high-contrast:books" width="48" height="48" />
    ),
  },
  {
    link: "#",
    label: "Subjects",
    icon: <Icon icon="uis:subject" width="48" height="48" />,
  },
];

export const selectpaymentoptiondata = [
  {
    label: "school fees",
    value: "3000000",
  },
  {
    label: "pta levy",
    value: "800000",
  },
  {
    label: "book fees",
    value: "3500000",
  },
  {
    label: "logistics levy",
    value: "700000",
  },
];

export const paymentHistoryData = [
  {
    icon: <Icon icon="ant-design:account-book-filled" width="30" height="30" />,
    color: "bg-red-500",
    heading: "Book Fees",
    amount: "0.00",
  },
  {
    icon: <Icon icon="mdi:contactless-payment-circle" width="30" height="30" />,
    color: "bg-red-500",
    heading: "School Fees",
    amount: "0.00",
  },
  {
    icon: <Icon icon="icon-park-solid:flash-payment" width="30" height="30" />,
    color: "bg-blue-500",
    heading: "Logistics Levy",
    amount: "0.00",
  },
  {
    icon: (
      <Icon icon="heroicons-solid:cube-transparent" width="30" height="30" />
    ),
    color: "bg-purple-500",
    heading: "PTA Levy",
    amount: "0.00",
  },
];

export const dummyprofiledata = [
  {
    fname: "Ciroma",
    lname: "Abdullahi",
    mname: "Adelaide",
    dob: date,
    nationality: "Nigerian",
    religion: "unknown",
    pob: "unknown",
    gender: "unknown",
  },
];

export const columndata = [
  {
    title: "No",
    dataIndex: "id",
    key: "id",
    render: (text) => (
      <p className="font-montserrat font-medium tracking-[0.06em]">{text}</p>
    ),
  },
  {
    title: "From Class",
    dataIndex: "fromclass",
    key: "fclass",
    render: (text) => (
      <p className="font-montserrat font-normal tracking-[0.06em]">{text}</p>
    ),
  },
  {
    title: "To Class",
    dataIndex: "toclass",
    key: "tclass",
    render: (text) => (
      <p className="font-montserrat font-normal tracking-[0.06em]">{text}</p>
    ),
  },
];

export const promotionData = [
  {
    key: "1",
    id: "1",
    fromclass: "JSS 1 Ekun",
    toclass: "JSS 2 Ekun",
  },
  {
    key: "2",
    id: "2",
    fromclass: "JSS 2 Ekun",
    toclass: "JSS 3 Siri",
  },
  {
    key: "3",
    id: "3",
    fromclass: "JSS 3 Siri",
    toclass: "SS1 1 Siri",
  },
];

export const classOptions = [
  {
    value: "jss1",
  },
  {
    value: "jss2",
  },
  {
    value: "jss3",
  },
  {
    value: "sss1",
  },
  {
    value: "sss2",
  },
  {
    value: "sss3",
  },
];

export const classArm = [
  {
    value: "ekun",
  },
  {
    value: "ekpe",
  },
  {
    value: "damisa",
  },
  {
    value: "siri",
  },
  {
    value: "ayam",
  },
  {
    value: "agu",
  },
  {
    value: "barama",
  },
  {
    value: "eriomi",
  },
];
