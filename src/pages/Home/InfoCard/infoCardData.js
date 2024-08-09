import React from "react";
import { FaTruck, FaShieldAlt, FaUndoAlt } from "react-icons/fa";

const infoCardData = [
  {
    id: "info-card-1",
    title: "Free Shipping",
    icon: <FaTruck size="48" />,
    copy: "Your order ships for free.",
  },
  {
    id: "info-card-2",
    title: "Security Payments",
    icon: <FaShieldAlt size="48" />,
    copy: "Safe and secure checkout.",
  },
  {
    id: "info-card-3",
    title: "14-Day Returns",
    icon: <FaUndoAlt size="48" />,
    copy: "Shop with confidence.",
  },
];

export default infoCardData;
