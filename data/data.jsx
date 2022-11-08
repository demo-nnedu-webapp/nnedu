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
    value: "schoolfees",
  },
  {
    label: "pta levy",
    value: "ptalevy",
  },
  {
    label: "book fees",
    value: "bookfees",
  },
  {
    label: "logistics levy",
    value: "logisticslevy",
  },
];

export const paymentHistoryData = [
  {
    icon: <Icon icon="ant-design:account-book-filled" width="30" height="30" />,
    heading: "Book Fees",
    amount: "0.00",
    color: "bg-green-500",
  },
  {
    icon: <Icon icon="mdi:contactless-payment-circle" width="30" height="30" />,
    heading: "School Fees",
    amount: "0.00",
    color: "bg-red-500",
  },
  {
    icon: <Icon icon="icon-park-solid:flash-payment" width="30" height="30" />,
    heading: "Logistics Levy",
    amount: "0.00",
    color: "bg-blue-500",
  },
  {
    icon: (
      <Icon icon="heroicons-solid:cube-transparent" width="30" height="30" />
    ),
    heading: "PTA Levy",
    amount: "0.00",
    color: "bg-purple-500",
  },
];

export const paymentcolumns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    responsive: ["md"],
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Fees Type",
    dataIndex: "type",
    responsive: ["md"],
  },
  {
    title: "Amount",
    dataIndex: "amount",
    responsive: ["md"],
    render: (text) => <p>₦{text}</p>,
  },
  {
    title: "Collected By",
    dataIndex: "collected",
    responsive: ["md"],
    render: (text) => <a>{text}</a>,
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
    responsive: ["md"],
    fixed: "right",
    width: 50,
    render: () => (
      <>
        <div className="flex gap-4 items-center">
          <button>
            <Icon
              icon="fluent:print-28-filled"
              color="#1F1839"
              width="24"
              height="24"
            />
          </button>
          <button>
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

export const paymentdata = [
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
